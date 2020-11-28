import { watchfindAllContacts, watchfindContacts, watchUpdateContacts, watchAddContacts, watchDeleteContacts } from "./contacts";
import { all, fork } from 'redux-saga/effects';

export default function* sagas() {
    console.log('sagas index');
    yield all([

        fork(watchfindAllContacts),
        fork(watchfindContacts),
        fork(watchUpdateContacts),
        fork(watchAddContacts),
        fork(watchDeleteContacts),

    ]);
}
