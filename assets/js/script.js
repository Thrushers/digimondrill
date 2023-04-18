var url = "https://digimon-api.vercel.app/api/digimon"

var contenido = document.querySelector("#contenido")

var input = document.querySelector("#formulario")


fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos){

        contenido.innerHTML += `
        
        <div class="tarjeta">
        <div class="zoom">
        <div class="card" style="width: 18rem;">
            <img src="${item.img}" class= "rounded" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.level}</p>
            </div>
        </div>
        </div>
        </div>`
    }
    //input.addEventListener("keyup", e =>{
        //console.log(input.value)
    
//})


})

var url = "https://digimon-api.vercel.app/api/digimon"




fetch(url)

.then(response => response.json())

.then(datos => {
 console.log(datos)

 console.log(datos[1].name)



 var contenido = document.querySelector("#contenido")

 for (let item of datos) {

 contenido.innerHTML+=`



    <li> ${item.name}</li>
 `
}

})




$(document).ready(function() {

$('#search-box').keyup(function() {

var searchValue = $(this).val().toLowerCase();

$('#contenido .tarjeta').filter(function() {

$(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);

});

});

});


