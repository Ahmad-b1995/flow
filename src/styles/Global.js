import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Tahoma, Helvetica, sans-serif;
}
`;

export const dark = {
  background: "#101214",
  text: "#e8e8e8",
  border: "#343434",
  label: '#1D1F21',
  card: {
    primary: "#1D1F21",
    selected: "#131415",
  },
};

export const light = {
  background: "#f6f6f6",
  text: "#000",
  border: "#e8e8e8c3",
  label: '#ededed',
  card: {
    primary: "white",
    selected: "#f3f3f3",
  },
};
