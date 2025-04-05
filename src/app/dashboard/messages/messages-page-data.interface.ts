export type Conversation = {
  name: string;
  profileImage: string;
  lastMessage?: {
    fromId: number;
    content: string;
    timeStampUTC: Date;
    unread: number;
  };
};

export type MessagesPageData = {
  activities: Conversation[];
  messages: Conversation[];
};
