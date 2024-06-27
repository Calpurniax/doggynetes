'use strict'



async function getDogs(){        
    try{
        await fetch('http://backend.doggynetes.apps.okd.example.com:8081/dogs',{
            method:'GET', 
            mode:'cors',              
    }) 
    .then((response)=>response.json())
    .then((data)=>{
        console.log("Success:", data);
        renderDogs(data)
    })   
    } catch(error){
        console.error("Error:", error);
    }     
}


async function createDog(data){     
    try{
        await fetch('http://backend.doggynetes.apps.okd.example.com:8081/dogs',{
            method:'POST', 
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },  
            body:JSON.stringify(data)
    })
    .then((response)=>response.json())    
    .then((data)=>{
        console.log(data);
       if(data.id)renderResult.textContent='Creado nuevo perro con id: '+ data.id     
    })    
    }catch(error){
        console.error("Error:", error);
        renderResult.textContent='Ocurrió un error, pruebe de nuevo más tarde'
    }     
}

