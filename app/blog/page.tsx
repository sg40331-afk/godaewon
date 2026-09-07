"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { posts } from "./blog-data";
export default function Blog() {
  const [q, setQ] = useState("");
  const [c, setC] = useState("전체");
  const cats = [
    "전체",
    "창업세무",
    "부가가치세",
    "경비처리",
    "인건비",
    "종합소득세",
    "법인전환",
  ];
  const list = posts.filter(
    (p) => (c === "전체" || p.c === c) && (p.t + p.d).includes(q),
  );
  return (
    <>
      <SiteHeader />
      <main>
        <div className="blog-hero">
          <div className="site-container">
            <span className="kicker light">TAX LIBRARY · 60 ARTICLES</span>
            <h1>세무 정보창고</h1>
            <p>
              사업의 시작부터 성장까지, 초보 사장님이 자주 묻는 세무 정보를 6개
              분야로 정리했습니다.
            </p>
            <label>
              <Search />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="궁금한 세무 정보를 검색하세요"
              />
            </label>
          </div>
        </div>
        <section className="section">
          <div className="site-container">
            <div className="library-summary">
              <div>
                <BookOpen />
                <span>
                  <strong>총 60개</strong>
                  <small>세무 가이드</small>
                </span>
              </div>
              {cats.slice(1).map((x) => (
                <button key={x} onClick={() => setC(x)}>
                  <strong>10</strong>
                  <span>{x}</span>
                </button>
              ))}
            </div>
            <div className="category-row">
              {cats.map((x) => (
                <button
                  onClick={() => setC(x)}
                  className={c === x ? "active" : ""}
                  key={x}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="results-count">
              <strong>{c}</strong> 분야에서 <em>{list.length}개</em>의 글을
              찾았습니다.
            </div>
            <div className="post-list enriched">
              {list.map((p, i) => (
                <article key={p.c + p.t}>
                  <span className="post-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="post-tag">{p.c}</span>
                    <h2>{p.t}</h2>
                    <p>{p.d}</p>
                    <small>
                      <Clock />
                      읽는 시간 약 {p.read}
                    </small>
                  </div>
                <Link href={`/blog/${p.slug}`}>
                    읽어보기 <ArrowRight />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
