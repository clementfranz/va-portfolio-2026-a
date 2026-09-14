# Active tasks

Board for this project. Follow [conversation_rulebook.md](conversation_rulebook.md). Dictionary: [language_barrier_transitional_helpers.md](language_barrier_transitional_helpers.md). Public copy: [content_voice_checklist.md](content_voice_checklist.md). Developer copy packet: [content_for_developer.md](content_for_developer.md).

Status values: `pending` | `paused` | `working` | `blocked` | `done` | `approved`

Copy this block for every new main task or subtask:

```
### T-XXX: Title
- **Task title:**
- **Task detailed description:**
- **Task end goal:**
- **Task considerations and exemptions:**
- **Assigned to:**
- **TS delegated:** YYYY-MM-DD HH:mm +08
- **TS expected done:** TBD
- **TS working start:** -
- **TS working done:** -
- **TS done:** -
- **TS approved:** -
- **Current status:** `pending`
```

Subtasks use the parent id plus a letter (`T-019a`). Sidetasks that appear mid-work go on this board immediately. **Assigned to** is required from T-027 onward.

---

## 1. New pending tasks

_No unblocked work. Items below stay blocked until ClementFranz sends a file or an explicit choice._

### T-014: Confirm Project Manager dates
- **Task title:** Confirm Project Manager dates
- **Task detailed description:** Typed answer was August 2023 – October 2024. Later LinkedIn screenshot was used to set March 2023 – October 2023. The live site currently uses the screenshot dates.
- **Task end goal:** Dates on the experience timeline match the resume ClementFranz wants shown.
- **Task considerations and exemptions:** Do not invent a third date range. Wait for an explicit choice. After the choice, Webmaster Anthony applies the dates.
- **Assigned to:** ClementFranz
- **TS delegated:** 2026-09-11 16:01 +08
- **TS expected done:** TBD
- **TS working start:** -
- **TS working done:** -
- **TS done:** -
- **TS approved:** -
- **Current status:** `blocked`

### T-015: Drop resume PDF
- **Task title:** Add resume PDF
- **Task detailed description:** The Download resume button points at `public/assets/resume.pdf`. No PDF is in the repo. Copy on the page is already first-person. Waiting for the file.
- **Task end goal:** Clicking Download resume serves the real PDF.
- **Task considerations and exemptions:** Do not generate a fake resume. Do not invent employment content. After the file arrives, Webmaster Anthony wires it.
- **Assigned to:** ClementFranz
- **TS delegated:** 2026-09-10 05:30 +08
- **TS expected done:** TBD
- **TS working start:** -
- **TS working done:** -
- **TS done:** -
- **TS approved:** -
- **Current status:** `blocked`

### T-016: Optional extra contacts
- **Task title:** Optional phone, WhatsApp, GitHub
- **Task detailed description:** These were offered as optional. No numbers or GitHub URL were given.
- **Task end goal:** Add only the channels ClementFranz actually wants public.
- **Task considerations and exemptions:** Do not invent phone numbers or accounts. After values arrive, Webmaster Anthony adds them.
- **Assigned to:** ClementFranz
- **TS delegated:** 2026-09-10 05:30 +08
- **TS expected done:** TBD
- **TS working start:** -
- **TS working done:** -
- **TS done:** -
- **TS approved:** -
- **Current status:** `blocked`

### T-020a: Upwork profile URL
- **Task title:** Wire the Upwork logo to the real profile
- **Task detailed description:** The black-and-white Upwork logo is on the page. No Upwork profile URL was given, so the mark is visible but not a live link yet.
- **Task end goal:** The Upwork logo opens ClementFranz’s public Upwork profile.
- **Task considerations and exemptions:** Do not invent a profile URL or link to the Upwork homepage as a substitute. After the URL arrives, Webmaster Anthony wires the link.
- **Assigned to:** ClementFranz
- **TS delegated:** 2026-09-11 18:45 +08
- **TS expected done:** TBD
- **TS working start:** -
- **TS working done:** -
- **TS done:** -
- **TS approved:** -
- **Current status:** `blocked`

### T-017: Employer names on the page
- **Task title:** Decide whether any real employer names can appear
- **Task detailed description:** Standing rule is anonymized orgs. Technical projects now use location capsules instead of “Confidential client”.
- **Task end goal:** Either keep names off, or add only names that are explicitly allowed.
- **Task considerations and exemptions:** Do not put a real company name on the page without a yes. After a yes, Content writer drafts the labels and Webmaster Anthony applies them.
- **Assigned to:** ClementFranz
- **TS delegated:** 2026-09-10 05:30 +08
- **TS expected done:** TBD
- **TS working start:** -
- **TS working done:** -
- **TS done:** -
- **TS approved:** -
- **Current status:** `blocked`

---

## 2. Tasks working on parallel

_No items currently in progress._

---

## 3. Done tasks

### T-041: Default Git branch is dev
- **Task title:** Always merge and push to `dev` unless told to use `main`
- **Task detailed description:** ClementFranz said that from now on, work should merge to `dev`. Only merge to `main` when they explicitly say so in that session. Merging to `main` deploys the Hostinger virtual application.
- **Task end goal:** Future sessions default to `dev`. `main` stays untouched unless ClementFranz asks for a production deploy.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not merge or push to `main` as part of this item. Do not force-push. Do not change git config.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-15 05:11 +08
- **TS expected done:** 2026-09-15 05:20 +08
- **TS working start:** 2026-09-15 05:11 +08
- **TS working done:** 2026-09-15 05:14 +08
- **TS done:** 2026-09-15 05:14 +08
- **TS approved:** -
- **Current status:** `done`

