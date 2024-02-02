// 4 презентация по js


// работа на уроке


//1.1

//let obj = {}
//let obj2 = new Object()
//let key = prompt('Enter key', 'address')
//let val = prompt('Enter val', 'address')
//let user = {
//    name: 'Vasya',
//    age: 15,
//    isAdmin: false,
//    'like dogs': true,
//    [key+'_user']: val
//}
//
//
//user.name = 'User1'
//user.surname = 'Petrov'
//delete user.age
//console.log(user[key+'_user'])

//1.2

//function makeUser(name, age){
//    return { name, age }
//}
//let user = makeUser('Vasya', 20)
//console.log('name' in user)


//1.3

//let user = {
//    name: 'Vasya',
//    age: 16,
//    'is Admin': true
//}
//let adress = {
//    'street': 'Lenina'
//}
//let admin = Object.assign({}, user, adress)
//admin.name = 'admin'
//admin['is Admin'] = true
//console.log(user)
//console.log(admin)


//1.4

//let user = {
//    name: 'vasya',
//    age: 16,
//    'is Admin': false,
//
//    say_hello(){
//
//        return (`Hello ${this.name}, ${this.age + 100}`)
//
//    }
//}
//let arrow = () => {}
//let admin = Object.assign({}, user)
//admin.name = 'admin'
//admin.age = 25
//console.log(admin)
//console.log(admin['say_hello']())


//1.5

//let user = {
//    name: 'vasya',
//    age: 1667,
//    address: {
//        street: 'dhbhdb'
//        house: 632,
//        flat: 73
//    }
//}
//console.log(user?.address?.street)


//1.6

//let array = []
//let array2 = new Array()
//
//let array3 = [1,2,3,4,5]
//console.log(array3[0])
//console.log(array3.length)
//array3[0]=100
//delete array3[1]
//array3[array3.length] = 500
//array3[array3.length] = 600
//console.log(array3)


//1.7
//let arr = [ 15, 1, 2, 3, 15]
//let res = arr.map((item, index) => return item*2+index)
//console.log(res)






// задачи



//1.1

// let array = ['Привет, ', 'мир', '!']
// alert(`'` + array[0] + array[1] + array[2] + `'`)


//1.2

// let array = ['Привет, ', 'мир', '!']
// text = (`'` + array[0] + array[1] + array[2] + `'`)
// alert(text)


//1.3

// let array = ['Привет, ', 'мир', '!']
// array[0] = 'Пока, '
// alert(array)


//1.4

// let obj = {
//     petya: '2372983$',
//     Kolya: '1 rub'
// };
// alert( 'Зп пети = ' + obj.petya );
// alert( 'Зп коли = ' + obj.Kolya );


//1.5

// var arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green'],
// };
// alert(`'` + arr.ru[1].bold() + `'`)



//2.1

// let arr = ['a', 'b', 'c']
// alert(arr)


//2.2

// let arr = ['a', 'b', 'c']
// alert(arr[0])
// alert(arr[1])
// alert(arr[2])


//2.3

// let arr = ['a', 'b', 'c', 'd'];
// alert(`'` + arr[0] + '+' + arr[1] + `, ` + arr[2] + '+' + arr[3] + `'`)


//2.4

// let arr = [2, 5, 3, 9]
// result = (arr[0] * arr[1] + arr[2] * arr[3])
// alert(result)


//3.1

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// alert(obj.c);
// alert(obj["c"]);


//3.2


// var obj = { Коля: '1000', Вася: '500', Петя: '200' };
// alert(obj.Петя)
// alert(obj.Коля)


//3.3

// var obj = {
//   1: 'понедельник',
//   2: 'вторник',
//   3: 'среда',
//   4: 'четверг',
//   5: 'пятница',
//   6: 'суббота',
//   7: 'воскресенье'
// };
// alert(obj.3)


//3.4

// var obj = {
//   1: 'понедельник',
//   2: 'вторник',
//   3: 'среда',
//   4: 'четверг',
//   5: 'пятница',
//   6: 'суббота',
//   7: 'воскресенье'
// };
//
// day = 3
// alert(obj[day])


//4.1

// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9 ]
// ]
// alert(matrix[1][0])


//4.2

// var obj = {
//     js: ['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// }
// alert(obj.js[0])


//4.3

// var days = {
//   'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//   'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };
// alert(days['ru'][0]);
// alert(days['en'][2]);


//4.4


// var lang = prompt('Выберите язык `ru` or `en`')
// var day = prompt('выберите день от 1 до 7')
//
// if (lang == 'ru') {
//   if (day == 1) {
//     alert('Понедельник');
//   } else if (day == 2) {
//     alert('Вторник');
//   } else if (day == 3) {
//     alert('Среда');
//   } else if (day == 4) {
//     alert('Четверг');
//   } else if (day == 5) {
//     alert('Пятница');
//   } else if (day == 6) {
//     alert('Суббота');
//   } else if (day == 7) {
//     alert('Воскресенье');
//   } else {
//     alert('неверный день недели');
//   }
// } else if (lang == 'en') {
//   if (day == 1) {
//     alert('Monday');
//   } else if (day == 2) {
//     alert('Tuesday');
//   } else if (day == 3) {
//     alert('Wednesday');
//   } else if (day == 4) {
//     alert('Thursday');
//   } else if (day == 5) {
//     alert('Friday');
//   } else if (day == 6) {
//     alert('Saturday');
//   } else if (day == 7) {
//     alert('Sunday');
//   } else {
//     alert('неверный день');
//   }
// } else {
//   alert('неверный язык');
// }