export interface ProductsArray {
  limit: number;
  products: Products[];
  skip: number;
  total: number;
}

export interface Products {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {};
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {};
  miniumOrderQuanity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: {}[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

export interface ProductCategories {
  name: string;
  slug: string;
  url: string;
}

export interface SubCategories {
  [key: string]: Products[];
}

export interface SupProductCategory {
  supCategoryName: string;
  subCategories: SubCategories;
  thumbnail: string;
}
