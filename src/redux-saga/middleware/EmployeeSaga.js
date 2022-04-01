import { call,put } from "redux-saga/effects";
import apiEmployee from "../../api/apiEmployee";
import { GetEmployeeFailed,GetEmployeeSuccess,AddEmployeeFailed,AddEmployeeSuccess, DelEmployeeSuccess, DelEmployeeFailed } from "../actions/EmployeeAction";

function* handleEmployee(){
    try {
        const result = yield call(apiEmployee.list);
        yield put(GetEmployeeSuccess(result))
    }
    catch(error){
        yield put(GetEmployeeFailed(error))
    }
}
function* handleAddEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.Create,payload)
        yield put(AddEmployeeSuccess(result.data))
    } catch (error) {
        yield put(AddEmployeeFailed(error))
    }
}
function* handleDelEmployee(action){
    const {payload} =action
    try {
        const result = yield call(apiEmployee.deleteRow,payload)
        yield put(DelEmployeeSuccess(payload))
    } catch (error) {
        yield put(DelEmployeeFailed(error))
    }
}

export {
    handleAddEmployee,
    handleEmployee,
    handleDelEmployee
}