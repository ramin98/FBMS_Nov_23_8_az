import { useContext } from "react";
import { MyContext } from "../../App";

function EditForm({
  id,
  flag,
  inputServicesDescription,
  inputServicesName,
  form
}) {

  let {servicesDispatch} = useContext(MyContext)

  function handleForm(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    servicesDispatch({type:"EDIT SERVICES", payload: {id: id, formData: formData}})
  }

  return (
    <form ref={form} className={flag ? "" : "hide"} onSubmit={handleForm}>
      <input type="text" name="servicesName" placeholder="servicesName" defaultValue={inputServicesName.current}/>
      <input
        type="text"
        name="servicesDescription"
        placeholder="servicesDescription"
        defaultValue={inputServicesDescription.current}
      />
      <button>SAVE</button>
    </form>
  );
}

export default EditForm;

// DIGER EDIT USULU

//   function EditForm({servicesArray, setServicesArray, id, flag}) {

//     function handleForm(ev) {
//       ev.preventDefault()
//       let formData = Object.fromEntries([...new FormData(ev.target)])
//       let newArr = [...servicesArray]
//       let elementIndex = newArr.findIndex((item) => item.id === id)
//       newArr[elementIndex].servicesName = formData.servicesName
//       newArr[elementIndex].servicesDescription = formData.servicesDescription
//       setServicesArray(newArr)
//     }

//     return (
//       <form className={flag ? '' : 'hide'} onSubmit={handleForm}>
//         <input type="text" name="servicesName" placeholder="servicesName"/>
//         <input type="text" name="servicesDescription" placeholder="servicesDescription"/>
//         <button>SAVE</button>
//       </form>
//     );
//   }

//   export default EditForm;
