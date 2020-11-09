class Game{

    constructor(){
    }

    play(){
        //if(backgroundImg)
        //background(255);
        //image(trackImage, 200, 200);
        storyObject.hide();
        //player.addImage("boy image", veggieImg);
       
        
        //var random = Math.round(Math.random()*3);
        if(keyIsDown(UP_ARROW) && player.y >= displayWidth  - 852){
            player.velocityY = -25;
        }
        if(keyIsDown(RIGHT_ARROW) && player.x <= displayWidth-30){
            player.x=player.x+10;
        }
        if(keyIsDown(LEFT_ARROW) && player.x >= displayWidth-1500){
            player.x=player.x-10;
        }
        player.velocityY = player.velocityY + 1;
        
        if(score % 200 === 0){
            if(score > 0 && score < 1000){
                rocks = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                rocks.addImage("rocks", rockImg);
                rocks.velocityX = -10;
                obstacleGroup.add(rocks);
            }
            else if(score >= 1000 && score < 2000){
                var random = Math.round(Math.random()*2);
                console.log(random);
                if(random === 0){
                    cactii = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                    cactii.addImage("cactii", cactiiImg);
                    cactii.velocityX = -15
                    obstacleGroup.add(cactii);
                }
                else if(random === 1){
                    rocks = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                    rocks.addImage("rocks", rockImg);
                    rocks.velocityX = -15;
                    obstacleGroup.add(rocks);
                }
                else if(random === 2){
                    bison = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                    bison.addImage("bison", bisonImg);
                    bison.velocityX = -15
                    obstacleGroup.add(bison);
                }
            }
            else if(score >= 2000 && score < 3000){
                var random = Math.round(Math.random()*3)
                if(random === 0){
                    cactii = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                    cactii.addImage("cactii", cactiiImg);
                    cactii.velocityX = -20
                    obstacleGroup.add(cactii);
                }
                else if(random === 1){
                    rocks = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                    rocks.addImage("rocks", rockImg);
                    rocks.velocityX = -20;
                    obstacleGroup.add(rocks);
                }
                else if(random === 2){
                    bison = createSprite(displayWidth-100, displayHeight-175, 30, 30);
                    bison.addImage("bison", bisonImg);
                    bison.velocityX = -20
                    obstacleGroup.add(bison);
                }
                else if(random === 3){
                    ravine = createSprite(displayWidth-100, displayHeight-75, 30, 30);
                    ravine.addImage("ravine", ravineImg);
                    ravine.velocityX = -20;
                    obstacleGroup.add(ravine);
                }
                
            }
        }
        else if(score % 100 === 0 && fatigue < 100){
            var random = Math.round(Math.random()*displayWidth);
            
            var fruitRandom = Math.round(Math.random());
            if(fruitRandom === 0){
                fruits = createSprite(random, displayHeight-800, 10, 10);
                fruits.addImage("fruit", fruitImg);
                fruits.velocityY = 10
                fruitGroup.add(fruits);
            }
            else{
                veggies = createSprite(random, displayHeight-800, 10, 10);
                veggies.addImage("carrot", veggieImg);
                veggies.velocityY = 10;
                veggieGroup.add(veggies);
            }
        }

        if(fruitGroup.isTouching(player)){
            fruitGroup.destroyEach();
            if(fatigue + 30 > 100){
                fatigue = 100
            }
            else{
                fatigue = fatigue + 30;
            }
        }
        else if(veggieGroup.isTouching(player)){
            veggieGroup.destroyEach();
            if(fatigue + 50 > 100){
                fatigue = 100;
            }
            else{
                fatigue = fatigue + 50;
            }
        }

        if(obstacleGroup.isTouching(player)){
            obstacleGroup.destroyEach();
            fatigue = fatigue - 30;
        }

        if(fatigue <= 0){
            gameState = 2;
            completeGame = false;
        }
        if(score >= 3000){
            gameState = 2;
            completeGame = true;
        }

        
    }

    end(){
        //if(score >= 500 && score <= 501){
            //gate = createSprite(displayWidth-30, displayHeight/2);
          //  gate.addImage(gateImg);
        //}
    }

    //spriteCreation(){
        //player = createSprite(600, 600, 30, 30);
        //player.addImage("boy image", playerImage);
    //}

}