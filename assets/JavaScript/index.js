"use srict"

//DOM selection
const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')

//Ajouter un liste dans le tableau de donne

function addTask(){
    let taskes = [] //Variable de donne a ajouter dans la liste
    taskes.push(input.value);
    for(let i = 0; i < taskes.length; i ++){
        //Si on a une chaine de caracter non-vide
        if(typeof taskes[i] === 'string' && taskes[i]){
            const li = document.createElement ('li') //Creer un variable pour les liste
            const p = document.createElement('p')// Creer des variable pour le texte
            const remove = document.createElement('button') //Creer un boutton

            p.textContent = taskes[i]//Ajouter des texte dans la liste
            remove.textContent = 'REMOVE'//Ajouter un texte sur le boutton
            li.appendChild(p)//mettre texte en enfant de liste
            li.appendChild(remove)//mettre boutton en enfant de liste

            remove.addEventListener('click', () => {//Enlever l'element de la liste
            list.removeChild(li)
            })

            list.insertBefore(li, list.lastChild)//Inserer les nouveau element dans le document HTML sur une balise donne
            }
        }
    return taskes  
}
    add.addEventListener('click', addTask)
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter'){
            addTask()
        }
    })

//On suppprime la liste du DOM et du navigateur
clear.addEventListener('click', () => {
    list.innerHTML = ''
})