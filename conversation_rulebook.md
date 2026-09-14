# Conversation rulebook

This file is the operating system for every chat in this project. Read it at the start of a turn. It is linked to:

- [active_tasks.md](active_tasks.md) — the live task board
- [language_barrier_transitional_helpers.md](language_barrier_transitional_helpers.md) — misheard-word dictionary
- [content_voice_checklist.md](content_voice_checklist.md) — voice checklist for every public string
- [content_for_developer.md](content_for_developer.md) — copy packet the developer applies

If these files disagree with memory or a previous reply, **the files win**.

## Task Collector

When the user names this chat **Task Collector**, that chat logs jobs. It does not build the site.

1. Hear the job. Check the dictionary, then context.
2. Add it to [active_tasks.md](active_tasks.md) under **1. New pending tasks** with every required field.
3. Fill **Assigned to** from the [agent roster](#agent-roster) below. If the next action is a file or a yes/no from ClementFranz, assign ClementFranz and note which agent takes it after that.
4. If ClementFranz attached a screenshot, copy it into `image-task/` as `T-XXX-short-name.ext` and put that path on the board item. Do not restyle from the screenshot in this chat.
5. Stop. Do not write code, rewrite public copy, or run QA in the Task Collector chat. Other named agents pick the item up later.
6. Confirm the task id, assignee, and status back to ClementFranz.

If ClementFranz already named an agent, use that name. If not, pick the closest roster match. If none fits, assign `unassigned` and say so.

## Agent roster

| Agent | Also called | Assign when |
|---|---|---|
| Task Collector | task collector | logging and routing only — not site work |
| Webmaster Anthony | webmaster A, developer, front-end developer, frontend | UI, layout, components, applying `content_for_developer.md`, localhost |
| Content writer | | public copy, voice checklist, replacement packet |
| Lead developer | | architecture, cross-cutting technical decisions, Next.js/data structure |
| QA | | verify behavior, regressions, desktop and mobile, popups |
| ClementFranz | the user | blocked on a file, URL, date choice, or permission |

Add a row here when a new named agent appears. Do not invent a specialist that is not on this list.

## Every turn

1. Read `active_tasks.md` before starting work. Always check the list, including after an interrupt or a new chat.
2. Check `language_barrier_transitional_helpers.md` when a word is ambiguous, slurred, or could be a lookalike.
3. If the user gives a new task, add it under **1. New pending tasks** first. Fill **Assigned to**. Do not start coding until it is on the list.
4. **Task Collector chats stop after the board update.** Named worker chats (Webmaster Anthony, Content writer, Lead developer, QA) then move the item into **2. Tasks working on parallel** when they actually start. Fill `TS working start`. Several items may sit here at once.
5. If the user interrupts or changes direction, set **current status** to `paused` and leave the item on the board. Do not delete it. After the pause, check the list again before picking up anything else.
6. After finishing, fill `TS working done` and `TS done`, then move it to **3. Done tasks**.
7. Only the user can mark **4. Approved tasks - for deletion**. After they approve, move it there. Do not delete until they say to clear that section.
8. If a sidetask or subtask appears mid-work, add it to `active_tasks.md` immediately so it cannot be lost. Use the same fields as a main task. Nest it under the parent as `T-XXX` + letter (`T-018a`). Assign it.
9. Before writing or changing public copy, run [content_voice_checklist.md](content_voice_checklist.md). Put replacements in [content_for_developer.md](content_for_developer.md) for the developer unless the user asked this chat to edit the site.

## Task item fields (required on every main task and subtask)

- **Task title**
- **Task detailed description**
- **Task end goal**
- **Task considerations and exemptions**
- **Assigned to** — roster name of the agent who will do the work, or ClementFranz if waiting on the user
- **TS delegated** — when the user gave the job
- **TS expected done** — target finish time, or `TBD`
- **TS working start**
- **TS working done**
- **TS done**
- **TS approved**
- **Current status** — one of: `pending` | `paused` | `working` | `blocked` | `done` | `approved`

Use timestamps in `YYYY-MM-DD HH:mm +08`. Use `-` if a stamp does not apply yet.

## How to hear the user

The user sometimes speaks through dictation. Check the language-barrier dictionary, then check **context**.

- If context supports the dictionary mapping, use the mapped meaning.
- If context clearly supports the literal word, keep the literal word.
- Example: “schools” may mean “tools”, unless the sentence is actually about a school system.

When a new mishearing is confirmed, add it to `language_barrier_transitional_helpers.md`.

## How to write on this site

Write as ClementFranz, the person who made the site — first person, a human making a portfolio. Not an AI explaining the page, and not copy that sounds like it is hiding an AI.

Every public string must pass [content_voice_checklist.md](content_voice_checklist.md). Replacement copy for the developer lives in [content_for_developer.md](content_for_developer.md). Do not put helper lines like file paths, “client names stay off the page”, or “update `src/data/profile.ts`” on the public page.

## Project standing rules (from this chat)

- Logistics / operations + automation positioning. Not a generic VA.
- Keep real employer names off the page unless the user explicitly allows a name.
- Do not invent metrics, dates, phone numbers, or client names.
- Portrait PNG has real alpha. Do not chroma-key or knock out black on the subject (keyboard, mouse, headset stay).
- When looking for a file, use the folder path on disk — not localhost.
- Native `<dialog>` Close must fire `onClose` / `onCancel`.
- Task Collector logs and assigns. It does not execute the assigned work.
- Git default is `dev`. Merge and push there unless ClementFranz explicitly says to use `main` in that session. `main` deploys the Hostinger virtual application.

## Parallel work

Multiple items may sit in **2. Tasks working on parallel**. Keep each item’s timestamps honest. If blocked on the user (resume PDF, phone, GitHub), status is `blocked`, not `working`.

## Linked files

| File | Job |
|---|---|
| [conversation_rulebook.md](conversation_rulebook.md) | Process for every chat, including Task Collector and the agent roster |
| [active_tasks.md](active_tasks.md) | Live board with four sections and **Assigned to** |
| [language_barrier_transitional_helpers.md](language_barrier_transitional_helpers.md) | Dictation dictionary |
| [content_voice_checklist.md](content_voice_checklist.md) | Voice checklist for every public string |
| [content_for_developer.md](content_for_developer.md) | Copy packet the developer applies |

The Cursor rule `.cursor/rules/conversation-rulebook.mdc` (`alwaysApply: true`) points here so future chats load this process without being asked.
