import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen text-white text-center bg-gradient-to-tr from-[#EA4080] to-[#EE805F] grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pt-48 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex items-center">
          <Image
          className=""
          src="/icons/matcha-white.png"
          alt="Next.js logo"
          width={80}
          height={38}
          priority
          />
          <h1 className="text-5xl font-bold">matcha</h1>
          </div>
          <p className="text-xs font-light">By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.</p>
        <ol className="list-inside list-none text-sm text-center">
          <li className="mb-2">
            <Link href={'#'}>
            <div className="w-80 h-12 rounded-full border-solid border-2 border-white flex items-center justify-center">
              <p>
                SIGN IN WITH GOOGLE
              </p>
            </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link href={'#'}>
            <div className="w-80 h-12 rounded-full border-solid border-2 border-white flex items-center justify-center">
              <p>
                SIGN IN WITH FACEBOOK
              </p>
            </div>
            </Link>
          </li>
          <li className="mb-2">
          <Link href={'/login'}>
            <div className="w-80 h-12 rounded-full border-solid border-2 border-white flex items-center justify-center">
              <p>
                SIGN IN WITH EMAIL
              </p>
            </div>
            </Link>
          </li>
        </ol>
        <Link href="#" >Trouble Signing In?</Link>
      </main>
    </div>
  );
}
