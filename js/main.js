//Metodo que permite guarda informacion en el localStorage

function guardar() {
	contacto = JSON.parse(localStorage.getItem("listItem")) ?? [];

	let id;
	contacto.length != 0 ? contacto.findLast((item) => (id = item.id)) : (id = 0);

	if (document.getElementById("id").value) {
		contacto.forEach((value) => {

			if (document.getElementById("id").value == value.id) {
				(value.name = document.getElementById("name").value),
					(value.age = document.getElementById("age").value),
					(value.address = document.getElementById("address").value),
					(value.phone = document.getElementById("phone").value);
			}
		});

		document.getElementById("id").value = "";
	} else {
		let aux = ("" == document.getElementById("name").value)
		if (aux == true) {
			console.log("Hola")
		} else {
			let item = {
				id: id + 1,
				name: document.getElementById("name").value,
				age: document.getElementById("age").value,
				address: document.getElementById("address").value,
				phone: document.getElementById("phone").value,
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
                    <button class="btn btn-sm btn-success" onclick="buscar(${value.id
			})"> <i class="fa fa-edit"></i> </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="eliminar(${value.id
			})"> <i class="fa fa-trash"> </i> </button>
                </td>
            </tr>`;
	});
}

function limpiar() {
	document.getElementById("form").reset();
	document.getElementById("id").value = "";
}

function eliminar(id) {
	contacto = JSON.parse(localStorage.getItem("listItem")) ?? [];

	contacto = contacto.filter(function (value) {
		return value.id != id;
	});

	localStorage.setItem("listItem", JSON.stringify(contacto));

	mostrar();
}

function buscar(id) {
	contacto = JSON.parse(localStorage.getItem('listItem')) ?? []

	contacto.forEach(function (value) {
		if (value.id == id) {
			document.getElementById('id').value = value.id
			document.getElementById('name').value = value.name
			document.getElementById('age').value = value.age
			document.getElementById('address').value = value.address
			document.getElementById('phone').value = value.phone
		}
	})
}
