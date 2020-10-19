import { Request, Response } from 'express';
import { PersonUseCase } from "./PersonUseCase";

export class PersonController {
    constructor(private personUseCase: PersonUseCase) { }

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const persons = await this.personUseCase.index();

            return response.json(persons);
        } catch (error) {
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { first_name, second_name } = request.body;

        try {
            await this.personUseCase.create({ first_name, second_name });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({ message: error.message || 'Unexpected error.' });
        }
    }

    async read(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const person = await this.personUseCase.read(id);

            return response.json(person);
        } catch (error) {

            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { first_name, second_name } = request.body;

        try {
            await this.personUseCase.update({ id, first_name, second_name });

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.personUseCase.delete(id);

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({ message: error.message || 'Unexpected error.' })
        }
    }
}