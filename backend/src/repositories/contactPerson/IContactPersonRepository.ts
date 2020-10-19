import { ContactPerson } from "../../entities/ContactPerson";

export interface IContactPersonRepository {
    index(person_id: string): Promise<ContactPerson[]>
    show(id: string): Promise<ContactPerson>
    save(contactPerson: ContactPerson): Promise<void>
    updade(contactPerson: ContactPerson): Promise<void>
    delete(id: string, person_id: string): Promise<void>
    findByContact(contact: string): Promise<ContactPerson>
}