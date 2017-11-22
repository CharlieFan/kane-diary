import { apiGet, apiPost} from '../http'

export default {
    async getDemoData() {
        let res = await apiGet<{
            title: string
        }>('/posts/1')
        return res
    }
}