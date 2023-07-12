This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Authentication package is [`next-auth`](https://next-auth.js.org/).

Netlify live demo: [https://ubiquitous-souffle-96df03.netlify.app/signin](https://ubiquitous-souffle-96df03.netlify.app/signin)

### Getting Started

Clone the repo:

```bash
git clone 
```
Install dependencies:

```bash
npm install
```
Create `.env.local` file:  
In order to use the local test user, you will need to:
1) Create a new file, `.env.local` in the root directory of the project on your local machine (it will be ignored by git).
2) Run this command in your terminal (this generates a token for your app to use locally to decode the JWT it generates):
   
  ```sh
  openssl rand -base64 32
  ```
  
3) Add the following values to `.env.local`:

```sh
NEXTAUTH_SECRET = your-generated-token-from-the-command-above
NEXTAUTH_URL = http://localhost:3000
```

4) To use the Google login option locally: [Sign up for Google Cloud console account](https://console.cloud.google.com/)  
   and generate the tokens below per the directions there.
6) Add them in `.env.local` as shown:

```sh
GOOGLE_CLIENT_ID = your-google-client-id
GOOGLE_CLIENT_SECRET = your-google-client-secret
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000/signin](http://localhost:3000/singin) with your browser to see the result.

NOTE: There is currently only a single user that can be authenticated with email/password; use this user to test:

```sh
Email: jsmith@email.com  
Password: test12345
```

You will need a gmail account to use the Login with Google feature.

Once logged in, you will be taken to the /me page, a basic page showing your session details.  
Once signed out, you will be redirected to the /signin page.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
