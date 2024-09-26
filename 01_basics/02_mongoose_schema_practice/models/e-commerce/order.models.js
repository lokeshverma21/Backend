import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },

    quantity: {
        type: Number,
        required: true,
    }
},{timestamps: true})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },

    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    orderItems:{
        type: [OrderItemSchema],


        //We can also do this 

        // type: [
        //     {
        //         productId : mongoose.Schema.Types.ObjectId,
        //         ref: "Product",
        //     }
        // ]
    },

    address: {
        type: String,
        required: true
    },

    status:{
        type: String,
        enum: ["PENDING","DELIVERED","CANCELLED"], 
        //enum gives choices, it means that the status will be of type string
        //but can only be choosen from the enum
        
        default: "PENDING"
    }
},{timestamps: true})

export const Order = mongoose.model("Order",orderSchema)