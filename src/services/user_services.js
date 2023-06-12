import  Api  from "./Api";

export default{
  getuser(){
    return Api().get('/users')
  }
}