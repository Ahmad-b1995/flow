import {Draggable} from "react-beautiful-dnd";
import {styled} from "styled-components";
import {ItemInterface, PriorityInterface, TypeInterface} from "../data";

interface Props {
  item: ItemInterface;
  index: number;
  editItem: (itemId: string) => void;
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
  cursor: grab;
  &:hover .editIcon {
    display: block;
  }
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

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Edit = styled.button`
  font-size: 1.1rem;
  font-weight: 1000;
  color: 2px solid ${(props) => props.theme.text};
  cursor: pointer;
  display: none;
  outline: none;
  border: none;
  opacity: 0.9;
  padding: 0rem 0.15rem;
  border-radius: 0.2rem;
  &:hover {
    background-color: ${(props) => props.theme.card.selected};
    box-shadow: 0 0 2px 2px ${(props) => props.theme.border};
  }
`;

function Item({item, index, editItem}: Props) {
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
            {item.id}
            <Footer>
              <div>
                <Priority priority={item.priority}>&uarr;</Priority>
                <Type type={item.type}>{item.type}</Type>
              </div>
              <Edit className="editIcon" onClick={() => editItem(item.id)}>
                &#9998;
              </Edit>
            </Footer>
          </Container>
        );
      }}
    </Draggable>
  );
}

export default Item;
