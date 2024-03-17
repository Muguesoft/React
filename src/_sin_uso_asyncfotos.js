const fotos = [
    {
        id: "1",
        nombre: "Compitiendo con el sol",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/retrato_curso1.jpg",
        descripcion: "Retrato con sol y flash",
        categoria: "Retratos",
        precio: 15800,
        impresion: "70 cm x 70 cm"
    },
    {
        id: "2",
        nombre: "Mi hijo",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/retrato_rami1.jpg",
        descripcion: "Disfrutando en Bariloche",
        categoria: "Retratos",
        precio: 18300,
        impresion: "90 cm x 90 cm"
    },
    {
        id: "3",
        nombre: "Anciana en Cuba",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/retrato_mujer_cuba.jpg",
        descripcion: "Paz",
        categoria: "Retratos",
        precio: 13400,
        impresion: "40 cm x 40 cm"
    },
    {
        id: "4",
        nombre: "Paraíso",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/paisajes_mar_cuba2_c.jpg",
        descripcion: "Maravilla Cubana",
        categoria: "Paisajes",
        precio: 15800,
        impresion: "100 cm x 100 cm"
    },
    {
        id: "5",
        nombre: "Maravillosa Cumbrecita",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/paisajes_arroyo_la_cumbrecita_c.jpg",
        descripcion: "Lugar de ensueño",
        categoria: "Paisajes",
        precio: 25900,
        impresion: "90 cm x 90 cm"
    },
    {
        id: "6",
        nombre: "Bariloche",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/paisajes_nevado_c.jpg",
        descripcion: "Nieve en Bariloche",
        categoria: "Paisajes",
        precio: 15400,
        impresion: "60 cm x 60 cm"
    },
    {
        id: "7",
        nombre: "Hojas",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/abstracto3_hojas.jpg",
        descripcion: "Flotando en el lago",
        categoria: "Abstractas",
        precio: 35800,
        impresion: "110 cm x 110 cm"
    },
    {
        id: "8",
        nombre: "Medusa",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/abstracto8_medusa.jpg",
        descripcion: "Animales marinos",
        categoria: "Abstractas",
        precio: 21100,
        impresion: "80 cm x 80 cm"
    },
    {
        id: "9",
        nombre: "Corteza",
        img: "https://muguesoft.github.io/Proyecto_Coder/img/abstracto6_corteza.jpg",
        descripcion: "Arbol",
        categoria: "Abstractas",
        precio: 15400,
        impresion: "30 cm x 30 cm"
    }
]

export const devuelveFotos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(fotos)
        }, 300)
    })
}

export const devuelveFotoPorId = (fotoId) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(fotos.find(foto => foto.id === fotoId))
        }, 300)
    })
}

export const devuelveFotosPorEstilo = (estilodesc) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(fotos.filter(foto => foto.categoria === estilodesc))
        }, 300)
    })
}