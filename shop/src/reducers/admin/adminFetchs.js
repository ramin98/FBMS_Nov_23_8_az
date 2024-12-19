export async function addProductFetch(formData, dispatch, product) {
  let res = await fetch("http://localhost:5000/add-admin", {
    method: "POST",
    body: formData,
  });
  let data = await res.json();
  console.log(data);
  dispatch({ type: "ADD", payload: {...product, id: data.id} });
}
