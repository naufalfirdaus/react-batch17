import * as ActionType from '../constants/Regions'

export const GetRegionsRequest = () =>({
    type : ActionType.GET_REGIONS_REQUEST
})

export const GetRegionsSuccess = (payload) =>({
    type: ActionType.GET_REGIONS_SUCCESS,
    payload
})

export const GetRegionsFailed = (payload) =>({
    type:ActionType.GET_REGIONS_FAILED,
    payload
})

export const AddRegionsRequest = (payload) =>({
    type:ActionType.ADD_REGIONS_REQUEST,
    payload
})

export const AddRegionsSuccess = (payload) =>({
    type:ActionType.ADD_REGIONS_SUCCESS,
    payload
})

export const AddRegionsFailed = (payload) =>({
    type:ActionType.ADD_REGIONS_FAILED,
    payload
})

export const DelRegionsRequest = (payload) =>({
    type:ActionType.DEL_REGIONS_REQUEST,
    payload
})

export const DelRegionsSuccess = (payload) =>({
    type : ActionType.DEL_REGIONS_SUCCESS,
    payload
})

export const DelRegionsFailed = (payload) =>({
    type : ActionType.DEL_REGIONS_FAILED,
    payload
})