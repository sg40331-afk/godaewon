import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { posts } from "../blog-data";

const points: Record<string, string[]> = {
  창업세무: ["사업을 시작하기 전 계약·자금·등록 정보를 한곳에 정리하세요.", "사업용 계좌와 카드를 개인 생활비와 분리하면 장부가 훨씬 선명해집니다.", "업종과 거래 방식에 따라 필요한 신고와 증빙이 달라질 수 있습니다."],
  부가가치세: ["매출로 들어온 돈 전부를 사용할 수 있는 자금으로 보지 마세요.", "전자세금계산서·카드·현금영수증·플랫폼 정산자료를 서로 대조하세요.", "누락이나 잘못된 발급을 발견했다면 신고기한 전에 처리 방향을 확인하세요."],
  경비처리: ["지출의 사업 관련성과 거래 사실을 설명할 자료가 함께 있어야 합니다.", "증빙만 모으지 말고 누구에게, 왜, 어떤 업무로 썼는지도 기록하세요.", "개인 지출과 사업 지출이 섞였으면 월별로 빠르게 구분하세요."],
  인건비: ["계약 형태보다 실제 근무 방식과 지급 사실을 기준으로 자료를 준비하세요.", "급여대장·이체내역·근무기록을 같은 기간 기준으로 맞춰 보관하세요.", "채용·변경·퇴사 시점마다 원천세와 관련 제출 일정을 확인하세요."],
  종합소득세: ["매출이 아니라 비용을 뺀 소득을 중심으로 세금 흐름을 살펴봅니다.", "다른 소득과 선납세액, 공제자료까지 함께 확인해야 전체 그림이 보입니다.", "신고 직전에 몰아서 정리하지 말고 월별 손익을 확인하세요."],
  법인전환: ["세율 하나보다 책임, 자금 사용, 투자와 성장 계획을 함께 비교하세요.", "법인의 돈과 대표자 개인 돈은 처음부터 명확하게 분리해야 합니다.", "자산·부채·계약·직원 승계 항목을 목록으로 만든 뒤 전환 방식을 검토하세요."],
};

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return <><SiteHeader /><main className="article-page"><div className="article-shell"><h1>글을 찾을 수 없습니다.</h1><Link href="/blog">목록으로 돌아가기</Link></div></main><SiteFooter /></>;
  return <><SiteHeader /><main><header className="article-hero"><div className="article-shell"><Link href="/blog" className="back-link"><ArrowLeft /> 세무 정보창고</Link><span className="article-category">{p.c}</span><h1>{p.t}</h1><p>{p.d}</p><div className="article-meta-line">초보 사장님 세무 가이드 · 읽는 시간 약 {p.read}</div></div></header><article className="article-page"><div className="article-shell prose"><p className="lead">사업을 운영하다 보면 작은 판단 하나가 장부와 신고에 오래 영향을 줍니다. 이번 글에서는 <strong>{p.t}</strong>에 관해 무엇을 먼저 확인하고 어떤 자료를 남겨야 하는지 순서대로 살펴봅니다.</p><h2>먼저 핵심부터 확인하세요</h2>{points[p.c].map((x) => <p key={x}>{x}</p>)}<div className="key-box"><h3>이 글의 핵심</h3><p>{p.d} 실제 적용 방식은 사업의 업종, 거래 구조, 계약 내용에 따라 달라질 수 있으므로 현재 상황을 기준으로 판단하는 것이 중요합니다.</p></div><h2>실무에서는 이렇게 준비하세요</h2><ol><li>현재 사업 형태와 거래 흐름을 간단히 적습니다.</li><li>해당 거래의 계약서, 이체내역, 세금계산서 등 원자료를 모읍니다.</li><li>개인 거래와 사업 거래가 섞이지 않았는지 확인합니다.</li><li>장부 반영 내용과 실제 입출금 금액을 서로 대조합니다.</li><li>애매한 항목은 임의로 처리하지 말고 신고 전에 질문 목록으로 남깁니다.</li></ol><h2>사장님 체크리스트</h2><ul className="check-box"><li><CheckCircle2 />거래 목적을 한 문장으로 설명할 수 있나요?</li><li><CheckCircle2 />금액과 날짜가 증빙·통장내역과 일치하나요?</li><li><CheckCircle2 />누가 지급하거나 수령했는지 확인했나요?</li><li><CheckCircle2 />신고기한 전에 검토할 시간을 확보했나요?</li></ul><h2>자주 묻는 질문</h2><h3>자료만 보관하면 자동으로 세무 처리가 되나요?</h3><p>자료 보관은 출발점입니다. 사업 관련성, 거래 시기와 명의가 장부 내용과 맞는지도 함께 확인해야 합니다.</p><h3>인터넷에서 본 사례를 그대로 적용해도 되나요?</h3><p>비슷해 보여도 업종, 계약과 과세유형에 따라 결론이 달라질 수 있습니다. 중요한 금액이나 반복 거래는 개별 검토를 권합니다.</p><div className="article-cta"><MessageCircle /><div><strong>내 사업에도 같은 기준이 적용될까요?</strong><p>자료를 준비해 문의하시면 현재 상황에 맞춰 확인해 드립니다.</p></div><Link href="/contact">상담 문의</Link></div><p className="notice">※ 이 글은 일반적인 세무 정보입니다. 세법과 신고 기준은 변경될 수 있으며 실제 신고에는 개별 사실관계 확인이 필요합니다.</p></div></article></main><SiteFooter /></>;
}
