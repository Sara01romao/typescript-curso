
//usar array de uma api

async function fetchCursos() {
    const responde = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await responde.json();

    handleCursos(json)
    
}

fetchCursos();

function handleCursos(data:unknown){
    //verifica de data é um arry para sar o métodos de map, filter...

    if(data instanceof Array){
       console.log('é uma instancia de array')
    }

    //ou verificar com função se é uma array

    if(Array.isArray(data)){
        console.log('array')
    }
}


////Type Predicate verificar se é string: 

function isString(value:unknown): value is string{
    return typeof value === 'string';
}


function handleData(data:unknown){
    if(isString(data)){
      data.toLowerCase;
    }
}

