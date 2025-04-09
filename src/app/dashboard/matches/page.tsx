import { HeartIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { DailyMatches, Profile } from "./page-data.interface";
import { mockData } from "./mock-data";

const SortingButton = () => {
  return (
    <div className="w-[52px] h-[52px] rounded-xl border flex items-center justify-center">
      <ArrowsUpDownIcon className="h-6 w6" color="#E94057" />
    </div>
  );
};

const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <div className="relative">
      <Image
        src={profile.profileImage}
        alt="Profile"
        width={140}
        height={200}
        className="h-[200px] w-[140px] rounded-lg object-cover"
      />

      {profile.liked ? (
        <button className="absolute top-[6px] right-[5px] w-[40px] h-[40px] rotate-[10deg] bg-white rounded-full flex items-center justify-center">
          <HeartIcon fill="red" width={24} height={24} />
        </button>
      ) : (
        <>
          <div className="absolute bottom-[44px] w-full">
            <div className="px-[16px] text-white text-[16px] font-medium">
              {profile.name + ", " + profile.age}
            </div>
          </div>
          <div className="absolute bottom-0 h-[40px] w-full backdrop-blur-[9px] rounded-b-lg"></div>
          <div className="absolute bottom-0 h-[40px] w-full rounded-b-2xl flex flex-row">
            <button className="w-full h-full flex justify-center items-center">
              <XMarkIcon fill="white" width={22} height={22} />
            </button>
            <div className="w-1 bg-white/30"></div>
            <button className="w-full h-full flex justify-center items-center">
              <HeartIcon fill="white" width={22} height={22} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const DailyProfilesCard = ({
  dailyMatches,
}: {
  dailyMatches: DailyMatches;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-[10px]">
        <hr className="grow" />
        <div className="px-[10px] text-[12px] leading-[18px]">
          {dailyMatches.daysAgo === 0
            ? "Today"
            : dailyMatches.daysAgo === 1
              ? "Yesterday"
              : `${dailyMatches.daysAgo} days ago`}
        </div>
        <hr className="grow" />
      </div>
      <div className="grid grid-cols-2 gap-y-[15px] gap-x-[15px] justify-items-center">
        {dailyMatches.profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="pt-[10px] px-[40px] flex flex-col gap-[10px]">
      <div className="h-[52px] flex flex-row justify-between items-center">
        <div className="text-[34px] font-medium">Matches</div>
        <SortingButton />
      </div>
      <div className="text-base">
        This is a list of people who have liked you and your matches
      </div>
      <div className="flex flex-col gap-[16px]">
        {mockData.map((item, index) => (
          <DailyProfilesCard key={index} dailyMatches={item} />
        ))}
      </div>
    </div>
  );
}
