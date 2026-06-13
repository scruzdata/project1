# Project Instructions

Before implementing any feature, inspect relevant files inside docs/ and data/.

Treat those files as the source of truth.

Priorities:

1. Maintainability.
2. Readability.
3. Reusable components.
4. Strict TypeScript.
5. Accessibility.
6. Responsive design.
7. Premium user experience.

Guidelines:

- Prefer server components.
- Use client components only when necessary.
- Organize code by features.
- Never hardcode data that belongs in data/.
- Avoid code duplication.
- Favor small changes over large refactors.
- Implement incrementally.
- Explain plan before coding.
- Modify only files required by the current task.

Treat these files as the source of truth.

Never duplicate information already present there.

Maintain strict TypeScript and feature-based architecture.

Proceed incrementally.

Always:

1. Explain your plan.
2. List affected files.
3. Implement.
4. Validate consistency with existing data.

Avoid unnecessary complexity.

Favor maintainability and readability.

You are working inside a Next.js 15 + TypeScript project called "Regalo Jubilación".

This project is connected to MCP tools (21st.dev + Claude Code environment).

IMPORTANT:

- You MUST use available MCP tools whenever relevant.
- Prefer MCP tools over manual implementation when possible.
- Always check available tools before coding.
- Do not assume static implementations if a tool exists.
- Combine MCP outputs with local code only when necessary.

---

STEP 1 — TOOL DISCOVERY

First, list all available MCP tools and explain:

- what each tool does
- when to use it in this project

Do NOT write code yet.

---

STEP 2 — CONTEXT UNDERSTANDING

Then read:

- CLAUDE.md
- docs/*
- data/*

Summarize:

- architecture
- domain model
- cruise logic
- UI structure

---

STEP 3 — STRATEGY

Propose:

- how MCP tools can accelerate this project
- where MCP should replace manual code
- where MCP should NOT be used

Be specific.

---

STEP 4 — IMPLEMENTATION (ONLY AFTER APPROVAL)

Wait for confirmation before coding.

When coding:

- Use MCP tools first (if applicable)
- Then integrate results into Next.js features
- Keep everything typed with TypeScript
- Avoid duplication of logic already provided by MCP or data/

---

RULES:

- Never ignore MCP tools if they are relevant.
- Never duplicate functionality that MCP already provides.
- Prefer tool-driven architecture over manual implementation.
- Keep responses minimal and technical.