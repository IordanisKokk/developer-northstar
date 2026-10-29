# Publish Northstar on GitHub Pages

This repository is a fully static site, so no build, Docker container, Node.js or external hosting service is required.

## First deployment

1. Create an **empty, public** GitHub repository named `northstar-game-development` under your account (do not add a README, license or `.gitignore` in GitHub's creation form).
2. Open a terminal in the folder containing this file. Run:

```bash
git init
git add .
git commit -m "Publish Northstar Game Development v4"
git branch -M main
git remote add origin https://github.com/USERNAME/northstar-game-development.git
git push -u origin main
```

Replace `USERNAME` with your own GitHub username. Authentication is through your standard Git credential manager.

3. On GitHub open **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. Visit `https://USERNAME.github.io/northstar-game-development/` after GitHub reports the deployment as successful.

## Updating the site

Edit the canonical JSON under `data/` and regenerate the site bundle after validation:

```bash
python3 tests/validate.py
python3 make_docs.py
python3 build_site.py
```

Then `git add . && git commit -m "Update curriculum" && git push`.

## Privacy and progress

- **The GitHub Pages website is public.** The curriculum and source code are publicly accessible.
- **Your study progress is *not* pushed to GitHub.** It lives in your browser's `localStorage` on that device and domain.
- Your local HTML progress and your GitHub Pages progress use different browser storage origins. **Export** progress from the old version and **Import** it into the hosted version.
- Each browser/device has its own local progress. GitHub Pages does **not** synchronize study history across devices. Export a backup regularly.
- Never commit personal notes or exported progress JSON into the public repository.

### macOS launcher

After creating the empty repository, double-click `Publish Northstar.command`. It initializes Git, commits the project and pushes it to `IordanisKokk/northstar-game-development`. It uses the credentials configured for Git on your Mac. On some Macs you may need to right-click → Open or grant execute permission. You can also open Terminal in this folder and run `bash 'Publish Northstar.command'`.

The publisher does **not** enable GitHub Pages itself; finish the `Settings → Pages` step above.

## Three-track feature update

The root `index.html` and committed assets serve all tracks. No new hosting service is required. Game data remains in `data/`; Backend and AI are in their own subdirectories. Run `python build_site.py` after editing curriculum JSON or viewer assets, and run the validation workflow before merge.

The existing Pages URL returned HTTP 200 on October 29, 2026 before this feature was merged. That verifies the current Game-only deployment, not the new feature. After review and authorized merge, wait for the Pages build/deployment associated with the merge commit, request the published root plus `assets/data.js`, and verify the homepage and both `?track=backend#/map` and `?track=ai#/map` in a browser. Check response status and deployed content, not only the repository’s `has_pages` flag.
