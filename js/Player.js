class Player{
constructor(){

}

getCount(){
    database.ref("playerCount").on("value",function( data){
    playerCount=data.val();

    })
}

updateCount(count){
database.ref('/').update({
    playeCount:count
})
}

updateName(name){
    var playerIndex="player"+playerCount //player2
    database.ref(playerIndex).set({
       name: name
    })
}


}