// Import module
import { Event } from "../models/eventModel";

export class eventService {
    // Create a event
    async createEvent(data: any) {
        try {
            return await Event.create(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Get all Events
    async getEvents() {
        try {
            return await Event.find({}).populate("adress");
        } catch (error) {
            console.log(error);
        }
    }

    // Get a single event
    async getEvent(id: string) {
        try {
            const event = await Event.findById({ _id: id }).populate("adress");
            if (!event) {
                return "event not available";
            }
            return event;
        } catch (error) {
            console.log(error);
        }
    }

    //update a event
    async updateEvent(id: string, data: any) {
        try {
            //pass the id of the object you want to update
            //data is for the new body you are updating the old one with
            //new:true, so the dats being returned, is the update one
            const event = await Event.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!event) {
                return "event not available";
            }
            return event;
        } catch (error) {
            console.log(error);
        }
    }

    //delete a event by using the find by id and delete
    async deleteEvent(id: string) {
        try {
            const event = await Event.findByIdAndDelete(id);
            if (!event) {
                return "event not available";
            }
        } catch (error) {
            console.log(error);
        }
    }
}

//export the class
export const eventServices = new eventService();
