import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-fonts-invert);
`;

export const Icon = styled.button`
  -webkit-border-radius: 50%;
  background: none;
  border-radius: 50%;
  border: none;
  display: inline-block;
  margin: 0 1em;
  padding: 12px;
  overflow: hidden;
  vertical-align: middle;
  color: ${(props) => (props.isMenuActive ? "#0383c4" : "")};
  cursor: pointer;
  font-size: 1.2em;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  transition: 0.3s ease-in-out;

  :hover {
    background: var(--color-li-active);
  }
  :active {
    box-shadow: var(--box-shadow-btn-menu);
  }
`;
