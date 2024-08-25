export interface Image {
  url: string;
}

export interface Business {
  _id: string;
  name: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: Image[];
}
