//import modules
import { eventServices } from "../services/eventService";
import { Request, Response } from "express";
import { EventSchemaValidate } from "../models/eventModel";

class eventController {
    // Add event controller
    addEvent = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            name: req.body.name,
            description: req.body.description,
            adress: req.body.adress,
            capacity: req.body.capacity,
            date: req.body.date,
        };
        //validating the request
        const { error, value } = EventSchemaValidate.validate(data);

        if (error) {
            res.send(error.message);
        } else {
            //call the create event function in the service and pass the data from the request
            const event = await eventServices.createEvent(value);
            res.status(201).send(event);
        }
    };

    //get all events
    getEvents = async (req: Request, res: Response) => {
        const events = await eventServices.getEvents();
        res.send(events);
    };

    //get a single event
    getOneEvent = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id;
        const event = await eventServices.getEvent(id);
        res.send(event);
    };

    //update event
    updateEvent = async (req: Request, res: Response) => {
        const id = req.params.id;
        const event = await eventServices.updateEvent(id, req.body);
        res.send(event);
    };

    //delete a event
    deleteEvent = async (req: Request, res: Response) => {
        const id = req.params.id;
        await eventServices.deleteEvent(id);
        res.send("event deleted");
    };
}

//export class
export const EventController = new eventController();
