import axios from 'axios'
import config from '../config/config'

const list = async ()=>{
    try {
        const result = await axios.get(`${config.domain}/regions`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const Create  = async (payload)=>{
    try {
        const result = await axios.post(`${config.domain}/regions`,payload)
        return result
    } catch (error) {
        return error        
    }
}
export default {list,Create}