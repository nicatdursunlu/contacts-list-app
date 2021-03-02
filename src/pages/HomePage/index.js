import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { SingleContact } from "./SingleContact";
import { getContacts } from "../../store/contacts";
import { deleteContact } from "../../store/contactsActions";

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

export const HomePage = connect(mapStateToProps, { deleteContact })(
  ({ contacts, deleteContact, history: { push } }) => {
    return (
      <Container>
        {contacts.map((item) => (
          <SingleContact
            contact={item}
            key={item.id}
            push={push}
            deleteContact={deleteContact}
          />
        ))}
      </Container>
    );
  }
);

const Container = styled.div`
  margin: 0 auto;
  padding: 40px 280px;
  display: flex;
  flex-wrap: wrap;
`;
