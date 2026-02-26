const FOOTER_LINKS = [
  { label: '회사 소개', href: 'https://weniv.co.kr', external: true },
  { label: '이용약관', href: '/terms' },
  { label: '제주코딩베이스캠프', href: 'https://jejucodingcamp.com', external: true },
  { label: '위치기반서비스이용약관', href: '/location-terms' },
  { label: '위니브월드 이용 가이드', href: '/guide' },
  { label: '개인정보 처리방침', href: '/privacy' },
];

// 소셜 아이콘 — 추후 실제 아이콘 이미지로 교체
const SOCIAL_LINKS = [
  { label: 'SNS 1', href: '#' },
  { label: 'SNS 2', href: '#' },
  { label: 'SNS 3', href: '#' },
  { label: 'SNS 4', href: '#' },
  { label: 'SNS 5', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-[990px] mx-auto px-4 flex flex-col items-center gap-6">

        {/* 링크 목록 */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {label}{external && ' ↗'}
            </a>
          ))}
        </div>

        {/* 소셜 아이콘 */}
        <div className="flex gap-3">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-gray-300 bg-background"
            />
          ))}
        </div>

        {/* 브랜드명 */}
        <p className="text-sm text-gray-300 tracking-widest">weniv world</p>
      </div>
    </footer>
  );
}
