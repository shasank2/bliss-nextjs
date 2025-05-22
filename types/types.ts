export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}