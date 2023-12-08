import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useEffect, useState} from "react";
import useLocalStorage from "use-local-storage";
import {ThemeProvider} from "styled-components";
import {ColumnInterface, initColumns, ItemInterface} from "../../data";
import styled from "styled-components";
import Header from "../../components/pages/board/header";
import Column from "../../components/pages/board/column";
import {dark, GlobalStyles, light} from "../../styles/Global";
import Form from "../../components/pages/board/form";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100%;
  min-height: calc(100vh - 50px);
  padding-top: 5rem;
  transition: 280ms ease-in-out;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  alignitems: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Dialog = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.card.primary};
  width: 400px;
  height: calc(100% - 50px);
  left: 0;
  bottom: 0;
  top: 50px;
  transition: 280ms ease-in-out;
  &.fade-in {
    animation: slide 0.5s;
  }
  @keyframes slide {
    from {
      transform: translateX(-400px);
    }
    ,
    to {
    }
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export default function Board() {
  const [columns, setColumns] = useState<{[key: string]: ColumnInterface}>(
    localStorage.getItem("columns")
      ? JSON.parse(localStorage.getItem("columns")!)
      : initColumns
  );
  const [dialog, setdialog] = useState<{
    isOpen: boolean;
    type: "add" | "edit" | null;
    columnId: string;
    itemId: string;
  }>({isOpen: false, type: null, columnId: "", itemId: ""});

  const defaultDark = window.matchMedia(
    "(prefers-colors-scheme: dark)"
  ).matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  const onDragEnd = (result: DropResult, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const {source, destination} = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const randomIdGenerator = (): string => {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return uniqid;
  };

  const handleAddEditItem = (inputValues: ItemInterface) => {
    if (dialog.type === "add") {
      inputValues.id = randomIdGenerator();
      setColumns({
        ...columns,
        [dialog.columnId]: {
          ...columns[dialog.columnId],
          items: [...columns[dialog.columnId].items, inputValues],
        },
      });
    } else {
      const index = columns[dialog.columnId].items.findIndex(
        (item: any) => item.id === dialog.itemId
      );
      let tempColumns = {...columns};
      if (index !== -1) {
        tempColumns[dialog.columnId].items[index] = inputValues;
      }
      setColumns({
        ...tempColumns,
      });
    }
    toggleDialog("");
  };

  const deleteItem = (columnId: string, itemId: string) => {
    const response = window.confirm("Are you sure to delete Item?");
    if (response) {
      const index = columns[columnId].items.findIndex(
        (item: any) => item.id === itemId
      );
      let tempColumns = {...columns};
      if (index !== -1) {
        tempColumns[columnId].items.splice(index, 1);
      }
      setColumns({
        ...tempColumns,
      });
    } else {
    }
  };

  const toggleDialog = (columnId?: string, itemId?: string) => {
    setdialog({
      ...dialog,
      type: itemId ? "edit" : "add",
      isOpen: !dialog.isOpen,
      columnId: columnId ? columnId : "",
      itemId: itemId ? itemId : "",
    });
  };

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <Header switchTheme={switchTheme} />
      <Container>
        {dialog.isOpen && (
          <Dialog className="fade-in">
            <Form
              addItem={handleAddEditItem}
              item={columns[dialog.columnId].items.find(
                (item: any) => item.id === dialog.itemId
              )}
              toggleDialog={toggleDialog}
            />
          </Dialog>
        )}
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <ColumnContainer key={columnId}>
                <Column
                  columnId={columnId}
                  column={column}
                  addItem={toggleDialog}
                  editItem={toggleDialog}
                  deleteItem={deleteItem}
                />
              </ColumnContainer>
            );
          })}
        </DragDropContext>
      </Container>
    </ThemeProvider>
  );
}
