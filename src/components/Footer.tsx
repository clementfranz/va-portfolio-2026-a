import Image from "next/image";
import { contact, profile } from "@/data/profile";
import { ProfileLinks } from "@/components/ProfileLinks";

export function Footer() {
  return (
    <footer id="contact" className="footer-cta">
      <div className="footer-cta-bg" aria-hidden="true">
        <Image
          src={profile.footerBackgroundPath}
          alt=""
          fill
          sizes="(min-width: 1100px) 1100px, 100vw"
          quality={75}
          className="footer-cta-bg-img"
        />
        <span className="footer-cta-veil" />
      </div>

      <div className="footer-cta-grid">
        <div className="footer-cta-copy">
          <p className="eyebrow footer-cta-eyebrow">Let's talk</p>
          <div className="section-rule footer-cta-rule" />
          <h2 className="display footer-cta-title">{contact.title}</h2>

          <div className="footer-cta-panel">
            <a href={`mailto:${profile.email}`} className="btn btn-primary footer-cta-mail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.2" y="5.5" width="17.6" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                <path d="m4.2 7.2 7.8 6.1 7.8-6.1" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
              Email me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="footer-cta-card">
              <ProfileLinks className="profile-logos-contact" />
              <a href={`mailto:${profile.email}`} className="footer-cta-email">
                {profile.email}
              </a>
              <p className="footer-cta-place">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                {contact.note}
              </p>
            </div>
          </div>

          <p className="footer-cta-stock">The photos on this page are stock, not shots from client sites.</p>
        </div>

        <div className="footer-cta-media">
          <Image
            src={profile.portraitPath}
            alt={`${profile.name}, Logistics and Operations VA`}
            fill
            unoptimized
            draggable={false}
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="footer-cta-portrait"
          />
        </div>
      </div>
    </footer>
  );
}
