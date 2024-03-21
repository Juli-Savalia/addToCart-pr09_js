//let cart = [];
const addcart = (id) => {
    product.map((item) => {
        if (item.id == id) {
            cart.push(item);
            alert("Add to Cart ?");
            alert('product added successfully...')

        }
    })
    localStorage.setItem('cart', JSON.stringify(cart));
}
addcart();

// view cart 
const showcart = () => {
    let allitems = JSON.parse(localStorage.getItem('cart'))
    let tbl = "";
    allitems.map((val) => {
        return tbl += `
                    <tr>
                        <th>${val.id}</th>
                        <th>${val.name}</th>
                        <th>${val.img}</th>
                        <th>${val.price}</th>
                        <th>${val.qty}</th>
                        <th>${val.price * val.qty}</th>
                    </tr>
          `

    })
    document.getElementById('cart').innerHTML = tbl;
}
showcart(); // calling the show cart 