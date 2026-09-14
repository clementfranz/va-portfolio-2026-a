export const profile = {
  name: "ClementFranz",
  brandTag: "VA Services",
  location: "City of San Fernando, LU, Philippines",
  heroEyebrow: "VA professional based in the Philippines",
  headline: "Logistics & Operations VA",
  subheadline: "Automation and the technical side of the work",
  summary:
    "I work in logistics and operations — shipments, customs, procurement — and I build the automations that keep that work from turning into a pile of status checks. When a project needs it, I can also run delivery or step into the technical side.",
  email: "cfdel.work@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/clementfranz2",
  onlineJobsUrl: "https://www.onlinejobs.ph/jobseekers/info/572557",
  upworkUrl: "",
  resumePath: "/assets/resume.pdf",
  portraitPath: "/assets/portrait.png",
  heroBackgroundPath: "/assets/hero-background.jpg",
  footerBackgroundPath: "/assets/footer-background.jpg",
  seoTitle:
    "ClementFranz — Logistics & Operations VA | Automation & Technical Support",
  seoDescription:
    "I'm ClementFranz, a logistics and operations VA in City of San Fernando, LU, Philippines. I coordinate shipments, support customs work, and build workflow automations.",
} as const;

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#automation", label: "Automation" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#resume", label: "Resume" },
] as const;

export const mobileNavLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#customs", label: "Customs" },
  { href: "#automation", label: "Automation" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
] as const;

export type Specialty = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  imageAlt: string;
  row: "full" | "offset";
};

export const specialties: Specialty[] = [
  {
    id: "logistics-operations",
    title: "Logistics Operations",
    blurb: "I coordinate logistics so the work stays on track.",
    image: "/assets/stock/do/do-logistics-operations.jpg",
    imageAlt: "Stacked shipping containers",
    row: "full",
  },
  {
    id: "shipment-tracking",
    title: "Shipment Tracking",
    blurb: "I follow shipments from booking through arrival.",
    image: "/assets/stock/do/do-shipment-tracking.jpg",
    imageAlt: "Truck on a highway",
    row: "full",
  },
  {
    id: "customs-support",
    title: "Customs Support",
    blurb: "I help with the documents and clearance questions.",
    image: "/assets/stock/do/do-customs-support.jpg",
    imageAlt: "Hand signing a document",
    row: "full",
  },
  {
    id: "hts-code-research",
    title: "HTS Code Research",
    blurb: "I look up the classification a shipment needs.",
    image: "/assets/stock/do/do-hts-code-research.jpg",
    imageAlt: "Library bookshelves",
    row: "offset",
  },
  {
    id: "import-export-support",
    title: "Import / Export Support",
    blurb: "I support air and sea moves, including the paperwork.",
    image: "/assets/stock/do/do-import-export-support.jpg",
    imageAlt: "Cargo ship at a port",
    row: "offset",
  },
  {
    id: "procurement",
    title: "Procurement",
    blurb: "I plan what to buy and when it needs to land.",
    image: "/assets/stock/do/do-procurement.jpg",
    imageAlt: "Laptop on a desk",
    row: "full",
  },
  {
    id: "forecasting",
    title: "Forecasting",
    blurb: "I work from planning windows so materials show up on time.",
    image: "/assets/stock/do/do-forecasting.jpg",
    imageAlt: "Charts on a laptop screen",
    row: "full",
  },
  {
    id: "compliance-research",
    title: "Compliance Research",
    blurb: "I research the rules a shipment has to clear.",
    image: "/assets/stock/do/do-compliance-research.jpg",
    imageAlt: "Statue of Justice holding scales",
    row: "full",
  },
  {
    id: "data-preparation",
    title: "Data Preparation",
    blurb: "I get inbound shipment data into a shape teams can use.",
    image: "/assets/stock/do/do-data-preparation.jpg",
    imageAlt: "Printed spreadsheet on a desk",
    row: "offset",
  },
  {
    id: "apps-script-automation",
    title: "Google Apps Script Automation",
    blurb: "I write scripts for the checks people keep repeating.",
    image: "/assets/stock/do/do-apps-script-automation.jpg",
    imageAlt: "Code on a monitor",
    row: "offset",
  },
  {
    id: "web-design",
    title: "Web Design",
    blurb: "I shape sites that need to ship, not just look finished.",
    image: "/assets/stock/do/do-web-design.jpg",
    imageAlt: "Laptop showing a website layout",
    row: "full",
  },
  {
    id: "figma",
    title: "Figma",
    blurb: "I review and mark up layouts before development.",
    image: "/assets/stock/do/do-figma.jpg",
    imageAlt: "Color swatches and a tablet with design sketches",
    row: "full",
  },
  {
    id: "wordpress",
    title: "WordPress",
    blurb: "I build and hand off WordPress sites.",
    image: "/assets/stock/do/do-wordpress.jpg",
    imageAlt: "Hands marking up website sketches on a desk",
    row: "full",
  },
  {
    id: "shopify",
    title: "Shopify",
    blurb: "I set up stores when a project needs it.",
    image: "/assets/stock/do/do-shopify.jpg",
    imageAlt: "Customer at a shop checkout",
    row: "full",
  },
  {
    id: "client-communication",
    title: "Customer / Client Communication",
    blurb: "I keep CSRs, carriers, and clients in the loop.",
    image: "/assets/stock/do/do-client-communication.jpg",
    imageAlt: "People talking in an office",
    row: "full",
  },
  {
    id: "project-management",
    title: "Project Management",
    blurb: "I keep the timeline, the team, and the client aligned.",
    image: "/assets/stock/do/do-project-management.jpg",
    imageAlt: "Notebook with a project plan",
    row: "full",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    blurb: "I cut the extra steps out of a process.",
    image: "/assets/stock/do/do-workflow-automation.jpg",
    imageAlt: "Abstract network of connected points",
    row: "offset",
  },
  {
    id: "technical-problem-solving",
    title: "Technical Problem Solving",
    blurb: "When the fastest path is to fix it, I do.",
    image: "/assets/stock/do/do-technical-problem-solving.jpg",
    imageAlt: "Code on a laptop",
    row: "offset",
  },
];

