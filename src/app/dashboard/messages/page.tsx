import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { clsx } from 'clsx';

const SearchBar = () => {
  return (
    <div className="h-12 w-full border border-gray-300 rounded-lg flex flex-row items-center gap-[11px]">
      <MagnifyingGlassIcon className="ml-5 h-5 w-5" />
      <input className="flex-1" placeholder="Search" />
      {/* <input type="text" placeholder="Search" className="w-full h-12" style={{border: '1px solid #E8E6EA', borderRadius: 15}} /> */}
      {/* <input type="text" placeholder="Search" className="w-full h-12" style={{border: '1px solid #E8E6EA', borderRadius: 15}} /> */}
    </div>
  );
}

const ProfilePicture = (
  {
    className = "",
    highLighted = false,
    picture,
  }: { className?: string, highLighted?: boolean, picture: string }
) => {
  return (
    <div
      className={
        clsx(
          "flex-shrink-0 flex-grow-0 basis-auto h-[66px] w-[66px] rounded-full border flex items-center justify-center",
          highLighted && "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
          className
        )
      } 
    >
      <div className="h-[58px] w-[58px] rounded-full border">
        <img src={picture} alt="Profile" className="w-full h-full rounded-full object-cover" />
      </div>
    </div>
  );
}

export default function Page() {

  const data = {
    waitToChat: [
      { profile: { name: "You", picture: "/images/you.png" } },
      { profile: { name: "Emma", picture: "/images/emma.png" } },
      { profile: { name: "Ava", picture: "/images/ava.png" } },
      { profile: { name: "Sophia", picture: "/images/sophia.png" } },
      { profile: { name: "Stella", picture: "/images/pug.jpeg" } },
    ],
    chatEnabled: [
      { profile: { name: "Emelie", picture: "/images/emelie.png" } },
      { profile: { name: "Abigail", picture: "/images/abigail.png" } },
      { profile: { name: "Elizabeth", picture: "/images/elizabeth.png" } },
      { profile: { name: "Penelope", picture: "/images/penelope.png" } },
      { profile: { name: "Chloe", picture: "/images/chloe.png" } },
      { profile: { name: "Grace", picture: "/images/grace.png" } },
    ]
  };

  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Message</h1>
        <button>Filter Button</button>
      </div>
      <SearchBar />
      <div>
        <h1>Activities</h1>

        <div className="flex flex-row gap-[15px] overflow-x-scroll">
          {data.waitToChat.map((item, index) => (
            <ProfilePicture key={index} picture={item.profile.picture} />
          ))}
        </div>
      </div>
      <div>
        <h1>Messages</h1>

        <div>
            {data.chatEnabled.map((item, index) => (
            <div key={index}>
              <div className="py-[6px] flex flex-row w-full">
              <ProfilePicture className="mr-[10px]" highLighted={true} picture={item.profile.picture} />
              <div>chat container</div>
              <div className="ml-auto">chat info</div>
              </div>
              {index < data.chatEnabled.length - 1 && <hr className="my-2 border-gray-300" />}
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}