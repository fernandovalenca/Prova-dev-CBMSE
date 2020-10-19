import { Person } from "../../entities/Person";

export interface IPersonRepository {
    findPersonByCompleteName(first_name: string, second_name: string): Promise<Person>;
    findPersonById(id: string): Promise<Person>;
    save(person: Person): Promise<void>;
    update(person: Person): Promise<void>;
    delete(id: string): Promise<void>;
    index(): Promise<Person[]>;
};