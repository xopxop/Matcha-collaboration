import { Button } from "@/ui/button";

interface BackButtonProps {
	onClick: () => void;
  }

const SkipButton = ({onClick}: BackButtonProps) => {

  return (
    <Button onClick={onClick}>
      <p className="uppercase text-gray-300 font-light text-lg">skip</p>
    </Button>
  );
};

export default SkipButton;