export const about = {
  title: "About",
  lead: "I work in logistics day to day. Then I build the systems that make that work easier to see, track, and run.",
  story: [
    "My career started in purchasing and importing, where I learned how materials, lead times, and international shipments actually move. That work grew into logistics coordination, customs and compliance research, and the daily problem of keeping teams aligned on where a shipment stands.",
    "Same habit every time: learn how the work runs, cut the extra steps, and automate the parts people keep repeating. Then they can spend time on the exceptions instead of chasing status.",
  ],
  currentFocus: [
    "Logistics coordination and shipment status workflows",
    "Tracking from booking through warehouse arrival and delivery",
    "Supporting CSRs who need shipment visibility",
    "Preparing inbound shipment data",
    "Customs, HTS, CPSC, and EU packaging-related research",
    "Carrier and internal-team communication",
    "Google Apps Script automations for logistics workflows",
  ],
};

export const stock = {
  about: {
    src: "/assets/stock/warehouse.jpg",
    alt: "Warehouse aisles",
  },
  customs: {
    src: "/assets/stock/containers.jpg",
    alt: "Stacked shipping containers at a port",
  },
  automation: {
    src: "/assets/stock/laptop.jpg",
    alt: "Laptop on a desk",
  },
  resume: {
    src: "/assets/stock/documents.jpg",
    alt: "Desk with documents and a laptop",
  },
} as const;

