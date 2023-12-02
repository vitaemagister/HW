/* Я зробив отак, розумію що не правильно але дуже довго тупив
let stars = ['*', '**', '***', '****', '*****'];
for (let star of stars) {
    console.log(star);

}
*/
// Оце я здався і попросив chat gpt для мене оці * супер складні, не повністю розумію рішення, тобто всі елементи знайомі, 
// але чим більше кода тим більше це мене зводить з його розуміння :(  
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

drawTriangle(5, '*');


for(let i = 0; i <= 100; i++){
    if (i % 3 !== 0){
        console.log(i)

    }
}

var prompt = require('prompt');
prompt.start();
prompt.get(['x', 'y'], function (err, result) {
 console.log (Math.pow(result.x, result.y))

});

// Я дебіл, я намагавася використати Math.sqrt замість Math.pow і довго не розумів чому в мене результат дивний. :(