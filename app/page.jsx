import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex justify-center md:items-start h-screen bg-white md:bg-custom-gray">
      <div className="text-gray-700 md:w-3/5 max-w-xl bg-white rounded p-12 md:mt-12">
        <h1 className="text-xl text-nectar-accent-color font-bold">Super-Basic Placeholder Home Page</h1>
        <h2 className="font-bold mb-6">(Not part of the demo)</h2>
        <hr />
        <p className="mt-6">To view the sign-in demo,{' '}
          <Link className="underline underline-offset-3 hover:text-nectar-accent-color-hover" href="/signin">go to the signin page.</Link>
        </p>
      </div>
    </section>
  )
}
