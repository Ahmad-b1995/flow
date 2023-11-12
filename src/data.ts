const items: ItemInterface[] = [
  {
    id: "feature1 title",
    title: "feature1 title",
    content: "First feature",
    type: "feature",
    priority: "medium",
  },
  {
    id: "meeting the 2nd",
    title: "meeting the 2nd",
    content: "Second meeting",
    type: "meeting",
    priority: "medium",
  },
  {
    id: "bug3",
    title: "bug3",
    content: "Third bug",
    type: "bug",
    priority: "urgent",
  },
  {
    id: "production feature ",
    title: "production feature ",
    content: "Fourth feature",
    type: "feature",
    priority: "high",
  },
  {
    id: "medium feature",
    title: "medium feature",
    content: "Fifth feature",
    type: "feature",
    priority: "medium",
  },
  {
    id: "bug6",
    title: "bug6",
    content: "Sixth bug",
    type: "bug",
    priority: "medium",
  },
  {
    id: "important meeting",
    title: "important meeting",
    content: "Seventh meeting",
    type: "meeting",
    priority: "urgent",
  },
  {
    id: "required feature",
    title: "required feature",
    content: "Eigth feature",
    type: "feature",
    priority: "high",
  },
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

export interface ColumnInterface {
  id: string;
  title: string;
  items: ItemInterface[];
}

export interface ItemInterface {
  id: string;
  title: string;
  content: string;
  type: TypeInterface;
  priority: PriorityInterface;
}

export type TypeInterface = "feature" | "bug" | "meeting";
export type PriorityInterface = "medium" | "high" | "urgent";
