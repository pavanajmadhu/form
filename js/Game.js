class Game{
    constructor(){
        
    }
getState(){
   database.ref("gameState").on("value",function(data){
    gameState=data.val();   
   }) 
}

update(state){
database.ref('/').update({
    gameState:state
})
}

start(){
    if(gameState===0){
       //Abstract method of creating 
       player=new Player();
       form=new Form();
        player.getCount();
        form.display();
    }
}

}