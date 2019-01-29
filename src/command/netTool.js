import Taro from '@tarojs/taro'

const POST = (url, params = {}, token) => new Promise((resolve, reject) => {
    Taro.request({
        url: url,
        body: JSON.stringify(params),
        header: {
            'X-Application-name': 'app',
            'Content-Type': 'application/json;',
            Authorization: `bearer ${token}`,
        },
        method: 'POST',
    })
    .then((e) => {
        resolve(e)
    })
    .catch((e) => {
        reject(e)
    })
})

export default {
    POST
}