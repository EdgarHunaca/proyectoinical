function contador (cadena,letra){
var cont = 0
var i = 0 ;
while (i< cadena.length){
if (cadena [i]=== letra){
cont ++; 
}
	i++ ;
}
return cont;
}
var letra = "o";
var frase = "hola omundo";
console.log ("cantidad de letras o es = " + contador(frase,'o'));