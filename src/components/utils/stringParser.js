function stringParser(query) {
    if (!query) {
        return
    }

    if (typeof query !== String) {
        query = query.toString()
    }

    let decoded = decodeURIComponent(query)

    decoded = decoded.slice(1).split('&')
    decoded = decoded.map(attr => {
        let breakPoint = attr.match('=').index
        let key = attr.slice(0, breakPoint)
        let value = attr.slice(breakPoint + 1)
        return `"${key}":"${value}"`
    })

    decoded = `{${decoded.join(',')}}`
    return JSON.parse(decoded)
}

export default stringParser