import { Button } from "@/ui/button";

interface NameSetupProps {
	name: string;
	nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NameSetup ({name, nextStep, handleChange}: NameSetupProps) {
	return (
	  <div className="w-full px-12 sm:max-w-[640px] sm:mx-auto h-full">
      <div className="px-6">
        <label className="text-4xl block font-bold text-left sm:text-center" htmlFor="name">My first name is</label>
        <input
          className="my-4 w-full sm:max-w-80 border-b border-slate-700 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
          id="name"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          />
        <p className="text-xs font-light sm:text-center">
          This is how it will appear in Tinder and you will not be able to change it</p>
      </div>
      <div className="w-full mt-20 mb-4">
        <Button bgColor="pink-gradient" type="button" shadow disabled={!name} onClick={nextStep}>continue</Button>
      </div>
	  </div>
	)
  }