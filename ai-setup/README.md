# AI Setup

This directory contains configuration files that bootstrap Frontend OS into your AI coding tools. Each file tells the AI what standards to follow, which roles to assume, and which checklists to run.

## Setup Guide Per Tool

### 1. Antigravity
**File**: `ai-setup/antigravity-master.md`
**How to use**: Copy the contents of this file and paste it as your session-opening message, or set it as a saved context/rule in your Antigravity workspace.

---

### 2. Cursor
**File**: `ai-setup/.cursorrules`
**How to use**: Copy `.cursorrules` to the **root of your project repository** (the project you are building, not the Frontend OS repo). Cursor automatically reads this file and loads all rules at the start of every session. No manual prompt needed.

```bash
cp /path/to/frontend-os/ai-setup/.cursorrules /path/to/your-project/.cursorrules
```

---

### 3. VSCode Copilot
**File**: `.github/copilot-instructions.md`
**How to use**: Copy this file into the `.github/` folder of your **project repository**. VSCode GitHub Copilot automatically discovers and reads it. Copilot Chat will follow these instructions throughout your session.

```bash
mkdir -p /path/to/your-project/.github
cp /path/to/frontend-os/.github/copilot-instructions.md /path/to/your-project/.github/copilot-instructions.md
```

---

### 4. Claude (claude.ai or API)
**File**: `CLAUDE.md`
**How to use (claude.ai)**: 
1. Open a new Claude conversation.
2. Paste the contents of `CLAUDE.md` as your first message, prefixed with: *"This is the system context for our session. Read this and confirm you understand before I give you the first task."*

**How to use (Claude Code / API)**: Copy `CLAUDE.md` to the root of your project repo. Claude Code reads it automatically.

```bash
cp /path/to/frontend-os/CLAUDE.md /path/to/your-project/CLAUDE.md
```

---

### 5. OpenAI Codex (Codex CLI)
**File**: `AGENTS.md`
**How to use**: Copy `AGENTS.md` to the **root of your project repository**. OpenAI Codex CLI reads this file automatically when you run it inside that directory.

```bash
cp /path/to/frontend-os/AGENTS.md /path/to/your-project/AGENTS.md
```

> This file also works for ChatGPT when pasted as a system prompt at the start of a session.

---

### 6. OpenCode
**File**: `ai-setup/opencode.md`
**How to use**: Copy the entire contents of `opencode.md` and paste it into your OpenCode system prompt configuration, or use it as the first message in a new session.

---

## Quick Reference Table

| Tool | File | Auto-Loaded? | Manual Paste Needed? |
|---|---|---|---|
| Antigravity | `ai-setup/antigravity-master.md` | ❌ | ✅ Paste once per session |
| Cursor | `ai-setup/.cursorrules` | ✅ Automatic | ❌ |
| VSCode Copilot | `.github/copilot-instructions.md` | ✅ Automatic | ❌ |
| Claude Code | `CLAUDE.md` | ✅ Automatic | ❌ |
| Claude (claude.ai) | `CLAUDE.md` | ❌ | ✅ Paste once per session |
| Codex CLI | `AGENTS.md` | ✅ Automatic | ❌ |
| ChatGPT | `AGENTS.md` | ❌ | ✅ Paste once per session |
| OpenCode | `ai-setup/opencode.md` | ❌ | ✅ Paste in system prompt |
