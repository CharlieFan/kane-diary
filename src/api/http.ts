/**
 * AJAX Request Base
 */
import axios from 'axios'

let kaneAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for Apis
    timeout: 20000,
    responseType: 'json'
})


function processData (data: Types.IPlainObject | FormData = {}) {
    // todo Append token into data
    return JSON.stringify(data)
}

export function apiGet<T>(url: string, params?: Types.IPlainObject): Promise<T> {
    return kaneAxios.get(url, {
        params: processData(params)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        // TODO: add error handler
        throw err
    })
}

export function apiPost<T>(url: string, data?: Types.IPlainObject): Promise<T> {
    return kaneAxios.post(url, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        // TODO: add error handler
        throw err
    })
}
