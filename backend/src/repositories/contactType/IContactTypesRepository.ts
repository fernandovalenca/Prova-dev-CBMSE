import { ContactType } from "../../entities/ContactType";

export interface IContactTypesRepository {
    index(): Promise<ContactType[]>
}