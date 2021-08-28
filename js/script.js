let jeu = [{
    "name": "wanda",
    "src": "images/wanda.jpg"
    }, {
    "name": "natasha",
    "src": "images/natasha.jpg"
    }, {
    "name": "natasha2",
    "src": "images/natasha3.jpg"
    }, {
    "name": "strange",
    "src": "images/strange.jpg"
    }, {
    "name": "strange2",
    "src": "images/strange2.jpg"
    }, {
    "name": "thor",
    "src": "images/thor.jpg"
    }, {
    "name": "thanos",
    "src": "images/thanos.png"
    }, {
    "name": "capmarvel",
    "src": "images/capmarvel.jpg"
    }, {
    "name": "capmarvel2",
    "src": "images/capmarvel2.jpg"
    }, {
    "name": "truc",
    "src": "images/truc.jpg"
    }];
    
function dedoublement(tab){
    let n = tab.length;
    for(let i=0; i<n; i++){
        tab.push(tab[i]);
    }
}
function melange(tab){
    let i, j, temp;
    for (i = tab.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i+1));
        temp = tab[i];
        tab[i] = tab[j];
        tab[j] = temp;
    }
}
dedoublement(jeu);
melange(jeu);
let dos = "images/dos.png";
let carteRetournee = [];
let score = 0;
// à partir d'ici plus de src en dur

function start(){
    let main = document.getElementById("main");
    for (let i=0;i<20;i++){
        main.innerHTML += '<img class="carte" id="'+i+'" src="' + dos + '" height="340" width="200">';
    }
}
start();
let mesCartes = document.querySelectorAll(".carte");
let compteurClic = 0; // Un tour de jeu dur deux clics
let cartesCourante = [];
mesCartes.forEach(function (carte){
    console.log(carte.innerText);
    carte.addEventListener("click", item => {
        if ((item.target.getAttribute('class') == 'carte') && !((carteRetournee.length>0) && (carteRetournee[0] == item.target))){
            surCarte(item);
        }else {
            alert("Déjà retournée espèce de hamster !");
        }
    });
});

function surCarte(item){
    console.log("Carte numéro: " + item.target.id);
    compteurClic++;
    console.log(compteurClic);
    carteRetournee.push(item.target);
    if (compteurClic<3){
        if (item.target.getAttribute('src') == dos){
            item.target.setAttribute('src', jeu[item.target.id].src);
        }else{
            item.target.setAttribute('src', dos);
        }
    }
    if (compteurClic == 2){
        setTimeout("verification()", 500);
    }
}

function verification(){
    alert('vérification');
    let carte1 = carteRetournee[0];
    let carte2 = carteRetournee[1];
    if (carte1.getAttribute('src') == carte2.getAttribute('src')){
        carte1.setAttribute('class', "retournee");
        carte2.setAttribute('class', "retournee");
        alert("Bravo, tu as trouvé une paire");
        score++;
    }else{
        carte1.setAttribute('src', dos);
        carte2.setAttribute('src', dos);
        alert("try again");
    }
    carteRetournee = [];
    compteurClic = 0;
}