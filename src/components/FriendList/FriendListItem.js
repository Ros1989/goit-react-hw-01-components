import React from 'react';
import styled from 'styled-components';
// import FriendList from './FriendList';

//Styles
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2%,
    rgba(203, 255, 183, 1) 64%
  );
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s linear;
  border-radius: 15px;
  :not(:last-child) {
    margin-bottom: 5px;
  }
  :hover {
    transform: translate(0, -10px) scale(1.03);
  }
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 20px;
  border: 2px solid #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin-right: 30px;
  overflow: hidden;
`;

const Name = styled.p`
  font-size: 35px;
`;

//Component
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <ImageWrapper>
        <a href={avatar} target="_blank" rel="noreferrer">
          <img src={avatar} width="100" alt={name} />
        </a>
      </ImageWrapper>
      <Name>{name}</Name>
    </Item>
  );
};
export default FriendListItem;
