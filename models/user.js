import { getModel } from "@utils/database";
import { Schema } from "mongoose";

const schema = new Schema({
    name: String,
    size: String
});

const userModel = getModel("Person", schema);

export default userModel;