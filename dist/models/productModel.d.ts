export declare class Product {
    _id?: string;
    name: string;
    slug: string;
    brand: string;
    image: string;
    category: string;
    description: string;
    price: number;
    countInStock: number;
    numReviews: number;
    rating: number;
}
export declare const ProductModel: import("@typegoose/typegoose").ReturnModelType<typeof Product, import("@typegoose/typegoose/lib/types").BeAnObject>;
//# sourceMappingURL=productModel.d.ts.map