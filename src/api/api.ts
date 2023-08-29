import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2d5de76a-fd26-40c2-9845-4d5ad39b3ff5"
    }
})


export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response)
    },
    getProfile(userId: string){
        console.warn('Obsolete method. Please, use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
            .then(response => response)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string | null) {
        return instance.put(`profile/status`, {"status": status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data: {email: string, password: string, rememberMe: boolean}) {
        return instance.post(`auth/login`, data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
