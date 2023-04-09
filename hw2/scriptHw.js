// Задание 1

// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} это ноль`);
//     } else if ((i%2)){
//         console.log(`${i} это нечетное число`);
//     }else{
//         console.log(`${i} это четное число`);
//     }
// }
// ____________________________________

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array1 = [1, 2, 3, 4, 5, 6, 7];
// array1.splice(3, 2);
// console.log(array1);
// _________________________________________

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrray = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    arrray.push(Math.floor(Math.random()*9));
    sum+=arrray[i];
}
function getMaxArrNum(array) {
    return Math.max.apply(null, array);
}

function searchNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===3) {
            console.log('ЕСть!');
        } else {
            continue
        }
        
    }
}
console.log(arrray);
console.log(sum);
// console.log(Math.max.apply(null, arrray));
console.log(getMaxArrNum(arrray));
searchNum(arrray);
