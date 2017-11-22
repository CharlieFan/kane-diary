export function get<T>(url: string, data?: Types.IPlainObject): Promise<T | Response> {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET'
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}