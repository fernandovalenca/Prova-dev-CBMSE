import { Router } from "express";
import { contactPersonController } from "./useCases/contactPerson";
import { contactTypesController } from "./useCases/contactTypes";
import { personController } from "./useCases/person";

const router = Router();

//Rotas: Tipos de Contato

router.get('/types', (request, response) => {
    return contactTypesController.index(request, response);
})

//Rotas: Pessoas

router.get('/persons', (request, response) => {
    return personController.index(request, response);
})
router.post('/newperson', (request, response) => {
    return personController.create(request, response);
})
router.get('/person/:id', (request, response) => {
    return personController.read(request, response);
})
router.put('/person/:id', (request, response) => {
    return personController.update(request, response);
})
router.delete('/persons/:id', (request, response) => {
    return personController.delete(request, response);
})

//Rotas: Contato

router.get('/contacts/:person_id', (request, response) => {
    return contactPersonController.index(request, response);
})

router.post('/newcontact/:person_id', (request, response) => {
    return contactPersonController.create(request, response);
})

router.get('/contact/:person_id/:id', (request, response) => {
    return contactPersonController.read(request, response);
})

router.put('/contact/:person_id/:id', (request, response) => {
    return contactPersonController.update(request, response);
})

router.delete('/contact/:person_id/:id', (request, response) => {
    return contactPersonController.delete(request, response);
})

export { router };
