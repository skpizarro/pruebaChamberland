import { Merchant } from "./merchant.interface";
import { User } from "./user.interface";

export interface Establishment {
  id: number;
  nameOfTheEstablishment: string;
  income: number;
  numberOfEmployees: number;
  dateUpdate: string;
  merchant: Merchant;
  userAccount: User;
}
