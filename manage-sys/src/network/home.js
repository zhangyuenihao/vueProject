import {request} from "./request";

export function getDataList(){
    return request({
        url:'/list'
    })
}
