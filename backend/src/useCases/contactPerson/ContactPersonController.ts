import { Request, Response } from 'express';
import { ContactPersonUseCase } from "./ContactPersonUseCase";

export class ContactPersonController {
    constructor(private contactPersonUseCase: ContactPersonUseCase) { }

    async index(request: Request, response: Response): Promise<Response> {
        const { person_id } = request.params;
        try {
            const contactPersonList = await this.contactPersonUseCase.index(person_id);

            return response.json(contactPersonList);
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { contact, contact_type_id } = request.body;
        const { person_id } = request.params;

        try {
            await this.contactPersonUseCase.create({ contact_type_id, person_id, contact });

            return response.status(201).send()
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async read(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const contactPerson = await this.contactPersonUseCase.read(id);

            return response.json(contactPerson);
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { person_id, id } = request.params;
        const { contact_type_id, contact } = request.body;

        try {
            await this.contactPersonUseCase.update({ id, person_id, contact_type_id, contact })

            return response.status(200).send()
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { person_id } = request.params;
        try {
            await this.contactPersonUseCase.delete(id, person_id);

            return response.status(200).send()
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }
}