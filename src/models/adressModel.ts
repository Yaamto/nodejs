import mongoose from "mongoose";

export interface IAdress {
    _id: String;
    number: Number;
    street: String;
    city: String;
    zipcode: Number;
}