export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  dates: string;
  location?: string;
  prominence: "featured" | "standard" | "compact";
  summary: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "logistics",
    title: "Logistics Coordinator & Automation Specialist",
    organization: "Logistics operations team",
    dates: "July 2025 – July 2026",
    prominence: "featured",
    summary:
      "I coordinate shipment workflows and build the visibility tools around them — from booking through warehouse arrival and delivery — so internal teams can see status without chasing it.",
    highlights: [
      "Coordinate shipment status from booking through warehouse arrival and delivery planning",
      "Prepare inbound shipment data for internal teams",
      "Support CSRs who need a clearer view of where shipments stand",
      "Research customs documentation, HTS classification, and shipping restrictions",
      "Communicate with carriers and internal stakeholders on timing and exceptions",
      "Build Google Apps Script automations that reduce repetitive status checking",
    ],
    image: "/assets/stock/warehouse.jpg",
    imageAlt: "Warehouse operations floor",
  },
  {
    id: "project-management",
    title: "Project Manager / Technical Project Manager",
    organization: "Web delivery studio, Baguio City",
    dates: "March 2023 – October 2023",
    location: "Baguio City, Philippines",
    prominence: "standard",
    summary:
      "I ran website and system projects for English-speaking international clients — coordinating designers and developers, and stepping into the work myself when that was the fastest path forward.",
    highlights: [
      "Managed projects ranging from about two to six months",
      "Gathered requirements and turned what the client wanted into tasks the team could work on",
      "Coordinated developers and designers, kept clients updated, and owned the timeline",
      "Reviewed designs in Figma before development",
      "Delivered WordPress and Shopify builds, and occasionally programmed the project directly",
      "Worked with clients in the United Kingdom, Australia, and other international markets",
    ],
    image: "/assets/stock/meeting.jpg",
    imageAlt: "People working around laptops",
  },
  {
    id: "bpo",
    title: "Customer Service",
    organization: "BPO · insurance support",
    dates: "December 2021 – September 2022",
    prominence: "compact",
    summary:
      "I handled customer and provider communication for health and dental insurance. That same follow-through is what I still use with carriers, CSRs, and clients.",
    highlights: [
      "Contacted customers regarding health and dental insurance",
      "Communicated with clinics and providers on insurance information",
      "Handled inbound inquiries with clear, patient follow-through",
    ],
    image: "/assets/stock/handshake.jpg",
    imageAlt: "Two people in conversation",
  },
  {
    id: "purchasing",
    title: "Purchasing Clerk",
    organization: "Japanese manufacturing company",
    dates: "May 2018 – June 2020",
    prominence: "standard",
    summary:
      "I handled procurement and import coordination — planning what we needed to buy, moving goods by air and sea, and supporting the clearance work those shipments needed.",
    highlights: [
      "Purchasing and procurement coordination for manufacturing materials",
      "Forecasted purchasing requirements for roughly 3-month and 6-month planning windows",
      "Imported goods from Japan and other countries by air and sea",
      "Supported customs clearance and documentation requirements for inbound materials",
      "Coordinated research around permits and government clearance when shipments needed it, including hazardous painting materials",
    ],
    image: "/assets/stock/factory.jpg",
    imageAlt: "Manufacturing floor",
  },
];

export const customs = {
  title: "Customs & Compliance",
  intro:
    "I support clearance and shipping decisions with research, documentation checks, and inbound data preparation — operational support, not legal advice.",
  disclaimer:
    "This is operational research I did on the job — not legal or regulatory advice.",
  capabilities: [
    "HTS classification research",
    "Customs documentation research",
    "Identifying required clearance documents",
    "Researching shipment restrictions",
    "CPSC compliance research",
    "EU packaging-related requirements research",
    "Inbound shipment data preparation",
    "Carrier communication",
    "Supporting internal teams with clearance questions",
  ],
};

export const workflowStages = [
  "Supplier / Order",
  "Booking",
  "In Transit",
  "Warehouse Arrival",
  "Delivery Planning",
  "Shipped / Delivered",
  "Post-shipment Status",
] as const;

