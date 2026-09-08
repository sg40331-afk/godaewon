import { CheckCircle2 } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/site-shell"

export default function About() {
  return <><SiteHeader /><main>
    <div className="sub-hero about-subhero"><div className="site-container subhero-layout"><div className="subhero-copy"><span className="kicker">ABOUT TAX ACCOUNTANT</span><h1>고대원 세무사를<br />소개합니다</h1><p>사장님이 이해하고 판단할 수 있도록 어려운 세무를 쉬운 말로 설명하는 든든한 사업 파트너입니다.</p><div className="subhero-chips"><span>쉬운 설명</span><span>정확한 신고</span><span>사업 맞춤 상담</span></div></div><div className="about-brand-visual"><div className="about-brand-logo"><img src="/daewon-tax-logo.png" alt="세무회계 대원" /></div><span className="about-brand-line" /><p>신고를 넘어,<br /><strong>사업의 다음 판단</strong>을 함께합니다.</p><div className="about-brand-values"><span><b>01</b> 이해하기 쉬운 설명</span><span><b>02</b> 사업 단계별 세무 안내</span><span><b>03</b> 정확하고 투명한 소통</span></div></div></div></div>
    <section className="section"><div className="site-container about-grid"><div className="portrait-real"><img src="/godaewon-profile.png" alt="고대원 세무사 프로필" /></div><div><span className="kicker">MESSAGE</span><h2>세금 때문에 사업이<br />더 어렵게 느껴지지 않도록</h2><p>세무는 단순히 신고서를 제출하는 일이 아닙니다. 사업의 숫자를 이해하고, 앞으로 생길 위험을 미리 준비하는 과정입니다.</p><div className="career-box"><strong>고대원 대표 세무사</strong><p>세무회계 대원 대표</p><p>2023.12.~2025.05. 세무회계 청율</p><p>2025.08.~ 한국세무사회 업무침해감시위원회 상임위원</p><p>2025.08.~ 한국세무사회 청년세무사지원센터 위원</p></div><ul className="check-list"><li><CheckCircle2 />쉬운 설명과 투명한 소통</li><li><CheckCircle2 />사업 단계에 맞는 실무 안내</li><li><CheckCircle2 />사업과 자산의 모든 세금 문제 해결에 집중</li></ul></div></div></section>
  </main><SiteFooter /></>
}
