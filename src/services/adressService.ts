// Import module
import { Adress } from "../models/adressModel";

export class adressService {
    // Create an adress
    async createAdress(data: any) {
        try {
            return await Adress.create(data);
        } catch (error) {
            logger.error(error);
        }
    }

    // Get all Addresses
    async getAdresses() {
        try {
            return await Adress.find({});
        } catch (error) {
            logger.error(error);
        }
    }

    // Get a single adress
    async getAdress(id: string) {
        try {
            const adress = await Adress.findById({ _id: id });
            if (!adress) {
                logger.info(`Adress ${id} does not exist`);
                return "adress not available";
            }
            return adress;
        } catch (error) {
            logger.error(error);
        }
    }

    //update a adress
    async updateAdress(id: string, data: any) {
        try {
            //pass the id of the object you want to update
            //data is for the new body you are updating the old one with
            //new:true, so the dats being returned, is the update one
            const adress = await Adress.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!adress) {
                logger.info(`Adress ${id} does not exist`);
                return "adress not available";
            }
            return adress;
        } catch (error) {
            logger.error(error);
        }
    }

    //delete a adress by using the find by id and delete
    async deleteAdress(id: string) {
        try {
            const adress = await Adress.findByIdAndDelete(id);
            if (!adress) {
                logger.info(`Adress ${id} does not exist`);
                return "adress not available";
            }
        } catch (error) {
            logger.error(error);
        }
    }
}

//export the class
export const adressServices = new adressService();
