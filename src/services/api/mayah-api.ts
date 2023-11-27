import axios from 'axios'
import {bases} from '../../config'

export const mayahApi = axios.create({
    baseURL: bases.mayah.baseUrl.apiDev
})