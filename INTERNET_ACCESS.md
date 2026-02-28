# Make The App Accessible From The Internet

This project is a static dashboard, so you can expose it publicly in two ways.

## Option A: Instant share link (temporary)

Use this when you need a public URL right now for testing/demo.

1. Start local app:

```bash
cd /Users/ansonshen/Codex/project\ creek-codex
./scripts/start-local.sh 8000
```

2. In another terminal, create tunnel:

```bash
cd /Users/ansonshen/Codex/project\ creek-codex
./scripts/share-internet.sh 8000
```

3. Copy the public URL printed by `localhost.run`.

Notes:
- Keep both terminals open.
- URL is temporary and changes each run.
- This is best for demos, not production.

## Option B: Permanent URL (recommended)

Deploy to GitHub Pages using workflow file:

- `.github/workflows/deploy-pages.yml`

Steps:

1. Create a GitHub repository and push this project.
2. Set default branch to `main`.
3. In GitHub repo settings:
   - `Pages` -> Source: `GitHub Actions`.
4. Push to `main` to trigger deployment.
5. App will be available at:
   - `https://<your-github-username>.github.io/<repo-name>/`

Notes:
- HTTPS is automatic.
- Good for stable internet access.
- You can later connect a custom domain in GitHub Pages settings.

## Future Backend Integration

When backend data updater is ready, it can overwrite files in `data/` and republish.
