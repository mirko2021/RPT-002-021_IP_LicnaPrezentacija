"UTF-8"

/**
 * Код та форму играња икс окса. 
 */

var tttz_1 = ' '; 
var tttz_2 = ' '; 
var tttz_3 = ' '; 
var tttz_4 = ' '; 
var tttz_5 = ' '; 
var tttz_6 = ' '; 
var tttz_7 = ' '; 
var tttz_8 = ' '; 
var tttz_9 = ' '; 

var ttt_game_win = ' '; 
var ttt_first_gammer = 'X'; 
var ttt_current_gammer = 'X'; 

function ttt_game_reset(){

	var first = document.getElementById('ttt_gammer').value;
	
	tttz_1 = ' ';
	tttz_2 = ' ';
	tttz_3 = ' ';
	tttz_4 = ' ';
	tttz_5 = ' ';
	tttz_6 = ' ';
	tttz_7 = ' ';
	tttz_8 = ' ';
	tttz_9 = ' ';
	
	
	ttt_game_win = ' ';
	ttt_first_gammer  = first; 
	ttt_current_gammer = 'X'; 
	
	document.getElementById('tttz_1').innerHTML='&nbsp;';
	document.getElementById('tttz_2').innerHTML='&nbsp;';
	document.getElementById('tttz_3').innerHTML='&nbsp;';
	
	document.getElementById('tttz_4').innerHTML='&nbsp;';
	document.getElementById('tttz_5').innerHTML='&nbsp;';
	document.getElementById('tttz_6').innerHTML='&nbsp;';
	
	document.getElementById('tttz_7').innerHTML='&nbsp;';
	document.getElementById('tttz_8').innerHTML='&nbsp;';
	document.getElementById('tttz_9').innerHTML='&nbsp;';
	
	document.getElementById('tttz_1').style.color = 'black'; 
	document.getElementById('tttz_2').style.color = 'black';
	document.getElementById('tttz_3').style.color = 'black'; 
	
	document.getElementById('tttz_4').style.color = 'black';
	document.getElementById('tttz_5').style.color = 'black'; 
	document.getElementById('tttz_6').style.color = 'black';
	
	document.getElementById('tttz_7').style.color = 'black'; 
	document.getElementById('tttz_8').style.color = 'black';
	document.getElementById('tttz_9').style.color = 'black'; 
		
	boot_thick();
} 

