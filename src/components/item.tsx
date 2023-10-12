import {Draggable} from "react-beautiful-dnd";
import {styled} from "styled-components";
import {ItemInterface} from "../data";

interface Props {
  item: ItemInterface;
  index: number;
}

const Container = styled.div<{isDragging: boolean}>`
  border: 2px solid ${(props) => props.theme.border};
  padding: 8px;
  border-radius: 0.5rem;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragging ? props.theme.card.selected : props.theme.card.primary};
  color: "black";
  user-select: "none";
  min-height: 60px;
  font-size: 1rem;
  font-weight: 500;
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
          </Container>
        );
      }}
    </Draggable>
  );
}

export default Item;
