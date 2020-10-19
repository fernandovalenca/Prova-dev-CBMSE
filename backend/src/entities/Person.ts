import { v4 } from "uuid";

export class Person {
    public readonly id: string;

    public first_name: string;
    public second_name: string;

    constructor(props: Omit<Person, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        };
    };
};