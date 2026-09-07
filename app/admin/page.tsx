import Link from "next/link";
import { FilePenLine, LogOut, Plus } from "lucide-react";
import { requireAdmin } from "@/app/admin-auth";
import { getAllPosts } from "@/app/blog-store";

export const dynamic = "force-dynamic";
export default async function AdminPage() {
  const { user } = await requireAdmin("/admin");
  const posts = await getAllPosts();
  return (
    <main className="admin-page">
      <header className="admin-top">
        <div>
          <img src="/daewon-tax-logo.png" alt="세무회계 대원" />
          <span>블로그 관리</span>
        </div>
        <div>
          <small>{user.email}</small>
          <a href="/api/admin/logout">
            <LogOut />
            로그아웃
          </a>
        </div>
      </header>
      <div className="admin-shell">
        <div className="admin-heading">
          <div>
            <span>CONTENT MANAGER</span>
            <h1>블로그 글 관리</h1>
            <p>글을 작성하고 공개 상태를 관리할 수 있습니다.</p>
          </div>
          <Link href="/admin/posts/new">
            <Plus />새 글 작성
          </Link>
        </div>
        <div className="admin-stats">
          <div>
            <strong>{posts.length}</strong>
            <span>전체 글</span>
          </div>
          <div>
            <strong>
              {posts.filter((p) => p.status === "published").length}
            </strong>
            <span>공개</span>
          </div>
          <div>
            <strong>{posts.filter((p) => p.status === "draft").length}</strong>
            <span>임시저장</span>
          </div>
        </div>
        <div className="admin-list">
          <div className="admin-list-head">
            <span>글 제목</span>
            <span>게시일</span>
            <span>상태</span>
            <span>관리</span>
          </div>
          {posts.map((p) => (
            <div className="admin-row" key={p.slug}>
              <div>
                <small>{p.category}</small>
                <strong>{p.title}</strong>
              </div>
              <span>{p.publishedAt}</span>
              <span className={`status ${p.status}`}>
                {p.status === "published" ? "공개" : "임시저장"}
              </span>
              <Link href={`/admin/posts/${p.slug}`}>
                <FilePenLine />
                수정
              </Link>
            </div>
          ))}
        </div>
        <Link className="back-home" href="/journal">
          공개 블로그 보기
        </Link>
      </div>
    </main>
  );
}
