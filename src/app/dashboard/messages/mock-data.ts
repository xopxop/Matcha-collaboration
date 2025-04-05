import { MessagesPageData } from "./messages-page-data.interface";

export const mockData: MessagesPageData = {
  activities: [
    { name: "You", profileImage: "/images/you.png" },
    {
      name: "Emma",
      profileImage: "/images/emma.png",
      lastMessage: {
        fromId: 1,
        content: "Hello from 1",
        timeStampUTC: new Date(),
        unread: 1,
      },
    },
    { name: "Ava", profileImage: "/images/ava.png" },
    { name: "Sophia", profileImage: "/images/sophia.png" },
    {
      name: "Stella",
      profileImage: "/images/pug.jpeg",
      lastMessage: {
        fromId: 2,
        content: "Hello from 2",
        timeStampUTC: new Date(),
        unread: 1,
      },
    },
  ],
  messages: [
    {
      name: "Emelie",
      profileImage: "/images/emelie.png",
      lastMessage: {
        fromId: 3,
        content: "Sticker 😍",
        timeStampUTC: new Date("2025-04-05T10:41:00Z"),
        unread: 1,
      },
    },
    {
      name: "Abigail",
      profileImage: "/images/abigail.png",
      lastMessage: {
        fromId: 4,
        content: "Typing",
        timeStampUTC: new Date("2025-04-03T02:02:00Z"),
        unread: 2,
      },
    },
    {
      name: "Elizabeth",
      profileImage: "/images/elizabeth.png",
      lastMessage: {
        fromId: 5,
        content: "Ok, see you then.",
        timeStampUTC: new Date("2025-03-05T03:03:00Z"),
        unread: 1,
      },
    },
    {
      name: "Penelope",
      profileImage: "/images/penelope.png",
      lastMessage: {
        fromId: 0,
        content: "Hey! What's up, long time no see",
        timeStampUTC: new Date("2025-04-05T04:04:00Z"),
        unread: 0,
      },
    },
    {
      name: "Chloe",
      profileImage: "/images/chloe.png",
      lastMessage: {
        fromId: 0,
        content: "Hello how are you?",
        timeStampUTC: new Date("2025-04-05T05:05:00Z"),
        unread: 0,
      },
    },
    {
      name: "Grace",
      profileImage: "/images/grace.png",
      lastMessage: {
        fromId: 0,
        content: "Greate I will write later",
        timeStampUTC: new Date("2025-04-05T06:06:00Z"),
        unread: 0,
      },
    },
    {
      name: "Grace",
      profileImage: "/images/grace.png",
      lastMessage: {
        fromId: 0,
        content: "Greate I will write later",
        timeStampUTC: new Date("2025-04-05T07:07:00Z"),
        unread: 0,
      },
    },
    {
      name: "Grace",
      profileImage: "/images/grace.png",
      lastMessage: {
        fromId: 0,
        content: "Greate I will write later",
        timeStampUTC: new Date("2025-04-05T08:08:00Z"),
        unread: 0,
      },
    },
  ],
};
