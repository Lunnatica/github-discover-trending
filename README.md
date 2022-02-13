## Github Trending Discovery

Displays a list of the github repositories created in the last 7 days with the most number of stars.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality

This project implements a client application for discovering trending repositories on GitHub.

-   A list of the repositories created in the last 7 days with the most number of stars in
    github should be displayed
-   The user should be able to favourite the repositories on the list.
-   The favourited repositories will be visible either through a filter or in a different
    tab. Some basic info about the repo will be displayed, such as: repo name, link
    to GitHub, description and number of stars.
-   The favourites won’t be sent back to GitHub’s servers but just stored locally (e.g localstorage, cookies etc...).
-   A language filter is included.
