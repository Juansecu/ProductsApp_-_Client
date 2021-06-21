export interface Product {
  readonly _id?: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  createdAt?: Date;
}
