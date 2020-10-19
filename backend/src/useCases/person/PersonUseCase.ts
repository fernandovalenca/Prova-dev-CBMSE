import { Person } from "../../entities/Person";
import { IPersonRepository } from "../../repositories/person/IPersonRepository";
import { PersonDTO } from "./PersonDTO";

export class PersonUseCase {
    constructor(private personRepository: IPersonRepository) { }

    async create(data: PersonDTO) {

        const personAlreadyExists = await this.personRepository.findPersonByCompleteName(data.first_name, data.second_name);

        if (personAlreadyExists) {
            throw new Error('Person already exists.');
        };

        const person = new Person(data);

        await this.personRepository.save(person);
    };

    async read(id: string) {
        const person = await this.personRepository.findPersonById(id);

        return person;
    };

    async update(data: PersonDTO) {
        const person = new Person(data, data.id);

        await this.personRepository.update(person);
    };

    async delete(id: string) {
        await this.personRepository.delete(id);
    };

    async index() {
        const persons = await this.personRepository.index();

        return persons;
    };
};