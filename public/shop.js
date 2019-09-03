function fetchproducts(done) {
    $.get("/api/products",  function (data) {
            done(data)
        })
  }

function addProducts(name, manuf, price, done) {
    $.post("/api/products", {
        name: name,
        manufacturer: manuf,
        price: price
    },
        function (data) {
            done(data)
        }
    );
}

function createProductcard(product){
    return $(`<div class="col-4 card item">${product.name}
                <div class="row">
                    <div class="col"><b> ${product.price}</b></div>
                    <button class="col btn btn-primary">Buy</button>
                </div>
            </div>`)
} 
