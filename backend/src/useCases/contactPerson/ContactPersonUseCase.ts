import { ContactPerson } from "../../entities/ContactPerson";
import { IContactPersonRepository } from "../../repositories/contactPerson/IContactPersonRepository";
import { ContactPersonDTO } from "./ContactPersonDTO";

export class ContactPersonUseCase {
    constructor(private contactPersonRepository: IContactPersonRepository) { }

    async index(person_id: string) {
        const contactPersonList = await this.contactPersonRepository.index(person_id);

        return contactPersonList;
    }

    async create(data: ContactPersonDTO) {
        const contactAlreadyExists = await this.contactPersonRepository.findByContact(data.contact);

        if (contactAlreadyExists) {
            throw new Error('Contact already exists.');
        }

        const contactPerson = new ContactPerson(data);

        await this.contactPersonRepository.save(contactPerson);
    }

    async read(id: string) {
        const contactPerson = await this.contactPersonRepository.show(id);

        return contactPerson;
    }

    async update(data: ContactPersonDTO) {
        const contactAlreadyExists = await this.contactPersonRepository.findByContact(data.contact);

        if (contactAlreadyExists) {
            throw new Error('Contact already exists.');
        }

        const contactPerson = new ContactPerson(data, data.id);

        await this.contactPersonRepository.updade(contactPerson);
    }

    async delete(id: string, person_id: string) {
        await this.contactPersonRepository.delete(id, person_id);
    }
}