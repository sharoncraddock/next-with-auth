This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Authentication package is [`next-auth`](https://next-auth.js.org/).

### Getting Started

Clone the repo:

```bash
git clone 
```
Install dependencies:

```bash
npm install
```
Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000/signin](http://localhost:3000/singin) with your browser to see the result.

NOTE: There is currently only a single user that can be authenticated with email/password; use this user to test:

**Email:** jsmith@email.com  
**Password:** test12345

You will need a gmail account to use the Login with Google feature.

Once logged in, you will be taken to the /me page, a basic page showing your session details.  
Once signed out, you will be redirected to the /signin page.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
