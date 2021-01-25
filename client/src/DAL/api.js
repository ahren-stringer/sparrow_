import * as axios from 'axios'

let instance=axios.create({
    baseURL:'http://localhost:8001/',
})

export let profileAPI={
    setProfile(userId){
        return instance.get(`profile/`+userId)
    },
    setProfileStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateProfileStatus(status){
        return instance.put(`profile/status/`, {status:status})
    },
    setPhoto(photo){
        let formData = new FormData();
        formData.append("image", photo);
        return instance.post(`profile/photo`,  formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => res.data)
    },
}