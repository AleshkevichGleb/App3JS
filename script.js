"use strict"

//task1
{
    // for(let i = 0; i <50; i++){
    //     console.log(i)
    // }

    // let a = 35;
    // while(a>8){
    //     console.log(a--)
    // }
}


//task2
{
    // let a = 89; 
    // while(a>11){
    //     document.write(a-- + "<br/>")
    // }
}

//task3
{
    // let sum = 0;
    // for(let i = 0; i < 100; i++){
    //     sum += i;
    // }
    // console.log(`Сумма чисел от 0 до 100: ${sum} `);
    // console.log('\n')
}

//task4
{
    // function getSum(a){
    //     let sum = 0;
    //     for(let i = 0; i < a; i++){
    //         sum += i;
    //         console.log(`${i}, Cумма чисел: ${sum}`)
    //     }
    //     console.log('\n')
    // }
    // getSum(5)
}

//task5
{
    // let i =8;
    // for(; i < 56; i+=2){
    //     console.log(i)
    // }
    // i = 8;
    // while(i < 54){
    //     console.log(i+=2)
    // }
    //console.log('\n')
}

//task6
{
    // for(let i = 2; i < 10; i++){
    //     for(let j = 2; j<10; j++){
    //         console.log(`${i}*${j} = ${i*j}`)
    //     }
    //     console.log('\n')
    // }
}

//task7
{
    // let num = 0
    // let n = 1000;
    // for(; n > 50; n/=2){
    //     console.log(n);
    //     num++;
    // }
    // console.log(`Количество итераций: ${num}`)
    // console.log('\n')
}


//task8
{
    // let count = 0;
    // let sum = 0;
    // let message;
    // do{
    //     message = prompt('Введите число ')
    //     if(message === '0') break;
    //     if(isNaN(+message)){
    //         alert('Введите число!');
    //         continue;
    //     }
    //     sum += +message;
    //     count++;
    // }while(message)
    // console.log(`Сумма ${sum}`);
    // sum /= count;
    // console.log(`Среднее арифметическое ${sum}`)
}

//task9
{
    let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    let a='';
    let min;
    let max;
    for (let i = 0; i < str.length; i++) {
      a += str[i]
      if(+str[i] && !+str[i+1]){
        if(typeof min !== 'number' || a < +min) min = +a;
        if(typeof max !== 'number' || a > +max) max = +a;
      }
    }
    console.log('Min:', min, 'Max:', max)
}

//task10
{
    // я вообще не понимаю как сделать это без массива
    let obr = '';
    let sum = 0;
    let count = 0;
    let n = (Math.floor(Math.random()* 8000 + 1));
    obr = String(n).split('').reverse().join("");
    console.log('Число: ', n)
    n = (String(n)).split('');
    for(let i = 0; i < n.length; i++){
        sum += +n[i];
        count++;
        console.log(`${i+1}-е число: ${n[i]}`);
    }
    n = n.join("")
    console.log(`В ${n} ${count} числа`);
    console.log(`Сумма цифр числа ${n} = ${sum}`);
    console.log(`${n} в обратном порядке: ${obr}`);
}