export const automation = {
  title: "Automation & Apps Script",
  intro:
    "I build Google Apps Script solutions around logistics work — especially the parts that used to mean checking the same status in too many places.",
  featuredTitle: "Shipment Status Visibility & Workflow Automation",
  problem:
    "CSRs and internal teams needed an easier way to understand where shipments were in the process, without relying on repetitive manual checking.",
  approach:
    "I mapped the operational stages into a clearer workflow and automated status visibility so people could see progress from booking through warehouse arrival, delivery, and post-shipment follow-up.",
  value: [
    "Teams could see shipment status without asking around",
    "Less time spent checking the same thing twice",
    "Handoffs between stages were easier to follow",
    "CSRs and operations were looking at the same information",
  ],
};

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  challenge: string;
  approach: string;
  whatIDid: string;
  result: string;
  image: string;
  imageAlt: string;
  stepImages: {
    challenge: { image: string; imageAlt: string };
    approach: { image: string; imageAlt: string };
    whatIDid: { image: string; imageAlt: string };
    result: { image: string; imageAlt: string };
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "shipment-automation",
    title: "Shipment Status Automation",
    category: "Logistics · Apps Script",
    tagline: "Stop chasing the same shipment status.",
    challenge:
      "Internal teams and CSRs needed a faster way to understand shipment progress across multiple stages.",
    approach:
      "I broke the process into a shared workflow, then automated the visibility layer instead of adding more manual checking.",
    whatIDid:
      "I mapped stages from supplier and order through delivery and post-shipment, then built Apps Script automations so status was easier to read and update.",
    result:
      "People spent less time chasing the same information, and the workflow was easier to follow.",
    image: "/assets/stock/truck.jpg",
    imageAlt: "Freight truck on the road",
    stepImages: {
      challenge: {
        image: "/assets/stock/steps/shipment-challenge.jpg",
        imageAlt: "Warehouse aisle stacked with palletized boxes",
      },
      approach: {
        image: "/assets/stock/steps/shipment-approach.jpg",
        imageAlt: "Laptop screen with charts and metrics",
      },
      whatIDid: {
        image: "/assets/stock/steps/shipment-did.jpg",
        imageAlt: "Two people pointing at a laptop screen",
      },
      result: {
        image: "/assets/stock/steps/shipment-result.jpg",
        imageAlt: "Freight truck on a highway",
      },
    },
  },
  {
    id: "customs-workflow",
    title: "Customs & Compliance Workflow Support",
    category: "Operations · Research",
    tagline: "Research the team can use.",
    challenge:
      "Clearance questions, restricted-product checks, and documentation requirements slowed inbound work when they were handled ad hoc.",
    approach:
      "I treated compliance support as a repeatable research workflow: find the question, gather the documents, and send operations an answer they can use.",
    whatIDid:
      "Researched HTS classification, CPSC and EU packaging-related requirements, shipment restrictions, and inbound documentation needs, then prepared data for the teams who needed it.",
    result:
      "Inbound information was easier to work from, and clearance questions had a clearer place to go.",
    image: "/assets/stock/containers.jpg",
    imageAlt: "Shipping containers at a port",
    stepImages: {
      challenge: {
        image: "/assets/stock/steps/customs-challenge.jpg",
        imageAlt: "Person signing a document",
      },
      approach: {
        image: "/assets/stock/steps/customs-approach.jpg",
        imageAlt: "People reviewing notes beside laptops",
      },
      whatIDid: {
        image: "/assets/stock/steps/customs-did.jpg",
        imageAlt: "Person filling out paperwork",
      },
      result: {
        image: "/assets/stock/steps/customs-result.jpg",
        imageAlt: "Shipping containers at a terminal",
      },
    },
  },
  {
    id: "university-system",
    title: "University Grading & Attendance System",
    category: "Education · Lead Developer",
    tagline: "Grading and attendance in one place, with the viewing rules built in.",
    challenge:
      "A university needed grading and attendance in one system, with printable grade cards and rules around when updated records could be viewed.",
    approach:
      "I led development on an academic system that followed the school's rules, not a simple records list.",
    whatIDid:
      "I built grading and attendance workflows for a campus of about 3,000 students, including printable grade cards and rules that controlled when updated information could be viewed.",
    result:
      "Academic records lived in one workflow, with clearer control over when data could be viewed or printed.",
    image: "/assets/stock/university.jpg",
    imageAlt: "University campus building",
    stepImages: {
      challenge: {
        image: "/assets/stock/steps/university-challenge.jpg",
        imageAlt: "Person walking between library shelves",
      },
      approach: {
        image: "/assets/stock/steps/university-approach.jpg",
        imageAlt: "Hand writing notes at a desk",
      },
      whatIDid: {
        image: "/assets/stock/steps/university-did.jpg",
        imageAlt: "Laptop showing code on a desk",
      },
      result: {
        image: "/assets/stock/steps/university-result.jpg",
        imageAlt: "University campus building",
      },
    },
  },
  {
    id: "pharmacy-inventory",
    title: "Pharmacy Inventory System",
    category: "Healthcare supply · Freelance",
    tagline: "Stock data that matches how the work runs.",
    challenge:
      "A pharmacy supplier/distributor needed inventory-related work to be easier to track and less dependent on scattered records.",
    approach:
      "I designed it around the actual inventory workflow instead of a generic stock list.",
    whatIDid:
      "I built an inventory system for a Pampanga-based pharmacy supply client, focused on how stock data moved and stayed organized.",
    result:
      "Inventory data was easier to track and less scattered.",
    image: "/assets/stock/pharmacy.jpg",
    imageAlt: "Pharmacy shelves",
    stepImages: {
      challenge: {
        image: "/assets/stock/steps/pharmacy-challenge.jpg",
        imageAlt: "Capsules spilled from a pill bottle",
      },
      approach: {
        image: "/assets/stock/steps/pharmacy-approach.jpg",
        imageAlt: "Assorted pills and capsules",
      },
      whatIDid: {
        image: "/assets/stock/steps/pharmacy-did.jpg",
        imageAlt: "Person working at a computer",
      },
      result: {
        image: "/assets/stock/steps/pharmacy-result.jpg",
        imageAlt: "Pharmacy shelves with bottled products",
      },
    },
  },
  {
    id: "web-delivery",
    title: "Technical Project Management & Web Delivery",
    category: "Client delivery · PM",
    tagline: "From the brief to launch, without losing the thread.",
    challenge:
      "International clients needed websites and systems delivered on timelines of two to six months, with design, development, and communication staying aligned.",
    approach:
      "I ran the project as both coordinator and technical partner — close enough to the work to translate what the client asked for.",
    whatIDid:
      "Gathered requirements, reviewed Figma designs, coordinated developers and designers, updated clients, and stepped into WordPress, Shopify, or custom programming when needed.",
    result:
      "Delivery stayed closer to what the client asked for, from brief to launch.",
    image: "/assets/stock/design.jpg",
    imageAlt: "Design and layout work on a desk",
    stepImages: {
      challenge: {
        image: "/assets/stock/steps/web-challenge.jpg",
        imageAlt: "Team meeting in an office",
      },
      approach: {
        image: "/assets/stock/steps/web-approach.jpg",
        imageAlt: "Color swatches and design tools on a desk",
      },
      whatIDid: {
        image: "/assets/stock/steps/web-did.jpg",
        imageAlt: "Laptop with code on a desk",
      },
      result: {
        image: "/assets/stock/steps/web-result.jpg",
        imageAlt: "Laptop showing charts and analytics",
      },
    },
  },
];

