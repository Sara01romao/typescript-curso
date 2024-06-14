



async function dataCursos() {
    const responde = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await responde.json();

    console.log(json)

    listaCurso(json)
    
}

dataCursos();

//type Guard

function verificaData(value: unknown): value is CursoInfo{
    if(value && typeof value === 'object' && "nome" ){
        return true;
    } else{
        return false
    }

}


interface CursoInfo{
    nome: string;
    hora: number;
    tags: string[]
}

function listaCurso(data:unknown){
    
    if(Array.isArray(data)){
        data.filter(verificaData).forEach(item =>{
            document.body.innerHTML += `
            
            <p>${item.nome}</p>
            
            `
        })
    }
    
}


