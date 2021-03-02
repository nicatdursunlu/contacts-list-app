import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";

import { ModalWindow } from "../../components";

export const SingleContact = ({ contact, deleteContact }) => {
  const { name, tel, email, image, address, id } = contact;
  const firstLetter = [name[0], name[name.indexOf(" ") + 1]];

  const [modalWindow, setModalWindow] = useState(false);
  const toggleModalWindow = () => setModalWindow((v) => !v);
  const closeModalWindow = () => setModalWindow(false);

  const deleteContactHandler = () => {
    deleteContact({ id });
  };

  return (
    <Container>
      <Column>
        {image ? (
          <Image src={image} />
        ) : (
          <LetterContainer>
            <Letter>{firstLetter}</Letter>
          </LetterContainer>
        )}
        <Icons>
          <StyledLink
            to={{
              pathname: "/create",
              data: contact,
              isCreateMode: false,
            }}
          >
            <AiOutlineEdit className="edit-icon icon" />
          </StyledLink>
          <Button onClick={toggleModalWindow}>
            <MdDeleteForever className="delete-icon icon" />
          </Button>
        </Icons>
      </Column>
      <Details>
        <Name>{name}</Name>
        <Telephone className={"margin-top"}>{tel}</Telephone>
        <Email className={"margin-top"}>{email}</Email>
        <Address className={"margin-top"}>{address}</Address>
      </Details>
      {modalWindow ? (
        <div onClick={closeModalWindow} className="back-drop" />
      ) : null}
      {modalWindow && (
        <ModalWindow
          title={"Do you want to delete this contact?"}
          text={
            "Once you delete this contact, it won't be possible to undo this action. Are you sure you want do delete it?"
          }
          close={toggleModalWindow}
          closeModalWindow={closeModalWindow}
          actions={[
            <CancelButton className={"modal-button"} onClick={closeModalWindow}>
              Cancel
            </CancelButton>,
            <YesButton
              onClick={deleteContactHandler}
              className={"modal-button"}
            >
              Yes
            </YesButton>,
          ]}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffcff1;
  border: 2px solid #ff1493;
  border-radius: 25px;
  margin: 10px;
  width: calc((100% - 60px) / 2);
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const LetterContainer = styled.div`
  background-color: #4d4dff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border: 3px solid crimson;
`;

const Letter = styled.p`
  font-size: 35px;
  color: white;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Details = styled.div`
  margin-left: 50px;
`;

const Name = styled.p`
  font-size: 23px;
  font-weight: bold;
`;

const Email = styled.p`
  color: crimson;
  font-size: 18px;
`;

const Address = styled.p`
  color: blueviolet;
  font-size: 17px;
`;

const Telephone = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: red;
  outline: none;
`;

const StyledLink = styled(Link)`
  color: green;
`;

const Column = styled.div``;

const YesButton = styled.button`
  background-color: red;
`;

const CancelButton = styled.button`
  background-color: #007600;
  margin-right: 70px;
`;
