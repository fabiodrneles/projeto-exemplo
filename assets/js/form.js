// 		name: "Fabio Darci Dorneles",
// 		tel: "+55 (55) 99999-9999",
// 		xp: true
// 	},
//
// 	{
// 		name: "Tiffany Beltrão Castanho",
// 		tel: "+55 (51) 99999-8888",
// 		xp: false
// 	},
//
// 	{
// 		name: "Tatiana Azenha Frajuca",
// 		tel: "+55 (11) 99999-7777",
// 		xp: true
// 	},
//
// 	{
// 		name: "Luiz Paulo Barbosa",
// 		tel: "+55 (14) 99999-6666",
// 		xp: false
// 	},
//
// 	{
// 		name: "José Paulo da Silva",
// 		tel: "+55 (14) 99999-6666",
// 		xp: false
// 	}
// ]

let peoples = localStorage.getItem("peoples") ? JSON.parse(localStorage.getItem("peoples")) : [];

var tableBody = document.querySelector("table.lista tbody");


function desenharTabela() {

	currentLines = document.querySelectorAll(".dinamic-content");
	currentLines.forEach((element) => {
		element.remove();
	})

	for (let [index, person] of peoples.entries()) {
		let pessoa = 
        `<tr class="dinamic-content" style="background-color: #${(index % 2 == 0) ? 'fff': 'eee'}" >
			<td>
				${person.name}
			</td>
			
			<td>
				${person.tel}
			</td>

			<td style="color: ${(person.xp ? 'green' : 'red')}" >
				<strong> ${(person.xp ? "Sim": "Não")} </strong>
			</td>

			<td>
				<button onclick="deleteUser(${index})">
					Excluir
				</button>
				<a href="form.html?person=${index}"><button>Editar</button></a>
			</td>

		</tr>`

		tableBody.innerHTML += pessoa;
	}
}

function deleteUser(index){
	peoples.splice(index, 1); 
	desenharTabela(); 
	localStorage.setItem("peoples", JSON.stringify(peoples));
}

desenharTabela();
