import React from "react";
import styled from "styled-components";

import { Form } from "./Form";

export const CreatePage = ({ history: { push }, location }) => {
  return (
    <Container>
      <Header>Create New Contact</Header>
      <Form
        contact={location.data}
        push={push}
        isCreateMode={location.isCreateMode}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 350px;
`;

const Header = styled.h2`
  font-size: 32px;
  color: crimson;
  text-align: center;
`;
