var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { getModelForClass, modelOptions, prop, } from "@typegoose/typegoose";
import { Product } from "./productModel.js";
import { User } from "./userModel.js";
class ShippingAddress {
    fullName;
    address;
    city;
    postalCode;
    country;
    lat;
    lng;
}
__decorate([
    prop(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "fullName", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "address", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "city", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "postalCode", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "country", void 0);
__decorate([
    prop(),
    __metadata("design:type", Number)
], ShippingAddress.prototype, "lat", void 0);
__decorate([
    prop(),
    __metadata("design:type", Number)
], ShippingAddress.prototype, "lng", void 0);
class Item {
    name;
    quantity;
    image;
    price;
    product;
}
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Item.prototype, "quantity", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Item.prototype, "image", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Item.prototype, "price", void 0);
__decorate([
    prop({ ref: Product }),
    __metadata("design:type", Object)
], Item.prototype, "product", void 0);
class PaymentResult {
    paymentId;
    status;
    update_time;
    email_address;
}
__decorate([
    prop(),
    __metadata("design:type", String)
], PaymentResult.prototype, "paymentId", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], PaymentResult.prototype, "status", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], PaymentResult.prototype, "update_time", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], PaymentResult.prototype, "email_address", void 0);
let Order = class Order {
    _id;
    orderItems;
    shippingAddress;
    user;
    paymentMethod;
    paymentResult;
    itemsPrice;
    shippingPrice;
    taxPrice;
    totalPrice;
    isPaid;
    paidAt;
    isDelivered;
    deliveredAt;
};
__decorate([
    prop(),
    __metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
__decorate([
    prop(),
    __metadata("design:type", ShippingAddress)
], Order.prototype, "shippingAddress", void 0);
__decorate([
    prop({ ref: User }),
    __metadata("design:type", Object)
], Order.prototype, "user", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    prop(),
    __metadata("design:type", PaymentResult)
], Order.prototype, "paymentResult", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "itemsPrice", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "shippingPrice", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "taxPrice", void 0);
__decorate([
    prop({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isPaid", void 0);
__decorate([
    prop(),
    __metadata("design:type", Date)
], Order.prototype, "paidAt", void 0);
__decorate([
    prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDelivered", void 0);
__decorate([
    prop(),
    __metadata("design:type", Date)
], Order.prototype, "deliveredAt", void 0);
Order = __decorate([
    modelOptions({ schemaOptions: { timestamps: true } })
], Order);
export { Order };
export const OrderModel = getModelForClass(Order);
//# sourceMappingURL=orderModel.js.map