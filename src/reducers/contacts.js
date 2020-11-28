import {
    FIND_ALL_CONTACTS, FIND_ALL_CONTACTS_ERROR, FIND_ALL_CONTACTS_SUCCES,
    FIND_CONTACTS, FIND_CONTACTS_SUCCES, FIND_CONTACTS_ERROR,
    UPDATE_CONTACTS, UPDATE_CONTACTS_SUCCES, UPDATE_CONTACTS_ERROR,
    ADD_CONTACTS, ADD_CONTACTS_SUCCES, ADD_CONTACTS_ERROR,
    DELETE_CONTACTS, DELETE_CONTACTS_SUCCES, DELETE_CONTACTS_ERROR
} from "../actions/contacts";

const initState = {
    data: [],
    loading: false
}

export function findAllContacts(state = initState, action) {
    console.log('red.fab start');
    switch (action.type) {
        case FIND_ALL_CONTACTS:
            return {
                ...initState,
                loading: true
            };
        case FIND_ALL_CONTACTS_SUCCES:
            console.log('red.fab suc');
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case FIND_ALL_CONTACTS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export function findContacts(state = initState, action) {
    console.log('red.fb start');
    switch (action.type) {
        case FIND_CONTACTS:
            console.log('red.fb st');
            return {
                ...initState,
                loading: true
            };
        case FIND_CONTACTS_SUCCES:
            console.log('red.fb suc');
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case FIND_CONTACTS_ERROR:
            console.log('red.fb err');
            console.log('errornya = ' + action.error);
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            console.log('red.fb def');
            return state;
    }
}

export function updateContacts(state = initState, action) {
    console.log('red.ud start');
    switch (action.type) {
        case UPDATE_CONTACTS:
            console.log('red.ud st');
            return {
                ...initState,
                loading: true
            };
        case UPDATE_CONTACTS_SUCCES:
            console.log('red.ud suc');
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case UPDATE_CONTACTS_ERROR:
            console.log('red.ud err');
            console.log('errornya = ' + action.error);
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            console.log('red.ud def');
            return state;
    }
}

export function addContacts(state = initState, action) {
    console.log('red.ab start');
    switch (action.type) {
        case ADD_CONTACTS:
            console.log('red.ab st');
            return {
                ...initState,
                loading: true
            };
        case ADD_CONTACTS_SUCCES:
            console.log('red.ab suc');
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case ADD_CONTACTS_ERROR:
            console.log('red.ab err');
            console.log('errornya = ' + action.error);
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            console.log('red.ab def');
            return state;
    }
}

export function deleteContacts(state = initState, action) {
    console.log('red.db start');
    switch (action.type) {
        case DELETE_CONTACTS:
            console.log('red.db st');
            return {
                ...initState,
                loading: true
            };
        case DELETE_CONTACTS_SUCCES:
            console.log('red.db suc');
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case DELETE_CONTACTS_ERROR:
            console.log('red.db err');
            console.log('errornya = ' + action.error);
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            console.log('red.db def');
            return state;
    }
}