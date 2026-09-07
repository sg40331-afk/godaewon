import Link from "next/link";
import { Menu, Phone } from "lucide-react";
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand">
          <img
            className="brand-logo"
            src="/daewon-tax-logo.png"
            alt="세무회계 대원"
          />
        </Link>
        <nav>
          <Link href="/about">세무사 소개</Link>
          <Link href="/guide">초보 사장님 가이드</Link>
          <Link href="/services">세무 서비스</Link>
          <Link href="/blog">세무 정보창고</Link>
          <Link href="/journal">블로그</Link>
          <Link href="/contact">상담 문의</Link>
        </nav>
        <Link href="/contact" className="header-cta">
          <Phone size={16} /> 상담하기
        </Link>
        <button className="mobile-menu" aria-label="메뉴 열기">
          <Menu />
        </button>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer>
      <div className="site-container footer-grid">
        <div>
          <div className="footer-logo-wrap">
            <img
              className="footer-logo"
              src="/daewon-tax-logo.png"
              alt="세무회계 대원"
            />
          </div>
          <p>초보 사장님의 든든한 세무 파트너</p>
        </div>
        <div>
          <strong>빠른 메뉴</strong>
          <Link href="/guide">초보 사장님 가이드</Link>
          <Link href="/blog">세무 정보창고</Link>
          <Link href="/contact">상담 문의</Link>
        </div>
        <div>
          <strong>사무소 정보</strong>
          <p>서울 강남구 테헤란로 313, 205호</p>
          <p>02-553-1159 · daewontax01@gmail.com</p>
        </div>
      </div>
      <div className="site-container copyright">
        © 세무회계 대원. All rights reserved.{" "}
        <span>개인정보처리방침 · 이용약관 · <Link href="/admin">관리자</Link></span>
      </div>
    </footer>
  );
}
