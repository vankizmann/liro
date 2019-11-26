import Vue from "vue";

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

// Add a request interceptor
axios.interceptors.request.use(
    (config) => {

        Vue.Obj.get(config, 'onLoad', () => {})();

        // Do something before request is sent
        return config;
    },
    (error) => {

        Vue.Obj.get(error.config, 'onDone', () => {})();

        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    (response) => {

        Vue.Obj.get(response.config, 'onDone', () => {})();

        // Do something with response data
        return response;
    },
    (error) => {

        Vue.Obj.get(error.config, 'onDone', () => {})();

        if ( Vue.Obj.has(error, 'response.data.message') ) {
            Vue.Notify(error.response.data.message, 'danger');
        }

        // Do something with response error
        return Promise.reject(error.response);
    }
);