# Home Page Plan

Home page with folder navigation — IDE-like card overview.

## Overview

The home view renders when **no file tab is active** (`activeTabId === null`) — same condition as the breadcrumbs bar. It shows:

- **Home state**: 4 top-level cards (`about-me.tsx`, `new-message.tsx`, `projects`, `work-experience`)
- **Folder state**: cards for every file in `projects` or `work-experience`
- Header with `~/portfolio` path + item count, switchable to `~/projects` with a back button

## Requirements (from user)

1. Whole content should be max 60% of full width on desktop, 100% on mobile.
2. Items align left.
3. At top: typography with `~/portfolio` string.
4. Below: smaller, grey description with count of items (files + folders, files in folders NOT included) + instruction. Example: `4 items · click to open`.
5. Below string/instruction: cards with content:
   - Grey background (same as main header) + rounded corners.
   - On hover: primary color border 1px + lift a little to top.
   - Top-left corner: item icon (e.g. User for about-me) on rounded, primary color background.
   - Right side (same line as icon): top-left/up arrow icon visible only on hover with smooth fade.
   - Below icon: name string (white/black depending on mode, e.g. `about-me.tsx`).
   - Below name: short description for files OR count of items inside for folders (descriptions in a config file).
   - Clicking a folder → go into it and show files of that folder.
   - File cards look exactly like others but with technologies: show 3 first badges + `+ X` (X = rest count).
   - Clicking a project → behave same as sidebar (opens tab).
6. In a folder (projects/work-experience): button on the right side with string `portfolio` + back icon → back to homepage. The `~/portfolio` string is replaced with name of opened folder. Count of items calculated from items on screen.
7. 3 cards in a row on desktop, 1 card on mobile.

## Decisions (confirmed with user)

- **Project cards**: show description text + technology badges below the name.
- **Descriptions source**: new config file `src/config/home-content.ts` (short descriptions for ALL files).
- **Hover arrow icon**: `ArrowOutward` (↗) from lucide-react, on card top-right.
- **Duplicate `motorro.md` collision**: FIX — tab ids include folder context, e.g. `projects/motorro.md` and `work-experience/motorro.md`. Tab labels stay as `sidebarName`.

## Files to create

### 1. `src/config/home-content.ts` — Item descriptions

```ts
export const homeDescriptions: Record<string, string> = {
    "about-me.tsx": "...",
    "new-message.tsx": "...",
    "projects/motorro.md": "...",
    // ... all 7 projects
    "work-experience/power-technology.md": "...",
    // ... all 5 work entries
};
```

Keyed by **full tab id** (`folder/file`) to solve the `motorro.md` collision.

### 2. `src/components/main/components/home-view/index.tsx` — Main view

```
Root (left-aligned, width 100%, maxWidth: 60% desktop / 100% mobile)
├── HeaderRow
│   ├── Typography: "~/portfolio" (home) OR "~/projects" (folder)
│   └── [folder only] BackButton (right side): ← portfolio
├── Count line: "{N} items · click to open" (text.secondary, smaller)
└── CardsGrid
    └── {items.map(ItemCard)}
```

**Item model** built from data:

```ts
type HomeItem = {
    id: string;           // full tab id ("projects/motorro.md") or "projects"
    name: string;         // sidebarName ("rezerwik.md") or folder name
    icon: ReactNode;      // white icon on primary bg
    description?: string; // from config
    technologies?: string[];  // projects only
    itemCount?: number;   // folders only
    onClick: () => void;
};
```

### 3. `src/components/main/components/home-view/components/item-card/index.tsx` — Card

```
┌─────────────────────────────┐
│ [icon]              [↗arrow]│  ← arrow fades in on hover (opacity 0→1, 0.2s)
│ rezerwik.md                  │
│ Restaurant reservation app…  │
│ [React] [TS] [MUI]  +9     │  ← tech badges (projects only), 3 + "+X"
└─────────────────────────────┘
```

- Background: same as main header (light: white / dark: grey[600] `#171A1F`)
- Rounded corners (`borderRadius: 8px`)
- Hover: `1px solid primary.main` border + `translateY(-4px)` lift, smooth transition
- Icon: rounded square, `primary.main` background, white icon
- Name: `text.primary`; description: `text.secondary` small
- Tech badges: first 3 technologies as chips + `+{N}` chip for the rest
- **Click folder** → `setOpenFolder(folder)` · **Click file** → `openFile(tab)` (same as sidebar)

## Files to modify

### 4. `src/components/main/index.tsx`

```tsx
<ContentArea>
    {activeTabId === null ? <HomeView /> : <FileView ... />}
</ContentArea>
```

### 5. `src/components/sidebar/index.tsx` — fix id collision

- `getFileIcon(label, folder?, theme)` — folder param determines icon (`projects` → FileBraces/warning, `work-experience` → Briefcase/purple; top-level → User/Mail)
- `handleFileClick(label, folder?)` builds prefixed id: `projects/motorro.md`
- `FolderItem` `onOpenFile` passes its folder name: `onOpenFile={(sublabel) => handleFileClick(sublabel, "projects")}`

## Grid & responsive

```ts
// CardsGrid
display: "grid",
gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
gap: "16px",

// Root width
width: "100%",
maxWidth: { xs: "100%", md: "60%" },
```

## Decisions

- **Count**: `items.length` on screen (home: 4 · projects: 7 · work-experience: 5)
- **Back button**: `← portfolio`, styled like breadcrumb items (rounded + primary hover bg)
- **UI copy**: hardcoded English strings to match existing components (sidebar/header do the same; locale files are empty)
- **Tab labels**: stay as `sidebarName` (e.g. `motorro.md`), only internal ids get the folder prefix

## Verification

- Run `npx tsc --noEmit` after changes
- Run `yarn build` for deploy-sensitive work