import { v4 } from "uuid";

export class ContactPerson {
    public readonly id: string;

    public contact: string;
    public person_id: string;
    public contact_type_id: number;

    constructor(props: Omit<ContactPerson, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        };
    };
};