//game variable
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

    //UI ELEMENT
    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessInput =document.querySelector('#guess-input'),
          guessBtn =document.querySelector('#guess-btn'),
          message = document.querySelector('.message');

          guessInput.value = '';

   //ASSINING UI MAX AND MIN
   
   minNum.textContent = min,
   maxNum.textContent = max;

   //PLAY AGAIN EVENT LISTNER
   game.addEventListener('mousedown', function(e){
       if(e.target.className === 'play-again'){
           window.location.reload();
       }
   })

   //GUESS BTN LISTNER
   guessBtn.addEventListener('click' , function(){
       let guess = (parseInt(guessInput.value))
     
       //VALIDATION
       if(isNaN(guess) || guess < 1 || guess > 10){
           setMessage(`please enter between ${1} and ${10}` , 'red')
       }

       //CHECK IF WON
       if (guess === winningNum){
        //    // DISABLE INPUT
        //    guessInput.disabled = true;
        //    //CHANGE BORDER COLOR
        //    guessInput.style.borderColor = 'green'
        //    //SET MESSAGE
        //    setMessage(`${guess} is correct. YOU WIN!`, 'green')

        gameOver(true,`${guess} is correct. YOU WIN!`)

       }else{
           //WRONG GUESS
           guessesLeft -= 1;

           if(guessesLeft === 0){
               //GAME OVER LOST

             gameOver(false,`Game Over You Lost .The correct number was ${winningNum}.`)

        //        // DISABLE INPUT
        //    guessInput.disabled = true;
        //    //CHANGE BORDER COLOR
        //    guessInput.style.borderColor = 'red'
        //    //SET MESSAGE
        //    setMessage(`Game Over You Lost .The correct number was ${winningNum}.`, 'red')
        }else{
            //GAME CONTINUES -ANSWER WRONG
            //set border color red
            guessInput.style.borderColor = 'red'
            //CLEAR INPUT
            guessInput.value=''
            //SET MESSAGE
           setMessage(`${guess} is wrong. ${guessesLeft} guesses left`, 'red')
               guess = ''
           }

       }

   })

   //GAMEOVER
   function gameOver(won,msg){
 let color;
     won === true ? color = 'green' : color = 'red'

       // DISABLE INPUT
       guessInput.disabled = true;
       //CHANGE BORDER COLOR
       guessInput.style.borderColor = color
       //SET TEXT COLOR 
       message.style.color = color
       //SET MESSAGE
       setMessage(msg);
       //PLAY AGAIN
       guessBtn.value = 'Play Again'
       guessBtn.className += 'play-again'



   }

   //RANDOM NO FUNCTION
   function getRandomNum (min,max){
       return (Math.floor(Math.random()*(max-min+1)+min));
   }

   //SET MESSAGE

   function setMessage(msg,color){
       message.style.color = color;
       message.textContent = msg;
   }