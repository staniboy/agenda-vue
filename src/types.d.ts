export type Item = {
  id: number;
  text: string;
  status: boolean;
};

export type List = {
  id: number;
  name: string;
  items: Array<Item>;
};
