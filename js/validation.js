// Objet regex dont le pattern est de permettre seulement des chiffres
const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;

// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da
const Confirme = document.getElementById('declaration');

sliderNote.addEventListener("input",ModifierIconeNote);
inputNoDA.addEventListener("input", ValiderDa)
// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

/**
 * Modifie les classes d'un élément icone selon la valeur d'une note
 * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
 */
function ModifierIconeNote(note) {
    // l'élément icone qui sera modifié
    const iconeNote = document.getElementById('icone_note');
    // On initialise les classes de l'élément à "vide"
    if (sliderNote.value < 20){
        iconeNote.setAttribute("class", "far fa-sad-cry");
    }
    else if (sliderNote.value < 40){
        iconeNote.setAttribute("class", "far fa-sad-tear");
    }
    else if (sliderNote.value < 60){
        iconeNote.setAttribute("class", "far fa-frown");
    }
    else if (sliderNote.value < 80){
        iconeNote.setAttribute("class", "far fa-smile");
    }
    else{
        iconeNote.setAttribute("class", "far fa-grin-squint-tears");
    }
    // Ajout des bonnes classes selon la valeur de la note
    // À COMPLÉTER
    titreNote.innerText = "Ma note estimée = " + sliderNote.value + " %";
}

/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage(element, message = '') {
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.innerHTML = message;
}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function ValiderDa() {
    const NumeroDa = inputNoDA.value;
    const JusteNombre = /^\d+$/.test(NumeroDa);

    if (JusteNombre && NumeroDa.length == 7 && NumeroDa.startsWith("1")|| NumeroDa.startsWith("2")){
        daIconeSucces.style.display = "block";
        daIconeErreur.style.display = "none";

        return true;
    }
    else{
        daIconeErreur.style.display = "block";
        daIconeSucces.style.display = "none";

        return false;
    }
}

function Validation() {
    let good = false;
    if (ValiderDa()) {
        
        good = true;
    }
    else{
        good = false;
    }

    return good;
}