import { IPerson } from "./person";

export interface IUser {
    id?: string;
    email?: string;
    person?: IPerson;
    personId?: string;
    is_admin?: boolean;
}