export type Project = {
  id: string;
  title: string;
  industry: string;
  role: string;
  clientLabel: string;
  description: string;
  details: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "university-grading",
    title: "University Grading & Attendance System",
    industry: "Higher education",
    role: "Lead Developer · team project",
    clientLabel: "Manila based university",
    description:
      "I led development on a grading and attendance system for a Manila-based university, including printable grade cards and rules around when updated records could be viewed.",
    details: [
      "Built for a campus of approximately 3,000 students",
      "Grading and attendance in one workflow",
      "Generated printable grade cards",
      "Business rules controlled whether updated data could be viewed or printed, including payment-related access logic",
    ],
    technologies: ["Systems development", "Business rules", "Printable reports"],
    image: "/assets/stock/university.jpg",
    imageAlt: "Campus building",
  },
  {
    id: "school-attendance",
    title: "School Attendance System",
    industry: "Education",
    role: "Freelance developer",
    clientLabel: "Private school",
    description:
      "I built an attendance system for a private school, shaped around day-to-day classroom and admin use.",
    details: [
      "Freelance development for a private school",
      "Attendance capture and management workflow",
    ],
    technologies: ["Systems development", "Attendance workflows"],
    image: "/assets/stock/classroom.jpg",
    imageAlt: "Classroom seating",
  },
  {
    id: "pharmacy-inventory",
    title: "Pharmacy Inventory System",
    industry: "Pharmacy supply / distribution",
    role: "Freelance developer",
    clientLabel: "Pampanga based",
    description:
      "I built an inventory system for a Pampanga-based pharmacy supplier, so stock data was easier to track and less scattered.",
    details: [
      "Freelance development for a Pampanga-based pharmacy supply client",
      "Inventory tracking and operational data organization",
    ],
    technologies: ["Systems development", "Inventory workflows"],
    image: "/assets/stock/pharmacy.jpg",
    imageAlt: "Pharmacy shelves",
  },
  {
    id: "raffle-system",
    title: "Corporate Raffle Entry System",
    industry: "Promotional event operations",
    role: "Developer",
    clientLabel: "Asian city based",
    description:
      "I built the technical workflow for a high-value promotional raffle — livestream draw, entry processing, and results ready for a public post.",
    details: [
      "Built for an Asian city-based brand",
      "Designed around a livestream raffle workflow",
      "Handled entry processing and result publication flow for a public social post",
      "Built around the livestream timing and getting results out after the draw",
    ],
    technologies: ["Event workflow", "Systems development", "Livestream operations"],
    image: "/assets/stock/event.jpg",
    imageAlt: "Stage lighting at a live event",
  },
];

