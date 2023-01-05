//Metodo que permite guarda informacion en el localStorage
function guardar() {
	contacto = JSON.parse(localStorage.getItem("listItem")) ?? [];

	let id;
	contacto.length != 0 ? contacto.findLast((item) => (id = item.id)) : (id = 0);

//En caso de que el id ya exista significa que se esta editando un contacto
	if (document.getElementById("id").value) {
		contacto.forEach((value) => {

			if (document.getElementById("id").value == value.id) {
				(value.name = document.getElementById("nombre").value),
				(value.age = document.getElementById("edad").value),
				(value.address = document.getElementById("correo").value),
				(value.phone = document.getElementById("telefono").value);
			}
		});

		document.getElementById("id").value = "";
	} 
//Caso Contrario Verifica que todos los espacios esten llenados

	else{
		let name = ("" == document.getElementById("nombre").value)
		let age = ("" == document.getElementById("edad").value)
		let address = ("" == document.getElementById("correo").value)
		let phone = ("" == document.getElementById("telefono").value)
		if (name == true || age ==true || address == true || phone == true  ) {
			confirm("Debes llenar todos los espacios")
		} else {
			//Si todo esta en orden procede a hacer un nuevo registro
			let item = {
				id: id + 1,
				name: document.getElementById("nombre").value,
				age: document.getElementById("edad").value,
				address: document.getElementById("correo").value,
				phone: document.getElementById("telefono").value,
			};
			contacto.push(item);
		}
	}

	localStorage.setItem("listItem", JSON.stringify(contacto));

	mostrar();

	document.getElementById("form").reset();
}

// Carga los archivos guardados en el local Storage
function mostrar() {
	table.innerHTML = ``;
	contacto = JSON.parse(localStorage.getItem("listItem")) ?? [];

	contacto.forEach(function (value, i) {
		var table = document.getElementById("table");

		table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td>${value.address}</td>
                <td>${value.phone}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="buscar(${value.id})"> <i class="fa fa-edit"></i> </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="eliminar(${value.id})"> <i class="fa fa-trash"> </i> </button>
                </td>
            </tr>`;
	});
}

// Deja en blanco los Inputs del formulario
function limpiar() {
	document.getElementById("form").reset();
	document.getElementById("id").value = "";
}

// Elimina un contacto
function eliminar(id) {
	contacto = JSON.parse(localStorage.getItem("listItem")) ?? [];

	contacto = contacto.filter(function (value) {
		return value.id != id;
	});

	localStorage.setItem("listItem", JSON.stringify(contacto));

	mostrar();
}

// Encuentra y Carga en los inputs la informacion del Contacto
function buscar(id) {
	contacto = JSON.parse(localStorage.getItem('listItem')) ?? []

	contacto.forEach(function (value) {
		if (value.id == id) {
			document.getElementById('id').value = value.id
			document.getElementById('nombre').value = value.name
			document.getElementById('edad').value = value.age
			document.getElementById('correo').value = value.address
			document.getElementById('telefono').value = value.phone
		}
	})
}
