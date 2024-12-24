import { useContext, useRef } from "react";
import { MyContext } from "../../App";
import { addProductFetch } from "../../reducers/admin/adminFetchs";

function AddForm() {
  let { adminDispatch } = useContext(MyContext);

  let url = useRef(null);

  function handleAddForm(ev) {
    ev.preventDefault();
    let product = Object.fromEntries([...new FormData(ev.target)]);

    let fileReader = new FileReader();

    fileReader.onload = (ev) => {
      product.url = ev.target.result;

      let formData = new FormData();
      formData.append("data", JSON.stringify(product));
      formData.append("file", url.current.files[0]);

      addProductFetch(formData, adminDispatch, product);
    };

    fileReader.readAsDataURL(url.current.files[0])
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
