import type { ReactNode } from "react";

function LogoFrame({ children }: { children: ReactNode }) {
  return (
    <svg className="study-modal-logo" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#801825" />
      {children}
    </svg>
  );
}

function ShipmentLogo() {
  return (
    <LogoFrame>
      <path fill="#fff" d="M7.6 24.8h9.2v2.2H7.6zm0 4.8h7.4v2.2H7.6zm0 4.8h8.2v2.2H7.6z" />
      <path fill="#fff" d="M18.4 23.8h16.6c1.2 0 2.2 1 2.2 2.2v19.2H18.4V23.8z" />
      <path fill="#fff" d="M37.2 31.4h9.4l6.2 8.6v5.2H37.2z" />
      <path fill="#801825" d="M40.4 34.2h5.4l3.6 5H40.4z" />
      <circle cx="25.2" cy="47.4" r="3.6" fill="#fff" />
      <circle cx="25.2" cy="47.4" r="1.55" fill="#801825" />
      <circle cx="44.6" cy="47.4" r="3.6" fill="#fff" />
      <circle cx="44.6" cy="47.4" r="1.55" fill="#801825" />
    </LogoFrame>
  );
}

function CustomsLogo() {
  return (
    <LogoFrame>
      <path fill="#fff" d="M18 17.5h28a3 3 0 0 1 3 3v16.2a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V20.5a3 3 0 0 1 3-3z" />
      <path fill="#801825" d="M16.2 27.4h31.6v2.2H16.2zM27.4 18.8h2.2v19.6h-2.2zm7 0h2.2v19.6h-2.2z" />
      <path fill="#fff" d="M22.5 43.2h19l-2.4 4.6H24.9zm2.8 6.2h13.4l-1.8 3.4H27.1zm2.4 5h8.6l-1.4 2.6h-5.8z" />
    </LogoFrame>
  );
}

function UniversityLogo() {
  return (
    <LogoFrame>
      <path fill="#fff" d="M12.5 27.4 32 17.2l19.5 10.2-19.5 7.4L12.5 27.4z" />
      <path fill="#fff" d="M18.4 32.2v12.6h4.2V34.4h3.6v10.4h4.2V33.2h3.6v11.6h4.2V34.4h4.2v10.4H46V32.6l-14 5.2-13.6-5.6z" />
      <path fill="#fff" d="M16 46.6h32v2.6H16z" />
      <path fill="#fff" d="M31 18.2h2v7.4h-2z" />
    </LogoFrame>
  );
}

function PharmacyLogo() {
  return (
    <LogoFrame>
      <path
        fill="#fff"
        d="M24.2 16.8h15.6c3.4 0 6.2 2.8 6.2 6.2v22c0 3.4-2.8 6.2-6.2 6.2H24.2c-3.4 0-6.2-2.8-6.2-6.2v-22c0-3.4 2.8-6.2 6.2-6.2z"
      />
      <path fill="#801825" d="M30.4 24.2h3.2v7.2H41v3.2h-7.4V42h-3.2v-7.4H22.8v-3.2h7.6z" />
    </LogoFrame>
  );
}

function WebLogo() {
  return (
    <LogoFrame>
      <path fill="#fff" d="M14 18.2h36a3.2 3.2 0 0 1 3.2 3.2v23.2a3.2 3.2 0 0 1-3.2 3.2H14a3.2 3.2 0 0 1-3.2-3.2V21.4A3.2 3.2 0 0 1 14 18.2z" />
      <path fill="#801825" d="M11.2 26.2h41.6v2.1H11.2z" />
      <circle cx="18.4" cy="22.6" r="1.45" fill="#801825" />
      <circle cx="23.4" cy="22.6" r="1.45" fill="#801825" />
      <circle cx="28.4" cy="22.6" r="1.45" fill="#801825" />
      <path fill="#801825" d="M20.2 33.4h16.8v2.4H20.2zm0 5.4h11.2v2.4H20.2z" />
    </LogoFrame>
  );
}

export function CaseStudyLogo({ studyId }: { studyId: string }) {
  switch (studyId) {
    case "customs-workflow":
      return <CustomsLogo />;
    case "university-system":
      return <UniversityLogo />;
    case "pharmacy-inventory":
      return <PharmacyLogo />;
    case "web-delivery":
      return <WebLogo />;
    default:
      return <ShipmentLogo />;
  }
}

