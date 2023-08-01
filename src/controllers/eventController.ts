//import modules
import { eventServices } from "../services/eventService";
import { Request, Response } from "express";
import { EventSchemaValidate } from "../models/eventModel";
const logger = require("../logger");
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
            logger.error(error.message);
            res.send(error.message);
        } else {
            //call the create event function in the service and pass the data from the request
            const event = await eventServices.createEvent(value);
            res.status(201).send(event);
            logger.info(`Adress ${event} added successfully`);
        }
    };

    //get all events
    getEvents = async (req: Request, res: Response) => {
        try {
            const events = await eventServices.getEvents();
            res.send(events);
            logger.info(`Events are loaded successfully`);
        } catch (err) {
            logger.error(`${err}`);
        }
    };

    //get a single event
    getOneEvent = async (req: Request, res: Response) => {
        try {
            //get id from the parameter
            const id = req.params.id;
            const event = await eventServices.getEvent(id);
            res.send(event);
        } catch (err) {
            logger.error(`${err}`);
        }
    };

    //update event
    updateEvent = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const event = await eventServices.updateEvent(id, req.body);
            res.send(event);
            logger.info(`Adress ${event} updated`);
        } catch (err) {
            logger.error(`${err}`);
        }
    };

    //delete a event
    deleteEvent = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await eventServices.deleteEvent(id);
            res.send("event deleted");
            logger.info(`Event ${id} deleted`);
        } catch (err) {
            logger.error(`${err}`);
        }
    };
    getEventsDependsOnNameAndCapacityANdAdress = async (req: Request, res: Response) => {
        const events = await eventServices.getEventsDependsOnNameAndCapacityANdAdress();
        res.send(events);
    };
}

//export class
export const EventController = new eventController();
