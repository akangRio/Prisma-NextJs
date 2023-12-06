export interface Post {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
}

export interface Profile {
  id: number;
  bio: string;
  userId: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  posts: Post[];
  profile: Profile;
}
