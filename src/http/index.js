import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers:{
        'Content-type' : 'application/json',
        Accept : 'application/json'
    },
});

// List of all end points
export const sendOtp = (data) => api.post('/api/send-otp', data);
export const verifyOtp = (data) => api.post('/api/verify-otp', data);
export const activate = (data) => api.post('/api/activate', data);
export const blogPost = (data)=> api.post('/api/blogpost', data);
export const profile = (data)=> api.get('/api/profile', data);
export const allBlogs = (data)=> api.post('/api/allblogs', data);
export const guestBlogs =()=>api.get('/api/guestblogs');
export const guestBloggers =()=>api.get('/api/guestbloggers'); 
export const singleBlog =(data)=>api.post('/singleblog', data);

// interceptors
api.interceptors.response.use(
    (config) => {
    return config;
    }, 
    async (error)=>{
        const originalRequest = error.config;
        if(error.response.status === 401 && originalRequest && !originalRequest._isRetry){
            originalRequest.isRetry = true;
            try{
                await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, 
                {
                    withCredentials: true,
                }
                );
                return api.request(originalRequest);
            }catch(err){
                console.log(err.message);
            }
        }
        throw error;
    }
);

export default api;