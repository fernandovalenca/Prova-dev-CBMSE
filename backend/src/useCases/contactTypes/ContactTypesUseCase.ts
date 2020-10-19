import { IContactTypesRepository } from "../../repositories/contactType/IContactTypesRepository";

export class ContactTypesUseCase {
    constructor(private contactTypesRepository: IContactTypesRepository) { }

    async index() {
        const contactTypes = this.contactTypesRepository.index();

        return contactTypes;
    }
}