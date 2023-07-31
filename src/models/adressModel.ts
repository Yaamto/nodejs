import mongoose from "mongoose";
import joi from "joi";
import * as joiDate from "@joi/date";
const Joi = joi.extend(joiDate.default(joi)) as typeof joi;

export interface IAdress {
    _id: String;
    number: Number;
    street: String;
    city: String;
    zipcode: Number;
}

//validation schema
export const AdressSchemaValidate = Joi.object({
    number: Joi.number().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.number().required(),
});

const AdressSchema = new mongoose.Schema(
    {
        number: {
            type: Number,
            required: [true, "Number is required"],
        },
        street: {
            type: String,
            required: [true, "Street is required"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
        },
        zipcode: {
            type: Number,
            required: [true, "Zipcode is required"],
        },
    },
    {
        timestamps: true,
    }
);
export const Adress = mongoose.model("adress", AdressSchema);
