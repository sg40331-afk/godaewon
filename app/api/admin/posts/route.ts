import { getAdminUser } from "@/app/admin-auth";
import { deletePost, savePost, type EditablePost } from "@/app/blog-store";

function cleanSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
export async function POST(request: Request) {
  const user = await getAdminUser();
  if (!user)
    return Response.json(
      { error: "관리자 로그인이 필요합니다." },
      { status: 401 },
    );
  try {
    const input = (await request.json()) as Partial<EditablePost>;
    if (!input.title?.trim() || !input.body?.trim())
      return Response.json(
        { error: "제목과 본문을 입력해 주세요." },
        { status: 400 },
      );
    const slug = cleanSlug(input.slug || "") || `post-${Date.now()}`;
    const post: EditablePost = {
      slug,
      category: (input.category || "세무 이야기").trim(),
      title: input.title.trim(),
      excerpt: (input.excerpt || input.body.slice(0, 100)).trim(),
      body: input.body.trim(),
      publishedAt:
        input.publishedAt ||
        new Date().toISOString().slice(0, 10).replaceAll("-", "."),
      readTime: input.readTime || "5분",
      status: input.status === "published" ? "published" : "draft",
      isDeleted: false,
    };
    await savePost(post, user.email);
    return Response.json({ ok: true, slug });
  } catch {
    return Response.json(
      { error: "저장하지 못했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
export async function DELETE(request: Request) {
  const user = await getAdminUser();
  if (!user)
    return Response.json(
      { error: "관리자 로그인이 필요합니다." },
      { status: 401 },
    );
  const { slug } = (await request.json()) as { slug?: string };
  if (!slug)
    return Response.json({ error: "글 정보가 없습니다." }, { status: 400 });
  await deletePost(slug, user.email);
  return Response.json({ ok: true });
}
