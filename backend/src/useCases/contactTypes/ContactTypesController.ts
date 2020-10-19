import { Request, Response } from 'express';
import { ContactTypesUseCase } from "./ContactTypesUseCase";

export class ContactTypesController {
    constructor(private contactTypesUseCase: ContactTypesUseCase) { }

    async index(request: Request, response: Response): Promise<Response> {
        const contactTypes = await this.contactTypesUseCase.index();

        return response.json(contactTypes);
    }
}