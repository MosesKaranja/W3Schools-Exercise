var i=0

function timedCount(){
	i = i + 1
	postMessage(i) //Post a message back to the HTML page
	setTimeout("timedCount()", 500)//call timedCOunt() function every 500 milliseconds

}

timedCount();