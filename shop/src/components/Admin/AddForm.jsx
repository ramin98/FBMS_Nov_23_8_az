import { useContext, useRef } from "react";
import { MyContext } from "../../App";

function AddForm() {
  let { adminDispatch } = useContext(MyContext);

  let url = useRef(null);

  function handleAddForm(ev) {
    ev.preventDefault();
    let product = Object.fromEntries([...new FormData(ev.target)]);
    delete product.url
    let formData = new FormData()
    formData.append('data', JSON.stringify(product))
    formData.append('file', url.current.files[0])

    adminDispatch({ type: "ADD", payload: formData });
  }

  return (
    <div>
      <h1>ADD Form</h1>
      <form onSubmit={handleAddForm}>
        <input type="text" name="product_name" placeholder="product name" />
        <input
          type="text"
          name="product_description"
          placeholder="product description"
        />
        <input
          type="text"
          name="product_price"
          placeholder="customer address"
        />
        <input ref={url} type="file" name="url" placeholder="url" />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default AddForm;
