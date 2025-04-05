import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { clsx } from 'clsx';

type Conversation = {
  name: string,
  profileImage: string,
  lastMessage?: {
    fromId: number,
    content: string,
    timeStampUTC: Date,
    unread: number
  }
}

type MessagesPageData = {
  activities: Conversation[],
  messages: Conversation[]
}

const SearchBar = () => {
  return (
    <div className="w-full h-12 border border-gray-300 rounded-2xl flex flex-row items-center gap-[11px]">
      <MagnifyingGlassIcon className="ml-5 h-5 w-5" />
      <input className="flex-1" placeholder="Search" />
    </div>
  );
}

const ProfilePicture = (
  {
    className,
    highLighted,
    picture,
  }: { className?: string, highLighted: boolean, picture: string }
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
  // Mock data
  const mockData: MessagesPageData = {
    activities: [
      { name: "You", profileImage: "/images/you.png" },
      { name: "Emma", profileImage: "/images/emma.png", lastMessage: { fromId: 1, content: "Hello from 1", timeStampUTC: new Date(), unread: 1 } },
      { name: "Ava", profileImage: "/images/ava.png" },
      { name: "Sophia", profileImage: "/images/sophia.png" },
      { name: "Stella", profileImage: "/images/pug.jpeg", lastMessage: { fromId: 2, content: "Hello from 2", timeStampUTC: new Date(), unread: 1 } },
    ],
    messages: [
      { name: "Emelie", profileImage: "/images/emelie.png", lastMessage: { fromId: 3, content: "Sticker 😍", timeStampUTC: new Date("2025-04-05T10:41:00Z"), unread: 1 } },
      { name: "Abigail", profileImage: "/images/abigail.png", lastMessage: { fromId: 4, content: "Typing", timeStampUTC: new Date("2025-04-03T02:02:00Z"), unread: 2 } },
      { name: "Elizabeth", profileImage: "/images/elizabeth.png", lastMessage: { fromId: 5, content: "Ok, see you then.", timeStampUTC: new Date("2025-03-05T03:03:00Z"), unread: 1 } },
      { name: "Penelope", profileImage: "/images/penelope.png", lastMessage: { fromId: 0, content: "Hey! What's up, long time no see", timeStampUTC: new Date("2025-04-05T04:04:00Z"), unread: 0 } },
      { name: "Chloe", profileImage: "/images/chloe.png", lastMessage: { fromId: 0, content: "Hello how are you?", timeStampUTC: new Date("2025-04-05T05:05:00Z"), unread: 0 } },
      { name: "Grace", profileImage: "/images/grace.png", lastMessage: { fromId: 0, content: "Greate I will write later", timeStampUTC: new Date("2025-04-05T06:06:00Z"), unread: 0 } },
      { name: "Grace", profileImage: "/images/grace.png", lastMessage: { fromId: 0, content: "Greate I will write later", timeStampUTC: new Date("2025-04-05T07:07:00Z"), unread: 0 } },
      { name: "Grace", profileImage: "/images/grace.png", lastMessage: { fromId: 0, content: "Greate I will write later", timeStampUTC: new Date("2025-04-05T08:08:00Z"), unread: 0 } },
    ]
  }


  function getTimeDifference(timeStampUTC: Date) {
    const utcNow = new Date();
    const timeDifference = utcNow.getTime() - timeStampUTC.getTime();

    return {
      minutes: Math.floor(timeDifference / (1000 * 60)),
      hours: Math.floor(timeDifference / (1000 * 60 * 60)),
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    };
  }


  return (
    <div className="pt-[10px] px-[40px] flex flex-col gap-[10px]">
      <div className="h-[52px] ml-[4px] flex flex-row justify-between items-center">
        <div className="text-[34px] font-medium">Message</div>
        <div className="w-[52px] h-[52px] rounded-xl border flex items-center justify-center">
          <AdjustmentsHorizontalIcon className="h-6 w6" color="#E94057"/>
        </div>
      </div>
      <SearchBar />
      <div>
        <div className="text-[18px] font-medium">Activities</div>
        <div className="py-[10px] flex flex-row gap-[15px] overflow-x-scroll">
          {mockData.activities.map((item, index) => (
            <div>
              <ProfilePicture key={index} picture={item.profileImage} highLighted={!!item.lastMessage} />
              <div className="h-[21px] flex content-center justify-center font-medium text-sm">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[18px] font-medium">Messages</div>
        <div>
            {mockData.messages.map((item, index) => (
            <div key={index}>
              <div className="py-[6px] flex flex-row w-full">
                <ProfilePicture className="mr-[10px]" picture={item.profileImage} highLighted={item.lastMessage!.fromId !== 0} />
                <div className="flex flex-col justify-center">
                  <div className="font-medium text-sm">{item.name}</div>
                  <div className="text-sm">{item.lastMessage!.content}</div>
                </div>
                <div className="ml-auto flex flex-col justify-center gap-[3px]">
                  <div className="text-[12px] text-gray-500 font-medium">{
                    (() => {
                      const { minutes, hours, days } = getTimeDifference(item.lastMessage!.timeStampUTC);
                      if (days) {
                        if (days === 1) return `${days} day`;
                        return `${days} days`;
                      }
                      if (hours) {
                        if (hours === 1) return `${hours} hour`;
                        return `${hours} hours`;
                      }
                      return `${minutes} min`;
                    })()
                  }</div>
                  <div className="w-full flex justify-end">
                    <div className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      20
                    </div>
                  </div>
                </div>
              </div>
              {index < mockData.messages.length - 1 && <hr className="my-2 border-gray-300" />}
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}