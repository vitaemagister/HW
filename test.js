var prompt = require('prompt');

  prompt.start();

  prompt.get(['age'], function (err, result) {

    if (isNaN(result.age)) {
        console.log("Треба числа");
    }
    else if (result.age < 0){
        console.log("Не треба відь'ємних чисел бро");
    }
    else if (result.age % 2 === 0){
        console.log(result.age + ' Років');
    }
    else if (result.age === 1){
        console.log(result.age + ' Рік');
    }
    else {
        console.log(result.age + ' Роки')
    }
  });

/* Тут в мене запитання : А чому не може спрацювати if (typeof result.age !== Number) ? 
я довго намагався це зробити поки не знайшов що треба через NaN
Намагався також зробити if (isNaN(result.age) && result.age < 0) але щось не пішло
З останнім кейсом так і не можу розібратись як мені нормально використати % для result.age 
щоб отримати коректні результати років/роки дуже складно там наче якщо
*/
