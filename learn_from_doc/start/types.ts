export type Book = {
  pages: number;
  color: string;
  price: number;
  available: boolean;
};

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

export type Random = Book | Dog;

export interface Outlier extends Dog {
  meta: any;
}
