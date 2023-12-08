# Trello Malcolm

Demo deploys on **[trello.malcolmpro.com](https://trello.malcolmpro.com)** or [trello-malcolm.vercel.app](https://trello-malcolm.vercel.app/), powered by *[Vercel](https://vercel.com)*.

⚠️Please note that, this project is still **under development**.⚠️

‼️Please do **NOT** use it in business environment.‼️

## Getting Started

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/Malcolm-Ma/trello-malcolm.git
```

### Install packages

```shell
npm i
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setup .env file

You can find the `.env.example` file in the root directory of the project. You can copy the file and rename it to `.env` and fill in the environment variables.

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
