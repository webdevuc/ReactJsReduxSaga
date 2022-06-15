import { configureStore } from "@reduxjs/toolkit";
import user from "./redux/slice/user";
import users from "./redux/slice/users";
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from './redux/sagas'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user,
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store