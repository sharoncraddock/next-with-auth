'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LinkButton from '../components/link-button';
import Image from 'next/image'

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

    if (result?.error) {
      alert(result?.error);
    } else {
      router.push('/me');
    }
  };

  return (
    <section className="flex justify-center md:items-center h-screen bg-white md:bg-custom-gray">
      <div className="flex text-sm text-gray-700 md:w-3/5 max-w-xl">
        <div className="
          hidden md:block md:w-1/3 bg-nectar-accent-color 
          bg-box-background bg-120 rounded-l-md
        "></div>

        <div className="bg-white rounded md:w-2/3">
          <div className="p-8">
          <a href="https://project-center.theleadershipcircle.com/en-US/">
            <Image 
              alt="Project Center Home" 
              src="/lc-logo.png" 
              width="200" 
              height="74" 
              className="md:-ml-3" />
          </a>
          <form onSubmit={handleCredentialsLogin}>
            <div className="mt-4 mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={handleEmailChange}
                className="
                  w-full px-2 py-2 rounded border border-gray-400 
                  focus:border-blue-500 focus:outline-none
                "
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
                className="
                  w-full px-2 py-2 rounded border border-gray-400 
                  focus:border-blue-500 focus:outline-none
                "
              />
            </div>
            <button
              type="submit"
              className="
                bg-nectar-accent-color hover:bg-nectar-accent-color-hover 
                text-white py-2 px-4 rounded text-sm focus:outline-none
              "
            >
              Login
            </button>
          </form>

          <div className="text-center">
            {/* This functionality not built for limited demo - visual only */}
            <a 
              className="underline underline-offset-3 block py-8" 
              href="/">Forgot/Create Password?
            </a>

            <hr />

            <div className="mt-4 mb-2 flex flex-col items-center">
              <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/me' })}
                className="
                  bg-nectar-extra-color-1 hover:bg-nectar-extra-color-1-hover 
                  text-white py-2 px-4 rounded text-sm mt-4 focus:outline-none w-40
                "
              >
                Login with Google
              </button>

              <LinkButton 
                text="Zymeworks Login" 
                href="https://sso.zymeworks.com/adfs/ls/idpinitiatedsignon.aspx?logintoRP=https://project-center.theleadershipcircle.com/saml/metadata" 
              />
              <LinkButton 
                text="Roche Login" 
                href="https://wam.roche.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fproject-center.theleadershipcircle.com%2Fsaml%2Fmetadata"
              />
              <LinkButton 
                text="Desjardins Login" 
                href="https://myapps.microsoft.com/signin/3bcff797-6c7a-4c86-ac74-f15adee3c1dc?tenantId=728d20a5-0b44-47dd-9470-20f37cbf2d9a" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

  );
}
