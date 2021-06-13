import styled from "styled-components";

export const FiltersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;

  @media (max-width: 430px) {
    bottom: 10px;
  }
`;

export const FilterItem = styled.li`
  display: inline;
`;

export const FilterButton = styled.button`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  text-transform: capitalize;

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  &.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`;
