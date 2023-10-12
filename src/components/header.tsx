import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.border};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  transition: 280ms ease-in-out;
  * {
    color: ${(props) => props.theme.text};
    transition: 280ms ease-in-out;
  }
  h3 {
    font-size: 1.25rem;
  }
  label {
    font-size: 1rem;
    margin-right: 0.4rem;
  }
  @media (max-width: 768px) {
    position: fixed;
    width: 100%
  }
`;

interface Props {
  switchTheme: () => void;
}

function Header({switchTheme}: Props) {
  return (
    <StyledHeader>
      <h3>Kanban</h3>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <label htmlFor="checkbox" className="label">
          light / dark
        </label>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          style={{outline: "none", cursor: "pointer"}}
          onChange={switchTheme}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
