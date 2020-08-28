import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
import rootSaga from "./sagas"
import rootReducer from "./reducer"
const middleWares = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleware.run(rootSaga)

export default store