import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalWindow = ({ closeModalWindow, title, actions, text }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <CloseButton onClick={closeModalWindow}>
          <MdClose />
        </CloseButton>
      </Header>
      <Content>
        <Text>{text}</Text>
        {actions}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: gray;
  height: 300px;
  width: 520px;
  border-radius: 5px;
  text-align: center;
  top: 50%;
  left: 50%;
  margin: -131px 0 0 -258px;
  position: absolute;
`;

const Header = styled.header`
  justify-content: space-between;
  display: flex;
  padding: 0 25px;
  background-color: #6c6c6c;
  color: white;
  font-size: 22px;
  font-weight: 600;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  background-color: #6c6c6c;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
`;

const Content = styled.div`
  margin-top: 35px;
  padding: 0 30px;
`;

const Title = styled.p``;

const Text = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 40px;
`;
