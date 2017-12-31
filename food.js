let dogFoodDiv = document.getElementById('dog_food');

let loadData = function(filename, callBacktoInvoke){
    let newRequest = new XMLHttpRequest();
    newRequest.addEventListener('load', function(){
        callBacktoInvoke(JSON.parse(this.responseText));
    })
    newRequest.open("GET", filename);
    newRequest.send();
}


let loadDogFoodToDom = function(dogfood){
    dogfood.dog_brands.forEach(brand => {
        createBrandDiv(brand);
    });
}

let createBrandDiv = function(brand){
    let foodBrand  =  document.createElement('div');
    foodBrand.innerHTML += brand.name + '<br>';
    brand.types.forEach(type => {
        foodBrand.appendChild(createTypeDiv(type))
    })
    foodBrand.classList.add('brand');
    dogFoodDiv.appendChild(foodBrand);
}

let createTypeDiv = function(type) {
    let foodType = document.createElement('div');
    foodType.innerHTML += type.type + '<br>'
        type.volumes.forEach(volume =>{
            foodType.innerHTML += volume.name + ' - ' + volume.price + '<br>';
    })
    foodType.classList.add('type');
    return foodType;
}

loadData("dogfood.json", loadDogFoodToDom);
// loadData("catfood.json", loadCatFoodToDom);A


