//DOM selection
const liste = document.getElementById('list')
const inpute = document.getElementById('input')
const adde = document.getElementById('add')
const cleare = document.getElementById('clear')
const urle = document.getElementById('url')
const loade = document.getElementById('load')
//On recupere le tableau des taches deja existantes
const taskse = ['Salle de sport', 'Tourner de tutos']

//Ajuoute chaque tache a la liste a puces
for (let i = 0; i < taskse.length; i++) {
    //Si on a une chaine de caracter non-vide
    if(typeof taskse[i] === 'string' && taskse[i]){
        const li = document.createElement ('li') //Creer un variable pour les liste
        const p = document.createElement('p')// Creer des variable pour le texte
        const remove = document.createElement('button') // Creer des variables pour le boutton remove
        
        p.textContent = taskse[i]//Ajouter des texte dans la liste
        remove.textContent = 'REMOVE'//Ajouter un texte sur le boutton
        li.appendChild(p)//mettre texte en enfant de liste
        li.appendChild(remove)//mettre boutton en enfant de liste

        liste.insertBefore(li, liste.lastChild)//Inserer les nouveau element dans le document HTML sur une balise donne
    }
}