

export const checkValidateData=(email,password)=>{
const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
const isPasswordValid=/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password)
// const isNameValid=/^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name)
if(!isEmailValid) return "Email Id is not valid";
if(!isPasswordValid) return "password is not valid";
// if(!isNameValid) return "name is invalid"
return null;

}