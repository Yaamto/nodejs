//import modules
import { adressServices } from "../services/adressService";
import { Request, Response } from "express";
import { AdressSchemaValidate } from "../models/adressModel";
const logger = require("../logger");
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
            logger.error(error.message);
            res.send(error.message);
        } else {
            //call the create adress function in the service and pass the data from the request
            const adress = await adressServices.createAdress(value);
            res.status(201).send(adress);
            logger.info(`Adress ${adress} added successfully`);
        }
    };

    //get all adresss
    getAdresses = async (req: Request, res: Response) => {
        try {
            const adresss = await adressServices.getAdresses();
            res.send(adresss);
        } catch (err) {
            logger.error(`${err}`);
        }
    };

    //get a single adress
    getOneAdress = async (req: Request, res: Response) => {
        try {
            //get id from the parameter
            const id = req.params.id;
            const adress = await adressServices.getAdress(id);
            res.send(adress);
        } catch (err) {
            logger.error(`${err}`);
        }
    };

    //update adress
    updateAdress = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const adress = await adressServices.updateAdress(id, req.body);
            res.send(adress);
            logger.info(`Adress ${adress} updated`);
        } catch (err) {
            logger.error(`${err}`);
        }
    };

    //delete a adress
    deleteAdress = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await adressServices.deleteAdress(id);
            res.send("adress deleted");
            logger.info(`Adress ${id} deleted`);
        } catch (err) {
            logger.error(`${err}`);
        }
    };
}

//export class
export const AdressController = new adressController();
