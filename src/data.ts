const items: ItemInterface[] = [
  {id: "item1", content: "First task"},
  {id: "item2", content: "Second task"},
  {id: "item3", content: "Third task"},
  {id: "item4", content: "Fourth task"},
  {id: "item5", content: "Fifth task"},
  {id: "item6", content: "Sixth task"},
  {id: "item7", content: "Seventh task"},
  {id: "item8", content: "Eigth task"},
];

export const initColumns: {[key: string]: ColumnInterface} = {
  todo: {
    title: "To do",
    items: items,
    id: "todo",
  },
  inprogress: {
    title: "In Progress",
    items: [],
    id: "inprogress",
  },
  done: {
    title: "Done",
    items: [],
    id: "done",
  },
};

interface Column {
  [key: string]: ColumnInterface;
}

export interface ColumnInterface {
  id: string;
  title: string;
  items: ItemInterface[];
}

export interface ItemInterface {
  id: string;
  content: string;
}
