'use client'

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const result = await signOut({ redirect: false })

    if (result?.error) {
      alert(result?.error);
    } else {
      router.push('/signin');
    }
  };

  return (
    <button 
      className="
        bg-nectar-extra-color-1 
        hover:bg-nectar-extra-color-1-hover 
        text-white 
        py-2 
        px-4 
        rounded 
        text-sm 
        mt-4 
        focus:outline-none 
      "
      onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;