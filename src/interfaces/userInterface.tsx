export interface Roles{
    _id:string,
    name:string,
    urn?:string,
    method:string
  }
export interface LoginData{
  email:string,
  password:string
}
export default interface user{
    email:string,
    username:string,
    userId:string,
    userRol:Array<Roles>,
    token:string
  };