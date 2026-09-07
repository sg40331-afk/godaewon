import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getPost } from "@/app/blog-store";
export const dynamic = "force-dynamic";
const fonts: Record<string, string> = {
  sans: 'Arial,"Noto Sans KR",sans-serif',
  serif: 'Georgia,"Noto Serif KR",serif',
  round: '"Arial Rounded MT Bold","Noto Sans KR",sans-serif',
  mono: "Consolas,monospace",
};
const sizes = new Set(["16", "18", "20", "24", "28", "32"]);
function Body({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n{2,}/).map((block, i) => {
        const value = block.trim();
        if (value.startsWith("## ")) return <h2 key={i}>{value.slice(3)}</h2>;
        if (value.startsWith("- "))
          return (
            <ul className="check-box" key={i}>
              {value.split("\n").map((x) => (
                <li key={x}>
                  <CheckCircle2 />
                  {x.replace(/^\-\s*/, "")}
                </li>
              ))}
            </ul>
          );
      const image = value.match(/^!\[([^\]]*)\]\((https:\/\/[A-Za-z0-9.-]+\.public\.blob\.vercel-storage\.com\/[A-Za-z0-9%._/-]+)\)$/);
        if (image)
          return (
            <figure className="blog-image" key={i}>
              <img src={image[2]} alt={image[1] || "블로그 이미지"} />
              {image[1] && image[1] !== "블로그 이미지" && (
                <figcaption>{image[1]}</figcaption>
              )}
            </figure>
          );
        const styled = value.match(
          /^\[style font="(sans|serif|round|mono)" size="(16|18|20|24|28|32)"\]([\s\S]*)\[\/style\]$/,
        );
        if (styled)
          return (
            <p
              key={i}
              style={{
                fontFamily: fonts[styled[1]],
                fontSize: `${sizes.has(styled[2]) ? styled[2] : 18}px`,
              }}
            >
              {styled[3]}
            </p>
          );
        return (
          <p key={i} className={i === 0 ? "lead" : undefined}>
            {value}
          </p>
        );
      })}
    </>
  );
}
export default async function JournalDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p || p.status !== "published")
    return (
      <>
        <SiteHeader />
        <main className="article-page">
          <div className="article-shell">
            <h1>글을 찾을 수 없습니다.</h1>
            <Link href="/journal">블로그로 돌아가기</Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  return (
    <>
      <SiteHeader />
      <main>
        <header className="article-hero journal-detail-hero">
          <div className="article-shell">
            <Link href="/journal" className="back-link">
              <ArrowLeft /> 블로그
            </Link>
            <span className="article-category">{p.category}</span>
            <h1>{p.title}</h1>
            <p>{p.excerpt}</p>
            <div className="article-meta-line">
              {p.publishedAt} · 읽는 시간 약 {p.readTime}
            </div>
          </div>
        </header>
        <article className="article-page">
          <div className="article-shell prose">
            <Body text={p.body} />
            <div className="key-box">
              <h3>마무리하며</h3>
              <p>
                세무는 문제가 생긴 뒤 자료를 맞추는 것보다 거래가 기억날 때
                기록하고 미리 질문하는 편이 훨씬 쉽습니다.
              </p>
            </div>
            <div className="article-cta">
              <MessageCircle />
              <div>
                <strong>내 사업 상황에 맞는 답이 필요하신가요?</strong>
                <p>질문과 관련 자료를 보내주시면 함께 확인하겠습니다.</p>
              </div>
              <Link href="/contact">상담 문의</Link>
            </div>
            <p className="notice">
              ※ 이 글은 일반적인 세무 정보입니다. 세법과 신고 기준은 변경될 수
              있으며 실제 신고에는 개별 사실관계 확인이 필요합니다.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
