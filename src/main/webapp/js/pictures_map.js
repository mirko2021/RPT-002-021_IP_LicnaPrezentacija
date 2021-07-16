"UTF-8"

/**
 * Мапе слика.
 */

var pm_choosed = 3; 

function pm_next(){
	var img = document.getElementById("pm_image");
	switch(pm_choosed){
		case 1:
		  pm_choosed = 2; 
		  img.src = "knez/2.jpg";
		  break; 
		case 2: 
		  pm_choosed = 3; 
		  img.src = "knez/3.jpg";
		  break;
		case 3: 
		  pm_choosed = 1; 
          img.src = "knez/1.jpg";
	 	  break;
	}
}

function pm_previous(){
	var img = document.getElementById("pm_image");
	switch(pm_choosed){
		case 1:
		    pm_choosed = 3; 
		    img.src = "knez/3.jpg";
            break; 
		case 2: 
		    pm_choosed = 1;
            img.src = "knez/1.jpg";
		    break;
		case 3: 
		    pm_choosed = 2;
			img.src = "knez/2.jpg";
			break;
	}
}