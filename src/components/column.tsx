import styled from "styled-components";
import {ColumnInterface} from "./../data";
import {StrictModeDroppable} from "./droppable";
import Item from "./item";

interface Props {
  columnId: string;
  column: ColumnInterface;
  addItem: (columnId: string) => void;
  editItem: (columnId: string, itemId: string) => void;
}

const Container = styled.div`
  margin: 8px;
`;

const Head = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 12px;
  * {
    font-size: 1rem;
    color: #717171;
  }
`;

const Add = styled.button`
  outline: none;
  border: none;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.label};
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.card.selected};
    box-shadow: 0 0 2px 2px ${(props) => props.theme.border};
  }
`;

const Label = styled.div`
  background-color: ${(props) => props.theme.label};
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  aspect-ratio: 1/1;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemList = styled.div`
  padding: 8px;
  width: 300px;
  min-height: calc(100vh - 196px);
`;

function Column({columnId, column, addItem, editItem}: Props) {
  return (
    <Container>
      <Head>
        <div style={{display: "flex", gap: ".5rem"}}>
          <h3>{column.title}</h3>
          <Label>{column.items.length}</Label>
        </div>
        <Add onClick={() => addItem(columnId)}>+</Add>
      </Head>
      <StrictModeDroppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <ItemList
              {...provided.droppableProps}
              ref={provided.innerRef}
              {...(snapshot.isDraggingOver && {
                className: "landing-col",
              })}
            >
              {column.items.map((item, index) => {
                return (
                  <Item
                    editItem={(itemId) => editItem(columnId, itemId)}
                    key={item.id}
                    item={item}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </ItemList>
          );
        }}
      </StrictModeDroppable>
    </Container>
  );
}

export default Column;
