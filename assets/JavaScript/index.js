//DOM selection
const liste = document.getElementById('list')
const inpute = document.getElementById('input')
const adde = document.getElementById('add')
const cleare = document.getElementById('clear')
const urle = document.getElementById('url')
const loade = document.getElementById('load')
//On recupere le tableau des taches deja existantes
const tasks = ['Salle de sport', 'Tourner de tutos']



//Fonction pour ajouter les elements
function taskToDOM(task) {
    //Si on a une chaine de caracter non-vide
    if(typeof task === 'string' && task){
        const li = document.createElement ('li') //Creer un variable pour les liste
        const p = document.createElement('p')// Creer des variable pour le texte
        const remove = document.createElement('button') // Creer des variables pour le boutton remove
        
        p.textContent = task//Ajouter des texte dans la liste
        remove.textContent = 'REMOVE'//Ajouter un texte sur le boutton
        li.appendChild(p)//mettre texte en enfant de liste
        li.appendChild(remove)//mettre boutton en enfant de liste

        remove.addEventListener('click', () => {
            liste.removeChild(li)
        })

        liste.insertBefore(li, liste.lastChild)//Inserer les nouveau element dans le document HTML sur une balise donne
    }
}

//Ajuoute chaque tache a la liste a puces
tasks.forEach(lova => taskToDOM(lova))

//On gerel'ajout de tache avec le boutton add et Enter
function newTask() {
    inpute.focus()
}

adde.addEventListener('click', newTask)
inpute.addEventListener('keydown', e => {
    if (e.key === 'Enter'){
        newTask()
    }
})

//On suppprime la liste du DOM et du navigateur
cleare.addEventListener('click', () => {
    liste.innerHTML = ''
})

//On gere l'importation de tache
load.addEventListener('click', () => {

})