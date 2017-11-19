function stringParser(query: string) {
    if (!query) {
        return
    }

    let decoded = decodeURIComponent(query)

    let decodedArray = decoded.slice(1).split('&')
    decodedArray = decodedArray.map(attr => {
        let breakPoint = attr.match('=').index
        let key = attr.slice(0, breakPoint)
        let value = attr.slice(breakPoint + 1)
        return `"${key}":"${value}"`
    })

    decoded = `{${decodedArray.join(',')}}`
    return JSON.parse(decoded)
}

export default stringParser