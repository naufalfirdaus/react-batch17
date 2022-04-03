import { combineReducers } from "redux";

import RegionsReduce from "./RegionsReduce";
import EmployeeReduce from "./EmployeeReduce";

const rootReducer = combineReducers({

    regionsStated  : RegionsReduce,
    employeeStated : EmployeeReduce
})

export default rootReducer