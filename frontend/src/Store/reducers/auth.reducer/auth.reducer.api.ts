import axios from "axios";
export const getLogin = async (auth:{email:string,password:string}) => {
  const param = new URLSearchParams(auth);
  return new Promise((resolve,reject)=>{
     axios.get(`/api/login?${param}`)
     .then((res)=>{
      console.log(res.data)
      resolve(res.data)
     })
     .catch((e)=>reject(e))
  })
};
