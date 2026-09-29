let comidas = [
    {
      "nombre": "Asado",
      "categoria": "Parrilla",
      "provincia": "Buenos Aires",
      "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"]
    },
    {
      "nombre": "Empanadas",
      "categoria": "Horno",
      "provincia": "Tucumán",
      "ingredientes": ["Carne", "Cebolla", "Aceitunas", "Huevo"]
    },
    {
      "nombre": "Locro",
      "categoria": "Guiso",
      "provincia": "Salta",
      "ingredientes": ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"]
    },
    {
      "nombre": "Milanesa",
      "categoria": "Frito",
      "provincia": "Buenos Aires",
      "ingredientes": ["Carne", "Huevo", "Pan rallado", "Aceite"]
    },
    {
      "nombre": "Humita en Chala",
      "categoria": "Horno",
      "provincia": "Jujuy",
      "ingredientes": ["Maíz", "Queso", "Cebolla", "Ají molido"]
    },
    {
      "nombre": "Choripán",
      "categoria": "Parrilla",
      "provincia": "Córdoba",
      "ingredientes": ["Chorizo", "Pan", "Chimichurri"]
    },
    {
      "nombre": "Provoleta",
      "categoria": "Parrilla",
      "provincia": "Buenos Aires",
      "ingredientes": ["Queso provolone", "Orégano", "Aceite de oliva"]
    },
    {
      "nombre": "Milanesas a la napolitana",
      "categoria": "Frito",
      "provincia": "Santa Fe",
      "ingredientes": ["Carne", "Tomate", "Queso", "Jamón", "Orégano"]
    },
    {
      "nombre": "Matambre a la pizza",
      "categoria": "Parrilla",
      "provincia": "Buenos Aires",
      "ingredientes": ["Matambre", "Queso", "Tomate", "Orégano"]
    },
    {
      "nombre": "Torta Frita",
      "categoria": "Frito",
      "provincia": "Entre Ríos",
      "ingredientes": ["Harina", "Agua", "Sal", "Grasa"]
    }
  ];
  
  const comidasContainer = document.getElementById("comidasContainer");
  
  // acumular las tarjetas de commmida
  let tarjetas = "";
  let i = 0;
  
  // ciclo recorrer cada comida
  while (i<comidas.length) {
    console.log(comidas[i].nombre)

    tarjetas += `
    <article class="card">
        <h2>${comidas[i].nombre}</h2>
        <p>${comidas[i].provincia}</p>
        <span>${comidas[i].categoria}</span>
    </article>
  `;
  
    i++;
    
  }

  comidasContainer.innerHTML = tarjetas;