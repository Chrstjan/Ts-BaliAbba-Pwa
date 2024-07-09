export interface productsArray {
  limit: number;
  products: products[];
  skip: number;
  total: number
}

export interface products {
  availabityStatus: string;
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

export interface productCategories {
  name: string;
  slug: string;
  url: string;
}

export interface subCategories {
  subCategories: products[];
}

export interface supProductCategory { 
  supCategoryName: string;
  subCategories: subCategories;
  thumbnail: string;
}