import "./App.css";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useEffect, useState} from "react";
import useLocalStorage from "use-local-storage";
import {ThemeProvider} from "styled-components";
import {ColumnInterface, initColumns} from "./data";
import styled from "styled-components";
import Header from "./components/header";
import Column from "./components/column";
import {dark, GlobalStyles, light} from "./styles/Global";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: calc(100vh - 50px);
  padding-top: 5rem;
  transition: 280ms ease-in-out

  /* color: #131415 */
`;

function App() {
  const [columns, setColumns] = useState<{[key: string]: ColumnInterface}>(
    localStorage.getItem("columns")
      ? JSON.parse(localStorage.getItem("columns")!)
      : initColumns
  );

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

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <Header switchTheme={switchTheme} />
      <Container>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <Column columnId={columnId} column={column} />
              </div>
            );
          })}
        </DragDropContext>
      </Container>
    </ThemeProvider>
  );
}

export default App;
