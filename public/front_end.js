
$(function () {
        let product_list = $('#product-list')
        
        fetchproducts(function (products) {
            product_list.empty();
            for(product of products){
                product_list.append(
                    createProductcard(product)
                );
            }
        })
    })