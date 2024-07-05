import { Establishment } from "./establishment.interface";
import { Municipality } from "./municipality.interface";
import { User } from "./user.interface";

export interface Merchant {
  merchantId:number;
  name: string;
  municipality:Municipality;
  phone:string;
  email:string;
  registrationDate:Date;
  status: string;
  updateDate: Date;
  userAccount: User;
  establishments: Establishment[];
}

