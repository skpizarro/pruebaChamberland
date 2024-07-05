import { Establishment } from "./establishment.interface";
import { Municipality } from "./municipality.interface";

export interface ApiResponse {
  data:    any;
  status:  number;
  message: string;
}

export interface Data {
  totalElements:    number;
  totalPages:       number;
  size:             number;
  content:          Content[];
  number:           number;
  sort:             Sort;
  first:            boolean;
  last:             boolean;
  numberOfElements: number;
  pageable:         Pageable;
  empty:            boolean;
}

export interface Content {
  merchantId:       number;
  name:             string;
  municipality:     Municipality;
  phone:            string;
  email:            string;
  registrationDate: Date;
  status:           string;
  updateDate:       null;
  idUser:           number;
  establishments:   Establishment[];
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
