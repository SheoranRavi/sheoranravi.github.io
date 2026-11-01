# Publishing a blog post

1. Create a Markdown file in `_posts/` using this format: `YYYY-MM-DD-short-title.md`.
2. Copy only the contents inside the example below into the file. The first `---` must be the very first characters in the file: don't indent it or copy the surrounding Markdown code fences.

   ```markdown
   ---
   layout: post
   title: "My post title"
   description: "A short summary shown on the blog page."
   ---

   Start writing here. Use regular Markdown headings, links, lists, and code blocks.
   ```

3. Commit and push. GitHub Pages builds the site, adds the post to `/blog/`, and publishes its own page.

For example, `_posts/2026-11-01-first-post.md` becomes `/blog/2026/11/01/first-post/`.