function ttt_tick_1(){
	if(tttz_1 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_1'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_1 = ttt_current_gammer; 
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X'; 
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function ttt_tick_2(){
	if(tttz_2 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_2'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_2 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick(); 
}

function ttt_tick_3(){
	if(tttz_3 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_3'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_3 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick(); 
}

function ttt_tick_4(){
	if(tttz_4 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_4'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_4 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function ttt_tick_5(){
	if(tttz_5 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_5'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_5 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function ttt_tick_6(){
	if(tttz_6 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_6'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_6 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function ttt_tick_7(){
	if(tttz_7 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_7'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_7 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function ttt_tick_8(){
	if(tttz_8 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_8'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_8 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function ttt_tick_9(){
	if(tttz_9 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_9'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_9 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
	boot_thick();
}

function list_non_thick(){
	var result = [];
	if(tttz_1===' ') result[result.length]=1; 
	if(tttz_2===' ') result[result.length]=2;
	if(tttz_3===' ') result[result.length]=3;
	if(tttz_4===' ') result[result.length]=4; 
	if(tttz_5===' ') result[result.length]=5;
	if(tttz_6===' ') result[result.length]=6;
	if(tttz_7===' ') result[result.length]=7; 
	if(tttz_8===' ') result[result.length]=8;
	if(tttz_9===' ') result[result.length]=9;
	return result; 
}

function boot_thick(){
	if(ttt_current_gammer!==ttt_first_gammer){
		var field = Math.ceil(Math.random()*10)%10; 
		while(true){
			var free = list_non_thick(); 
			if(free.length===0) return;
			field = field % free.length; 
			field = free[field];
			var exit = true;
			if(field==0) continue;
			switch(field){
				case 1: 
					if(tttz_1 === ' ') {ttt_tack_1(); }
					else exit = false;
					break;
				case 2:
					if(tttz_2 === ' ') {ttt_tack_2(); }
					else exit = false; 
					break;
				case 3: 
				    if(tttz_3 === ' ') {ttt_tack_3(); }
					else exit = false;
					break;
				case 4:
	                if(tttz_4 === ' ') {ttt_tack_4(); }
					else exit = false;
				    break;
				case 5: 
				    if(tttz_5 === ' ') {ttt_tack_5(); }
					else exit = false;
				    break;
				case 6: 
				    if(tttz_6 === ' ') {ttt_tack_6(); }
					else exit = false;
				    break;
				case 7: 
					if(tttz_7 === ' ') {ttt_tack_7(); }
					else exit = false;
				    break;
				case 8:
				    if(tttz_8 === ' ') {ttt_tack_8(); }
					else exit = false;
				    break;
				case 9: 
					if(tttz_9 === ' ') {ttt_tack_9(); }
					else exit = false;
				    break;
			}
			if(exit) return; 
			field = Math.ceil(Math.random()*10)%10;  
		}
	}
}
	
function ttt_tack_1(){
	if(tttz_1 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_1'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_1 = ttt_current_gammer; 
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X'; 
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_2(){
	if(tttz_2 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_2'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_2 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_3(){
	if(tttz_3 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_3'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_3 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_4(){
	if(tttz_4 !== ' ') return;
	if(ttt_game_win !== ' ') return;
	var doc = document.getElementById('tttz_4'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_4 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_5(){
	if(tttz_5 !== ' ') return;
	if(ttt_game_win !== ' ') return;
	var doc = document.getElementById('tttz_5'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_5 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_6(){
	if(tttz_6 !== ' ') return;
	if(ttt_game_win !== ' ') return;
	var doc = document.getElementById('tttz_6'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_6 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_7(){
	if(tttz_7 !== ' ') return;
	if(ttt_game_win !== ' ') return;
	var doc = document.getElementById('tttz_7'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_7 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_8(){
	if(tttz_8 !== ' ') return;
	if(ttt_game_win !== ' ') return;
	var doc = document.getElementById('tttz_8'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_8 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_tack_9(){
	if(tttz_9 !== ' ') return;
	if(ttt_game_win !== ' ') return; 
	var doc = document.getElementById('tttz_9'); 
	var val = doc.innerHTML; 
	if(val !== 'X' && val !=='O') tttz_9 = ttt_current_gammer;
	if(val !== 'X' && val !=='O') doc.innerHTML = ttt_current_gammer; 
	if(ttt_current_gammer==='X') ttt_current_gammer = 'O';  
	else if(ttt_current_gammer==='O') ttt_current_gammer = 'X';
	if(ttt_test_oks_win()) ttt_initialize_oks_win();
	if(ttt_test_iks_win()) ttt_initialize_iks_win(); 
}

function ttt_test_oks_win(){
	if(tttz_1==='O' && tttz_2==='O' && tttz_3==='O') return true;
	if(tttz_4==='O' && tttz_5==='O' && tttz_6==='O') return true;
	if(tttz_7==='O' && tttz_8==='O' && tttz_9==='O') return true; 
	if(tttz_1==='O' && tttz_4==='O' && tttz_7==='O') return true;
	if(tttz_2==='O' && tttz_5==='O' && tttz_8==='O') return true;
	if(tttz_3==='O' && tttz_6==='O' && tttz_9==='O') return true;
	if(tttz_1==='O' && tttz_5==='O' && tttz_9==='O') return true;
	if(tttz_3==='O' && tttz_5==='O' && tttz_7==='O') return true;
	return false; 	
}

function ttt_test_iks_win(){
	if(tttz_1==='X' && tttz_2==='X' && tttz_3==='X') return true;
	if(tttz_4==='X' && tttz_5==='X' && tttz_6==='X') return true;
	if(tttz_7==='X' && tttz_8==='X' && tttz_9==='X') return true; 
	if(tttz_1==='X' && tttz_4==='X' && tttz_7==='X') return true;
	if(tttz_2==='X' && tttz_5==='X' && tttz_8==='X') return true;
	if(tttz_3==='X' && tttz_6==='X' && tttz_9==='X') return true;
	if(tttz_1==='X' && tttz_5==='X' && tttz_9==='X') return true;
	if(tttz_3==='X' && tttz_5==='X' && tttz_7==='X') return true;
	return false; 	
}

function ttt_initialize_oks_win(){

	var one = '', two = '', three = ''; 
	ttt_game_win = 'X'; 
	if(tttz_1==='O' && tttz_2==='O' && tttz_3==='O') {one='tttz_1'; two='tttz_2'; three='tttz_3';}
	if(tttz_4==='O' && tttz_5==='O' && tttz_6==='O') {one='tttz_4'; two='tttz_5'; three='tttz_6';}
	if(tttz_7==='O' && tttz_8==='O' && tttz_9==='O') {one='tttz_7'; two='tttz_8'; three='tttz_9';} 
	if(tttz_1==='O' && tttz_4==='O' && tttz_7==='O') {one='tttz_1'; two='tttz_4'; three='tttz_7';}
	if(tttz_2==='O' && tttz_5==='O' && tttz_8==='O') {one='tttz_2'; two='tttz_5'; three='tttz_8';}
	if(tttz_3==='O' && tttz_6==='O' && tttz_9==='O') {one='tttz_3'; two='tttz_6'; three='tttz_9';}
	if(tttz_1==='O' && tttz_5==='O' && tttz_9==='O') {one='tttz_1'; two='tttz_5'; three='tttz_9';}
	if(tttz_3==='O' && tttz_5==='O' && tttz_7==='O') {one='tttz_3'; two='tttz_5'; three='tttz_7';}
	if(one==='' || two=='' || three=='') return;
	document.getElementById(one).style.color='goldenrod';
	document.getElementById(two).style.color='goldenrod';
	document.getElementById(three).style.color='goldenrod';
}

function ttt_initialize_iks_win(){
	var one = '', two = '', three = ''; 
	ttt_game_win = 'X'; 
	if(tttz_1==='X' && tttz_2==='X' && tttz_3==='X') {one='tttz_1'; two='tttz_2'; three='tttz_3';}
	if(tttz_4==='X' && tttz_5==='X' && tttz_6==='X') {one='tttz_4'; two='tttz_5'; three='tttz_6';}
	if(tttz_7==='X' && tttz_8==='X' && tttz_9==='X') {one='tttz_7'; two='tttz_8'; three='tttz_9';} 
	if(tttz_1==='X' && tttz_4==='X' && tttz_7==='X') {one='tttz_1'; two='tttz_4'; three='tttz_7';}
	if(tttz_2==='X' && tttz_5==='X' && tttz_8==='X') {one='tttz_2'; two='tttz_5'; three='tttz_8';}
	if(tttz_3==='X' && tttz_6==='X' && tttz_9==='X') {one='tttz_3'; two='tttz_6'; three='tttz_9';}
	if(tttz_1==='X' && tttz_5==='X' && tttz_9==='X') {one='tttz_1'; two='tttz_5'; three='tttz_9';}
	if(tttz_3==='X' && tttz_5==='X' && tttz_7==='X') {one='tttz_3'; two='tttz_5'; three='tttz_7';}
	if(one==='' || two=='' || three=='') return;
	document.getElementById(one).style.color='goldenrod';
	document.getElementById(two).style.color='goldenrod';
	document.getElementById(three).style.color='goldenrod';
}