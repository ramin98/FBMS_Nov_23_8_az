export async function orderFetch(order){
    let res = await fetch('http://localhost:5000/add-orders', {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(order)
    })
    let data = await res.json()
    console.log(data)
}