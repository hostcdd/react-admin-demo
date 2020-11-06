export const setToken = function(token) {
   localStorage.setItem('token',token)

}
export const getToken = function() {
    localStorage.getItem('token')
 
 }
 export const clearToken = function() {
    localStorage.removeItem('token')
 }
export const isLogin = function() {
    if(localStorage.getItem('token')) return true
    return false

}