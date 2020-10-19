export class ContactType {
    public readonly id: string;
    public name: string;

    constructor(props: ContactType) {
        Object.assign(this, props);
    };
};