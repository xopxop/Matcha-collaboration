import { FilterButton, ProfilePicture, SearchBar } from "./components";
import { mockData } from "./mock-data";
import { getTimeDifference } from "./helper";
import { Conversation } from "./messages-page-data.interface";

const ActivitiesPanel = ({
  conversations,
}: {
  conversations: Conversation[];
}) => {
  return (
    <div>
      <div className="text-[18px] font-medium">Activities</div>
      <div className="py-[10px] flex flex-row gap-[15px] overflow-x-scroll">
        {conversations.map((item, index) => (
          <div>
            <ProfilePicture
              key={index}
              picture={item.profileImage}
              highLighted={!!item.lastMessage}
            />
            <div className="h-[21px] flex content-center justify-center font-medium text-sm">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConversationItem = ({ item }: { item: Conversation }) => {
  return (
    <div className="py-[6px] flex flex-row w-full">
      <ProfilePicture
        className="mr-[10px]"
        picture={item.profileImage}
        highLighted={item.lastMessage!.fromId !== 0}
      />
      <div className="flex flex-col justify-center">
        <div className="font-medium text-sm">{item.name}</div>
        <div className="text-sm">{item.lastMessage!.content}</div>
      </div>
      <div className="ml-auto flex flex-col justify-center gap-[3px]">
        <div className="text-[12px] text-gray-500 font-medium">
          {(() => {
            const { minutes, hours, days } = getTimeDifference(
              item.lastMessage!.timeStampUTC,
            );
            if (days) {
              if (days === 1) return `${days} day`;
              return `${days} days`;
            }
            if (hours) {
              if (hours === 1) return `${hours} hour`;
              return `${hours} hours`;
            }
            return `${minutes} min`;
          })()}
        </div>
        <div className="w-full flex justify-end">
          <div className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            20
          </div>
        </div>
      </div>
    </div>
  );
};

const MessagesPanel = ({
  conversations,
}: {
  conversations: Conversation[];
}) => {
  return (
    <div>
      <div className="text-[18px] font-medium">Messages</div>
      <div>
        {conversations.map((item, index) => (
          <div key={index}>
            <ConversationItem item={item} />
            {index < conversations.length - 1 && (
              <hr className="my-2 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="pt-[10px] px-[40px] flex flex-col gap-[10px]">
      <div className="h-[52px] ml-[4px] flex flex-row justify-between items-center">
        <div className="text-[34px] font-medium">Message</div>
        <FilterButton />
      </div>
      <SearchBar />
      <ActivitiesPanel conversations={mockData.activities} />
      <MessagesPanel conversations={mockData.messages} />
    </div>
  );
}
