import { DailyMatches } from "./page-data.interface";

export const mockData: DailyMatches[] = [
  {
    daysAgo: 0,
    profiles: [
      {
        name: "Leilani",
        age: 19,
        profileImage: "/images/matches/leilani.png",
        liked: false,
      },
      {
        name: "Annabelle",
        age: 20,
        profileImage: "/images/matches/annabelle.png",
        liked: false,
      },
      {
        name: "Reagan",
        age: 24,
        profileImage: "/images/matches/reagan.png",
        liked: false,
      },
      {
        name: "Hadley",
        age: 25,
        profileImage: "/images/matches/hadley.png",
        liked: false,
      },
    ],
  },
  {
    daysAgo: 1,
    profiles: [
      {
        name: "Unlknown 1",
        age: 19,
        profileImage: "/images/matches/unknown_1.png",
        liked: false,
      },
      {
        name: "Unlknown 2",
        age: 20,
        profileImage: "/images/matches/unknown_2.png",
        liked: true,
      },
    ],
  },
  {
    daysAgo: 3,
    profiles: [
      {
        name: "Unlknown 3",
        age: 24,
        profileImage: "",
        liked: false,
      },
      {
        name: "Unlknown 4",
        age: 25,
        profileImage: "",
        liked: false,
      },
    ],
  },
];
