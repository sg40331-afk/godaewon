"use client";
import { useRef, useState } from "react";
import {
  Heading2,
  ImagePlus,
  List,
  Save,
  Send,
  Trash2,
  Type,
} from "lucide-react";
import type { EditablePost } from "@/app/blog-store";

const empty: EditablePost = {
  slug: "",
  category: "세무 이야기",
  title: "",
  excerpt: "",
  body: "",
  publishedAt: new Date().toISOString().slice(0, 10).replaceAll("-", "."),
  readTime: "5분",
  status: "draft",
  isDeleted: false,
};
export function PostEditor({ initial }: { initial?: EditablePost }) {
  const [post, setPost] = useState(initial ?? empty);
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");
  const [font, setFont] = useState("sans");
  const [size, setSize] = useState("18");
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const set = (key: keyof EditablePost, value: string) =>
    setPost((p) => ({ ...p, [key]: value }));
  function insert(before: string, after = "", fallback = "내용을 입력하세요") {
    const el = bodyRef.current;
    if (!el) return;
    const start = el.selectionStart,
      end = el.selectionEnd;
    const selected = post.body.slice(start, end) || fallback;
    const value =
      post.body.slice(0, start) +
      before +
      selected +
      after +
      post.body.slice(end);
    set("body", value);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(
        start + before.length,
        start + before.length + selected.length,
      );
    });
  }
  function insertBlock(value: string) {
    const el = bodyRef.current;
    const at = el?.selectionStart ?? post.body.length;
    const padBefore =
      at > 0 && !post.body.slice(0, at).endsWith("\n\n") ? "\n\n" : "";
    const padAfter = post.body.slice(at).startsWith("\n\n") ? "" : "\n\n";
    set(
      "body",
      post.body.slice(0, at) +
        padBefore +
        value +
        padAfter +
        post.body.slice(at),
    );
  }
  async function upload(file?: File) {
    if (!file) return;
    setUploading(true);
    setMsg("");
    const form = new FormData();
    form.append("image", file);
    const res = await fetch("/api/admin/images", {
      method: "POST",
      body: form,
    });
    const data = (await res.json()) as { error?: string; url?: string };
    setUploading(false);
    if (!res.ok || !data.url) {
      setMsg(data.error || "이미지를 올리지 못했습니다.");
      return;
    }
    insertBlock(`![블로그 이미지](${data.url})`);
    if (imageRef.current) imageRef.current.value = "";
  }
  async function save(status: "draft" | "published") {
    setBusy(true);
    setMsg("");
    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...post, status }),
    });
    const data = (await res.json()) as { error?: string };
    setBusy(false);
    if (!res.ok) {
      setMsg(data.error || "저장하지 못했습니다.");
      return;
    }
    window.location.href = "/admin?saved=1";
  }
  async function remove() {
    if (!post.slug || !confirm("이 글을 삭제하시겠습니까?")) return;
    setBusy(true);
    const res = await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ slug: post.slug }),
    });
    if (res.ok) window.location.href = "/admin?deleted=1";
    else {
      setBusy(false);
      setMsg("삭제하지 못했습니다.");
    }
  }
  return (
    <div className="editor-card">
      <div className="editor-grid">
        <label>
          분류
          <input
            value={post.category}
            onChange={(e) => set("category", e.target.value)}
            placeholder="예: 창업세무"
          />
        </label>
        <label>
          게시일
          <input
            value={post.publishedAt}
            onChange={(e) => set("publishedAt", e.target.value)}
            placeholder="2026.09.03"
          />
        </label>
        <label>
          읽는 시간
          <input
            value={post.readTime}
            onChange={(e) => set("readTime", e.target.value)}
            placeholder="5분"
          />
        </label>
      </div>
      <label>
        제목
        <input
          className="title-input"
          value={post.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="글 제목을 입력하세요"
        />
      </label>
      <label>
        목록 요약
        <textarea
          rows={3}
          value={post.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          placeholder="목록에 표시할 짧은 설명을 입력하세요"
        />
      </label>
      <div className="body-label">
        <strong>본문</strong>
        <small>꾸밀 문장을 선택한 뒤 서체와 크기를 적용하세요.</small>
      </div>
      <div className="editor-toolbar" role="toolbar" aria-label="본문 꾸미기">
        <button type="button" onClick={() => insert("## ", "", "소제목")}>
          <Heading2 />
          소제목
        </button>
        <button type="button" onClick={() => insert("- ", "", "목록 항목")}>
          <List />
          목록
        </button>
        <span className="toolbar-divider" />
        <label>
          <Type />
          서체
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="sans">기본 고딕</option>
            <option value="serif">명조체</option>
            <option value="round">둥근 고딕</option>
            <option value="mono">고정폭</option>
          </select>
        </label>
        <label>
          크기
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="16">16px</option>
            <option value="18">18px</option>
            <option value="20">20px</option>
            <option value="24">24px</option>
            <option value="28">28px</option>
            <option value="32">32px</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() =>
            insert(`[style font="${font}" size="${size}"]`, `[/style]`)
          }
        >
          서체·크기 적용
        </button>
        <button
          className="image-tool"
          type="button"
          disabled={uploading}
          onClick={() => imageRef.current?.click()}
        >
          <ImagePlus />
          {uploading ? "올리는 중..." : "이미지 넣기"}
        </button>
        <input
          ref={imageRef}
          className="hidden-file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={(e) => upload(e.target.files?.[0])}
        />
      </div>
      <textarea
        ref={bodyRef}
        aria-label="본문"
        className="body-editor"
        rows={20}
        value={post.body}
        onChange={(e) => set("body", e.target.value)}
        placeholder={
          "첫 문단을 입력하세요.\n\n## 소제목\n내용을 입력하세요.\n\n- 체크 항목"
        }
      />
      <p className="editor-help">
        이미지를 넣으면 현재 커서 위치에 표시됩니다. 권장 형식: JPG·PNG·WEBP,
        최대 8MB
      </p>
      {msg && <p className="editor-error">{msg}</p>}
      <div className="editor-actions">
        {post.slug && (
          <button className="delete-button" disabled={busy} onClick={remove}>
            <Trash2 />
            삭제
          </button>
        )}
        <span />
        <button disabled={busy || uploading} onClick={() => save("draft")}>
          <Save />
          임시저장
        </button>
        <button
          className="publish-button"
          disabled={busy || uploading}
          onClick={() => save("published")}
        >
          <Send />
          {busy ? "저장 중..." : "공개하기"}
        </button>
      </div>
    </div>
  );
}
