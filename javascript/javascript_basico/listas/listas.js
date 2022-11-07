
const compras = ["tomates", "pan", "nueces", "gaseosa", "yerba", "duraznos"]
compras.push("Aceite de Girasol");
compras.pop();
const pelis = [
    {titulo : "ink",
    director: "Jamin Winans",
    fecha: 2009
    },
    {titulo : "We Need to Talk About Kevin",
    director: "Lynne Ramsay",
    fecha: 2011
    },
    {titulo: "Harry Potter and the Philosopher's Stone",
    director: "Chris Columbus",
    fecha: 2001
    }
]
const pelisNuevas = pelis.filter (nuevas => nuevas.fecha > 2010)

const directores = pelis.map(function(director) {
    return director.director;
})
const titulos = pelis.map(function(titulo){
    return titulo.titulo;
})
const infoPelis = directores.concat(titulos)

const infoPelisSpread =  [...directores, ...titulos]


