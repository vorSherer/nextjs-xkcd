# Lab 39 - Next.js and XKCD comics

### *Author:  Thomas Sherer, 2020-10-08*

## Overview
Build a multi page web app using Next.js to consume an external API.

The app will display most recent XKCD comic and have links to previous 10 comics.

## Feature Tasks and Requirements
- Refer to [example site](https://xkcd-smoky.vercel.app/)
- Web app should have 2 static routes
    - Home page at “/”
    - About page at “/about”
- Web app should have dynamic routes
    - Dynamic route should display a single comic

## Implementation Notes
- Refer to [XKCD API}(https://xkcd.com/json.html)
    - Inspect the data returned to determine the dynamic links needed.
- __`basic-css`__ is a good, stripped down, starter template.

## Stretch Goals
- Make a “hybrid” app where Home and About pages are statically generated
- Style using Sass instead of CSS
- Publish web app to the web
- Use alternate http client instead of axios
- *__HINT:__ check Next.js blog for help with the stretch goals*

## Attributions and Citations

- Big thanks to __Brai Frauen__ for help with unraveling CSS knots.

---

Next-app-generated:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
