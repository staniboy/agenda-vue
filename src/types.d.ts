export type Item = {
  id: number;
  text: string;
  status: boolean;
  dateAdded: string;
};

export type List = {
  id: number;
  name: string;
  items: Array<Item>;
};
