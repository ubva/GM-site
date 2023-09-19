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
    {
        "index": 15,
        "dataImg" : "/images/data-imgs/2hundaipump5.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Santafe"
    },
    {
        "index": 16,
        "dataImg" : "/images/data-imgs/2hundaipump6.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle i30"
    },
    {
        "index": 17,
        "dataImg" : "/images/data-imgs/2hundaipump7.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Avante 1.8"
    },
    {
        "index": 18,
        "dataImg" : "/images/data-imgs/2hundaipump8.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Avante 1.5 Dohc"
    },
    {
        "index": 19,
        "dataImg" : "/images/data-imgs/3hundaipump1.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Accent Sohc"
    },
    {
        "index": 20,
        "dataImg" : "/images/data-imgs/3hundaipump2.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Atos"
    },
    {
        "index": 21,
        "dataImg" : "/images/data-imgs/3hundaipump3.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle New Porter"
    },
    {
        "index": 22,
        "dataImg" : "/images/data-imgs/3hundaipump4.jpg",
        "dataTitle": "Hyundai Water Pump",
        "dataText":"Vehicle Porter 91"
    },
    {
        "index": 23,
        "dataImg" : "/images/data-imgs/kiapump1.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Bongo 2.7"
    },
    {
        "index": 24,
        "dataImg" : "/images/data-imgs/kiapump2.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Opirus"
    },
    {
        "index": 25,
        "dataImg" : "/images/data-imgs/kiapump3.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Sportage SO"
    },
    {
        "index": 26,
        "dataImg" : "/images/data-imgs/kiapump4.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Credos 2.0 Dohc"
    },
    {
        "index": 27,
        "dataImg" : "/images/data-imgs/kiapump5.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Morning"
    },
    {
        "index": 28,
        "dataImg" : "/images/data-imgs/kiapump6.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle New Pregio"
    },
    {
        "index": 31,
        "dataImg" : "/images/data-imgs/steelball1.jpg",
        "dataTitle": "Kom Corporation",
        "dataText":"Steel Ball"
    },
    {
        "index": 29,
        "dataImg" : "/images/data-imgs/kiapump7.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Carnival (Diesel)"
    },
    {
        "index": 30,
        "dataImg" : "/images/data-imgs/kiapump8.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Canival 2.5 (Gasoline)"
    },
    {
        "index": 32,
        "dataImg" : "/images/data-imgs/steelball2.jpg",
        "dataTitle": "Kom Corporation",
        "dataText":"Steel balls"
    },
    {
        "index": 33,
        "dataImg" : "/images/data-imgs/2kiapump1.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Grand Canival 2.9"
    },
    {
        "index": 34,
        "dataImg" : "/images/data-imgs/2kiapump2.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Sephia Dohc"
    },
    {
        "index": 35,
        "dataImg" : "/images/data-imgs/2kiapump3.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Towner"
    },
    {
        "index": 36,
        "dataImg" : "/images/data-imgs/2kiapump4.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Rio Sohc"
    },
    {
        "index": 37,
        "dataImg" : "/images/data-imgs/2kiapump5.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle hi-Besta"
    },
    {
        "index": 38,
        "dataImg" : "/images/data-imgs/2kiapump6.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Jumbo Titan 2.5"
    },
    {
        "index": 39,
        "dataImg" : "/images/data-imgs/2kiapump7.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Bongo 3"
    },
    {
        "index": 40,
        "dataImg" : "/images/data-imgs/2kiapump8.jpg",
        "dataTitle": "Kia Water Pump",
        "dataText":"Vehicle Rio Dohc"
    },
    {
        "index": 41,
        "dataImg" : "/images/data-imgs/daewha1.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Seaming type| Mechanical fuel pump"
    },
    {
        "index": 42,
        "dataImg" : "/images/data-imgs/daewha2.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Seaming type| Intra filter"
    },
    {
        "index": 43,
        "dataImg" : "/images/data-imgs/daewha3.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Screw type| for racing car"
    },
    {
        "index": 44,
        "dataImg" : "/images/data-imgs/daewha4.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Screw type| for marine engine"
    },
    {
        "index": 45,
        "dataImg" : "/images/data-imgs/daewha5.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Push Rod type| for Cummins engine"
    },
    {
        "index": 46,
        "dataImg" : "/images/data-imgs/daewha6.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Push Rod type| Tandem Pump"
    },
    {
        "index": 47,
        "dataImg" : "/images/data-imgs/daewha7.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"E.F.I pump & module| Fuel Pump module"
    },
    {
        "index": 48,
        "dataImg" : "/images/data-imgs/daewha8.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"E.F.I pump & module| for passanger car and motor cycle"
    },
    {
        "index": 49,
        "dataImg" : "/images/data-imgs/daewha9.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Contact Point type| Transistor type pump"
    },
    {
        "index": 50,
        "dataImg" : "/images/data-imgs/daewha10.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Contact Point type| supplying to GM Korea"
    },
    {
        "index": 51,
        "dataImg" : "/images/data-imgs/daewha11.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Solenoid type| facet type In-line pump"
    },
    {
        "index": 52,
        "dataImg" : "/images/data-imgs/daewha12.jpg",
        "dataTitle": "Daewha Fuel Pump Ind. Co., Ltd.",
        "dataText":"Solenoid type| T/R pump"
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