export type CreativeWork = {
  id: string;
  title: string;
  tools: string[];
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
};

export const creativeWork: CreativeWork[] = [
  {
    id: "graphic-thumbnails",
    title: "Graphic / Thumbnail Design",
    tools: ["Photoshop", "Thumbnail design", "Graphic design"],
    summary: "I did graphic and thumbnail work for a consulting firm in Los Angeles, including T-shirt design.",
    details: [
      "Photoshop-based graphic and thumbnail design",
      "T-shirt design within an existing visual workflow",
      "Consulting firm client in Los Angeles",
    ],
    image: "/assets/stock/design.jpg",
    imageAlt: "Color and layout tools",
  },
  {
    id: "publication-design",
    title: "School Newspaper / Publication Design",
    tools: ["Page layout", "Typography", "Image styling"],
    summary: "Freelance layout for local teachers and schools — fitting a lot of content into structured pages on deadline.",
    details: [
      "Page layout and content organization",
      "Typography and image styling for print-style pages",
      "Deadline-driven production for school publications",
    ],
    image: "/assets/stock/newspaper.jpg",
    imageAlt: "Stacked newspapers",
  },
  {
    id: "presentation-design",
    title: "Presentation Design",
    tools: ["PowerPoint", "Visual storytelling"],
    summary: "I built animated presentations for education and entertainment — made to hold attention, not read like a document.",
    details: [
      "Animated PowerPoint presentations",
      "Educational and entertainment-oriented visual storytelling",
      "Built to hold attention, not read like a stack of slides",
    ],
    image: "/assets/stock/spreadsheet.jpg",
    imageAlt: "Laptop on a desk",
  },
];

export const skillGroups = [
  {
    id: "logistics-operations",
    title: "Logistics & Operations",
    skills: [
      "Logistics coordination",
      "Shipment tracking",
      "Inbound shipment preparation",
      "Procurement",
      "Forecasting",
      "Import/export coordination",
      "Customs support",
      "HTS research",
      "Carrier communication",
    ],
  },
  {
    id: "compliance-research",
    title: "Compliance & Research",
    skills: [
      "Customs documentation research",
      "CPSC research",
      "EU packaging-related research",
      "Clearance requirement research",
      "Product/shipping research",
    ],
  },
  {
    id: "automation-development",
    title: "Automation & Development",
    skills: [
      "Google Apps Script",
      "JavaScript",
      "Web development",
      "Workflow automation",
      "Data processing",
      "Systems development",
    ],
  },
  {
    id: "web-design",
    title: "Web & Design",
    skills: [
      "Next.js",
      "React",
      "WordPress",
      "Shopify",
      "Figma",
      "Photoshop",
      "PowerPoint",
      "UI / web design",
    ],
  },
  {
    id: "project-communication",
    title: "Project & Communication",
    skills: [
      "Project management",
      "Client communication",
      "Developer coordination",
      "Designer coordination",
      "Requirements gathering",
      "Technical communication",
    ],
  },
] as const;

export const interests = [
  {
    title: "Chess & Sudoku",
    note: "I like slow games and thinking a few moves ahead.",
    image: "/assets/stock/chess.jpg",
    imageAlt: "Chess pieces on a board",
  },
  {
    title: "Guitar & Music",
    note: "Something to do with my hands that isn't a keyboard.",
    image: "/assets/stock/guitar.jpg",
    imageAlt: "Acoustic guitar",
  },
  {
    title: "Cycling & Motorcycles",
    note: "Getting outside.",
    image: "/assets/stock/cycling.jpg",
    imageAlt: "Road bicycle",
  },
  {
    title: "Rubik's Cube",
    note: "Another little puzzle obsession",
    image: "/assets/stock/cube.jpg",
    imageAlt: "Puzzle cube on a table",
  },
  {
    title: "Animals / pets",
    note: "I've always liked having animals around.",
    image: "/assets/stock/pets.jpg",
    imageAlt: "Dog looking toward the camera",
  },
] as const;

export const contact = {
  title: "If you need someone who already understands the operations side — and can build around it — email me.",
  cta: "Let's talk.",
  note: "Based in City of San Fernando, LU, Philippines.",
};
