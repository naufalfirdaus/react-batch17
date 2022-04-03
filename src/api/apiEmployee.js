import axios from 'axios'
import config from '../config/config'

const list = async ()=>{
    try {
        const result = await axios.get(`${config.domain}/employee`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const Create  = async (payload)=>{
    try {
        const result = await axios.post(`${config.domain}/employee`,payload)
        return result
    } catch (error) {
        return error        
    }
}
const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/employee/${id}`)
        return result
    } catch (error) {
        return error        
    }
}
export default {
    Create,list,deleteRow
}