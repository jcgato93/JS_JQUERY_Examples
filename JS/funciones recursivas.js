// Un concepto que siempre le cuesta bastante a los programadores que están empezando es el de recursión o recursividad (se puede decir de las dos maneras).

// Aunque es un concepto que puede llegar a ser muy complejo, en esencia es muy sencillo:

// La recursividad consiste en funciones que se llaman a sí mismas, evitando el uso de bucles y otros iteradores.

// Uno ejemplo fácil de ver y que se usa a menudo es el cálculo del factorial de un número entero. El factorial de un número se define como ese número multiplicado por el anterior, éste por el anterior, y así sucesivamente hasta llegar a 1. Así, por ejemplo, el factorial del número 5 sería: 5x4x3x2x1 = 120.

// Tomando el factorial como base para un ejemplo, ¿cómo podemos crear una función que calcule el factorial de un número? Bueno, existen multitud de formas. La más obvia quizá sería simplemente usar un bucle determinado para hacerlo, algo así en JavaScript:
function factorial(n){
    var res = 1;
    for(var i=n; i>=1; i--){
      res = res * i;
    }
    return res;
  }



//   Sin embargo hay otra forma de hacerlo sin necesidad de usar 
//   ninguna estructura de bucle que es mediante recursividad. 
//   Esta versión de la función hace exactamente lo mismo, pero es más corta, más simple y más elegante:

  function factorial(n) {
      if (n<=1) return 1;
      return n* factorial(n-1);
  }





//otro ejemplo seria el de el fibonaci
function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;

    return fibonacci(num - 1) + fibonacci(num-2)
}


fibonacci(1)//0