import { call,put } from "redux-saga/effects";
import apiRegion from "../../api/apiRegion";
import { GetRegionsSuccess,GetRegionsFailed,AddRegionsSuccess,AddRegionsFailed,DelRegionsSuccess,DelRegionsFailed } from "../actions/RegionsAction";

function* handleRegion(){
    try {
        const result = yield call(apiRegion.list);
        yield put(GetRegionsSuccess(result))
    }
    catch(error){
        yield put(GetRegionsFailed(error))
    }
}
function* handleAddRegion(action){
    const {payload} = action
    try {
        const result = yield call(apiRegion.Create,payload)
        yield put(AddRegionsSuccess(result.data))
    } catch (error) {
        yield put(AddRegionsFailed(error))
    }
}
function* handleDelRegion(action){
    const {payload} =action
    try {
        const result = yield call(apiRegion.deleteRow,payload)
        yield put(DelRegionsSuccess(payload))
    } catch (error) {
        yield put(DelRegionsFailed(error))
    }
}

export {
    handleRegion,
    handleAddRegion,
    handleDelRegion
}