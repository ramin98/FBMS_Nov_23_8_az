export async function addProductFetch(formData, dispatch, product) {
  let res = await fetch("http://localhost:5000/add-admin", {
    method: "POST",
    body: formData,
  });
  let data = await res.json();
  console.log(data);
  dispatch({ type: "ADD", payload: {...product, id: data.id} });
}

export async function editProductFetch(formData,dispatch,product,id) {
  console.log(id)
  let res = await fetch("http://localhost:5000/change-admin/" + id, {
    method: "PUT",
    body: formData,
  });
  let data = await res.json();
  dispatch({ type: "EDIT", payload: {...product, id: id} });

  console.log(data);
}

export async function deleteProductFetch(id) {
  let res = await fetch("http://localhost:5000/delete-admin/" + id, {
    method: "DELETE",
  });
  let data = await res.json();
  console.log(data);
}

export async function deleteAllProductFetch(ids) {
  let res = await fetch("http://localhost:5000/delete-admin/multiple", {
    method: "DELETE",
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ids: ids})
  });
  let data = await res.json();
  console.log(data);
}

