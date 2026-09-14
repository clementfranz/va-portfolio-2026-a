# Content for developer

**From:** Content writer  
**For:** Developer agent  
**Task:** [T-025a on `active_tasks.md`](active_tasks.md)  
**Checklist used:** [content_voice_checklist.md](content_voice_checklist.md)

Apply these strings exactly. Do not rewrite them “to sound more professional.” Do not invent metrics, dates, employer names, or client names. Do not put this file’s instructions on the public page.

Keep unchanged unless listed below: name, brand tag, location, hero eyebrow (`VA professional based in the Philippines`), headline (`Logistics & Operations VA`), emails, profile URLs, nav labels, job titles, dates, anonymized org labels, location capsules, workflow stage names, specialty chips, skill names, and button labels (`Contact`, `Email me`, `Download resume`, `View details`, `Close`).

---

## 1. `src/data/profile.ts`

### Hero / SEO

`subheadline`

- From: `with automation and technical problem solving`
- To: `Automation and the technical side of the work`

`summary`

- From: `I help teams keep operations organized, shipments moving, and repetitive work under control — with hands-on experience in logistics, customs, procurement, automation, project management, and web technology.`
- To: `I work in logistics and operations — shipments, customs, procurement — and I build the automations that keep that work from turning into a pile of status checks. When a project needs it, I can also run delivery or step into the technical side.`

`seoDescription`

- From: `Logistics and Operations VA based in City of San Fernando, LU, Philippines, with experience in shipment coordination, customs support, procurement, workflow automation, project management, web development, and technical problem solving.`
- To: `I'm ClementFranz, a logistics and operations VA in City of San Fernando, LU, Philippines. I coordinate shipments, support customs work, and build workflow automations.`

### About

`about.lead`

- From: `I work inside real logistics operations — then I build the systems that make those operations easier to see, track, and run.`
- To: `I work in logistics day to day. Then I build the systems that make that work easier to see, track, and run.`

`about.story[1]` (the second paragraph)

- From: `The through-line is practical: understand the workflow, reduce the friction, and automate the repetitive parts so people can focus on exceptions instead of chasing status.`
- To: `Same habit every time: learn how the work runs, cut the extra steps, and automate the parts people keep repeating. Then they can spend time on the exceptions instead of chasing status.`

### Stock photo alt text

- `stock.about.alt` → `Warehouse aisles`
- `stock.customs.alt` → `Stacked shipping containers at a port`
- `stock.automation.alt` → `Laptop on a desk`
- `stock.resume.alt` → `Desk with documents and a laptop`

### Experience summaries and highlights

Logistics `imageAlt` → `Warehouse operations floor`

Project management highlight `Gathered requirements and translated client needs into actionable tasks`

- To: `Gathered requirements and turned what the client wanted into tasks the team could work on`

Project management highlight `Coordinated developers and designers, with regular client updates and timeline ownership`

- To: `Coordinated developers and designers, kept clients updated, and owned the timeline`

Project management `imageAlt` → `People working around laptops`

BPO `summary`

- From: `Customer and provider communication for health and dental insurance — handling inquiries and building the communication habits I still use with carriers, CSRs, and clients.`
- To: `I handled customer and provider communication for health and dental insurance. That same follow-through is what I still use with carriers, CSRs, and clients.`

BPO `imageAlt` → `Two people in conversation`

Purchasing `summary`

- From: `Hands-on procurement and import coordination — planning purchasing needs, moving goods by air and sea, and supporting the clearance work those shipments required.`
- To: `I handled procurement and import coordination — planning what we needed to buy, moving goods by air and sea, and supporting the clearance work those shipments needed.`

Purchasing `imageAlt` → `Manufacturing floor`

### Customs

`customs.disclaimer`

- From: `Compliance examples are presented for portfolio purposes and do not constitute legal or regulatory advice.`
- To: `This is operational research I did on the job — not legal or regulatory advice.`

### Automation

`automation.value`

- From:
  - `Improved shipment visibility across teams`
  - `Reduced repetitive manual status checking`
  - `Clearer handoffs between stages`
  - `More reliable information flow for CSRs and operations`
- To:
  - `Teams could see shipment status without asking around`
  - `Less time spent checking the same thing twice`
  - `Handoffs between stages were easier to follow`
  - `CSRs and operations were looking at the same information`

### Case studies

**Shipment Status Automation**

- `tagline` → `Stop chasing the same shipment status.`
- `approach` → `I broke the process into a shared workflow, then automated the visibility layer instead of adding more manual checking.`
- `whatIDid` → `I mapped stages from supplier and order through delivery and post-shipment, then built Apps Script automations so status was easier to read and update.`
- `result` → `People spent less time chasing the same information, and the workflow was easier to follow.`
- `imageAlt` → `Freight truck on the road`

**Customs & Compliance Workflow Support**

- `tagline` → `Research the team can use.`
- `approach` → `I treated compliance support as a repeatable research workflow: find the question, gather the documents, and send operations an answer they can use.`
- `result` → `Inbound information was easier to work from, and clearance questions had a clearer place to go.`
- `imageAlt` → `Shipping containers at a port`

**University Grading & Attendance System**

- `tagline` → `Grading and attendance in one place, with the viewing rules built in.`
- `approach` → `I led development on an academic system that followed the school's rules, not a simple records list.`
- `whatIDid` → `I built grading and attendance workflows for a campus of about 3,000 students, including printable grade cards and rules that controlled when updated information could be viewed.`
- `result` → `Academic records lived in one workflow, with clearer control over when data could be viewed or printed.`
- `imageAlt` → `University campus building`

**Pharmacy Inventory System**

