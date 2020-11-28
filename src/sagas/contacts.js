import { takeLatest, put } from 'redux-saga/effects';
import {
    FIND_ALL_CONTACTS, FIND_ALL_CONTACTS_SUCCES, FIND_ALL_CONTACTS_ERROR,
    FIND_CONTACTS, FIND_CONTACTS_SUCCES, FIND_CONTACTS_ERROR,
    UPDATE_CONTACTS, UPDATE_CONTACTS_SUCCES, UPDATE_CONTACTS_ERROR,
    ADD_CONTACTS, ADD_CONTACTS_SUCCES, ADD_CONTACTS_ERROR,
    DELETE_CONTACTS, DELETE_CONTACTS_SUCCES, DELETE_CONTACTS_ERROR
} from '../actions/contacts';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

//const ips = 'http://10.0.2.2:3000';
const ips = 'https://simple-contact-crud.herokuapp.com/contact';
function* findAllContacts() {
    console.log('sagas fab');
    try {
        const json = yield fetch(ips).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Unknown Error");
            }
            return response.json();
        });

        yield put({
            type: FIND_ALL_CONTACTS_SUCCES,
            data: json.data
        });
    } catch (error) {
        yield put({
            type: FIND_ALL_CONTACTS_ERROR,
            error: error
        });
    }
}

function* findContacts(action) {
    console.log('sagas fb');
    console.log('is it there?');
    try {
        const json = yield fetch(ips + '/' + action.id).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Unknown Error");
            }
            return response.json();
        });

        yield put({
            type: FIND_CONTACTS_SUCCES,
            data: json.data
        });
    } catch (error) {
        yield put({
            type: FIND_CONTACTS_ERROR,
            error: error
        });
    }
}

function* updateContacts(action) {
    console.log('sagas ub'+action.id);
    try {
        const json = yield fetch(ips + '/' + action.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.data),
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Unknown Error");
            }
            return response.json();
        });

        yield put({
            type: UPDATE_CONTACTS_SUCCES,
            data: json.data
        });
    } catch (error) {
        yield put({
            type: UPDATE_CONTACTS_ERROR,
            error: error
        });
    }
}

function* addContacts(action) {
    console.log('sagas ab');
    try {
        const json = yield fetch(ips, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.data),
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Unknown Error");
            }
            return response.json();
        });

        yield put({
            type: ADD_CONTACTS_SUCCES,
            data: json.data
        });
    } catch (error) {
        yield put({
            type: ADD_CONTACTS_ERROR,
            error: error
        });
    }
}

function* deleteContacts(action) {
    console.log('sagas db');
    try {
        const json = yield fetch(ips + '/' + action.id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Unknown Error");
            }
            return response.json();
        });

        yield put({
            type: DELETE_CONTACTS_SUCCES,
            data: json.data
        });
    } catch (error) {
        yield put({
            type: DELETE_CONTACTS_ERROR,
            error: error
        });
    }
}

export function* watchfindAllContacts() {
    console.log('sagas watch fab');
    yield takeLatest(FIND_ALL_CONTACTS, findAllContacts);
}

export function* watchfindContacts() {
    yield takeLatest(FIND_CONTACTS, findContacts);
}

export function* watchUpdateContacts() {
    yield takeLatest(UPDATE_CONTACTS, updateContacts);
}

export function* watchAddContacts() {
    yield takeLatest(ADD_CONTACTS, addContacts);
}

export function* watchDeleteContacts() {
    yield takeLatest(DELETE_CONTACTS, deleteContacts);
}