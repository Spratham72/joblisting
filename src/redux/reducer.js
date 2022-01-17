import { postFail, postProcessing, postSuccess } from "./constant";

const init={loading:false,job:[],error:false};
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case postProcessing:
            return{...state,loading:true};
        case postSuccess:
            return {...state, loading:false, job:[...state.job,payload]};
        case postFail:
            return {...state, loading:false, error:true};
        default:return state;
    }
}