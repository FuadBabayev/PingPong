let bar = document.querySelector("#bar");
let barX = 0;
document.onkeydown = BarMove;
                                                                let ball = document.querySelector("#ball");
                                                                let ballX = 0;
                                                                let ballY = 0;
                                                                let eX = 5;
                                                                let eY = 5;
                                                                let point = 0;
                                                                let interval = setInterval(BallMove, 30);                                                           
function BarMove(e){
// Bar-in X oxu boyunca hereketi
// e = e || window.event;  bu kodu ezber bilmelisen
if(e.keyCode == "39" || e.keyCode == "102" || e.keyCode == "68"){
if(barX<700){
barX += 50;
}
}
if(e.keyCode == "37" || e.keyCode == "100" || e.keyCode == "65"){
if(barX>0){
barX -= 50;
}    
}
bar.style.left = barX + "px";
}
                                    function BallMove(){
                                    let color="";  
                                    let x = Math.floor(Math.random() * 256 );
                                        y = Math.floor(Math.random() * 256 );
                                        z = Math.floor(Math.random() * 256 );
                                    color = `rgb(${x}, ${y}, ${z})`;
                                    color2 = `rgb(${z}, ${y}, ${x})`;
                                            // Ball-in X oxu boyunca hereketi
                                            if( ballX < 0 || ballX > 750){
                                            eX *= -1;
                                            }
                                                    // Ball-in Y oxu boyunca hereketi
                                                    if(ballY < 0){
                                                    eY *= -1;
                                                    }
                                                            // Ball Bari-in uzerinde olanda yeni qayidanda
                                                            else if(ballY > 550 && ballX >= barX-25 && ballX <= barX + 100){
                                                            point ++;
                                                            eY *= -1;
                                                            document.querySelector("#point").innerHTML = `Your score: ${point}`;
                                                            document.querySelector("#ball").style.backgroundColor = color;
                                                            document.querySelector("#bar").style.backgroundColor = color2;
                                                            }
                                                                    // Ball Bar-a deymese
                                                                    else if(ballY > 550){
                                                                    document.querySelector("body").innerHTML = "GAME OVER! " + `<br/>` 
                                                                    + " You get " + point + " point";                                                                        
                                                                    }
                                                                    ballX += eX;
                                                                    ballY += eY;
                                                                    ball.style.left = ballX + "px";
                                                                    ball.style.top = ballY + "px";
                                                                    }
