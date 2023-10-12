import {Draggable} from "react-beautiful-dnd";
import {styled} from "styled-components";
import {ItemInterface, PriorityInterface, TypeInterface} from "../data";

interface Props {
  item: ItemInterface;
  index: number;
}

const Container = styled.div<{isDragging: boolean}>`
  border: 2px solid ${(props) => props.theme.border};
  padding: 12px;
  border-radius: 0.5rem;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragging ? props.theme.card.selected : props.theme.card.primary};
  color: "black";
  user-select: "none";
  min-height: 70px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  justify-content: space-between;
`;

const Type = styled.span<{type: TypeInterface}>`
  background-color: ${(props) =>
    props.type === "bug"
      ? "#FE565E"
      : props.type === "feature"
      ? "#E6FB8F"
      : "#BFAEFE"};
  border-radius: 0.75rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  color: ${(props) => (props.type === "feature" ? "black" : "white")};
`;

const Priority = styled.span<{priority: PriorityInterface}>`
  font-size: 1.5rem;
  font-weight: 1000;
  color: ${(props) =>
    props.priority === "medium"
      ? "#C0BEBD"
      : props.priority === "high"
      ? "#FCB519"
      : "#EA6368"};
  margin-right: 0.4rem;
`;

function Item({item, index}: Props) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            {item.content}
            <div>
              <Priority priority={item.priority}>&uarr;</Priority>
              <Type type={item.type}>{item.type}</Type>
            </div>
          </Container>
        );
      }}
    </Draggable>
  );
}

export default Item;
