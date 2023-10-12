const items: ItemInterface[] = [
  {
    id: "feature1",
    content: "First feature",
    type: "feature",
    priority: "medium",
  },
  {
    id: "meeting2",
    content: "Second meeting",
    type: "meeting",
    priority: "medium",
  },
  {id: "bug3", content: "Third bug", type: "bug", priority: "urgent"},
  {
    id: "feature4",
    content: "Fourth feature",
    type: "feature",
    priority: "high",
  },
  {
    id: "feature5",
    content: "Fifth feature",
    type: "feature",
    priority: "medium",
  },
  {id: "bug6", content: "Sixth bug", type: "bug", priority: "medium"},
  {
    id: "meeting7",
    content: "Seventh meeting",
    type: "meeting",
    priority: "urgent",
  },
  {id: "feature8", content: "Eigth feature", type: "feature", priority: "high"},
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
  content: string;
  type: TypeInterface;
  priority: PriorityInterface;
}

export type TypeInterface = "feature" | "bug" | "meeting";
export type PriorityInterface = "medium" | "high" | "urgent";
