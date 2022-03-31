import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";

const rootReducer = combineReducers({
    regionStated : RegionsReduce
})

export default rootReducer