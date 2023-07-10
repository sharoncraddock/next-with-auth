'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      alert(result.error);
    } else {
      router.push('/me');
    }
  };

  return (
    <section className="flex justify-center md:items-center h-screen bg-white sm:bg-custom-gray">
      <div className="flex text-sm text-gray-700">
        <div className="hidden bg-nectar-accent-color rounded-l-md">
        </div>

        <div className="bg-white rounded">
          <div className="p-8">
          <h1 className="text-center text-2xl m-8">The Leadership Circle</h1>
          <form onSubmit={handleCredentialsLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-2 py-2 rounded border border-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-2 py-2 rounded border border-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-nectar-accent-color hover:bg-nectar-accent-color-hover text-white py-2 px-4 rounded text-sm focus:outline-none"
            >
              Login
            </button>
          </form>

          <div className="text-center">
            <a className="underline underline-offset-3 block py-8" href="/">Forgot/Create Password?</a>

            <hr />

            <div className="mt-4 mb-2">
              <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/me' })}
                className="bg-nectar-extra-color-1 hover:bg-nectar-extra-color-1-hover text-white py-2 px-4 rounded text-sm mt-4 focus:outline-none"
              >
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

  );
}
