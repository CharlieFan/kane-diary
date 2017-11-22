/**
 * AJAX Request Base
 */
const UrlRoot = 'https://jsonplaceholder.typicode.com'

function processData (data: Types.IPlainObject | FormData = {}) {
    // todo Append token into data
    return JSON.stringify(data)
}

export function apiGet<T>(url: string, data?: Types.IPlainObject): Promise<T> {
    return new Promise((resolve, reject) => {
        fetch(UrlRoot + url, {
            method: 'GET'
        }).then((res) => {
            resolve(res.json())
        }).catch((err) => {
            reject(err)
            throw Error(err)
        })
    })
}

export function apiPost<T>(url: string, data?: Types.IPlainObject): Promise<T> {
    return new Promise((resolve, reject) => {
        fetch(UrlRoot + url, {
            method: 'POST',
            body: processData(data)
        }).then((res) => {
            resolve(res.json())
        }).catch((err) => {
            reject(err)
            throw Error(err.message)
        })
    })
}
