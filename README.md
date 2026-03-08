# My Portfolio

Welcome to my personal website! This is the source code repository for the portfolio site hosted at [mhroohi.com](mhroohi.com).

## Project Overview

- **Version**: 1.0.0
- **Homepage**: [mhroohi.com](mhroohi.com)
- **Private**: This project is private and not publicly available.
- **Type**: Module (ES Module)

## Development

This project uses **Vite** as the build tool. Here's how to get started:

### Install Dependencies
First, clone the repository and install the dependencies:

```bash
npm install
```

### Available Scripts

- **dev**: Run the development server with Vite.
  ```bash
  npm run dev
  ```
  This starts a local development server and watches for file changes.

- **build**: Build the project for production.
  ```bash
  npm run build
  ```
  This will bundle the app and create a production-ready version in the `dist` folder.

- **lint**: Lint the project files using ESLint.
  ```bash
  npm run lint
  ```
  This checks the code for potential issues and unused directives. It ensures code quality and consistency across the project.

- **preview**: Preview the production build locally.
  ```bash
  npm run preview
  ```
  This runs a local server to preview the app as it would appear in production.

### Deployment

**Build and deploy to GitHub Pages:**
```bash
npm run deploy
```
This builds the project and pushes the `dist` folder to the `gh-pages` branch.

**First-time setup** — if you see "There isn't a GitHub Pages site here" (404):

1. Go to **Settings** → **Pages** in the repo
2. Under **Source**, select **Deploy from a branch**
3. Choose branch **gh-pages** and folder **/ (root)**
4. Save

Then run `npm run deploy` again and wait 1–2 minutes for the site to go live.

## Special Thanks

This project was **forked from** [@shaqdeff](https://github.com/shaqdeff). A big thank you to him for the original work, which served as the foundation for this portfolio.
