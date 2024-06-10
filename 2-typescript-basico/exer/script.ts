
//defina a interfaze da API: https://api.origamid.dev/json/notebook.json e mostra os dados na tela


interface Empresa{
    nome: string;
    fundacao: number;
    pais: string
}


interface Product {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante : {
        nome: string;
        fundacao: number;
        pais: string
    };
    empresaMontadora:Empresa

}


async function fetchProduct(){

    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data)
}



fetchProduct();

function showProduct(data:Product){
    document.body.innerHTML = `
    
     <div>
        <h2>${data.nome}- <span>R$ ${data.preco}</span></h2>
        <p>${data.descricao}</p>
        <p>${data.empresaMontadora.pais}</p>
        
     
     </div>
    
    `
}


//2-Exer 

interface Curso {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avançado';
}



async function fetchCursos(){

    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
     
   

    MostrarCursos(data)

    console.log(data)
}



function MostrarCursos(cursos:Curso[]){
    
    
   
    cursos.forEach((curso) =>{
        let color
        if(curso.nivel === "iniciante"){
            color="blue";
        }else {
            color="red"
        }

        document.body.innerHTML += `
    
        <h2>${curso.nome} - <span style="color:${color}">${curso.nivel}</span> </h2>
      
      `
    })

   
}

fetchCursos()
