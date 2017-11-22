export default {
    async getDemoData() {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        return await res.json()
    }
}