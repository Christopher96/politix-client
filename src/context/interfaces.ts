export enum BoardColor {
  Green = "#1DA57A",
  Red = "#f5222d",
}

export interface IPost {
  createdBy: IUser;
  created: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  createdBy: IUser;
  created: string;
  content: string;
}

export interface IUser {
  name: string;
}
