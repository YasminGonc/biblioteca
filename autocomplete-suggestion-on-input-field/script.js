let destinos = ["Rio de Janeiro", "Vitória", "Maceió", "Ceará", "Rio Branco", "Macapá", "Porto Velho", "Olinda", "Aracaju", "Capitólio", "São Paulo", "Goiânia"];
let destinosSorted = destinos.sort();//Colocando o array em ordem alfabética
let input = document.querySelector("#input");

input.addEventListener("keyup", (e) => {
    removeElements()
    for(let i of destinosSorted){
        //converte o input em minúsculo e compara com o array
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            //caso verdadeiro cria o elemnto li
            let listItem = document.createElement("li");
            // lis criados vão ter a mesma classe
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayDestinos('" + i +"')");
            //partes iguais em bold
            let word = "<b>" + i.substr(0, input.value.length) +"</b>";
            word += i.substr(input.value.length);
            //Mostra o valor no array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});
function displayDestinos(value){
    input.value = value;
    removeElements();
}
function removeElements(){
    let items = document.querySelectorAll(".list-items");
     items.forEach((item) => {
        item.remove();
     });
}


/*Funciona mas não gostei, pq aparece o nome de todas as cidades e não o filtro 
function autoComplete(cidade){
    const destinos = ["Salvador", "Vitória", "Maceió", "Ceará", "Rio Branco", "Macapá", "Porto Velho", "Olinda", "Aracaju", "Capitólio", "São Paulo", "Goiânia"];
    
    return destinos.filter((valor) => {
        const valorMinusculo = valor.toLocaleLowerCase();
        const cidadeMinusculo = valor.toLocaleLowerCase();

        return valorMinusculo.includes(cidadeMinusculo);
    }); 
}

let input = document.querySelector("#input");
let list = document.querySelector(".list");

input.addEventListener("input", ({target}) => {
    const dadosDoCampo = target.value;
    
    if(dadosDoCampo.length){
        const autoCompleteValores = autoComplete(dadosDoCampo)
        list.innerHTML = `${autoCompleteValores.map((value) => {
            return (
                `<li>${value}</li>`
            )
        }).join('')}
        `
    }
});

function removeElements(){
    let items = document.querySelectorAll("li");
    items.forEach((item) => {
        item.remove();
    });
}*/

