// Import module
import { Adress } from "../models/adressModel";

export class adressService {
    // Create an adress
    async createAdress(data: any) {
        try {
            return await Adress.create(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Get all Addresses
    async getAdresses() {
        try {
            return await Adress.find({});
        } catch (error) {
            console.log(error);
        }
    }

    // Get a single adress
    async getAdress(id: string) {
        try {
            const adress = await Adress.findById({ _id: id });
            if (!adress) {
                return "adress not available";
            }
            return adress;
        } catch (error) {
            console.log(error);
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
                return "adress not available";
            }
            return adress;
        } catch (error) {
            console.log(error);
        }
    }

    //delete a adress by using the find by id and delete
    async deleteAdress(id: string) {
        try {
            const adress = await Adress.findByIdAndDelete(id);
            if (!adress) {
                return "adress not available";
            }
        } catch (error) {
            console.log(error);
        }
    }
}

//export the class
export const adressServices = new adressService();
