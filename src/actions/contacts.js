export const FIND_ALL_CONTACTS = "FIND_ALL_CONTACTS";
export const FIND_ALL_CONTACTS_SUCCES = "FIND_ALL_CONTACTS_SUCCES";
export const FIND_ALL_CONTACTS_ERROR = "FIND_ALL_CONTACTS_ERROR";

export const FIND_CONTACTS = "FIND_CONTACTS";
export const FIND_CONTACTS_SUCCES = "FIND_CONTACTS_SUCCES";
export const FIND_CONTACTS_ERROR = "FIND_CONTACTS_ERROR";

export const UPDATE_CONTACTS = "UPDATE_CONTACTS";
export const UPDATE_CONTACTS_SUCCES = "UPDATE_CONTACTS_SUCCES";
export const UPDATE_CONTACTS_ERROR = "UPDATE_CONTACTS_ERROR";

export const ADD_CONTACTS = "ADD_CONTACTS";
export const ADD_CONTACTS_SUCCES = "ADD_CONTACTS_SUCCES";
export const ADD_CONTACTS_ERROR = "ADD_CONTACTS_ERROR";

export const DELETE_CONTACTS = "DELETE_CONTACTS";
export const DELETE_CONTACTS_SUCCES = "DELETE_CONTACTS_SUCCES";
export const DELETE_CONTACTS_ERROR = "DELETE_CONTACTS_ERROR";

export function findAllContacts() {
  console.log('act fab');
  return {
    type: FIND_ALL_CONTACTS
  };
}

export function findContacts(contact_id) {
  console.log('act fb');
  return {
    type: FIND_CONTACTS,
    id: contact_id
  };
}

export function updateContacts(data,contact_id) {
  console.log('act ub');
  return {
    type: UPDATE_CONTACTS,
    data: data,
    id: contact_id
  };
}

export function addContacts(data) {
  console.log('act ab');
  return {
    type: ADD_CONTACTS,
    data: data
  };
}

export function deleteContacts(contact_id) {
  console.log('act db');
  return {
    type: DELETE_CONTACTS,
    id: contact_id
  };
}