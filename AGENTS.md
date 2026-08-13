# AGENTS.md

## Workflow rules

- Ask for permission before removing anything (files, code, dependencies, assets).
- Implement every task by dividing it into steps.
- After each step, report what changed and wait for the user's confirmation before continuing.

## Commands

- `yarn start` / `npm start` – dev server
- `yarn build` / `npm run build` – production build
- `yarn test` / `npm test` – run tests
- `yarn format` / `npm run format` – Prettier (tabs, double quotes)
- `npx tsc --noEmit` – typecheck (no lint script; use this to verify changes)

## Conventions

- Component per folder with `index.tsx`; subcomponents nested under the parent component.
- Use baseUrl (`src`) absolute imports: `components/...`, `views/...`, `consts`, `locales`, `config/...`, `assets/...`.
- Format with Prettier (tabs, double quotes); match surrounding code style.
- Follow existing MUI patterns (`styled()` + `sx`) used across the app.
- Put all UI copy in `src/locales` JSON files; never hardcode strings.
- Don't add comments unless asked.
- Don't commit unless the user explicitly asks.

## Verification

- Run `npx tsc --noEmit` after changes; run `yarn build` for deploy-sensitive work.
- On failure, fix and re-run instead of amending or force-pushing.
