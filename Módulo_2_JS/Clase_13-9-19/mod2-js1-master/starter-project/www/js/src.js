'use strict';


function espacios(x){
    for( i=0;i<x;i++)
     document.write("  ");//espacio en blanco
   }
    
   function asteriscos( x){
    for( i=0;i<x;i++)
      document.write("*");
   }
    
   function piramide(){
    
    var a=5;
    
    for(i=a;i>=0;i--){
       espacios(i+1);
       asteriscos(a-i);
       document.write("<br />");
    }
    
   }









