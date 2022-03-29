
function bestPrice(){
  
  // validar campos
  let priceAlcohol = document.getElementById('alcid').value;
  let priceGasoline = document.getElementById('gasid').value;
  
  if( priceAlcohol == "" && priceGasoline == "" ){
    
    alert('Fill in the price of alcohol and gasoline.');

  }else if( priceAlcohol == ""){
    alert('Did not fill in the price of alcohol.');

  }else if( priceGasoline == ""){
    alert('Did not fill in the price of gasoline.');
  
  }else{
    
    let result = priceAlcohol / priceGasoline;
    
    if(result >= 0.7){
      document.getElementById('resultado').innerHTML = "Better use gasoline.";
    }else{
      document.getElementById('resultado').innerHTML = "Better use alcohol.";
    }

  }
}


