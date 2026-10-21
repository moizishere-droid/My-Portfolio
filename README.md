# Abdul Moiz — AI/ML Portfolio

React + Vite portfolio featuring Loan Risk, CodeMentor, and MedRAG, in that order. Agentic AI appears as a current exploration rather than a completed project.

## Content and interactions

- Real application screenshots in `public/images/projects/`, with descriptive alt text.
- Project filters, list/gallery views, detail dialogs, and problem/approach/outcome descriptions.
- Grouped skills linked to the projects that demonstrate them; no proficiency percentages.
- BS Software Engineering, University of Karachi; expected graduation in 2027.
- Dark/light themes, responsive navigation, reduced-motion support, animated hero previews, resume view/download, and contact links.
- Decorative About collage and repetitive FAQ removed.
- Social sharing metadata is intentionally deferred at the owner's request.

## Install and check

Use Node.js and npm. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd test
npm.cmd run dev
```

The development server prints its local URL. For the built version, run `npm.cmd run preview`. Deploy the generated `dist` folder. Do not open `index.html` directly from the filesystem.

The dependency lockfile is `package-lock.json`. Local dependency caches, `node_modules`, and `dist` are ignored by Git.

Tests validate current project data and assets, and exercise filters, dialogs, navigation, theme storage, resume controls, email copy, and animation initialization. The interaction tests require a completed build and all dependencies. They do not replace real-browser visual checks.

## Update content

- `src/data/portfolio.js`: projects, skills, education, and external links.
- `src/components/`: page sections and shared interactions.
- `src/components/ProjectVisual.jsx`: real screenshot presentation.
- `src/styles.css`, `src/readability.css`, `src/section-readability.css`: styling and responsive adjustments.
- `public/Abdul-Moiz-Resume.pdf`: downloadable resume, maintained separately from website copy.

The original HTML and `archive/` remain as historical references and are not the active website.

## Safely return to an earlier version

Before committing this update, optionally mark the current version:

```powershell
git tag portfolio-before-refresh
```

Commit the portfolio refresh separately. If it has already been pushed and you want to undo it, use `git revert <refresh-commit-sha>` and push the resulting commit. Revert preserves shared history; it does not require a force push. Revert all relevant update commits if the refresh spans multiple commits. Resolve any conflicts before pushing.

For a connected hosting service, a new push may trigger a deployment. A hosting rollback changes the served deployment but does not undo GitHub commits, so keep the repository and hosting state aligned.
