import mongoose from "mongoose";
import { IUser } from "./userModel";
import { IAdress } from "./adressModel";

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
            number: {
                type: Number,
            },
            street: {
                type: String,
            },
            city: {
                type: String,
            },
            zipcode: {
                type: Number,
            },
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
