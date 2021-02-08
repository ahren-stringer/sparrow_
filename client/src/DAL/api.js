import * as axios from 'axios'

let instance=axios.create({
    baseURL:'http://localhost:8001/',
})

export let blogAPI={
    setPosts(limit,skip){
        return instance.get(`posts/all/${limit}/${limit*skip}`).then(res => res.data)
    },
    setCategoryPosts(category,limit,skip){
        return instance.get(`posts/categories/${category}/${limit}/${limit*skip}`).then(res => res.data)
    },
}
export let SearchAPI = {
    getSearchPage(search,limit,skip) {
        return instance.get(`/posts/search_all/${search}/${limit}/${limit*skip}`)
            .then(response => response.data)
    },
    getSearchList(search) {
        return instance.get(`/posts/search/${search}`)
            .then(response => response.data)
    },
}

export let comentsAPI = {
    sendComent(formData,userId, post ) {
        debugger
        return instance.post(`/coment`,{...formData, userId, post})
            .then(response => response.data)
    },

    getComents(postId,limit,skip) {
        return instance.get(`/coments/some/${postId}/${limit}/${skip}`)
            .then(response => {debugger
                return response.data})
    },
}

export let authAPI={
    login(formData){
        return instance.post('/login', { ...formData }).then(res => res.data)
    },
    register(registerData){
        let formData = new FormData();
        // for (let key in registerData) {
        //     formData.append(key, registerData[key]);
        // } 
        formData.append("email", registerData.email);
        formData.append("name", registerData.name);
        formData.append("password", registerData.password);
        formData.append("avatar", registerData.file);
        debugger   
        return instance.post('/register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => res.data)
    },
}

export let publicationPI={
    setProfile(userId){
        return instance.get(`profile/`+userId)
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