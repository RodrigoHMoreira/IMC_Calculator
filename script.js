function calculate(){
        
    var altura = document.getElementById("altura").value.toLocaleString();        
    var peso = document.getElementById("peso").value.toLocaleString();
    var altura2 = (altura*altura).toFixed(4);
    var calculo = (peso/altura2).toFixed(2); 
   
    if(calculo < 18.50) {
      document.getElementById("view").value = calculo + " - Abaixo do Peso";
    }else if(calculo >= 18.50 && calculo<= 24.90) {
      document.getElementById("view").value = calculo + " - Peso Normal";
    }else if(calculo >= 25.00 && calculo<= 29.90) {
      document.getElementById("view").value = calculo + " - Sobrepeso";
    }else if(calculo >= 30.00 && calculo<= 34.90) {
      document.getElementById("view").value = calculo + " - Obesidade Grau I";
    }else if(calculo >= 35.00 && calculo<= 39.90) {
      document.getElementById("view").value = calculo + " - Obesidade Grau II";
    }else if(calculo > 40){
      document.getElementById("view").value = calculo + " - Obesidade Grau III";
    }else{
      document.getElementById("view").value = "";
    };        
  };
  function remake(){
    document.getElementById("view").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = ""    
  };