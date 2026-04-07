---
title: "Why i chose SWR over TanStack Query"
description: "Why i chose SWR over TanStack Query for mirsaige-bd.com"
date: "2026-04-07"
tags: ["React", "Next.js", "SWR", "TanStack Query", "Data Fetching", "Performance", "Developer Experience"]
image: "/writings/swr-over-tanstack-query.png"
---

When i was building mirsaige-bd.com, i had to decide on a data-fetching strategy that wouldn't bloat the project. Since it’s a Next.js site, i wanted to leverage the framework's strengths without adding unnecessary complexity.

![SWR vs TanStack Query](/writings/swr-over-tanstack-query.png)

The goal was simple: keep the bundle light and the DX (developer experience) smooth.

### The engineering thoughtprocess

i decided to split the workload. For anything that needed to be indexed or rendered immediately, i used **Native Fetch** on the server. For client-side interactivity, i chose **SWR**. 

Many devs default to TanStack Query (React Query) because it's the "industry standard," but for this specific project, it felt like total overkill. i didn't need a massive state management engine; i just needed efficient revalidation.

### Why SWR fits the vibe

SWR (Stale-While-Revalidate) is built by Vercel, so it feels native to the Next.js ecosystem. It’s lightweight and handles the essentials—caching, revalidation on focus, and optimistic updates—without the heavy boilerplate.

### SWR vs TanStack Query

| Feature | SWR | TanStack Query |
| :--- | :--- | :--- |
| **Bundle Size** | ~4.4kB | ~13kB+ |
| **Setup** | Zero boilerplate | Requires QueryClientProvider |
| **SSR Logic** | Native fallback support | Complex hydration/dehydration |
| **Learning Curve** | Extremely low | Moderate |

### Native Fetch for SSR

i used native fetch for all Server Components. Since Next.js already patches fetch to include caching and revalidation logic, adding an external library for SSR is a waste of KBs. It’s cleaner, faster, and keeps the server-side code lean.

### Final thoughts

Engineering is about choosing the right tool for the job, not just picking the one with the most features. By sticking to SWR and native fetch, i kept the codebase maintainable and the performance high. mirsaige-bd.com stays fast because i prioritized a minimalist stack over a bloated one.