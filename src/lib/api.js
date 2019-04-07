import axios from 'axios'
import { api } from '../config/config'

const post = async ({ _url }) => {

    let request = await axios({
        method: 'post',
        url: _url || api,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Origin': '*',
            'Accept': 'application/json'
        }
    })

    return request.data   
}

export {
    post
}