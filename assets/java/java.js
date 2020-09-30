"use strict"
var score,scoreRound,activePlayer,dice;
score=[0,0];
scoreRound=0;
activePlayer=0;

//document.querySelector('#current-'+activePlayer).textContent=dice;
//var x = document.querySelector('#score-'+activePlayer).textContent;
document.querySelector('.dice').style.display='none';
function newGame(){
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
if(activePlayer===1){
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	activePlayer=0;
}
}
newGame()


document.querySelector('.btn-roll').addEventListener('click',function(){
	var dice=Math.floor(Math.random()*6+1);
	var diceDOM=document.querySelector('.dice');
	diceDOM.style.display='block';
	diceDOM.src='assets/img/dice-'+dice+'.png';
	if(score[0]===0 && score[1]===0){
		document.getElementById('score-0').textContent='0';
		document.getElementById('score-1').textContent='0';
	}
	if(dice>1){
		scoreRound+=dice;
		document.querySelector('#current-'+activePlayer).textContent=scoreRound;
	}else{
		scoreRound=0;
		document.querySelector('#current-'+activePlayer).textContent='0';
	
		activePlayer ===0 ? activePlayer=1 : activePlayer = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
	score[activePlayer]+=scoreRound;
	if(score[activePlayer]>=100){
		document.getElementById('score-'+activePlayer).textContent='WIN';
		score[0]=0;
		score[1]=0;
	}else{
	document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
	document.querySelector('#current-'+activePlayer).textContent='0';
	activePlayer ===0 ? activePlayer=1 : activePlayer = 0;
	}
	scoreRound=0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
});
document.querySelector('.btn-new').addEventListener('click',function(){
	score[0]=0;
	score[1]=0;
	newGame();

})