### T-040: Push latest site to GitHub
- **Task title:** Upload the latest site to GitHub
- **Task detailed description:** ClementFranz asked to upload the latest site to `https://github.com/clementfranz/va-portfolio-2026-a.git`. The local project is not a git repo yet, so this includes initializing git, committing the current site, and pushing to that remote.
- **Task end goal:** The GitHub repo contains the current local site.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not commit secrets, `.env`, or `node_modules`. Do not force-push unless ClementFranz asks. Do not change git config.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-14 23:42 +08
- **TS expected done:** 2026-09-14 23:55 +08
- **TS working start:** 2026-09-14 23:42 +08
- **TS working done:** 2026-09-14 23:47 +08
- **TS done:** 2026-09-14 23:47 +08
- **TS approved:** -
- **Current status:** `done`

### T-039: Remove What I do card blurbs
- **Task title:** Remove the brief descriptions from What I do cards
- **Task detailed description:** ClementFranz asked to remove the brief descriptions. In context that means the first-person blurbs under each specialty title on the What I do pills (for example “I coordinate logistics so the work stays on track.”). Keep titles, icons, photos, and the section lede. Do not restyle other sections.
- **Task end goal:** Each specialty card shows icon + title + photo only. No blurb line on the card.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not rewrite specialty titles. Keep the unused blurb strings in `src/data/profile.ts` so they can be restored. Do not remove the section lede (“Operations first. Then the tools that keep that work moving.”).
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 20:29 +08
- **TS expected done:** 2026-09-13 20:40 +08
- **TS working start:** 2026-09-13 20:29 +08
- **TS working done:** 2026-09-13 20:33 +08
- **TS done:** 2026-09-13 20:33 +08
- **TS approved:** -
- **Current status:** `done`

### T-038a: Limit What I do card photos to one third
- **Task title:** Keep each specialty card photo to one third of the card width
- **Task detailed description:** Photos on the What I do pills currently wash across most of the card. ClementFranz asked that any image cover only one third of the card width. Reference: `image-task/T-038a-card-photo-third.png`.
- **Task end goal:** Each specialty card shows copy on the left two thirds and the stock photo only on the right third.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not rewrite specialty titles or blurbs. Do not restyle other sections.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 19:43 +08
- **TS expected done:** 2026-09-13 19:55 +08
- **TS working start:** 2026-09-13 19:43 +08
- **TS working done:** 2026-09-13 19:50 +08
- **TS done:** 2026-09-13 19:50 +08
- **TS approved:** -
- **Current status:** `done`

