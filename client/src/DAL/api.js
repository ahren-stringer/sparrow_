import * as axios from 'axios'

// export let baseURL='http://localhost:8001/';
export let baseURL='';

let instance=axios.create({
    baseURL:baseURL,
})

export let imgURL=(destination,filename)=>{
    return `${baseURL}api/publication_image/${destination}${filename}`
}

export let blogAPI={
    setPosts(limit,skip){
        return instance.get(`api/posts/all/${limit}/${limit*skip}`).then(res => res.data)
    },
    setCategoryPosts(category,limit,skip){
        return instance.get(`api/posts/categories/${category}/${limit}/${limit*skip}`).then(res => res.data)
    },
    getSinglePost(postName){
        return instance.get(`api/single_post/${postName}`).then(res => res.data)
    }
}
export let SearchAPI = {
    getSearchPage(search,limit,skip) {
        return instance.get(`api/posts/search_all/${search}/${limit}/${limit*skip}`)
            .then(response => response.data)
    },
    getSearchList(search) {
        return instance.get(`api/posts/search/${search}`)
            .then(response => {debugger
               return response.data})
    },
}

export let comentsAPI = {
    sendComent(formData, post,userId ) {
        debugger
        return instance.post(`api/coment`,{...formData, author: userId, post})
            .then(response => response.data)
    },

    getComents(postId,limit,skip) {
        return instance.get(`api/coments/some/${postId}/${limit}/${skip}`)
            .then(response => {debugger
                return response.data})
    },
}

export let authAPI={
    login(formData){
        return instance.post('api/login', { ...formData }).then(res => res.data)
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
        return instance.post('api/register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => res.data)
    },
}
export let publicationAPI = {
    setImg(file,date) {
        const formData = new FormData();
        formData.append('myfile', file);
        formData.append('date', date);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return instance.post("api/images", formData, config).then(response => response.data)
    },
    sendPost(file,title,content,arr,userId,subtitle,contentText) {
    const formData = new FormData();
        formData.append('myfile', file);
        formData.append('title',title);
        formData.append('content', content);
        formData.append('categories',arr)
        formData.append('userId', userId)
        formData.append('subtitle', subtitle)
        formData.append('text', contentText)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return instance.post("api/posts", formData, config).then(response => response.data)
    },
}
export let imagesAPI = {
    deleteImg(filename) {
        return instance.delete(`api/image/${filename}`)
        .then(response => response.data)
    },
    deleteAllImages(date) {
        return instance.delete(`api/images/${date}`)
        .then(response => response.data)
    },
}
export let homeAPI = {
    getCategories() {
        return instance.get(`api/category/random`)
        .then(response => response.data)
    },
    getPosts() {
        return instance.get(`api/posts_latests`)
        .then(response => response.data)
    },
}
export let categoriesAPI = {
    getCategories() {
        return instance.get(`api/category`)
        .then(response => response.data)
    },
    getSomeCategories() {
        return instance.get(`api/category/some`)
        .then(response => response.data)
    },
}
export let profileAPI={
    getProfile(userId){
        return instance.get(`api/user/`+userId).then(res => res.data)
    },
    getPosts(id){
        return instance.get(`api/posts/author/${id}`)
        .then(res => res.data)
    },
}
export let chanelsAPI={
    getUsers(){
        return instance.get(`api/users`).then(res => res.data)
    },
    getUser(name){
        return instance.get(`api/user/${name}`).then(res => res.data)
    },
    getPosts(name){
        return instance.get(`api/chanel_posts/${name}`).then(res => res.data)
    },
}
