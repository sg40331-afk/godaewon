import { put } from "@vercel/blob";
import { getAdminUser } from "@/app/admin-auth";

const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
export async function POST(request: Request) {
  const user = await getAdminUser();
  if (!user)
    return Response.json(
      { error: "관리자 로그인이 필요합니다." },
      { status: 401 },
    );
  try {
    const form = await request.formData();
    const file = form.get("image");
    if (!(file instanceof File))
      return Response.json(
        { error: "이미지를 선택해 주세요." },
        { status: 400 },
      );
    if (!allowed.has(file.type))
      return Response.json(
        { error: "JPG, PNG, WEBP, GIF 이미지만 올릴 수 있습니다." },
        { status: 400 },
      );
    if (file.size > 8 * 1024 * 1024)
      return Response.json(
        { error: "이미지는 8MB 이하로 올려 주세요." },
        { status: 400 },
      );
    const ext = file.type.split("/")[1].replace("jpeg", "jpg");
    if (!process.env.BLOB_READ_WRITE_TOKEN) return Response.json({error:"Vercel Blob 저장소를 먼저 연결해 주세요."},{status:503});
    const key = `blog/${Date.now()}-${crypto.randomUUID()}.${ext}`;
    const blob=await put(key,file,{access:"public",addRandomSuffix:false,contentType:file.type});
    return Response.json({
      ok: true,
      url: blob.url,
    });
  } catch {
    return Response.json(
      { error: "이미지를 올리지 못했습니다. 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
