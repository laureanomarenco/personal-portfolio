import { LENG } from "../reducer";

export default function changeLenguage(leng){
    return function(dispatch){
        return dispatch({
            type: LENG,
            payload: leng
        })
    }
}