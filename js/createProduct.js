
let productNameInp = document.getElementById("product-title")
let productDescInp = document.getElementById("product-desc")
let productPriceInp = document.getElementById("product-price")
let imgUpload = document.getElementById("product-img")
let productCreateBtn = document.getElementById("product-create-btn")
let createForm = document.getElementById("create-form")
let productImgValue


imgUpload.addEventListener("change" , uploadImg)
productCreateBtn.addEventListener("click" , addProduct)


 function addProduct(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products"));
    let nameValue = productNameInp.value
    let descValue = productDescInp.value
    let priceValue = productPriceInp.value
    console.log(allProducts.length);

    if (nameValue && descValue && priceValue && productImgValue) {
        let obj = {
            title: nameValue,
            imgURL: productImgValue,
            desc: descValue,
            price:priceValue,
            id: allProducts.length + 1
        }

        let newProducts = [...allProducts , obj ]
        localStorage.setItem('products' , JSON.stringify(newProducts));

        productNameInp.value = ""
        productDescInp.value = ""
        productPriceInp.value = ""
        imgUpload.value = ""
    }else{
            alert("ENTER DATA")
        }
}


function uploadImg(){
    let file = this.files[0]    
    let types = ["image/jpeg" , "image/png"];

        if(types.indexOf(file.type) == -1){
        alert("TYPE NOT SUPPORTED");
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("IMAGE SIZE CANT BE OVER 2MG");
        return;
    }

    const reader = new FileReader();
    console.log(reader);
    reader.addEventListener("load" , ()=>{
        productImgValue = reader.result;
        console.log(productImgValue);
    })
    reader.readAsDataURL(this.files[0]);
    
}



