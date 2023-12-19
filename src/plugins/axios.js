import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_TEST,
    timeout: 1000,
    headers:{
        "Content-Type": "application/json"
    }
})

instance.interceptors.request.use(
    function (config) {

        //요청 보내기전 수행
        console.log('axios.js request : ' , config);
        return config;
    },

    function (error){
        //오류 요청 보내기전 공통 수행
        return Promise.reject(error);
    }
);

instance.interceptors.response.use({
    function (response) {

        //응답데이터 가공
        console.log('axios.js response : ' , response);
        return response;
    },

    function (error){
        //오류 응답 처리

        return Promise.reject(error);
    }
})

export default instance;