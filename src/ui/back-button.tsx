import { Button } from "@/ui/button"; // Adjust the import path as necessary
import Image from 'next/image';

interface BackButtonProps {
	onClick: () => void;
  }

const BackButton = ({onClick}: BackButtonProps) => {

  return (
    <Button onClick={onClick}>
      <Image
        src="/icons/grey-left-arrow.png"
        alt="Back arrow"
        width={25}
        height={19}
      />
    </Button>
  );
};

export default BackButton;