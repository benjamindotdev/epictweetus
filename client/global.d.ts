export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  submittedTweets: Tweet[];
  likedTweets: Tweet[];
  Like: Like[];
};

export type Author = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  tweets: Tweet[];
  yearOfBirth: number;
  yearOfDeath: number;
  nationality: string;
  profession: Profession[];
};

export type Profession = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  authors: Author[];
};

export type Tweet = {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: User;
  likes: Like[];
};

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: User;
  tweetId: string;
  tweet: Tweet;
};
