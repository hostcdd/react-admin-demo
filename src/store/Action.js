export const SET_USER = 'SET_USER'      //设置用户名





export function setUser(name){
    return {
        type:SET_USER,
        preload:name || '用户名'
    }
 }