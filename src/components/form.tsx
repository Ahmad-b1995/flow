import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ItemInterface, PriorityInterface, TypeInterface} from "../data";

const DialogForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 2rem;
  gap: 1.2rem;
  height: 100%;
  * {
    transition: 280ms ease-in-out;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.text};

  label {
    width: 110px;
    font-size: 1rem;
    white-space: nowrap;
  }
  input,
  textarea,
  select {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    outline: none;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.6rem;
    width: 100%;
  }
  textarea {
    height: 70px;
  }
  ,
  select {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  outline: none;
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.card.selected};
    box-shadow: 0 0 2px 2px ${(props) => props.theme.border};
  }
`;

interface Props {
  addItem: (inputValues: ItemInterface) => void;
  toggleDialog: () => void;
  item?: ItemInterface;
}

function Form({addItem, item, toggleDialog}: Props) {
  const [inputValues, setInputValues] = useState<ItemInterface>({
    id: "",
    title: "",
    content: "",
    type: "feature",
    priority: "medium",
  });

  useEffect(() => {
    if (item) {
      setInputValues(item);
    }
  }, [item]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValues.title === "") return alert("please fill title");
    if (inputValues.content === "") return alert("please fill content");
    addItem(inputValues);
  };

  return (
    <DialogForm>
      <InputContainer>
        <label htmlFor="title">title*</label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputValues.title}
          onChange={({target}) => {
            setInputValues({...inputValues, title: target.value});
          }}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="content">content*</label>
        <textarea
          name="content"
          id="content"
          value={inputValues.content}
          onChange={({target}) => {
            setInputValues({...inputValues, content: target.value});
          }}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="priority">priority</label>
        <select
          name="priority"
          id="priority"
          value={inputValues.priority}
          onChange={({target}) => {
            setInputValues({
              ...inputValues,
              priority: target.value as PriorityInterface,
            });
          }}
        >
          <option value="medium">medium</option>
          <option value="high">high</option>
          <option value="urgent">urgent</option>
        </select>
      </InputContainer>
      <InputContainer>
        <label htmlFor="type">type</label>
        <select
          name="type"
          id="type"
          value={inputValues.type}
          onChange={({target}) => {
            setInputValues({
              ...inputValues,
              type: target.value as TypeInterface,
            });
          }}
        >
          <option value="feature">feature</option>
          <option value="bug">bug</option>
          <option value="meeting">meeting</option>
        </select>
      </InputContainer>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          gap: ".7rem",
        }}
      >
        <Button type="submit" onClick={handleSubmit}>
          {item ? "Edit" : "Add"}
        </Button>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            toggleDialog();
          }}
        >
          Cancel
        </Button>
      </div>
    </DialogForm>
  );
}

export default Form;
