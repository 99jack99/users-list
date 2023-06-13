import  Api  from "./Api";

export default{
  get_users(){
    return Api().get('/users')
  },

  get_user(id){
    return Api().get(`/users/${id}`)
  },

  delete_user(id){
    return Api().delete(`/users/${id}`)
  },
}