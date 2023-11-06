const product = [
    {
        id: 0,
        image: 'image/AD1.jpg',
        title:  'WARM-UP 3-Stripes Track Jacket',
        bek: 'Ez az Adidas kabát klasszikus Sport Trico-ból készült a sima megjelenés és érzés érdekében.' ,
        price: 56,
    },
    {
        id: 1,
        image: 'image/AD2.jpg',
        title: 'Manchester United23/24 Home Authentic Jersey',
        bek: 'Mint a klub, mint a város. Mutasd meg büszkén csapatod színeit a mezében.' ,
        price: 150,
    },
    {
        id: 2,
        image: 'image/AD3.jpg',
        title: 'Z.N.E. Made to be Remade Hoodie',
        bek: 'Ez a kiadás már csak Club tagok kedvence. ' ,
        price: 95,
    },
    {
        id: 3,
        image: 'image/AD4.jpg',
        title: 'Essentials 3-Stripes Crop TOP',
        bek: 'Megérdemli a kényelmet, és ez a crop top gondoskodik róla, hogy megkapja.' ,
        price: 30,
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