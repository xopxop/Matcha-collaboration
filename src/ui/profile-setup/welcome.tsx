import { Button } from "@/ui/button";
import Image from 'next/image';

interface WelcomeProps {
	nextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Welcome ({ nextStep }: WelcomeProps) {
	return (
	  <div className="w-full px-12 sm:max-w-[640px] sm:mx-auto h-full">
      <div className="px-6">
        <Image
          className="mx-auto mt-4"
          src="/icons/matcha.png"
          alt="Next.js logo"
          width={50}
          height={20}
          priority
          />
        <h1 className="text-center text-xl font-bold my-2" >Welcome to Matcha</h1>
        <p className="text-xs font-light text-center">
          Please follow these House Rules
        </p>
      </div>
      <div className="mt-12">
        <div className="flex items-center my-2 sm:justify-center">
        <Image
          className="mr-4"
          src="/icons/matcha.png"
          alt="Next.js logo"
          width={20}
          height={10}
          priority
          />
          <p className="font-bold text-sm">Be yourself.</p>
        </div>
        <p className="text-xs font-light text-left sm:text-center">
        Make sure your photos, age, and bio are 
        true to who you are.
        </p>
      </div>
      <div className="my-6">
        <div className="flex items-center my-2 sm:justify-center">
        <Image
          className="mr-4"
          src="/icons/matcha.png"
          alt="Next.js logo"
          width={20}
          height={10}
          priority
          />
          <p className="font-bold text-sm">Be safe.</p>
        </div>
        <p className="text-xs font-light text-left sm:text-center">
        Don&#39;t be too quick to give out personal information. Date Safely
        </p>
      </div>
      <div className="my-6">
        <div className="flex items-center my-2 sm:justify-center">
        <Image
          className="mr-4"
          src="/icons/matcha.png"
          alt="Next.js logo"
          width={20}
          height={10}
          priority
          />
          <p className="font-bold text-sm">Play it cool.</p>
        </div>
        <p className="text-xs font-light text-left sm:text-center">
        Respect others and treat them as you
        would like to be treated.
        </p>
      </div>
      <div className="my-6">
        <div className="flex items-center my-2 sm:justify-center">
        <Image
          className="mr-4"
          src="/icons/matcha.png"
          alt="Next.js logo"
          width={20}
          height={10}
          priority
          />
          <p className="font-bold text-sm">Be proactive.</p>
        </div>
        <p className="text-xs font-light text-left sm:text-center">
        Always report bad behavior.
        </p>
      </div>
      <div className="w-full mt-36 mb-4">
        <Button bgColor="pink-gradient" type="button" shadow onClick={nextStep}>I agree</Button>
      </div>
	  </div>
	)
}