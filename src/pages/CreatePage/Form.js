import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addContact, editContact } from "../../store/contactsActions";
import { createID } from "../../utils/createID";
import { getContacts } from "../../store/contacts";
import { validateForm } from "../../utils/validateForm";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

export const Form = connect(mapStateToProps, { addContact, editContact })(
  ({ push, addContact, editContact, contact, isCreateMode }) => {
    const fieldsInitialState = {
      name: "" || contact?.name,
      tel: "" || contact?.tel,
      email: "" || contact?.email,
      address: "" || contact?.address,
      image: "" || contact?.image,
    };
    const [fields, setFields] = useState(fieldsInitialState);

    const fieldsChangeHandler = (e) => {
      const { name, value } = e.target;
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };

    if (isCreateMode === null || isCreateMode === undefined) {
      isCreateMode = true;
    }
    console.log("isCreateMode ", isCreateMode);

    const onSubmit = () => {
      const id = createID();
      if (validateForm(fields)) {
        addContact({ ...fields, id });
        push("/");
      }
    };

    const editContactHandler = () => {
      if (validateForm(fields)) {
        editContact({ ...fields, id: contact.id });
        push("/");
      }
    };

    return (
      <Container>
        <Label htmlFor={"name"}>Name</Label>
        <Input
          placeholder={"John Doe"}
          id={"name"}
          name={"name"}
          value={fields.name}
          onChange={fieldsChangeHandler}
        />
        <Label htmlFor={"tel"}>Telephone number</Label>
        <Input
          type={"tel"}
          placeholder={"352-314-3406"}
          id={"tel"}
          name={"tel"}
          value={fields.tel}
          onChange={fieldsChangeHandler}
        />
        <Label htmlFor={"email"}>E-mail</Label>
        <Input
          type={"email"}
          placeholder={"john.doe@gmail.com"}
          id={"email"}
          name={"email"}
          value={fields.email}
          onChange={fieldsChangeHandler}
        />
        <Label htmlFor={"address"}>Address</Label>
        <Input
          type={"text"}
          placeholder={"88764 Messerschmidt Court"}
          id={"address"}
          name={"address"}
          value={fields.address}
          onChange={fieldsChangeHandler}
        />
        <Label htmlFor={"url"}>Image URL</Label>
        <Input
          type={"text"}
          placeholder={"https://example.com/example"}
          id={"url"}
          name={"image"}
          value={fields.image}
          onChange={fieldsChangeHandler}
        />
        {isCreateMode ? (
          <Button onClick={() => onSubmit()}>Submit</Button>
        ) : (
          <Button onClick={() => editContactHandler()}>Edit Contact</Button>
        )}

        {/*<Button onClick={() => editContactHandler()}>Edit Contact</Button>*/}
        {/*<Button onClick={() => onSubmit()}>Submit</Button>*/}
      </Container>
    );
  }
);

const Container = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 20px;
  color: black;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 0 10px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  font-size: 17px;
  border: 1px solid gray;

  &:focus {
    outline: none;
    border: 2px solid #990000;
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  height: 40px;
  background-color: crimson;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  margin: 20px 100px;

  &:hover {
    background-color: #990000;
  }
`;
