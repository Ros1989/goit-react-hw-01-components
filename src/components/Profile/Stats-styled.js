import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  background-color: #a3a3a3;
  width: 100px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.2s linear;
  :hover {
    transform: scale(1.1);
  }
  :not(:last-child) {
    margin-right: 1px;
  }
`;

const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const Quantity = styled.span`
  font-weight: bold;
`;

export { List, ListItem, Label, Quantity };
