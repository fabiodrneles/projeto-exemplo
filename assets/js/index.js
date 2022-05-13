
    let people = [
        {
            name: 'Fabio Darci Dorneles',
            tel: '+55 (55) 9999-9999',
            xp: true
        },

        {
            name: 'Tiffany Beltrão Castanho',
            tel: '+55 (51) 9999-8888',
            xp: false 
        },

        {
            name: 'Tatiana Azenha Frajuca',
            tel: '+55 (11) 9999-7777',
            xp: true
        },

        {
            name: 'Luiz Paulo Barbosa',
            tel: '+55 (14) 9999-6666',
            xp: true
        }
    ]

function desenhaTabela () {

    currentLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    })

    for ( person in people ) {

        document.querySelector('table.lista tbody').innerHTML +=

        `<tr class="dinamic-content" style = "background-color: ${((person % 2 == 0) ? '#eee' : '#fff')}" >
        <td>
        ${people[person].name}
        </td>

        <td>
        ${people[person].tel}
        </td>

        <td>
        ${(people[person].xp) ? '<strong style = "color: green"> Sim </strong>' : '<strong style = "color: red"> Não </strong>'}
        </td>

        <td>
            <button onclick = "people.splice(${person}, 1); desenhaTabela()"> Excluir </button>
        </td>
        </tr>`

    };

};

desenhaTabela()
