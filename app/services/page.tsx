import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, Check, ClipboardCheck, Landmark, MessageSquareText, Users } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/site-shell"

const services = [
  {
    n: "01", t: "기장 및 세무신고", k: "매달 사업 숫자를 정확하게", tone: "mint", icon: Calculator,
    d: "단순히 신고서를 제출하는 데 그치지 않고 매출·매입·인건비와 비용 증빙을 매월 점검해 사장님이 현재 손익과 예상 세금을 미리 파악하도록 돕습니다.",
    target: "매출이 발생하는 개인·법인사업자, 장부 관리가 어렵거나 신고 누락이 걱정되는 사업장",
    items: ["카드·현금영수증·세금계산서 등 매출·매입 자료 정리", "월별 장부 작성과 비용 증빙의 적격 여부 점검", "부가가치세·종합소득세·법인세 신고 및 납부 일정 관리", "신고 전에 예상 세액과 주요 변동 원인을 알기 쉽게 안내", "놓치기 쉬운 공제·감면과 가지급금 등 위험 항목 검토"],
    consult: "최근 매출 규모, 거래 방식, 직원 수, 현재 장부 상태를 확인한 뒤 필요한 업무 범위와 비용을 안내합니다.",
  },
  {
    n: "02", t: "급여·원천세·4대보험", k: "첫 직원 채용도 막힘없이", tone: "blue", icon: Users,
    d: "직원을 채용한 순간부터 필요한 급여 계산, 원천세 신고, 지급명세서와 4대보험 업무를 한 흐름으로 관리해 노무·세무 일정이 빠지지 않도록 돕습니다.",
    target: "첫 직원을 채용했거나 급여 계산과 입·퇴사 신고, 인건비 증빙 관리가 필요한 사업장",
    items: ["근로계약 조건을 반영한 월별 급여대장 작성", "소득세·지방소득세 원천징수 계산과 원천세 신고", "직원 입사·퇴사에 따른 4대보험 신고 일정 안내", "근로·사업·기타소득 지급명세서 제출 관리", "대표자와 가족 직원, 일용직 인건비 처리 방법 검토"],
    consult: "채용 형태, 급여·수당 구성, 입사일과 기존 신고 상태를 확인해 매월 처리할 항목과 사장님이 준비할 자료를 정리합니다.",
  },
  {
    n: "03", t: "창업 세무상담", k: "사업 시작 전부터 든든하게", tone: "orange", icon: BookOpen,
    d: "사업자등록만 서두르기보다 업종, 고객, 예상 매출과 투자 규모를 먼저 살펴 개인·법인 선택부터 과세유형, 증빙과 자금 관리 방법까지 시작 단계에 맞게 설계합니다.",
    target: "개업을 준비 중이거나 사업자등록 직후 세금·증빙·계좌 관리를 제대로 시작하고 싶은 초보 사장님",
    items: ["개인사업자와 법인사업자의 세금·운영 차이 비교", "일반과세·간이과세 및 면세 여부와 업종 코드 검토", "사업자등록, 인허가, 사업용 계좌 준비 순서 안내", "초기 시설·재고 매입의 부가가치세 환급 가능성 검토", "첫 매출부터 챙겨야 할 증빙과 신고 일정표 제공"],
    consult: "업종, 개업 예정일, 예상 매출, 초기 투자금과 동업 여부를 확인해 등록 전에 결정해야 할 사항부터 순서대로 설명합니다.",
  },
  {
    n: "04", t: "법인 전환 및 절세 검토", k: "성장 속도에 맞는 세무 전략", tone: "navy", icon: Landmark,
    d: "세율만 보고 법인으로 바꾸지 않도록 사업이익, 대표자 생활자금, 보유자산과 향후 투자계획을 함께 분석해 전환의 실익과 이후 운영 부담까지 비교합니다.",
    target: "소득이 늘어 법인 전환을 고민하거나 대표자 보수·배당·퇴직금과 사업 자금의 구조를 정비하려는 사업자",
    items: ["개인 유지와 법인 전환 시 예상 세부담 비교", "부가세·소득세·법인세와 취득세 등 전환 비용 검토", "사업용 자산·부채·거래처 계약의 이전 방법 점검", "대표자 급여·상여·배당·퇴직금의 합리적인 구조 안내", "법인 자금의 사적 사용과 가지급금 위험 예방"],
    consult: "최근 재무자료와 소득세 신고서, 보유자산, 자금 사용 계획을 바탕으로 전환 시점과 예상 효과를 수치로 비교합니다.",
  },
]

