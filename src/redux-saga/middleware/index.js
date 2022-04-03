import {takeEvery, all} from 'redux-saga/effects'
import { handleAddRegion, handleDelRegion, handleGetRegion } from './RegionMiddle'
import * as ActionTypeRegion from '../constants/RegionConstant'

function * watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST,handleDelRegion),
        takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST,handleAddRegion)
    ])
}

export default watchAll