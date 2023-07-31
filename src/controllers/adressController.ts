//import modules
import { adressServices } from "../services/adressService";
import { Request, Response } from "express";
import { AdressSchemaValidate } from "../models/adressModel";

class adressController {
    // Add adress controller
    addAdress = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            number: req.body.number,
            street: req.body.street,
            city: req.body.city,
            zipcode: req.body.zipcode,
        };
        //validating the request
        const { error, value } = AdressSchemaValidate.validate(data);

        if (error) {
            res.send(error.message);
        } else {
            //call the create adress function in the service and pass the data from the request
            const adress = await adressServices.createAdress(value);
            res.status(201).send(adress);
        }
    };

    //get all adresss
    getAdresss = async (req: Request, res: Response) => {
        const adresss = await adressServices.getAdresses();
        res.send(adresss);
    };

    //get a single adress
    getOneAdress = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id;
        const adress = await adressServices.getAdress(id);
        res.send(adress);
    };

    //update adress
    updateAdress = async (req: Request, res: Response) => {
        const id = req.params.id;
        const adress = await adressServices.updateAdress(id, req.body);
        res.send(adress);
    };

    //delete a adress
    deleteAdress = async (req: Request, res: Response) => {
        const id = req.params.id;
        await adressServices.deleteAdress(id);
        res.send("adress deleted");
    };
}

//export class
export const AdressController = new adressController();