export default function Services() {
  return <><SiteHeader /><main>
    <section className="service-hero"><div className="site-container service-hero-grid"><div><span className="kicker">TAX SERVICES</span><h1>세무 업무는 정확하게,<br /><em>사업 판단은 더 쉽게</em></h1><p>신고만 대신하는 것이 아니라 사장님이 숫자를 이해하고 다음 결정을 준비할 수 있도록 함께합니다.</p><div className="service-hero-actions"><Link href="/contact" className="button button-primary">상담 문의하기 <ArrowRight size={18} /></Link><a href="tel:025531159" className="button button-ghost">02-553-1159</a></div></div><div className="service-image"><img src="/tax-consultation.png" alt="세무사와 사업자의 세무 상담 장면" /><div className="image-note"><MessageSquareText /><span><small>쉽고 명확한 상담</small>현재 상황부터 차근차근 설명합니다</span></div></div></div></section>
    <section className="section service-detail-section"><div className="site-container"><div className="section-heading centered"><div><span className="kicker">WHAT WE DO</span><h2>사업 단계에 맞는 세무 서비스</h2><p>각 업무의 대상과 지원 내용을 살펴보고 내 사업에 필요한 서비스를 확인해 보세요.</p></div></div><div className="service-design-grid">{services.map(s => { const Icon = s.icon; return <article className={`service-design-card ${s.tone}`} key={s.t}><div className="service-card-body"><div className="service-card-top"><span className="service-number">{s.n}</span><div className="service-icon"><Icon /></div></div><small>{s.k}</small><h2>{s.t}</h2><p className="service-summary">{s.d}</p><div className="service-target"><strong>이런 분께 필요합니다</strong><p>{s.target}</p></div><div className="service-work-list"><strong>주요 업무</strong><ul>{s.items.map(x => <li key={x}><Check />{x}</li>)}</ul></div><div className="service-consult"><strong>상담할 때 확인하는 내용</strong><p>{s.consult}</p></div><Link href={`/contact?service=${encodeURIComponent(s.t)}`}>이 서비스 상담하기 <ArrowRight /></Link></div></article> })}</div></div></section>
    <section className="service-process"><div className="site-container"><div className="process-intro"><span className="kicker light">HOW IT WORKS</span><h2>상담부터 신고까지<br />진행 과정을 알려드립니다</h2><p>처음 의뢰하는 사장님도 현재 진행 상황을 알 수 있도록 단계마다 안내합니다.</p></div><div className="process-steps">{[{ i: MessageSquareText, n: "01", t: "상담", d: "현재 상황과 고민, 필요한 업무를 함께 확인합니다." }, { i: ClipboardCheck, n: "02", t: "자료 검토", d: "준비할 자료와 누락 여부, 업무 범위와 비용을 안내합니다." }, { i: Calculator, n: "03", t: "업무 진행", d: "장부 작성과 세금 검토 후 신고 전 예상 결과를 설명합니다." }, { i: Check, n: "04", t: "결과 안내", d: "신고 결과, 납부 일정과 다음에 준비할 사항을 알려드립니다." }].map(({ i: Icon, ...x }) => <div key={x.n}><span>{x.n}</span><Icon /><h3>{x.t}</h3><p>{x.d}</p></div>)}</div></div></section>
    <section className="site-container service-cta"><img src="/godaewon-profile.png" alt="고대원 세무사" /><div><span>고대원 세무사에게 직접 문의하세요</span><h2>내 사업에 필요한 세무 업무부터 확인해드립니다.</h2></div><Link href="/contact" className="button button-primary">상담 시작하기 <ArrowRight /></Link></section>
  </main><SiteFooter /></>
}
