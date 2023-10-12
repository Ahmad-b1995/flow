import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.border};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  *{
    color: ${(props) => props.theme.text};
  }
  h3 {
    font-size: 1.25rem;
  }
  label {
    font-size: 1rem;
    margin-right: .4rem
  }
`;

interface Props {
  switchTheme: () => void;
}

function Header({switchTheme}: Props) {
  return (
    <StyledHeader>
      <h3>Kanban</h3>
      <div>
        <label htmlFor="checkbox" className="label">
          light/dark
        </label>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          style={{transition: "all 200ms"}}
          onChange={switchTheme}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
