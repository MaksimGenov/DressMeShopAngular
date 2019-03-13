import { Sort } from "./Sort";

export interface PageRequest {
  page: Number
  size: Number
  sort: Sort[]
}