### T-038: Restyle What I do to the reference
- **Task title:** Make the What I do section look like the reference
- **Task detailed description:** ClementFranz sent a target layout for the second section (Core specialties / What I do). Reference: `image-task/T-038-what-i-do-reference.jpg`. Match the maroon band, heading, pill cards with icon + short line + photo wash from the right, and the staggered 3/2 row rhythm. Find stock photos from an open-source library and save them with clear names. Keep native dialog Close out of this item.
- **Task end goal:** The live What I do section reads like the reference screenshot, still feels like the rest of this portfolio.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not paste slogan triads from the mock (organize/automate/create, different tasks / a clearer tomorrow, let's work together as a slogan couplet). Keep existing specialty titles. Photos are stock; alt text describes the picture. Name files in the stock folder clearly after what they show.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 19:09 +08
- **TS expected done:** 2026-09-13 19:50 +08
- **TS working start:** 2026-09-13 19:26 +08
- **TS working done:** 2026-09-13 19:38 +08
- **TS done:** 2026-09-13 19:38 +08
- **TS approved:** -
- **Current status:** `done`

### T-037: Overlay case-study step copy on the photo
- **Task title:** Put the step card text on top of the carousel image
- **Task detailed description:** ClementFranz marked the Challenge card under the photo and asked to put that card content on top of the image. Reference: `image-task/T-037-steps-text-on-image.png`. Keep the existing heading, icon, and first-person copy. Native dialog Close must still fire onClose/onCancel.
- **Task end goal:** Each case-study step shows its heading and copy overlaid on the stock photo, not in a separate block below it.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not rewrite Content writer strings. Do not restyle the outer case studies band.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 05:36 +08
- **TS expected done:** 2026-09-13 05:50 +08
- **TS working start:** 2026-09-13 05:36 +08
- **TS working done:** 2026-09-13 17:21 +08
- **TS done:** 2026-09-13 17:21 +08
- **TS approved:** -
- **Current status:** `done`

### T-036: Case study popup steps as an image carousel
- **Task title:** Turn the four case-study modal steps into a carousel with photos
- **Task detailed description:** In the case studies popup, Challenge / Approach / What I did / What changed are currently a stacked list. Make those four steps a carousel, each slide with a photo from an open-source image library (Unsplash / similar), plus the existing heading and copy. Keep native dialog Close firing onClose/onCancel.
- **Task end goal:** Opening a case study lets you page through the four steps with photos, without changing the existing first-person copy.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not rewrite Content writer strings. Photos are stock; alt text describes the picture. Do not restyle the outer case studies band in this item.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 04:44 +08
- **TS expected done:** 2026-09-13 05:15 +08
- **TS working start:** 2026-09-13 04:45 +08
- **TS working done:** 2026-09-13 05:10 +08
- **TS done:** 2026-09-13 05:10 +08
- **TS approved:** -
- **Current status:** `done`

### T-035: Restyle Skills & tools to the reference
- **Task title:** Make the Skills & tools section look like the reference screenshot
- **Task detailed description:** ClementFranz sent a target layout for Skills & tools. Reference file: `image-task/T-035-skills-tools-reference.jpg`. Match that structure: maroon heading with a short bar, intro line, right-side stacked labels, five cards with a maroon corner badge, circular icon, large index, title, and check-marked skill lists in a 3+2 grid. Stay in Outfit + polo maroon. Keep the existing skill group titles and skill names.
- **Task end goal:** The live Skills & tools section reads like the reference screenshot, still feels like the rest of this portfolio.
- **Task considerations and exemptions:** Do not invent metrics, employer names, or new skills. Do not paste slogan triads from the mock (ideas/processes/progress, keeping things moving, let's work together as a slogan couplet). Native dialog Close is not involved. CTA may use existing contact language and link to #contact.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 03:46 +08
- **TS expected done:** 2026-09-13 04:10 +08
- **TS working start:** 2026-09-13 03:47 +08
- **TS working done:** 2026-09-13 04:02 +08
- **TS done:** 2026-09-13 04:02 +08
- **TS approved:** -
- **Current status:** `done`

### T-034: Align creative card actions and raise icon badges
- **Task title:** Align View details rows; keep circular icons in front
- **Task detailed description:** On Design & creative work, the View details pill and arrow sit at different heights because the card copy wraps unevenly. The maroon circular icons at the photo/body seam are also falling behind the white card body. Reference: `image-task/T-034-creative-buttons-and-icons.png`.
- **Task end goal:** All three cards share one baseline for View details, and the circular icons sit fully in front of the photo and the card body.
- **Task considerations and exemptions:** Do not change public copy. Keep the existing modal and Close behavior. Do not restyle case studies in this item.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 03:40 +08
- **TS expected done:** 2026-09-13 03:55 +08
- **TS working start:** 2026-09-13 03:41 +08
- **TS working done:** 2026-09-13 03:45 +08
- **TS done:** 2026-09-13 03:45 +08
- **TS approved:** -
- **Current status:** `done`

### T-033: Faster case studies carousel
- **Task title:** Improve performance and speed of the case studies carousel
- **Task detailed description:** Paging through case studies feels sluggish. Speed up the slide animation, cut extra re-renders during scroll, and lighten image/paint work so next/prev and the dots feel immediate.
- **Task end goal:** Advancing a case study card feels snappy on desktop and phone, without changing the one-card-plus-peek layout.
- **Task considerations and exemptions:** Keep the peek carousel, dots, modal, and Close behavior. Do not restyle the Design & creative work section in this item (T-032).
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 03:28 +08
- **TS expected done:** 2026-09-13 03:50 +08
- **TS working start:** 2026-09-13 03:29 +08
- **TS working done:** 2026-09-13 03:40 +08
- **TS done:** 2026-09-13 03:40 +08
- **TS approved:** -
- **Current status:** `done`

### T-032: Restyle Design & creative work to the reference
- **Task title:** Make the Design & creative work section look like the reference screenshot
- **Task detailed description:** ClementFranz sent a target layout for Design & creative work. Reference file: `image-task/T-032-design-creative-work-reference.jpg`. Match that structure: maroon heading with a short bar, intro line, right-side stacked label, three photo cards with 01/02/03, maroon overlay, circular icon badge, title, body copy, View details pill plus circular arrow. Stay in Outfit + polo maroon. Keep existing first-person copy unless a layout tweak requires a short label.
- **Task end goal:** The live Design & creative work section reads like the reference screenshot, still feels like the rest of this portfolio.
- **Task considerations and exemptions:** Do not invent metrics, employer names, or new case-study copy. Do not rewrite Content writer strings into slogan English. Other sections (case studies carousel, T-031) stay on their own tasks. Native dialog Close must still fire onClose/onCancel if View details opens a popup. Task Collector does not execute this.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 03:20 +08
- **TS expected done:** 2026-09-13 03:50 +08
- **TS working start:** 2026-09-13 03:29 +08
- **TS working done:** 2026-09-13 03:40 +08
- **TS done:** 2026-09-13 03:40 +08
- **TS approved:** -
- **Current status:** `done`

### T-031: One-card case study carousel and pagination dots
- **Task title:** Show one case study card plus a cropped peek of the next; fix pagination bubbles
- **Task detailed description:** Desktop currently shows three full cards. Change the carousel so only one card is fully in view, with the next card cropped at the edge. Fix the bottom pagination bubbles so the active slide is obvious and they stay in sync with prev/next, scroll, and tap.
- **Task end goal:** Paging through case studies always shows one full card and a slice of the next, with dots that match the current card.
- **Task considerations and exemptions:** Keep existing copy, modal, and Close behavior. Do not invent metrics or employer names. Do not go back to a three-up grid.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 03:14 +08
- **TS expected done:** 2026-09-13 03:35 +08
- **TS working start:** 2026-09-13 03:15 +08
- **TS working done:** 2026-09-13 03:28 +08
- **TS done:** 2026-09-13 03:28 +08
- **TS approved:** -
- **Current status:** `done`

### T-030: Restyle case studies to match the reference layout
- **Task title:** Case studies carousel closer to the reference screenshot
- **Task detailed description:** User sent a maroon case-studies panel: split header, three photo cards with index numbers, VIEW DETAILS plus a circular arrow, side chevrons, footer tagline / dots / view-all. Restyle the live carousel to that layout while staying in the site’s Outfit + polo maroon language. Do not copy slogan triads. Keep the existing modal (challenge / approach / what I did / what changed). Iterate against a critic score until 95/100.
- **Task end goal:** Desktop case studies read like the reference structure, still feel like the rest of this portfolio, and pass a 95 critic score.
- **Task considerations and exemptions:** Do not invent metrics or employer names. Do not paste “measurable impact / lasting partnerships” voice. Native dialog Close must still fire onClose/onCancel. Mobile keeps a usable carousel.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 02:46 +08
- **TS expected done:** 2026-09-13 03:30 +08
- **TS working start:** 2026-09-13 02:46 +08
- **TS working done:** 2026-09-13 03:22 +08
- **TS done:** 2026-09-13 03:22 +08
- **TS approved:** -
- **Current status:** `done`

### T-029: Pointer cursor on profile logos
- **Task title:** Use a pointer cursor on every profile-link mark
- **Task detailed description:** Hovering the LinkedIn, OnlineJobs.ph, and Upwork marks currently shows the default triangle cursor. Change all of them to the pointer (hand) cursor. Upwork stays unlinked until T-020a.
- **Task end goal:** Hovering any of the three marks shows a pointer, in the hero, resume, contact, and footer rows.
- **Task considerations and exemptions:** Do not invent an Upwork profile URL. Do not change logo artwork.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 02:18 +08
- **TS expected done:** 2026-09-13 02:25 +08
- **TS working start:** 2026-09-13 02:18 +08
- **TS working done:** 2026-09-13 02:20 +08
- **TS done:** 2026-09-13 02:20 +08
- **TS approved:** -
- **Current status:** `done`

### T-028: Update the Upwork logo
- **Task title:** Find the current Upwork logo and replace the one on the site
- **Task detailed description:** The Upwork mark on the page is out of date. Find the official current Upwork logo and swap it in everywhere the old mark is used (profile-link rows and any other Upwork icon). Keep it in the same family as LinkedIn and OnlineJobs.ph: official brand mark, black-and-white, matching square or circle size.
- **Task end goal:** Visitors see the current official Upwork logo, still black-and-white and aligned with the other two platform marks.
- **Task considerations and exemptions:** Use the official mark, not a random icon pack. Do not invent an Upwork profile URL (T-020a stays blocked). Do not change the LinkedIn or OnlineJobs.ph logos unless matching the new Upwork mark requires a size/crop tweak. Task Collector does not execute this.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-13 00:44 +08
- **TS expected done:** TBD
- **TS working start:** 2026-09-13 00:45 +08
- **TS working done:** 2026-09-13 00:54 +08
- **TS done:** 2026-09-13 00:54 +08
- **TS approved:** -
- **Current status:** `done`

### T-027: Task Collector — log jobs and assign agents
- **Task title:** Task Collector role on the board
- **Task detailed description:** This chat is the Task Collector. ClementFranz gives jobs here. The collector puts each job on `active_tasks.md` with an **Assigned to** name (Webmaster Anthony / front-end developer, Lead developer, Content writer, QA, or ClementFranz). The collector does not execute the work. Other named agents pick items up later.
- **Task end goal:** New jobs land on the board with an assignee, and this chat does not build the site.
- **Task considerations and exemptions:** Setting up the collector process (rulebook, roster, assignment field, Cursor rule) is collector work. Site code, public copy, and QA checks are not.
- **Assigned to:** Task Collector
- **TS delegated:** 2026-09-12 14:32 +08
- **TS expected done:** 2026-09-12 14:45 +08
- **TS working start:** 2026-09-12 14:32 +08
- **TS working done:** 2026-09-12 14:36 +08
- **TS done:** 2026-09-12 14:36 +08
- **TS approved:** -
- **Current status:** `done`

### T-026: Webmaster Anthony — finish remaining unblocked work
- **Task title:** Webmaster Anthony checks the board and finishes what can be finished
- **Task detailed description:** This chat is webmaster Anthony (webmaster A). Check every active task. Finish unblocked work. Leave blocked items blocked — do not invent a resume PDF, phone, GitHub, Upwork URL, employer names, or a third PM date range.
- **Task end goal:** All unblocked board items are done. Blocked items stay listed with what they need from ClementFranz.
- **Task considerations and exemptions:** T-014, T-015, T-016, T-017, and T-020a stay blocked until files or explicit choices arrive.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-12 13:57 +08
- **TS expected done:** 2026-09-12 14:30 +08
- **TS working start:** 2026-09-12 13:57 +08
- **TS working done:** 2026-09-12 14:16 +08
- **TS done:** 2026-09-12 14:16 +08
- **TS approved:** -
- **Current status:** `done`

### T-025a: Apply content-writer copy packet
- **Task title:** Apply the content-writer replacements
- **Task detailed description:** Content writer audited all public text against `content_voice_checklist.md`. Ready-to-paste replacements are in `content_for_developer.md`. Developer applies those strings in `src/data/profile.ts` and the listed components. Do not rewrite the copy. Do not invent metrics, dates, or employer names.
- **Task end goal:** Live site copy matches `content_for_developer.md`. First person, human, ClementFranz. No template or “hiding AI” language left on the page.
- **Task considerations and exemptions:** Keep the hero eyebrow, headline, dates, anonymized org labels, location capsules, nav, and button labels unless the packet changes them. Customs stays operational support, not legal advice. After applying, read the page once; send leftover template lines back to the content writer instead of polishing them into corporate English.
- **Assigned to:** Webmaster Anthony
- **TS delegated:** 2026-09-12 13:05 +08
- **TS expected done:** TBD
- **TS working start:** 2026-09-12 13:57 +08
- **TS working done:** 2026-09-12 14:16 +08
- **TS done:** 2026-09-12 14:16 +08
- **TS approved:** -
- **Current status:** `done`

### T-025: Content writer — voice checklist and full copy audit
- **Task title:** Content writer role, checklist, and site-copy audit
- **Task detailed description:** This chat is the content writer. Audit every public text string for first-person ClementFranz voice. It must sound like a genuine human making a portfolio — not AI-generated, and not like the page is hiding that an AI wrote it. Create a standing checklist used on every future string. Put needed rewrites in a markdown packet the developer can apply.
- **Task end goal:** A reusable checklist exists, the site copy has been reviewed against it, and the developer has a file of exact replacements plus a board task (T-025a).
- **Task considerations and exemptions:** Do not implement the site edits in this task. Do not invent metrics, dates, employer names, or client names. Keep the hero eyebrow from T-008. Customs can stay operational support, not legal advice.
- **TS delegated:** 2026-09-12 12:58 +08
- **TS expected done:** 2026-09-12 13:20 +08
- **TS working start:** 2026-09-12 12:58 +08
- **TS working done:** 2026-09-12 13:12 +08
- **TS done:** 2026-09-12 13:12 +08
- **TS approved:** -
- **Current status:** `done`

### T-024: Lock background scroll while a popup is open
- **Task title:** Lock background scroll while a popup is open
- **Task detailed description:** Opening a popup still lets wheel/trackpad/touch scrolling move the main page. Scrolling inside the popup should stay inside the popup; the page behind it should stay put until Close.
- **Task end goal:** With any modal open, the background page does not scroll. The popup body still scrolls when its content is taller than the panel.
- **Task considerations and exemptions:** Native `<dialog>` Close must still fire `onClose` / `onCancel`. Apply to all popups that use `Modal` (case studies, projects, creative). Restore scroll position and scrollbar space on close. Mobile header menu already locks body overflow — do not break that.
- **TS delegated:** 2026-09-12 12:30 +08
- **TS expected done:** 2026-09-12 12:45 +08
- **TS working start:** 2026-09-12 12:31 +08
- **TS working done:** 2026-09-12 12:37 +08
- **TS done:** 2026-09-12 12:37 +08
- **TS approved:** -
- **Current status:** `done`


### T-023: Match case study popups to the reference screenshot
- **Task title:** Each case study popup gets its own logo and cover graphics
- **Task detailed description:** User sent the Shipment Status Automation popup as the target. Header: rounded-square logo, title, category, tagline, Close pill, faded cover art on the right. Body: Challenge / Approach / What I did / Result with circular icons. Every study needs its own logo and cover, not one shared graphic.
- **Task end goal:** Opening any case study looks like the reference layout, with unique art per title.
- **Task considerations and exemptions:** Do not invent metrics. Other modals stay as they are. Dialog Close must still fire onClose/onCancel.
- **TS delegated:** 2026-09-12 12:18 +08
- **TS expected done:** 2026-09-12 13:00 +08
- **TS working start:** 2026-09-12 12:18 +08
- **TS working done:** 2026-09-12 12:48 +08
- **TS done:** 2026-09-12 12:48 +08
- **TS approved:** -
- **Current status:** `done`

### T-022: Case study popup — unique logo and cover per title
- **Task title:** Unique logo and cover graphics on each case study popup
- **Task detailed description:** Restyle the case study modal header to match the Shipment Status Automation reference: a rounded-square logo beside the title, plus faded cover graphics on the right. Every popup gets its own logo and its own cover. Keep Challenge / Approach / What I did / Result as the body.
- **Task end goal:** Opening any case study shows a title row with that study’s logo and cover graphics, in the same layout as the reference.
- **Task considerations and exemptions:** Do not invent result metrics. Cover art can be illustrative, not client photos. Native dialog Close must still fire onClose/onCancel. Other modals (projects, creative) stay as they are.
- **TS delegated:** 2026-09-11 19:26 +08
- **TS expected done:** 2026-09-11 21:45 +08
- **TS working start:** 2026-09-11 21:22 +08
- **TS working done:** 2026-09-11 21:55 +08
- **TS done:** 2026-09-11 21:55 +08
- **TS approved:** -
- **Current status:** `done`

### T-021: Square platform logos
- **Task title:** Use matching square or circle logos for LinkedIn, OnlineJobs.ph, and Upwork
- **Task detailed description:** The current row mixes the LinkedIn square mark with wide wordmarks. Switch all three to the same shape family (square or circle icons) so they line up and read as one set.
- **Task end goal:** Three black-and-white icon marks of the same size and shape on every profile-link row.
- **Task considerations and exemptions:** Keep official brand marks. LinkedIn and OnlineJobs.ph stay live links. Upwork stays visible without a fake profile URL (T-020a).
- **TS delegated:** 2026-09-11 19:17 +08
- **TS expected done:** 2026-09-11 21:40 +08
- **TS working start:** 2026-09-11 19:17 +08
- **TS working done:** 2026-09-11 21:55 +08
- **TS done:** 2026-09-11 21:55 +08
- **TS approved:** -
- **Current status:** `done`

#### T-021a: Duplicate ProfileLinks export
- **Task title:** Fix duplicate `ProfileLinks` export
- **Task detailed description:** Build error: the name `ProfileLinks` is defined multiple times in `src/components/ProfileLinks.tsx`. Remove the second function so the site compiles.
- **Task end goal:** `npm run dev` / Turbopack compiles without that error.
- **Task considerations and exemptions:** —
- **TS delegated:** 2026-09-11 20:04 +08
- **TS expected done:** 2026-09-11 20:10 +08
- **TS working start:** 2026-09-11 20:04 +08
- **TS working done:** 2026-09-11 20:06 +08
- **TS done:** 2026-09-11 20:06 +08
- **TS approved:** -
- **Current status:** `done`

### T-020: Black-and-white platform logos for contact links
- **Task title:** Real LinkedIn, OnlineJobs.ph, and Upwork logos in black and white
- **Task detailed description:** Find the real logos for LinkedIn, OnlineJobs.ph, and Upwork. Use them on the site’s platform links. Convert or redraw them as black-and-white marks so they match the page, not the colorful brand fills.
- **Task end goal:** Contact / profile links show recognizable B&W logos for those three platforms.
- **Task considerations and exemptions:** Keep existing LinkedIn and OnlineJobs.ph URLs. Do not invent an Upwork profile URL if none was given — add a sidetask if the profile link is missing. Use official marks, monochrome, not a random icon pack that does not look like the brand.
- **TS delegated:** 2026-09-11 18:45 +08
- **TS expected done:** 2026-09-11 19:15 +08
- **TS working start:** 2026-09-11 18:46 +08
- **TS working done:** 2026-09-11 19:12 +08
- **TS done:** 2026-09-11 19:12 +08
- **TS approved:** -
- **Current status:** `done`

### T-019: Install conversation OS, sync board, then work remaining items
- **Task title:** Rulebook + board + dictionary, then resume open work
- **Task detailed description:** User asked for `conversation_rulebook.md` linked to `active_tasks.md` and `language_barrier_transitional_helpers.md`. Every chat must log tasks, pause on interrupt, add sidetasks immediately, and use the dictionary with context. Then check this conversation, update the board, and work remaining items.
- **Task end goal:** The three files plus the always-on Cursor rule match the spec, the board matches the chat, and only blocked items remain.
- **Task considerations and exemptions:** Do not invent resume, phone, GitHub, or employer names. Do not delete done tasks until approved.
- **TS delegated:** 2026-09-11 18:37 +08
- **TS expected done:** 2026-09-11 18:50 +08
- **TS working start:** 2026-09-11 18:37 +08
- **TS working done:** 2026-09-11 18:45 +08
- **TS done:** 2026-09-11 18:45 +08
- **TS approved:** -
- **Current status:** `done`

#### T-019a: Align the three markdown files to the requested spec
- **Task title:** Align rulebook, board, and dictionary fields
- **Task detailed description:** Confirm four board sections, required task fields, pause-on-interrupt, sidetask logging, and context-first dictionary examples (schools/tools, prop/cropped).
- **Task end goal:** The files match what ClementFranz asked for in this message.
- **Task considerations and exemptions:** Keep existing done history. Do not wipe T-001–T-018.
- **TS delegated:** 2026-09-11 18:37 +08
- **TS expected done:** 2026-09-11 18:50 +08
- **TS working start:** 2026-09-11 18:37 +08
- **TS working done:** 2026-09-11 18:45 +08
- **TS done:** 2026-09-11 18:45 +08
- **TS approved:** -
- **Current status:** `done`

#### T-019b: Sync the board from this conversation
- **Task title:** Check the chat and update tasks
- **Task detailed description:** Walk the conversation: identity, dates, nav, hero, experience tablets, case studies, location capsules, copy sweep, conversation OS. Confirm done vs blocked.
- **Task end goal:** Nothing from this chat is missing from the board.
- **Task considerations and exemptions:** PM dates stay on T-014 until ClementFranz chooses.
- **TS delegated:** 2026-09-11 18:37 +08
- **TS expected done:** 2026-09-11 18:50 +08
- **TS working start:** 2026-09-11 18:37 +08
- **TS working done:** 2026-09-11 18:45 +08
- **TS done:** 2026-09-11 18:45 +08
- **TS approved:** -
- **Current status:** `done`

#### T-019c: Work remaining unblocked site tasks
- **Task title:** Continue remaining portfolio work
- **Task detailed description:** After the board was synced, check T-014–T-017 and any other open items. Start anything that is not blocked.
- **Task end goal:** All unblocked work is finished or moved to working/paused with honest timestamps.
- **Task considerations and exemptions:** Resume PDF, extra contacts, employer names, and a third PM date range cannot be invented.
- **TS delegated:** 2026-09-11 18:37 +08
- **TS expected done:** 2026-09-11 18:50 +08
- **TS working start:** 2026-09-11 18:37 +08
- **TS working done:** 2026-09-11 18:45 +08
- **TS done:** 2026-09-11 18:45 +08
- **TS approved:** -
- **Current status:** `done`

### T-018: Conversation operating system
- **Task title:** Conversation rulebook + task board + language dictionary
- **Task detailed description:** Create `conversation_rulebook.md`, `active_tasks.md`, and `language_barrier_transitional_helpers.md`. Wire them so every chat checks the list, logs new work, pauses on interrupt, and uses the dictionary for dictation. Also add a Cursor always-on rule so future chats load this process.
- **Task end goal:** New tasks cannot be started without appearing on the board, and misheard words are checked against context.
- **Task considerations and exemptions:** Keep public site copy first-person. Do not delete done tasks until they are approved.
- **TS delegated:** 2026-09-11 18:15 +08
- **TS expected done:** 2026-09-11 18:40 +08
- **TS working start:** 2026-09-11 18:16 +08
- **TS working done:** 2026-09-11 18:22 +08
- **TS done:** 2026-09-11 18:22 +08
- **TS approved:** -
- **Current status:** `done`

#### T-018a: Seed dictionary from this chat
- **Task title:** Seed language-barrier dictionary
- **Task detailed description:** Add confirmed mishearings from this conversation (ClementFranz, VA Services, PIN, Asian city based, translucent, etc.).
- **Task end goal:** Dictionary has the mappings already proven in this chat.
- **Task considerations and exemptions:** Literal meaning still wins when context is a school or similar.
- **TS delegated:** 2026-09-11 18:15 +08
- **TS expected done:** 2026-09-11 18:40 +08
- **TS working start:** 2026-09-11 18:16 +08
- **TS working done:** 2026-09-11 18:22 +08
- **TS done:** 2026-09-11 18:22 +08
- **TS approved:** -
- **Current status:** `done`

#### T-018b: Cursor always-on rule
- **Task title:** Always-apply Cursor rule for the rulebook
- **Task detailed description:** Add `.cursor/rules/conversation-rulebook.mdc` with `alwaysApply: true` pointing at the three markdown files.
- **Task end goal:** Future chats load the process without being asked.
- **Task considerations and exemptions:** Keep the rule short. Details live in the markdown files.
- **TS delegated:** 2026-09-11 18:15 +08
- **TS expected done:** 2026-09-11 18:40 +08
- **TS working start:** 2026-09-11 18:16 +08
- **TS working done:** 2026-09-11 18:22 +08
- **TS done:** 2026-09-11 18:22 +08
- **TS approved:** -
- **Current status:** `done`

### T-001: Logistics VA portfolio site
- **Task title:** Build the portfolio site
- **Task detailed description:** Production-ready static Next.js portfolio for ClementFranz, logistics/operations + automation positioning, anonymized employers, content in `src/data/profile.ts`.
- **Task end goal:** Recruiter-ready single-page site at localhost.
- **Task considerations and exemptions:** No invented metrics. Outfit font. Maroon from the polo.
- **TS delegated:** 2026-09-09 19:08 +08
- **TS expected done:** -
- **TS working start:** 2026-09-09 19:21 +08
- **TS working done:** 2026-09-09 20:50 +08
- **TS done:** 2026-09-09 20:50 +08
- **TS approved:** -
- **Current status:** `done`

### T-002: Identity and contact details
- **Task title:** Fill name, email, links, location
- **Task detailed description:** ClementFranz, cfdel.work@gmail.com, LinkedIn, OnlineJobs.ph, City of San Fernando, LU, Philippines.
- **Task end goal:** Those values appear in header, hero, footer, and SEO.
- **Task considerations and exemptions:** Company names still anonymized.
- **TS delegated:** 2026-09-10 05:30 +08
- **TS expected done:** -
- **TS working start:** 2026-09-10 05:30 +08
- **TS working done:** 2026-09-10 05:51 +08
- **TS done:** 2026-09-10 05:51 +08
- **TS approved:** -
- **Current status:** `done`

### T-003: Experience dates and newest-first order
- **Task title:** Experience dates + chronological order
- **Task detailed description:** Logistics Jul 2025–Jul 2026; PM Mar 2023–Oct 2023 (from LinkedIn screenshot); CS Dec 2021–Sep 2022; Purchasing May 2018–Jun 2020. Reordered newest-first on 2026-09-11.
- **Task end goal:** Timeline reads newest to oldest.
- **Task considerations and exemptions:** See T-014 if PM dates should revert to Aug 2023–Oct 2024.
- **TS delegated:** 2026-09-10 05:30 +08
- **TS expected done:** -
- **TS working start:** 2026-09-10 05:30 +08
- **TS working done:** 2026-09-11 14:55 +08
- **TS done:** 2026-09-11 14:55 +08
- **TS approved:** -
- **Current status:** `done`

### T-004: Nav — one Contact, mobile hamburger, brand
- **Task title:** Navigation and brand mark
- **Task detailed description:** Remove duplicate Contact. Desktop: Experience, Automation, Case Studies, Resume + one Contact. Mobile hamburger for the rest. Name ClementFranz as the mark; later changed subtitle to VA Services (see T-011).
- **Task end goal:** One Contact path on desktop; full section list in mobile menu.
- **Task considerations and exemptions:** `.btn { display: inline-flex }` needed `!important` hide on mobile Contact.
- **TS delegated:** 2026-09-10 06:24 +08
- **TS expected done:** -
- **TS working start:** 2026-09-10 06:24 +08
- **TS working done:** 2026-09-11 15:28 +08
- **TS done:** 2026-09-11 15:28 +08
- **TS approved:** -
- **Current status:** `done`

### T-005: Hero portrait, office background, blend, layout
- **Task title:** Hero subject + background
- **Task detailed description:** PNG portrait with alpha in front. Office photo blends into paper at ~50% on desktop. Subject ~2/5 width, copy on the left, not covering the subject. Mobile: background fades bottom-to-top; portrait does not fade; head sits just under last hero copy. No mix-blend knockout of black.
- **Task end goal:** Hero reads as one section: faded office, person in front, copy readable on the left / above.
- **Task considerations and exemptions:** Do not chroma-key the portrait. Find files by disk path, not localhost.
- **TS delegated:** 2026-09-10 06:38 +08
- **TS expected done:** -
- **TS working start:** 2026-09-10 06:38 +08
- **TS working done:** 2026-09-11 15:28 +08
- **TS done:** 2026-09-11 15:28 +08
- **TS approved:** -
- **Current status:** `done`

### T-006: Images not selectable or draggable
- **Task title:** Lock images against select/drag
- **Task detailed description:** `user-select: none`, `-webkit-user-drag: none`, `pointer-events: none` on imgs; `draggable={false}` on Hero and CoverImage.
- **Task end goal:** Visitors cannot drag or highlight photos.
- **Task considerations and exemptions:** Buttons and links still clickable.
- **TS delegated:** 2026-09-10 07:31 +08
- **TS expected done:** -
- **TS working start:** 2026-09-10 07:31 +08
- **TS working done:** 2026-09-10 07:31 +08
- **TS done:** 2026-09-10 07:31 +08
- **TS approved:** -
- **Current status:** `done`

### T-007: Experience zigzag timeline + floating tablets
- **Task title:** Experience timeline restyle
- **Task detailed description:** Numbered zigzag/snake. Translucent cards. Hover leans away from cursor. Mobile uses a mid-screen virtual pointer while scrolling.
- **Task end goal:** Timeline matches the numbered snake reference, with glass cards that still animate on phones.
- **Task considerations and exemptions:** Reduced motion turns the effect off. Maroon line, not magenta.
- **TS delegated:** 2026-09-10 09:25 +08
- **TS expected done:** -
- **TS working start:** 2026-09-10 09:25 +08
- **TS working done:** 2026-09-11 15:50 +08
- **TS done:** 2026-09-11 15:50 +08
- **TS approved:** -
- **Current status:** `done`

### T-008: Hero eyebrow line
- **Task title:** VA professional based in the Philippines
- **Task detailed description:** Replace the old location · Logistics VA eyebrow with `VA professional based in the Philippines`. Logistics stays in the headline under the name.
- **Task end goal:** Top hero line is the Philippines VA line.
- **Task considerations and exemptions:** Full city still lives in profile for footer/contact.
- **TS delegated:** 2026-09-11 15:49 +08
- **TS expected done:** -
- **TS working start:** 2026-09-11 15:49 +08
- **TS working done:** 2026-09-11 15:49 +08
- **TS done:** 2026-09-11 15:49 +08
- **TS approved:** -
- **Current status:** `done`

### T-009: Case studies carousel
- **Task title:** Case studies as carousel cards
- **Task detailed description:** Image cards, gradient overlay, white summary. Click opens challenge, approach, what I did, result. Same on mobile.
- **Task end goal:** Carousel + details modal on desktop and phone.
- **Task considerations and exemptions:** Do not invent result metrics.
- **TS delegated:** 2026-09-11 15:53 +08
- **TS expected done:** -
- **TS working start:** 2026-09-11 15:53 +08
- **TS working done:** 2026-09-11 15:58 +08
- **TS done:** 2026-09-11 15:58 +08
- **TS approved:** -
- **Current status:** `done`

### T-010: Nav brand VA Services
- **Task title:** Nav brand is ClementFranz + VA Services
- **Task detailed description:** Name is two-thirds of brand height. Bottom third is VA Services. Logistics / operations / automation stay on the hero, not the nav.
- **Task end goal:** Nav reads as a VA services mark.
- **Task considerations and exemptions:** —
- **TS delegated:** 2026-09-11 15:28 +08
- **TS expected done:** -
- **TS working start:** 2026-09-11 15:28 +08
- **TS working done:** 2026-09-11 15:28 +08
- **TS done:** 2026-09-11 15:28 +08
- **TS approved:** -
- **Current status:** `done`

### T-011: Technical project location capsules
- **Task title:** Replace Confidential client with location capsules
- **Task detailed description:** Map pin + all-caps labels: Manila based university, Private school, Pampanga based, Asian city based. First-person project copy. Remove “client names stay off the page”.
- **Task end goal:** Vague client labels with a pin, no “confidential client” badge.
- **Task considerations and exemptions:** Confirm T-014 style issues separately. Asian city based came from dictation “as on city based”.
- **TS delegated:** 2026-09-11 15:58 +08
- **TS expected done:** -
- **TS working start:** 2026-09-11 16:01 +08
- **TS working done:** 2026-09-11 16:13 +08
- **TS done:** 2026-09-11 16:13 +08
- **TS approved:** -
- **Current status:** `done`

### T-012: First-person site copy sweep
- **Task title:** Write the site as ClementFranz
- **Task detailed description:** Footer, resume CTA, case studies intro, automation board, personal section, experience org label. No file-path helper copy on the live page.
- **Task end goal:** Public copy does not sound like an AI talking to itself.
- **Task considerations and exemptions:** Customs legal disclaimer can stay.
- **TS delegated:** 2026-09-11 15:58 +08
- **TS expected done:** -
- **TS working start:** 2026-09-11 16:01 +08
- **TS working done:** 2026-09-11 16:13 +08
- **TS done:** 2026-09-11 16:13 +08
- **TS approved:** -
- **Current status:** `done`

### T-013: Restart dev server
- **Task title:** Refresh the terminal / dev server
- **Task detailed description:** Start a clean `npm run dev` so the site can be previewed.
- **Task end goal:** http://localhost:3000 is serving.
- **Task considerations and exemptions:** —
- **TS delegated:** 2026-09-11 18:13 +08
- **TS expected done:** -
- **TS working start:** 2026-09-11 18:13 +08
- **TS working done:** 2026-09-11 18:14 +08
- **TS done:** 2026-09-11 18:14 +08
- **TS approved:** -
- **Current status:** `done`

---

## 4. Approved tasks - for deletion

_None yet. Items move here only after ClementFranz approves a done task._
