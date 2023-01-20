const mat = document.getElementById("mat")

mat.innerHTML = Math.random() * 10      // pegando número aleatorio entre 0 e 9

// mat.innerHTML = Math.floor (Math.random() * 10)     // 'floor' retorna somente a parte inteira 
// mat.innerHTML = Math.round(num)     // com 'round' pode chegar até o 10 
mat.innerHTML = Math.pow(9, 2)         // 'pow' faz a potencia"