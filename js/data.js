const booksData = [
    {
        "dataImg" : "/images/data-imgs/wheelBearing.jpg",
        "dataTitle": "Wheel Bearing"
    },
    {
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
            <div class="card__box">
                <button type="button" class="btn btn-primary">View more</button>
                <button type="button" class="btn btn-primary">Add to cart</button>
            </div>
        </div>
        `
        
     productList.append(li)
    }
}
render(booksData)