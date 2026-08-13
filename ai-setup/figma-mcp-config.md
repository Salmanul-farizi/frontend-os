# Figma MCP Setup (Dynamic Asset Routing)

When working on a new project using Frontend OS, you want the Figma MCP server to automatically download image assets directly into your current project's `/assets/` directory.

If you hardcode an absolute path (like `/Users/name/projects/stemage/assets`) in your global AI settings, it will break when you switch to a new project. 

To solve this, use one of the two dynamic methods below.

## Method 1: The Relative Path (Supported by most AI tools)

If your AI tool (like Cursor or Antigravity) resolves MCP paths relative to the active workspace, simply set `LOCAL_ASSET_DIR` to `./assets`.

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "YOUR_PERSONAL_ACCESS_TOKEN",
        "LOCAL_ASSET_DIR": "./assets" 
      }
    }
  }
}
```

## Method 2: The Project-Level Config (For Cursor / Claude Code)

Some tools allow you to override global MCP settings by placing a local config file inside the specific project you are working on.

If you are using **Cursor**, create a `.cursor/mcp.json` file in your project root:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "LOCAL_ASSET_DIR": "./assets"
      }
    }
  }
}
```

## What inputs do you need to give?

Once this is set up, you only need to provide two things to the AI when starting a task:
1. The **Figma URL** for the specific frame or component.
2. The **Figma Personal Access Token** (if not already saved in your global config).

Because of this setup and **Architecture Law #8**, the AI is responsible for communicating with Figma, finding the assets in the frame, determining the correct SEO-friendly kebab-case name, downloading them directly into your `./assets/` folder, and referencing them in the HTML it writes. You no longer need to manually export images.
