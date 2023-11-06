const product = [
    {
        id: 0,
        image: 'image/TNFs800.png',
        title: 'Summit Series 800',
        bek: 'Könnyű, melegre optimalizált kabát, kompakt mérettel.' ,
        price: 170,
    },
    {
        id: 1,
        image: 'image/McM.png',
        title: 'Men’s McMurdo Bomber',
        bek: 'Túrázásra kiváló.' ,
        price: 129,
    },
    {
        id: 2,
        image: 'image/bp.png',
        title: 'Surge Backpack',
        bek: '31 liter űrtartalmú, szinte bárhová magával viheti. ' ,
        price: 139,
    },
    {
        id: 3,
        image: 'image/MW.png',
        title: 'Men’s Wander Pants',
        bek: 'A termékcsalád robusztus, kényelmes frissítése.' ,
        price: 149,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price, bek} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        `<p>${bek}</p>`+
         `<p>
          
         <button class="meret" onclick="kivalaszt()">S</button> 
         <button class="meret" onclick="kivalaszt()">M</button> 
         <button class="meret" onclick="kivalaszt()">L</button> 
         <button class="meret" onclick="kivalaszt()">XL</button>
         
         </p>`+
        "<button onclick='addtocart("+(i++)+")'>Hozzáadás a kosárhoz</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "A kosár üres";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price,} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

function kivalaszt(){
    alert("Kiválasztva")
}