function CoverBase({ children }: { children: ReactNode }) {
  return (
    <svg className="study-modal-cover-art" viewBox="0 0 280 140" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

function ShipmentCover() {
  return (
    <CoverBase>
      <circle cx="118" cy="72" r="50" stroke="#801825" strokeWidth="2.2" opacity="0.2" />
      <ellipse cx="118" cy="72" rx="22" ry="50" stroke="#801825" strokeWidth="1.7" opacity="0.18" />
      <path d="M68 72h100M118 22v100" stroke="#801825" strokeWidth="1.5" opacity="0.16" />
      <path
        d="M118 72c30-30 68-38 102-26"
        stroke="#801825"
        strokeWidth="2"
        strokeDasharray="5 6"
        strokeLinecap="round"
        opacity="0.38"
      />
      <path d="M204 42c0-9 7-16 16-16s16 7 16 16-16 30-16 30-16-21-16-30z" fill="#801825" opacity="0.22" />
      <circle cx="220" cy="42" r="5" fill="#fff" />
      <path d="M214 86h24v20H214zM230 70h24v20H230zM246 94h24v20H246z" fill="#801825" opacity="0.2" />
      <path d="M252 58c0-7 5.2-12 12-12s12 5 12 12-12 23-12 23-12-16-12-23z" fill="#801825" opacity="0.16" />
      <circle cx="264" cy="58" r="4" fill="#fff" opacity="0.85" />
    </CoverBase>
  );
}

function CustomsCover() {
  return (
    <CoverBase>
      <rect x="78" y="30" width="58" height="36" rx="4" fill="#801825" opacity="0.14" />
      <rect x="108" y="48" width="58" height="36" rx="4" fill="#801825" opacity="0.2" />
      <rect x="138" y="66" width="58" height="36" rx="4" fill="#801825" opacity="0.26" />
      <rect x="204" y="24" width="40" height="52" rx="5" stroke="#801825" strokeWidth="2.2" opacity="0.28" />
      <path d="M214 38h20M214 47h16M214 56h18" stroke="#801825" strokeWidth="2" opacity="0.28" />
      <circle cx="238" cy="108" r="18" stroke="#801825" strokeWidth="2.2" opacity="0.2" />
      <path d="M238 100v16M230 108h16" stroke="#801825" strokeWidth="2.2" opacity="0.2" />
    </CoverBase>
  );
}

function UniversityCover() {
  return (
    <CoverBase>
      <path d="M86 92V48l54-26 54 26v44" stroke="#801825" strokeWidth="2.2" opacity="0.24" />
      <path d="M104 92V58M140 92V46M176 92V58" stroke="#801825" strokeWidth="2" opacity="0.2" />
      <path d="M82 92h116" stroke="#801825" strokeWidth="2.2" opacity="0.28" />
      <path d="M208 38l32 12-32 12-32-12 32-12z" fill="#801825" opacity="0.2" />
      <path d="M240 50v22" stroke="#801825" strokeWidth="2" opacity="0.22" />
      <circle cx="248" cy="100" r="20" stroke="#801825" strokeWidth="1.8" opacity="0.16" />
    </CoverBase>
  );
}

function PharmacyCover() {
  return (
    <CoverBase>
      <rect x="88" y="28" width="20" height="70" rx="6" fill="#801825" opacity="0.16" />
      <rect x="116" y="44" width="20" height="54" rx="6" fill="#801825" opacity="0.22" />
      <rect x="144" y="22" width="20" height="76" rx="6" fill="#801825" opacity="0.18" />
      <circle cx="222" cy="58" r="30" stroke="#801825" strokeWidth="3.2" opacity="0.22" />
      <path d="M222 40v36M204 58h36" stroke="#801825" strokeWidth="4.4" strokeLinecap="round" opacity="0.22" />
      <rect x="198" y="98" width="56" height="18" rx="9" fill="#801825" opacity="0.14" />
    </CoverBase>
  );
}

function WebCover() {
  return (
    <CoverBase>
      <rect x="78" y="26" width="102" height="68" rx="8" stroke="#801825" strokeWidth="2.2" opacity="0.2" />
      <path d="M78 42h102" stroke="#801825" strokeWidth="1.8" opacity="0.2" />
      <rect x="148" y="48" width="102" height="68" rx="8" stroke="#801825" strokeWidth="2.2" opacity="0.3" />
      <path d="M148 64h102" stroke="#801825" strokeWidth="1.8" opacity="0.24" />
      <circle cx="90" cy="34" r="2.4" fill="#801825" opacity="0.28" />
      <circle cx="160" cy="56" r="2.4" fill="#801825" opacity="0.32" />
      <path d="M166 80h44M166 92h30" stroke="#801825" strokeWidth="2" opacity="0.24" />
    </CoverBase>
  );
}

export function CaseStudyCover({ studyId }: { studyId: string }) {
  switch (studyId) {
    case "customs-workflow":
      return <CustomsCover />;
    case "university-system":
      return <UniversityCover />;
    case "pharmacy-inventory":
      return <PharmacyCover />;
    case "web-delivery":
      return <WebCover />;
    default:
      return <ShipmentCover />;
  }
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="study-detail-icon" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </span>
  );
}

export function StudyFieldIcon({ kind }: { kind: "challenge" | "approach" | "did" | "result" }) {
  if (kind === "challenge") {
    return (
      <IconWrap>
        <circle cx="12" cy="13" r="7.2" stroke="#801825" strokeWidth="2" />
        <circle cx="12" cy="13" r="3.1" stroke="#801825" strokeWidth="2" />
        <path d="M12 4.2v2.6M4.2 13h2.6M17.2 13h2.6" stroke="#801825" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.2 5.2 20.4 3.6l-1.4 4.4-2.8-2.8z" fill="#801825" />
      </IconWrap>
    );
  }
  if (kind === "approach") {
    return (
      <IconWrap>
        <path
          fill="#801825"
          d="M12 3.2A6.2 6.2 0 0 0 8.4 14.6c.6.5 1 1.2 1.2 2h4.8c.2-.8.6-1.5 1.2-2A6.2 6.2 0 0 0 12 3.2zm-2.1 15.2h4.2v1.3h-4.2zm.7 2.2h2.8V22h-2.8z"
        />
      </IconWrap>
    );
  }
  if (kind === "did") {
    return (
      <IconWrap>
        <path
          fill="#801825"
          d="M19.4 13.1c.04-.36.07-.72.07-1.1s-.03-.74-.07-1.1l2.2-1.72a.52.52 0 0 0 .12-.7l-2.08-3.6a.54.54 0 0 0-.66-.24l-2.6 1.04a8 8 0 0 0-1.9-1.1l-.4-2.76A.54.54 0 0 0 13.5 2h-3a.54.54 0 0 0-.53.45l-.4 2.76c-.68.26-1.32.62-1.9 1.1L4.57 5.27a.54.54 0 0 0-.66.24l-2.08 3.6a.52.52 0 0 0 .12.7L4.15 11.5c-.04.36-.07.72-.07 1.1s.03.74.07 1.1l-2.2 1.72a.52.52 0 0 0-.12.7l2.08 3.6c.14.26.46.37.66.24l2.6-1.04c.58.48 1.22.84 1.9 1.1l.4 2.76c.05.26.28.45.53.45h3c.25 0 .48-.19.53-.45l.4-2.76c.68-.26 1.32-.62 1.9-1.1l2.6 1.04c.2.13.52.02.66-.24l2.08-3.6a.52.52 0 0 0-.12-.7l-2.2-1.72ZM12 15.7A3.7 3.7 0 1 1 12 8.3a3.7 3.7 0 0 1 0 7.4Z"
        />
      </IconWrap>
    );
  }
  return (
    <IconWrap>
      <path fill="#801825" d="M4 18.8V11h2.4v7.8H4zm4.7 0V8.6H11v10.2H8.7zm4.7 0v-5.2h2.4v5.2h-2.4zm4.7 0V6h2.4v12.8h-2.4z" />
      <path d="M3.8 9.2 9.6 5.4l4.2 3.4L20.4 3.6" stroke="#801825" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconWrap>
  );
}
