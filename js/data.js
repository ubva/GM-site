const booksData = [
    {
        "index": 1,
        "dataImg" : "/images/data-imgs/wheelBearing.jpg",
        "dataTitle": "Wheel Bearing"
    },
    {
        "index": 2,
        "dataImg" : "/images/data-imgs/shockAbsorber.jpg",
        "dataTitle": "Shock Absorber"
    }
]

let productList = document.querySelector(".product__list")

function render(arr) {
    productList.innerHTML = null

    for (let i of arr) {
        let li = document.createElement("li")
        li.setAttribute('class', "list__item")
        li.innerHTML = `
        <div class="card card__item" style="width: 18rem;">
            <img src=${i.dataImg} class="card-img-top card__img" alt="wheelBearing">
            <div class="card-body">
                <h4 class="card-title">${i.dataTitle}</h4>
                <i>Made in Korea</i>
            </div>
        </div>
        `
        
     productList.append(li)
    }
}
render(booksData)

btn.addEventListener("click", ()=>{

})