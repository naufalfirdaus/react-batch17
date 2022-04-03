import { takeEvery, all } from 'redux-saga/effects';

import {handleRegion,handleAddRegion,handleDelRegion} from './RegionsSaga'
import { handleEmployee,handleAddEmployee,handleDelEmployee } from './EmployeeSaga';

import * as ActionTypeRegion from '../constants/Regions'
import * as ActionTypeEmployee from '../constants/Employee'


function *watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST,handleRegion),
        takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST,handleAddRegion),
        takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST,handleDelRegion),
        takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST,handleEmployee),
        takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST,handleAddEmployee),
        takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST,handleDelEmployee)
    ])
}

export default watchAll;