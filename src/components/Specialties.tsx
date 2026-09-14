import Image from "next/image";
import { specialties, type Specialty } from "@/data/profile";

function SpecialtyIcon({ id }: { id: Specialty["id"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "logistics-operations":
      return (
        <svg {...common}>
          <path d="M4 8h9.5v9H4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M13.5 12h4.2L20 15.4V17h-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="7.2" cy="17.2" r="1.55" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.4" cy="17.2" r="1.55" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "shipment-tracking":
      return (
        <svg {...common}>
          <path d="M3.5 17h17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M5 17V8.8A1.8 1.8 0 0 1 6.8 7h6.2v10" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M13 11h4l2.4 3.4V17H13" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "customs-support":
      return (
        <svg {...common}>
          <circle cx="9.2" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="15.2" cy="11" r="2.6" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.2 18.4c.4-2.5 2.2-3.8 5-3.8 2.6 0 4.4 1.3 5 3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M14.2 15.2c1.4-.4 3.2-.1 4.4 1.5.6.8.9 1.6 1 2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "hts-code-research":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.1" stroke="currentColor" strokeWidth="1.7" />
          <path d="m15.7 15.7 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "import-export-support":
      return (
        <svg {...common}>
          <path d="M7 8H4.8v8H7M17 8h2.2v8H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M8.2 12h7.6M14.2 9.4 16.6 12 14.2 14.6M9.8 9.4 7.4 12 9.8 14.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "procurement":
      return (
        <svg {...common}>
          <path d="M8 6.5h8v13H8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M10 6.5V5.4A2 2 0 0 1 12 3.5 2 2 0 0 1 14 5.4v1.1M10 12h4M10 15.2h2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "forecasting":
      return (
        <svg {...common}>
          <path d="M4.5 18.5V5.5M4.5 18.5h15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M7.5 14.5 11 10l3.2 3.1 4.3-6.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "compliance-research":
      return (
        <svg {...common}>
          <path d="M12 3.6 19.2 7v5.4c0 4.3-3 6.8-7.2 8-4.2-1.2-7.2-3.7-7.2-8V7L12 3.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "data-preparation":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="7" rx="6.2" ry="2.3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.8 7v10c0 1.3 2.8 2.3 6.2 2.3s6.2-1 6.2-2.3V7" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5.8 12c0 1.3 2.8 2.3 6.2 2.3s6.2-1 6.2-2.3" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "apps-script-automation":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 5.2V3.6M12 20.4v-1.6M5.2 12H3.6M20.4 12h-1.6M7.2 7.2 6.1 6.1M17.9 17.9l-1.1-1.1M17.9 6.1 16.8 7.2M7.2 16.8 6.1 17.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "web-design":
      return (
        <svg {...common}>
          <rect x="3.6" y="5.2" width="16.8" height="11.2" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 20.2h8M12 16.4v3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "figma":
      return (
        <svg {...common}>
          <path d="M8.2 8.2 4.8 12l3.4 3.8M15.8 8.2 19.2 12l-3.4 3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "wordpress":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7.2 15.8 10.4 8h1.4l-4 9.2M16.8 15.8 13.6 8h-1.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shopify":
      return (
        <svg {...common}>
          <path d="M7.2 8.2h9.6l-.8 10.2H8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9.2 8.2V6.8A2.8 2.8 0 0 1 12 4a2.8 2.8 0 0 1 2.8 2.8v1.4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "client-communication":
      return (
        <svg {...common}>
          <path d="M5 6.5h10.5a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H9.2L5 19.2V8.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "project-management":
      return (
        <svg {...common}>
          <circle cx="12" cy="6.4" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="6.4" cy="17.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.6" cy="17.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 8.6v2.4M10.4 12.6 7.8 15.4M13.6 12.6l2.6 2.8M8.6 12.4h6.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "workflow-automation":
      return (
        <svg {...common}>
          <path d="M4.8 8h5.2v4.2H4.8zM14 8h5.2v4.2H14zM9.4 14.6h5.2V18.8H9.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M10 10.1h4M12 12.2v2.4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M8.2 16.8 4.8 12l3.4-4.8M15.8 7.2 19.2 12l-3.4 4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function Specialties() {
  return (
    <section className="section do-band" aria-labelledby="what-i-do-title">
      <div className="do-head">
        <div>
          <p className="eyebrow do-eyebrow">Core specialties</p>
          <div className="section-rule do-rule" />
          <h2 id="what-i-do-title" className="display do-title">
            What I do
          </h2>
          <p className="do-lede">Operations first. Then the tools that keep that work moving.</p>
        </div>
        <p className="do-aside">
          <span>Operations</span>
          <span>Automation</span>
          <span>Delivery</span>
        </p>
      </div>

      <ul className="do-board">
        {specialties.map((item) => (
          <li key={item.id} className={`do-card do-card-${item.row}`}>
            <div className="do-card-media" aria-hidden="true">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 12vw, (min-width: 768px) 18vw, 32vw"
                quality={75}
                className="do-card-img"
              />
              <span className="do-card-tint" />
              <span className="do-card-fade" />
            </div>
            <div className="do-card-body">
              <span className="do-card-icon">
                <SpecialtyIcon id={item.id} />
              </span>
              <h3>{item.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
