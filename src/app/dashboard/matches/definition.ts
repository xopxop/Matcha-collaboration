export type Profile = {
  name: string;
  age: number;
  profileImage: string;
  liked: boolean;
};

export type DailyMatches = {
  daysAgo: number;
  profiles: Profile[];
};
