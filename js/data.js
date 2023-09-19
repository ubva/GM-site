const booksData = [
    {
        "index": 1,
        "dataImg" : "/images/data-imgs/wheelBearing.jpg",
        "dataTitle": "Wheel Bearing",
        "dataText":"Koll Bearings"
    },
    {
        "index": 2,
        "dataImg" : "/images/data-imgs/shockAbsorber.jpg",
        "dataTitle": "Shock Absorber",
        "dataText":"Koll | Premium Nitro"
    },
    {
        "index": 3,
        "dataImg" : "/images/data-imgs/hundaipump1.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Mighty 2"
    },
    {
        "index": 4,
        "dataImg" : "/images/data-imgs/hundaipump2.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Beta Engine"

    },
    {
        "index": 5,
        "dataImg" : "/images/data-imgs/hundaipump3.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Avante 1.5 Dohc"
    },
    {
        "index": 6,
        "dataImg" : "/images/data-imgs/hundaipump4.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Terracan 2.9CRDI"
    },
    {
        "index": 7,
        "dataImg" : "/images/data-imgs/hundaipump7.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Grandeur XG 2.5"
    },
    {
        "index": 8,
        "dataImg" : "/images/data-imgs/hundaipump5.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle E Mighty"
    },
    {
        "index": 9,
        "dataImg" : "/images/data-imgs/hundaipump6.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Mighty"
    },
    {
        "index": 10,
        "dataImg" : "/images/data-imgs/hundaipump8.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Grandeur Tg 2.7"
    },
    {
        "index": 11,
        "dataImg" : "/images/data-imgs/2hundaipump1.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Nf Sonata"
    },
    {
        "index": 12,
        "dataImg" : "/images/data-imgs/2hundaipump2.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle EF Sonata"
    },
    {
        "index": 13,
        "dataImg" : "/images/data-imgs/2hundaipump3.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Terracan 3.5"
    },
    {
        "index": 14,
        "dataImg" : "/images/data-imgs/2hundaipump4.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle New Santafe"
    },
]

let productList = document.querySelector(".product__list")

function render(arr) {
    productList.innerHTML = null

    for (let i of arr) {
        let li = document.createElement("li")
        li.setAttribute('class', "list__item")
        li.innerHTML = `
        <div class="card card__item" style="width: 18rem;">
            <img src=${i.dataImg} height="200" class="card-img-top card__img" alt="wheelBearing">
            <div class="card-body">
                <h4 class="card-title">${i.dataTitle}</h4>
                <i>Made in Korea</i>
                <p class="cart__text">${i.dataText}</p>
            </div>
        </div>
        `
        
     productList.append(li)
    }
}
render(booksData)