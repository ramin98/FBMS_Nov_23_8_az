// export function getProducts() {
//   return async function (dispatch) {
//     let res = await fetch("http://localhost:5000/goods");
//     let data = await res.json();
//     dispatch({ type: "GET PRODUCTS", payload: data });
//   };
// }

import { createAsyncThunk } from "@reduxjs/toolkit";

export let productsFetch = createAsyncThunk(
  "content/productsFetch",
  async function () {
    let res = await fetch("http://localhost:5000/good");
    let data = await res.json();
    return data;
  }
);
