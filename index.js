// var img = document.getElementById('poster')
var info = document.getElementById('info')
// var searchBar = document.getElementById('searchBox')
// var searchButt = document.getElementById('submit')
var pokemon = document.getElementById('pokemon')
var picture = document.getElementById('picture')
var next = document.getElementById('nextButt')
var previous = document.getElementById('previousButt')
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


var i = -1;
// picture.addEventListener('click', acPokedex.pokedex[0])


next.addEventListener('click', function nextPokemon(){
  if(i < acPokedex.pokedex.length-1){
    i++
    ajax()
  }else{
    i = 0
    ajax()
  }
})

previous.addEventListener('click', function previousPokemon(){
if(i==0){
  return;
} else {
  i--
  ajax()
}
})


function ajax(){
$.ajax({url: "https://fizal.me/pokeapi/api/" + acPokedex.pokedex[i].pokeNumber + ".json",
// data: {name: searchBar.value},
success: function(response){
console.log(response)
hookImage(response)
hookType(response)
hookName(response)
hookHp(response)
  }
})
}

function hookImage(x){
picture.style.backgroundImage = "url("+x.sprites.front_default+")"
}

function hookName(x){
pokemon.innerHTML = x.name;
  }
function hookType(x){
info.innerHTML = x.types[0].type.name;
  }
function hookHp(x){
  console.log(x.stats[5].base_stat)
}
