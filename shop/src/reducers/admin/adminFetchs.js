export async function addProductFetch(product) {
  let res = await fetch("http://localhost:5000/add-admin", {
    method: "POST",
    body: product,
  });
  let data = await res.json();
  console.log(data);
}
