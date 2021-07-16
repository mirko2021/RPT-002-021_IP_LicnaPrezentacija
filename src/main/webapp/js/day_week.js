"UTF-8"

/**
 * Баратање с операцијама за текући дан.
 */

function dw_change(){
	var doc = document.getElementById('dw_input'); 
	if(doc.value===null || doc.value==='') 
		doc.value = dw_today();
	var date = new Date(doc.value);
	var dw = date.getDay();
	var dwr = '';
	switch(dw){
		case 0: dwr='недијеља'; break; 
		case 1: dwr='понедељак'; break; 
		case 2: dwr='уторак'; break; 
		case 3: dwr='сриједа'; break; 
		case 4: dwr='четвртак'; break; 
		case 5: dwr='петак'; break; 
		case 6: dwr='субота'; break; 
		case 7: dwr='недијеља'; break; 
	}
	document.getElementById('dw_record').innerHTML = ""+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()+", "+dwr; 
}

function dw_today(){
	var date = new Date();
	var year = ""+date.getFullYear(); 
	var month = ""+(date.getMonth()+1);
	var day = ""+date.getDate();
	while(year.length < 4) year = "0"+year; 
	while(month.length < 2) month = "0"+month; 
	while(day.length < 2) day = "0"+day; 
	return year+"-"+month+"-"+day;
}