## Github Trending Discovery

Displays a list of the github repositories created in the last 7 days with the most number of stars.

You can try out the site live [here](https://github-discover-trending.vercel.app/).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality

This project implements a client application for discovering trending repositories on GitHub.

-   A list of the repositories created in the last 7 days with the most number of stars in Github is displayed. 
    -   Some basic info about the repo is displayed, such as: repo name, link to GitHub, description and number of stars.
-   The user is able to favourite the repositories on the list. 
    -   The favourites won’t be sent back to GitHub’s servers but are just stored locally using cookies.
    -   The favourited repositories will be visible through a filter. 
    -   The favourites won’t be sent back to GitHub’s servers but just stored locally (e.g localstorage, cookies etc...).
-   The user can filter repositories by language.

## Screenshots 

### List of repositories, with ability to star and unstar (stored in cookies)

<img width="1440" alt="1" src="https://user-images.githubusercontent.com/4697967/153939155-7f1e1e49-9c12-40f5-a2e2-79654c021bce.png">

### Filtered by starred repositories

<img width="1440" alt="2" src="https://user-images.githubusercontent.com/4697967/153939181-2a24a2b6-c4e3-4cd3-959a-a55b034dae5e.png">

### Filtered by language

<img width="1440" alt="3" src="https://user-images.githubusercontent.com/4697967/153939205-90789d27-f4b8-4128-b3b1-93d6e11ab12d.png">



