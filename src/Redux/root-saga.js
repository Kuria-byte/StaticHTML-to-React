import { all } from 'redux-saga/effects'
// import { fetchCollectionStart } from './shop/shop.sagas'
import {userSagas} from './User/user.sagas'

export default function* rootSaga() {
    yield all([userSagas()]);
}