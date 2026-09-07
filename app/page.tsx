import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  Phone,
  ExternalLink,
  Users,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
const guides = [
  {
    icon: Store,
    step: "01",
    title: "사업자등록 전",
    text: "업종 선택부터 간이·일반과세 판단까지, 시작 전에 꼭 확인하세요.",
  },
  {
    icon: FileText,
    step: "02",
    title: "사업 시작 후",
    text: "증빙 관리, 세금계산서, 인건비 신고의 기본을 정리했습니다.",
  },
  {
    icon: Calculator,
    step: "03",
    title: "세금 신고할 때",
    text: "부가세·종합소득세·법인세 일정을 놓치지 않도록 안내합니다.",
  },
  {
    icon: Landmark,
    step: "04",
    title: "사업이 커질 때",
    text: "직원 채용, 법인 전환, 절세 구조를 미리 준비하세요.",
  },
];
const articles = [
  {
    tag: "창업세무",
    title: "처음 사업자등록할 때 가장 많이 하는 7가지 실수",
    date: "2026. 08. 28",
    read: "6분",
  },
  {
    tag: "부가가치세",
    title: "간이과세자와 일반과세자, 내 사업에는 무엇이 유리할까요?",
    date: "2026. 08. 20",
    read: "8분",
  },
  {
    tag: "경비처리",
    title: "사업용 카드만 만들면 끝? 초보 사장님의 증빙 관리법",
    date: "2026. 08. 12",
    read: "5분",
  },
];
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section hero-full">
          <div className="hero-overlay" />
          <div className="site-container hero-full-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <ShieldCheck size={17} /> 사업의 시작부터 성장까지
              </div>
              <h1>
                세금이 막막한 사장님께
                <br />
                <em>쉬운 답</em>을 드립니다.
              </h1>
              <p>
                어려운 세무 용어 대신, 지금 내 사업에 필요한 정보부터
                알려드립니다. 초보 사장님을 위한 세무 정보창고입니다.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/guide">
                  내 상황에 맞는 정보 찾기 <ArrowRight size={18} />
                </Link>
                <Link className="button button-glass" href="/contact">
                  세무 상담 문의
                </Link>
              </div>
              <div className="trust-row">
                <span>
                  <CheckCircle2 />
                  초보 사장님 눈높이
                </span>
                <span>
                  <CheckCircle2 />
                  신고 일정 안내
                </span>
                <span>
                  <CheckCircle2 />
                  1:1 맞춤 상담
                </span>
              </div>
            </div>
            <div className="hero-accountant">
              <div className="portrait-glow" />
              <img src="/godaewon-profile.png" alt="고대원 대표 세무사" />
              <div className="accountant-label">
                <small>세무회계 대원 대표</small>
                <strong>고대원 세무사</strong>
                <span>사업과 자산의 세금 문제를 함께합니다</span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-search-wrap">
          <div className="site-container home-search-panel">
            <div className="home-search-title">
              <span>무엇이 궁금하신가요?</span>
              <small>세무 정보창고에서 찾아보세요</small>
            </div>
            <Link href="/blog" className="search-box">
              <Search size={22} />
              <span>예: 사업자등록, 부가세, 직원 급여...</span>
              <ArrowRight size={18} />
            </Link>
            <div className="quick-grid">
              {[
                "사업자등록",
                "부가가치세",
                "종합소득세",
                "인건비신고",
                "경비처리",
                "법인전환",
              ].map((x) => (
                <Link href="/blog" key={x}>
                  # {x}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">START HERE</span>
                <h2>사업 단계에 따라 찾아보세요</h2>
              </div>
              <p>
                지금 나에게 해당하는 단계를 선택하면 꼭 필요한 정보만 모아 볼 수
                있습니다.
              </p>
            </div>
            <div className="guide-grid">
              {guides.map(({ icon: Icon, ...g }) => (
                <Link href="/guide" className="guide-card" key={g.step}>
                  <span className="step">{g.step}</span>
                  <div className="icon-box">
                    <Icon />
                  </div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                  <span className="text-link">
                    가이드 보기 <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section services-section">
          <div className="site-container service-grid">
            <div>
              <span className="kicker light">TAX PARTNER</span>
              <h2>
                장부 정리만 하는 세무사가 아닌,
                <br />
                사업을 함께 보는 파트너
              </h2>
              <p>
                매달 숫자를 정리하고 신고하는 데서 끝나지 않습니다. 사장님이
                놓치기 쉬운 위험과 준비할 일을 미리 알려드립니다.
              </p>
              <Link className="button button-white" href="/services">
                서비스 자세히 보기 <ArrowRight size={18} />
              </Link>
            </div>
            <div className="service-list">
              <div>
                <Calculator />
                <div>
                  <h3>기장·세무신고</h3>
                  <p>월별 장부관리와 각종 세금 신고</p>
                </div>
              </div>
              <div>
                <Users />
                <div>
                  <h3>급여·4대보험</h3>
                  <p>직원 채용부터 인건비 신고까지</p>
                </div>
              </div>
              <div>
                <BookOpen />
                <div>
                  <h3>창업 세무상담</h3>
                  <p>사업 형태와 업종에 맞는 시작 설계</p>
                </div>
              </div>
              <div>
                <Landmark />
                <div>
                  <h3>법인 전환·절세</h3>
                  <p>성장 단계에 맞춘 세무 전략</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <span className="kicker">TAX LIBRARY</span>
                <h2>사장님을 위한 최신 세무 글</h2>
              </div>
              <Link href="/blog" className="more-link">
                세무 정보 전체보기 <ArrowRight size={17} />
              </Link>
            </div>
            <div className="article-grid">
              {articles.map((a, i) => (
                <Link href="/blog" className="article-card" key={a.title}>
                  <div className={"article-visual visual-" + (i + 1)}>
                    <span>{a.tag}</span>
                    <div>
                      {i === 0 ? (
                        <Store />
                      ) : i === 1 ? (
                        <Calculator />
                      ) : (
                        <FileText />
                      )}
                    </div>
                  </div>
                  <div className="article-body">
                    <div className="article-meta">
                      <span>{a.date}</span>
                      <span>읽는 시간 {a.read}</span>
                    </div>
                    <h3>{a.title}</h3>
                    <span className="text-link">
                      읽어보기 <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      <section className="site-container cta-panel">
          <div>
            <span>세무 고민, 혼자 오래 끌지 마세요.</span>
            <h2>내 사업에 맞는 답을 함께 찾겠습니다.</h2>
          </div>
          <Link href="/contact" className="button button-primary">
            상담 문의하기 <ArrowRight size={18} />
          </Link>
      </section>
      <section className="location-clean" aria-labelledby="location-title">
        <div className="site-container location-clean-grid">
          <div className="location-side">
            <h2 id="location-title">오시는 길</h2>
            <div><MapPin /><span><strong>ADDRESS</strong><small>서울 강남구 테헤란로 313, 205호</small></span></div>
            <div><Phone /><span><strong>TEL</strong><a href="tel:025531159">02-553-1159</a></span></div>
            <div><Mail /><span><strong>E-mail</strong><a href="mailto:daewontax01@gmail.com">daewontax01@gmail.com</a></span></div>
          </div>
          <div className="location-map-only live-map">
            <iframe title="세무회계 대원 위치" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20313&output=embed" />
            <div className="map-actions">
              <a href="https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20313" target="_blank" rel="noreferrer">구글지도 크게보기 <ExternalLink /></a>
              <a href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20313" target="_blank" rel="noreferrer">네이버지도 크게보기 <ExternalLink /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}
