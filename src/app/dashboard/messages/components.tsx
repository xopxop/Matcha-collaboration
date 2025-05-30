import clsx from "clsx";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export const ProfilePicture = ({
  className,
  highLighted,
  picture,
}: {
  className?: string;
  highLighted: boolean;
  picture: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        "h-[66px] w-[66px] flex items-center justify-center rounded-full ",
        highLighted &&
          "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
      )}
    >
      <div
        className={clsx(
          "h-[62px] w-[62px] flex items-center justify-center rounded-full",
          highLighted && "bg-white",
        )}
      >
        <Image
          src={picture}
          alt="Profile"
          width={58}
          height={58}
          className="w-[58px] h-[58px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export const SearchBar = () => {
  return (
    <div className="w-full h-12 border border-gray-300 rounded-2xl flex flex-row items-center gap-[11px]">
      <MagnifyingGlassIcon className="ml-5 h-5 w-5" />
      <input className="flex-1" placeholder="Search" />
    </div>
  );
};

export const FilterButton = () => {
  return (
    <div className="w-[52px] h-[52px] rounded-xl border flex items-center justify-center">
      <AdjustmentsHorizontalIcon className="h-6 w6" color="#E94057" />
    </div>
  );
};
