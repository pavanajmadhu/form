class Form{
    constructor(){

    }


    display(){
        //text("") 
        var title=createElement('h1')//h1 to h6
        title.html("MultiplayerCar Race Game");
        title.position(450,200);


        var Input=createInput("Enter User name");
        var Button=createButton("Start")

        Input.position(450,350);
        Button.position(450,400);

        Button.mousePressed(function (){
            Input.hide();
            Button.hide();

           var name=Input.value(); 
           playerCount=playerCount+1;
           player.updateName(name);
           player.updateCount(playerCount);

           var greeting=createElement('h2');
         greeting.html("Hello " + name);
           greeting.position(450,400)


        })



    }
}