import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
import {albums} from "./albums";
import {photos} from "./photos";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    albums: albums,
    photos: photos
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
