import {combineReducers} from 'redux';
import { findAllContacts, findContacts, updateContacts, addContacts, deleteContacts } from './contacts.js';

const allReducers= combineReducers({
  contacts: findAllContacts,
  contactf: findContacts,
  contactu: updateContacts,
  contacta: addContacts,
  contactd: deleteContacts,
});

export default allReducers;