'use strict'

const tableElement = document.querySelector('#js_table')
const formCont = document.querySelector('#js_form')
const renderResult = document.querySelector('#js_result')

//event get dogs
const btnSrch = document.querySelector('#js_btn_search');

btnSrch.addEventListener('click', handleSearch);

async function handleSearch(e){
    e.preventDefault();
    getDogs();  
};

//event create dogs
const btnCreate = document.querySelector('#js_btn_create');
btnCreate.addEventListener('click', handleRenderForm);

function handleRenderForm(e){
    e.preventDefault();    
    renderForm();
};

async function handleSubmit(e){
    e.preventDefault();      
    const data = new FormData(e.target)  
    const newDog={
        'name':data.get("name"),
        'age':data.get("age"),
        'breed':data.get("breed")
    }       
    createDog(newDog)  
}
