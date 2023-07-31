import mongoose from "mongoose";
import { IUser } from "./userModel";
import { IAdress } from "./adressModel";
import joi from "joi";
import * as joiDate from "@joi/date";
const Joi = joi.extend(joiDate.default(joi)) as typeof joi;

//validation schema
export const EventSchemaValidate = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    adress: Joi.string().required(),
    capacity: Joi.number().required(),
    date: Joi.date().format("YYYY-MM-DD").required(),
});
export interface IEvent {
    _id: String;
    name: String;
    description: String;
    adress: IAdress;
    capacity: Number;
    date: Date;
    users: IUser[];
}

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        adress: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "adress",
        },
        capacity: {
            type: Number,
            required: [true, "Capacity is required"],
        },
        date: {
            type: Date,
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    {
        timestamps: true,
    }
);
export const Event = mongoose.model("event", EventSchema);
