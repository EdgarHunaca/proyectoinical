function contador (cadena,letra){
		for(var i=0,cont=0;i<cadena.length; i++){
				if(cadena [i]=== letra)
					cont++;
		}
		return cont ;
}

var letra ="a"
var frase ="frase con aaa letra ";
console.log("cantidad="+contador(frase,'a'));