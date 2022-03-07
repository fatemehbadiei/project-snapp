document.addEventListener("DOMContentLoaded",loadCategories);

function loadCategories() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "category.json" , true);
    xhr.onload = function (){
        if (this.status === 200){
            const response = JSON.parse(this.responseText);
            let outPut = "";
            response.forEach((category)=>{
               outPut += `
                    <div>
                        <a href="#">
                             <img src="${category.img}" alt="" width="40" height="40">
                             <span>${category.name}</span>
                        </a>
                    </div>   
               `
            });
            document.querySelector("#category").innerHTML = outPut;
        }
    }
    xhr.send();
}

document.addEventListener("DOMContentLoaded",loadAllCategories);

function loadAllCategories() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "allCategories.json" , true);
    xhr.onload = function (){
        if (this.status === 200){
            const response1 = JSON.parse(this.responseText);
            let outPut1 = "";
            response1.forEach((category)=>{
                outPut1 += `
                         <li>
                                <a href="#">
                                    <div>
                                        <img src="${category.img}" alt="" width="30" height="30">
                                        <span>${category.name}</span>
                                    </div>
                                    <i class="${category.icon}"></i>
                                </a>
                         </li>                  
               `
            });
            document.querySelector("#all-categories").innerHTML = outPut1;
        }
    }
    xhr.send();
}

document.addEventListener("DOMContentLoaded",loadTypePrice);

function loadTypePrice() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "typePrice.json" , true);
    xhr.onload = function (){
        if (this.status === 200){
            const response2 = JSON.parse(this.responseText);
            let outPut2 = "";
            response2.forEach((price)=>{
                outPut2 += `
                    <div class="${price.class}">
                        <div>
                            <p>${price.title}</p>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>                 
               `
            });
            document.querySelector("#type-price").innerHTML = outPut2;
        }
    }
    xhr.send();
}



document.addEventListener("DOMContentLoaded",loadListOfMenu);

function loadListOfMenu() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "listOfMenu.json" , true);
    xhr.onload = function (){
        if (this.status === 200){
            const response3 = JSON.parse(this.responseText);
            let outPut3 = "";
            response3.forEach((menu)=>{
                outPut3 += `
                    <div>
                        <a href="#">
                            <div class="img-inside">
                                <img src="${menu.image1}" alt="" width="308" height="155">
                                <div class="img-outside">
                                    <img src="${menu.image2}" alt="" width="82" height="82">
                                </div>
                            </div>
                            <div class="content">
                                <p class="title">${menu.title}</p>
                                <div class="source">
                                    <i class="${menu.icon1}"></i>
                                    <span class="first-span">${menu.score1}</span>
                                    <span class="last-span">${menu.score2}</span>
                                </div>
                                <p class="type-of-food">${menu.typeOfFood}</p>
                                <div class="send-express">
                                    <i class="${menu.icon2}"></i>
                                    <span>${menu.typeOfSending}</span>
                                    <div class="price-of-sending">
                                        <span class="price-of-send-item">
                                             ${menu.price}
                                            <span>${menu.currency}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                </div>               
               `
            });
            document.querySelector("#list-of-menu").innerHTML = outPut3;
        }
    }
    xhr.send();
}
