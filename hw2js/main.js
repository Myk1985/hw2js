// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const mass = [ 45,`ghgj,`, 345, `123`, true, `number`, 56, 78, `23bb`, false ]

console.log(mass)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book ={
    title: `www`,
    pageCount:45,
    genre: `action`,
}
console.log(book)

const book1 ={
    title:`html`,
    pageCount:567,
    genre: `technology`,
}
console.log(book1)

const book2 ={
    title:`js`,
    pageCount:100500,
    genre: `triller`,
}
console.log(book2)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book3 = {
    title: `yo`,
    pageCount: 36,
    genre: `somegenre`,
    authors: [
        {nAme: `Alex`},
        {age:67}
    ]
}
console.log(book3)



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name,username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name:`vfx`,username:`khkj`,password:`sdd` },
    {name:`xv`,username:`df`,password:`saa` },
    {name:`asdaf`,username:`aasfas`,password:`asas` },
    {name:`aas`,username:`fffa`,password:`asdada` },
    {name:`asdas`,username:`asasd`,password:`sadsad` },
    {name:`asda`,username:`asda`,password:`asdas` },
    {name:`adsas`,username:`asddas`,password:`asdas` },
    {name:`sadasdsa`,username:`vsfds`,password:`fsdfds` },
    {name:`eerwe`,username:`dfsdf`,password:`fgsfd` },
    {name:`dsffs`,username:`vdvf`,password:`dsgf` },
    {name:`adad`,username:`weqwe`,password:`fgfgdf` },
    {name:`vdfdsf`,username:`fgrer`,password:`fgadfga` },
    {name:`aedawf`,username:`wefawef`,password:`ggr` },
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)




// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
 const x =0;
if (x !==0) {
    console.log(`riht`);
} else {
    console.log(`unrith`);
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 17;
if (time >= 0 && time < 15) {
    console.log(`first`)
    }
else if (time >= 15 && time < 30){ console.log(`second`)}

else if ( time > 30 && time < 45) {console.log(`third`)}


else if (time > 45 && time < 59){console.log(`fours`)}
else {
    console.error(`defould`)
}



// - У змінній day дано ,якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 21;
if (day >=1 && day < 10) {
    console.log(`first`)
} else if ( day > 10 && day < 20 ) {
    console.log( `second`)
} else if (day > 20 && day < 31) {
    console.log(`third`)
} else {
    console.error( `error`)
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const day1 = +prompt(`days`);
switch (day1){
    case 1:
        console.log(`Mo`)
        break;


    case 2:
        console.log(`Tu`)
        break;


    case 3:
        console.log(`we`)
        break;


    case 4:
        console.log(`th`)
        break;


    case 5:
        console.log(`fr`)
        break;


    case 6:
        console.log(`su`)
        break;


    case 7:
        console.log(`sh`)
        break;
  default:
      console.error(`error`)
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
const number1 = 2
const number2 = 21
if (number1< number2) {
    console.log( `second bigger`, number2)
}
else if (number2 < number1) {
    console.log(`first bigger`, number1)
}
else {
    console.log(`same`)
}


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xy = 1;
if (xy ===`` || xy === null || xy === undefined || xy === 0 ) {
    xy =`default`
}
console.log(xy)


//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if ( coursesAndDurationArray [0].monthDuration > 5 ) {
    console.log(coursesAndDurationArray[0].title, `super`)
}
if  (coursesAndDurationArray [1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title,`super`)
}
 if (coursesAndDurationArray [2].monthDuration > 5) {
     console.log(coursesAndDurationArray[2].title,`super`)
 }
 if (coursesAndDurationArray [3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title,`super`)
}
 if (coursesAndDurationArray [4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title,`super`)
}
 if (coursesAndDurationArray [5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title,`super`)
}