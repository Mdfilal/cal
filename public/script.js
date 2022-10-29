var screen = document.getElementById('screen');

function btnClick (value){
    screen.value+=value;
    
} 
  function clearScreen(value){
    screen.value="";
    
 }
 function findResult(value) {
    var result = eval(screen.value)
    screen.value =result;
    
 }