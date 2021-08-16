import axios from "axios";
export const getProductSingle = (id: string, category_name: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/productFind?name=${id}`)
      .then((res) => {
        console.log(res);

        resolve(res.data);
      })
      .catch((e) => reject(e));
  });
};
