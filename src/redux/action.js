import { postFail, postProcessing, postSuccess } from "./constant"

export const Posting=()=>{
    return {
        type:postProcessing,
       
    }
}
export const PostSuccess=(data)=>{
    return {
        type:postSuccess,
        payload:data
    }
}
export const PostError=(data)=>{
    return {
        type:postFail,
        payload:data
    }
}