- `tagline` → `Stock data that matches how the work runs.`
- `approach` → `I designed it around the actual inventory workflow instead of a generic stock list.`
- `whatIDid` → `I built an inventory system for a Pampanga-based pharmacy supply client, focused on how stock data moved and stayed organized.`
- `result` → `Inventory data was easier to track and less scattered.`
- `imageAlt` → `Pharmacy shelves`

**Technical Project Management & Web Delivery**

- `tagline` → `From the brief to launch, without losing the thread.`
- `approach` → `I ran the project as both coordinator and technical partner — close enough to the work to translate what the client asked for.`
- `result` → `Delivery stayed closer to what the client asked for, from brief to launch.`
- `imageAlt` → `Design and layout work on a desk`

### Projects

University project `imageAlt` → `Campus building`

School attendance `imageAlt` → `Classroom seating`

Pharmacy project `imageAlt` → `Pharmacy shelves`

Raffle last `details` bullet

- From: `Focus on event timing, reliability, and technical problem solving — not campaign strategy`
- To: `Built around the livestream timing and getting results out after the draw`

Raffle `imageAlt` → `Stage lighting at a live event`

### Creative work

Graphic / Thumbnail `summary`

- From: `Design execution for a consulting firm client in Los Angeles, including thumbnails and T-shirt work.`
- To: `I did graphic and thumbnail work for a consulting firm in Los Angeles, including T-shirt design.`

Graphic `imageAlt` → `Color and layout tools`

Newspaper `imageAlt` → `Stacked newspapers`

Presentation `summary`

- From: `Animated presentations for education and entertainment — built to hold attention instead of reading like a document.`
- To: `I built animated presentations for education and entertainment — made to hold attention, not read like a document.`

Presentation detail `Emphasis on engagement rather than plain slide decks`

- To: `Built to hold attention, not read like a stack of slides`

Presentation `imageAlt` → `Laptop on a desk`

### Interests

Chess `note` → `I like slow games and thinking a few moves ahead.`

Guitar `note` → `Something to do with my hands that isn't a keyboard.`

Cycling `note` → `Getting outside.`

Pets `title` can stay `Animals / pets`  
Pets `note`

- From: `Enjoys life with pets`
- To: `I've always liked having animals around.`

Leave Rubik's Cube note as-is: `Another little puzzle obsession`

### Contact

`contact.title`

- From: `Need someone who understands both the operation and the technology?`
- To: `If you need someone who already understands the operations side — and can build around it — email me.`

---

## 2. Hardcoded component copy

### `src/components/Specialties.tsx`

- Title `What I actually do` → `What I do`
- Description `Operations first, then the tools that keep those operations moving.` → `Operations first. Then the tools that keep that work moving.`

### `src/components/ExperienceTimeline.tsx`

- Title `Logistics first, then the rest of the stack` → `Logistics first. The rest of the work after that.`
- Description `The current operations role is the center of the story. Earlier work is here because it is how I learned procurement, delivery, and client communication.` → `The logistics role is the main one. The earlier jobs are here because that's where I learned procurement, delivery, and talking to clients.`

### `src/components/AutomationSection.tsx`

- Eyebrow `Differentiation` → `How I work`

### `src/components/WorkflowDiagram.tsx`

- `Mock status board` → `Shipment stages`
- `Sample stages — not a live client board.` → `The stages I mapped for this workflow.`

### `src/components/CaseStudies.tsx`

- Description `Swipe through a few pieces of work. Open a card for the challenge, how I approached it, what I did, and what it changed.` → `A few pieces of work. Open a card if you want the challenge, what I did, and how it helped.`
- Heading `Result / value` → `What changed`

### `src/components/ProjectsSection.tsx`

- Eyebrow `Build experience` → `Projects`
- Description `Systems I built around school, inventory, and live events — the same problem-solving I bring to logistics work.` → `Systems I built for a university, a school, inventory, and a live raffle. Same kind of problem-solving I use in logistics.`

### `src/components/CreativeSection.tsx`

- Description `Useful for all-around VA work. Kept secondary so logistics stays the headline.` → `I also do design work — thumbnails, layouts, presentations. Logistics is still the main job.`

### `src/components/SkillsGrid.tsx`

- Description `Grouped the way the work actually clusters — operations, research, automation, web, and communication.` → `Operations, research, automation, web, and communication — grouped the way I use them.`

### `src/components/ResumeCTA.tsx`

- Eyebrow `Hire me faster` → `Resume`
- Description `Download a PDF of my resume, or find me on LinkedIn and OnlineJobs.ph.` → `Download my resume, or find me on LinkedIn and OnlineJobs.ph.`
- Subline `PDF copy of my resume, plus the profiles I keep current.` → `The PDF, plus LinkedIn and OnlineJobs.ph.`

### `src/components/PersonalSection.tsx`

- Title `A little personality, then back to operations` → `Outside the spreadsheet`

### `src/components/Footer.tsx`

- `Supporting photos are stock used for context — not pictures of client work.` → `The photos on this page are stock, not shots from client sites.`

---

## 3. Leave as-is (already passed)

- Hero eyebrow `VA professional based in the Philippines`
- About first story paragraph (purchasing → logistics)
- Logistics role summary
- Project manager role summary
- Rubik's Cube interest note
- Customs intro (operational support, not legal advice)
- Automation intro and approach paragraphs
- Button labels, nav, Close, skip link
- Location capsules (`Manila based university`, `Private school`, `Pampanga based`, `Asian city based`)
- Anonymized employer labels

---

## 4. After applying

Read the live page once. If any new string still sounds like a template, stop and send it back to the content writer. Do not “polish” it into corporate English.
