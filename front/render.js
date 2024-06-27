function renderDogs(array){  
    tableElement.textContent='';
    const trElement = document.createElement('tr');
    const nameElement = document.createElement('th');
    const ageElement = document.createElement('th');
    const breedElement = document.createElement('th');
    const idElement = document.createElement('th');
    const headerAgeText = document.createTextNode('Edad');
    const headerBreedText = document.createTextNode('Raza');
    const headerNameText = document.createTextNode('Nombre');
    const headerIdText = document.createTextNode('Id');
    tableElement.appendChild(trElement);
    trElement.appendChild(nameElement);
    trElement.appendChild(ageElement);
    trElement.appendChild(breedElement);
    trElement.appendChild(idElement);
    ageElement.appendChild(headerAgeText);
    breedElement.appendChild(headerBreedText);
    nameElement.appendChild(headerNameText);
    idElement.appendChild(headerIdText);
    for (const each of array){
        const arrayTrElement = document.createElement('tr');
        const nameElement = document.createElement('td');        
        const ageElement = document.createElement('td');  
        const breedElement = document.createElement('td');   
        const idElement = document.createElement('td');  
        const nameText = document.createTextNode(each.name);
        const breedText = document.createTextNode(each.breed);
        const ageText = document.createTextNode(each.age);
        const idText = document.createTextNode(each.id);
        ageElement.appendChild(ageText);
        ageElement.setAttribute('class', 'ageCol')
        breedElement.appendChild(breedText);
        nameElement.appendChild(nameText); 
        idElement.appendChild(idText);            
        arrayTrElement.appendChild(nameElement);
        arrayTrElement.appendChild(ageElement);
        arrayTrElement.appendChild(breedElement);
        arrayTrElement.appendChild(idElement);
        tableElement.appendChild(arrayTrElement);
    }
}

function renderForm(){
    const formElement = document.createElement('form');
    formElement.setAttribute('class', 'form');
    const nameInput = document.createElement('input');
    const ageInput = document.createElement('input');    
    const breedInput = document.createElement('input');
    nameInput.setAttribute('type', 'string');
    nameInput.setAttribute('name', 'name');
    ageInput.setAttribute('type', 'int');
    ageInput.setAttribute('name', 'age');
    breedInput.setAttribute('type', 'string');
    breedInput.setAttribute('name', 'breed');
    const nameLabel = document.createElement('label');
    const ageLabel = document.createElement('label');
    const breedLabel = document.createElement('label');
    const nameLabelText = document.createTextNode('Nombre del perrito');
    const ageLabelText = document.createTextNode('Edad del perrito');
    const breedLabelText = document.createTextNode('Raza del perrito');
    const btnSubmit = document.createElement('input')
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.setAttribute('class', 'btn');
    btnText = document.createTextNode('Enviar');    
    formCont.appendChild(formElement);
    nameLabel.appendChild(nameLabelText);
    ageLabel.appendChild(ageLabelText);
    breedLabel.appendChild(breedLabelText);
    formElement.appendChild(nameLabel);
    formElement.appendChild(nameInput);
    formElement.appendChild(ageLabel);
    formElement.appendChild(ageInput);
    formElement.appendChild(breedLabel);
    formElement.appendChild(breedInput);
    btnSubmit.appendChild(btnText);
    formElement.appendChild(btnSubmit);
    formElement.addEventListener('submit', handleSubmit)      
}

