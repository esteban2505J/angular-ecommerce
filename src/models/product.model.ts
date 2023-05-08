export interface Product {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
    updateAt: Date;
  };
}
