# SEO Checklist

Before any page is marked as complete, verify that the frontend architecture supports optimal search engine crawling and indexing.

## 1. Meta Tags & Document Head
- [ ] **Title Tag**: Present, descriptive, and under 60 characters. Format: `Page Name | Brand`.
- [ ] **Meta Description**: Present, compelling, and under 160 characters.
- [ ] **Canonical URL**: `<link rel="canonical" href="..." />` is set to prevent duplicate content issues.
- [ ] **Favicon**: Added appropriately.

## 2. Open Graph & Social Sharing
- [ ] `og:title` is set.
- [ ] `og:description` is set.
- [ ] `og:image` is set (absolute URL to a high-quality 1200x630 image).
- [ ] `og:url` is set.
- [ ] `twitter:card` is set (usually `summary_large_image`).

## 3. Semantic Structure
- [ ] Exactly one `<h1>` per page, containing the primary keyword.
- [ ] Heading hierarchy (`<h2>`, `<h3>`) is logical and unbroken.
- [ ] No empty headings.

## 4. Media
- [ ] All `<img>` tags have descriptive `alt` attributes containing relevant keywords (without keyword stuffing).
- [ ] Image file names are descriptive and use kebab-case (e.g., `frontend-os-dashboard.jpg`, not `IMG_10294.jpg`).

## 5. Links & Crawlability
- [ ] Internal links use valid `href` attributes (not JavaScript onClick routing).
- [ ] Untrusted or user-generated external links use `rel="nofollow"`.
- [ ] The `robots.txt` does not accidentally block important frontend assets (CSS/JS) from being crawled.
