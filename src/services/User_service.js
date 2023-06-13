import  Api  from "./Api";

export default{
  get_users(){
    return Api().get('/users')
  },

  delete_user(id){
    return Api().delete(`/users/${id}`)
  }
}