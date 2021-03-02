import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./contacts";

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload,
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});

export const editContact = (payload) => ({
  type: EDIT_CONTACT,
  payload,
});
