// var img = document.getElementById('poster')
var pokemonInfo = document.getElementById('pokemonInfo')
// var searchBar = document.getElementById('searchBox')
// var searchButt = document.getElementById('submit')
var pokemonName = document.getElementById('pokemonName')
var picture = document.getElementById('picture')
var next = document.getElementById('nextButt')
var previous = document.getElementById('previousButt')
var random = document.getElementById('randomButton')
// sprite frontdefault










class Pokemon{
  constructor(pokeNumber){
    this.pokeNumber = pokeNumber;
    this.name;
    this.move;
    this.picture;
    this.stats;
  }
}
//
//
class Trainer{
  constructor(){
    this.pokedex = [];
    // this.counter = 0
  }
  addPokemon(pokemon){
    this.pokedex.push(pokemon)
  }
  all(){
    return this.pokedex
  }
  get(pokemon){
    return pokemon
  }

}


var nidoran = new Pokemon(32);
var nidorino = new Pokemon(33);
var nidoking = new Pokemon(34);

var acPokedex = new Trainer()
acPokedex.addPokemon(nidoran)
acPokedex.addPokemon(nidorino)
acPokedex.addPokemon(nidoking)


// picture.addEventListener('click', acPokedex.pokedex[0])


var i = -1;
next.addEventListener('click', function nextPokemon(){
  if(i < acPokedex.pokedex.length-1){
    i++
    myPokemon()
  }else{
    i = 0
    myPokemon()
  }
})

previous.addEventListener('click', function previousPokemon(){
if(i==0){
  return;
} else {
  i--
  myPokemon()
}
})


function myPokemon(){
$.ajax({url: "https://fizal.me/pokeapi/api/" + acPokedex.pokedex[i].pokeNumber + ".json",
// data: {name: searchBar.value},
success: function(response){
console.log(response)
hookImage(response)
hookName(response)
hookInfo(response)
  }
})
}

function hookImage(x){
picture.style.backgroundImage = "url("+x.sprites.front_default+")"
}

function hookName(x){
pokemonName.innerHTML = "Name: "+x.name;
  }
function hookInfo(x){
pokemonInfo.innerHTML = "Type: " + x.types[0].type.name + ", HP: " +x.stats[5].base_stat + ", Attack: " + x.stats[4].base_stat + ", Defense: " + x.stats[3].base_stat;
  }


random.addEventListener('click', randomPokemon)

function randomPokemon(){
let j = Math.floor(Math.random()*800)
$.ajax({url: "https://fizal.me/pokeapi/api/" + j + ".json",
// data: {name: searchBar.value},
success: function(response){
console.log(response)
hookImage(response)
hookName(response)
hookInfo(response)
  }
})
}

function hookImage(x){
picture.style.backgroundImage = "url("+x.sprites.front_default+")"
}

function hookName(x){
pokemonName.innerHTML = "Name: "+x.name;
  }
function hookInfo(x){
pokemonInfo.innerHTML = "Type: " + x.types[0].type.name + ", HP: " +x.stats[5].base_stat + ", Attack: " + x.stats[4].base_stat + ", Defense: " + x.stats[3].base_stat;
  }
