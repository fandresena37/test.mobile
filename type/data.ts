export interface dataType {
  nom: string;
  src: string;
  desc: string;
  price: number;
  stock: number;
  categories: string;
  vendeur: string;
  id: number;
}

export interface userType {
  id: number;
  email: string;
  username: string;
  password: string;
}
