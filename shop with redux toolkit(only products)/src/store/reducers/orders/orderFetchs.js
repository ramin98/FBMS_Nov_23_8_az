export async function getOrders(dispatch){
    let res = await fetch('http://localhost:5000/orders')
    let data = await res.json()
    dispatch({type:'GET ORDERS', payload: data})
}