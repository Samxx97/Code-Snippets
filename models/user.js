import { getModel } from "@utils/database";
import { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    image: {
        type: String,
    }
});

const userModel = getModel("Person", schema);

export default userModel;