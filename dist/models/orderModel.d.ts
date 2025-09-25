import { Ref } from "@typegoose/typegoose";
import { Product } from "./productModel.js";
import { User } from "./userModel.js";
declare class ShippingAddress {
    fullName?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    lat?: number;
    lng?: number;
}
declare class Item {
    name: string;
    quantity: string;
    image: string;
    price: number;
    product?: Ref<Product>;
}
declare class PaymentResult {
    paymentId: string;
    status: string;
    update_time: string;
    email_address: string;
}
export declare class Order {
    _id: string;
    orderItems: Item[];
    shippingAddress?: ShippingAddress;
    user?: Ref<User>;
    paymentMethod: string;
    paymentResult?: PaymentResult;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
    isPaid: boolean;
    paidAt: Date;
    isDelivered: boolean;
    deliveredAt: Date;
}
export declare const OrderModel: import("@typegoose/typegoose").ReturnModelType<typeof Order, import("@typegoose/typegoose/lib/types.js").BeAnObject>;
export {};
//# sourceMappingURL=orderModel.d.ts.map