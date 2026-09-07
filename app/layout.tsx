import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "고대원 세무사 | 초보 사장님 세무 정보창고",
  description: "사업자등록부터 세금 신고와 성장까지, 초보 사장님을 위한 쉬운 세무 정보와 상담",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
