//Metodo que permite guarda informacion en el localStorage

function guardar(){

    contacto = JSON.parse(localStorage.getItem('listItem')) ?? []

    let id
    contacto.length != 0 ? contacto.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        contacto.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.name      = document.getElementById('name').value, 
                value.age       = document.getElementById('age').value, 
                value.address   = document.getElementById('address').value, 
                value.phone     = document.getElementById('phone').value
            }
        });

        document.getElementById('id').value = ''

    }else{

        var item = {
            id        : id + 1, 
            name      : document.getElementById('name').value, 
            age       : document.getElementById('age').value, 
            address   : document.getElementById('address').value, 
            phone     : document.getElementById('phone').value
        }
        contacto.push(item)
    }

    localStorage.setItem('listItem', JSON.stringify(contacto))

    mostrar()

    document.getElementById('form').reset()
}

// Carga los archivos guardados en el local Storage
function mostrar(){
            
    table.innerHTML = ``
    contacto = JSON.parse(localStorage.getItem('listItem')) ?? []

    contacto.forEach(function (value, i){
       
        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td>${value.address}</td>
                <td>${value.phone}</td>
            </tr>`
    })
}

function limpiar() {
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}