import { useContext, useRef } from "react";
import { MyContext } from "../../App";
import {
  editProductFetch,
} from "../../reducers/admin/adminFetchs";

function EditForm({ productObj }) {
  let { adminDispatch } = useContext(MyContext);

  let url = useRef(null);

  function handleEditForm(ev) {
    ev.preventDefault();

    let product = Object.fromEntries([...new FormData(ev.target)]);
    let formData = new FormData();

    function handlePut() {
      formData.append("data", JSON.stringify(product));
      formData.append("file", url.current.files[0]);
      console.log(url.current.files[0]);

      editProductFetch(formData, adminDispatch, product, productObj.id);
    }
    

    if (url.current.files[0]) {
      let fileReader = new FileReader();

      fileReader.onload = (ev) => {
        product.url = ev.target.result;
        handlePut()
      };

      fileReader.readAsDataURL(url.current.files[0]);
    }else{
        handlePut()
    }

    ev.target.reset()
  }

  return (
    <div>
      <h1>EDIT Form</h1>
      <form onSubmit={handleEditForm}>
        <input
          defaultValue={productObj.product_name}
          type="text"
          name="product_name"
          placeholder="product name"
        />
        <input
          defaultValue={productObj.product_description}
          type="text"
          name="product_description"
          placeholder="product description"
        />
        <input
          defaultValue={productObj.product_price}
          type="text"
          name="product_price"
          placeholder="customer address"
        />
        <input ref={url} type="file" name="url" placeholder="url" />
        <button>EDIT</button>
      </form>
    </div>
  );
}

export default EditForm;
