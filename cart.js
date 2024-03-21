// making objects inside the product variable
let product = [
    {
        id: 101,
        name: "Chuwi HeroBook",
        price: 16900,
        qty: 1,
        img: 'images/1.jpg'
    },
    {
        id: 102,
        name: "Chuwi FreeBook ",
        price: 19900,
        qty: 1,
        img: 'images/2.jpg'
    },
    {
        id: 103,
        name: "Lenovo IdeaPad",
        price: 32990,
        qty: 1,
        img: 'images/3.jpg'
    },
    {
        id: 104,
        name: "Chuwi HeroBook",
        price: 16900,
        qty: 1,
        img: 'images/4.jpg'
    },
    {
        id: 105,
        name: "Chuwi FreeBook ",
        price: 19900,
        qty: 1,
        img: 'images/5.jpg'
    },
    {
        id: 106,
        name: "Lenovo IdeaPad",
        price: 32990,
        qty: 1,
        img: 'images/6.jpg'
    },
    {
        id: 107,
        name: "Chuwi FreeBook ",
        price: 19900,
        qty: 1,
        img: 'images/7.jpg'
    },
    {
        id: 108,
        name: "Lenovo IdeaPad",
        price: 32990,
        qty: 1,
        img: 'images/2.jpg'
    }
]
// view product
const viewproduct = () => {
    let tbl = '';
    product.map((val) => {
        return (
            tbl += `
            <div class="p-3">
                <div class="card" style="width: 18rem;" "height:300px";>
                <img src="${val.img}" class="card-img-top p-3" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${val.name}</h5>
                        <p class="card-text fs-3 fw-bold">${val.price}</p>
                        <a href="#" class="btn btn-primary bg-info" onclick="addCart(${val.id})">ADD To CART</a>
                    </div>
            </div>
            </div>
          `
        )
    })
    document.getElementById('product').innerHTML = tbl;
}
viewproduct(); // calling the view product 

// Add to cart 
let cart = [];
const addCart = (id) => {
    // check data if cart item already exist 
    let allcart = JSON.parse(localStorage.getItem('carts')) ? JSON.parse(localStorage.getItem('carts')) : [];
    let dupcart = allcart.find((item) => {
        return item.id == id;
    })
    if (dupcart) {
        alert('Item alreay exist');
        return false;
    }
    else {
        product.map((item) => {
            if (item.id == id) {
                cart.push(item);
                alert("Add to cart ?");
                alert("Product added successfully to your cart...");
            }
        })
        localStorage.setItem('carts', JSON.stringify(cart));
    }
}

//view cart
const viewcart = () => {
    let showitems = JSON.parse(localStorage.getItem('carts'));
    let tbl = "";
    let sum = 0;
    showitems.map((val) => {
        sum = sum + val.price * val.qty;
        return (
            tbl += `
                        <tr>
                            <th>
                                <img src="${val.img}" height="60"> <br>
                                ${val.name}
                            </th>
                            <th>${val.price}</th>
                            <th>
                                <input type="number" value="${val.qty}"  id="qty_${val.id}" onchange="editcart(${val.id})"   style="width:40px;">    
                            </th>
                            <th>${val.price * val.qty}</th>
                            <th>
                                <button type="submit" class="bg-transparent border-0 outline-none" onclick = "remove(${val.id})" id="remove" > <img src="images/trash.png" height="30"> </button> 
                            </th>
                        
                            
                        </tr>
                        `
        )
    })
    document.getElementById('cart').innerHTML = tbl;
    document.getElementById('finaltotal').innerHTML = `Final Total = ${sum}`;

}
viewcart();

// remove items
const remove = (id) => {
    alert(id);
    let remove_item = JSON.parse(localStorage.getItem('carts'));

    let del = remove_item.filter((val) => {
        return val.id != id;
        return false;
    })

    localStorage.setItem('carts', JSON.stringify(del));
    viewcart();
}
viewcart();

//edit cart
// update item qty in cart with total 
const editcart = (id) => {
    let qty = document.getElementById(`qty_${id}`).value;
    let allcart = JSON.parse(localStorage.getItem('carts'));
    allcart.map((val) => {
        if (val.id == id) {
            val.qty = qty;
        }
    })
    localStorage.setItem('carts', JSON.stringify(allcart));
    alert("cart successfully updated");
    viewcart();
}