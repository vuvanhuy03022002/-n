import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    order_code: String,
    cancelOrder: Boolean,

    orderItems: [{
        name: { type: String, required: true},
        qty: { type: String, required: true},
        image: { type: String, required: true},
        salePrice: { type: Number, required: true},
        size: {type: String},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    shippingAddress: {
        province: {type: String},
        district: {type: String},
        ward: {type: String},
        detail: {type: String},
        name: {type: String},
        phone: {type: String},
    },
    paymentMethod: String,
    // paymentResult: {
    //     id: String,
    //     status: String,
    //     update_time: String,
    //     email_address: String,
    // },
    name: String,
    status: String,
    totalPrice: { type: Number},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
},
{
    timestamps: true,
}
)

export const OrderModel = mongoose.model('Order', orderSchema);
