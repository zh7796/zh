import axios from 'axios'
const instance = axios.create({
    baseURL:'https://www.fastmock.site/mock/353b3ff6ec4bb5e23761589b516b7615/api',
    timeout:5000
})

//请求前
instance.interceptors.request.use(
    function (config) {
        return config
    },
    function (err) {
        return Promise.reject(err)
    }
)
//请求后
instance.interceptors.response.use(
    function (res) {
        return res
    },
    function (err) {
        return Promise.reject(err)
    }
)
function get(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: params,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
  
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  
  function post(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  
  /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  
  function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance.patch(url, data).then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  
  /**
   * 封装put请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  
  function put(url, data = {}) {
    return new Promise((resolve, reject) => {
      instance.put(url, data).then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  export { get, post, patch, put };