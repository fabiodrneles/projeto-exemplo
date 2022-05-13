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
        xp: false
    }
]

for ( person in people ) {

    document.querySelector('table.lista tbody').innerHTML +=

    `<tr style = "background-color: ${((person % 2 == 0) ? '#eee' : '#fff')}" >
    <td>
       ${people[person].name}
    </td>

    <td>
       ${people[person].tel}
    </td>

    <td>
       ${(people[person].xp) ? 'Sim' : 'Não'}
    </td>

    <td>
       <button> Alterar </button>
    </td>
    </tr>`

}
