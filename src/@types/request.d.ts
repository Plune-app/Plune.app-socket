import { User } from "src/chat/entities/user.entity";

export interface AppTokenPayload {
  iat : number;
  exp : number;
  user : User;
  org: string;
}