// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// const returnText = (obj) => {
//     return obj.innerText
// }
// returnText(document.querySelector("a"))

// const getFirstLink = () => {
//     return document.querySelector("a").innerText
// }
// console.log(getFirstLink())


// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// const getArr = (arr) => {
//     let newArr =[]
//     for(i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]  
//     }
//     return newArr
// }
// console.log(getArr(document.querySelectorAll("a")))

// const getArr = () => {
//     let newArr = []
//     let arr = document.querySelectorAll("a")
//     for( let i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]
//     }
//     return newArr
// }
// console.log(getArr())


// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item
// const getArr = (arr) => {
//     let newArr =[]
//     for(i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]  
//     }
//     return newArr
// }
// console.log(getArr(document.querySelectorAll(".nav__link__item")))

// const getArr = () => {
//     let arr = document.querySelectorAll(".nav__link__item")
//     let newArr =[]
//     for(i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]  
//     }
//     return newArr
// }
// console.log(getArr())

// const getArr = () => {
//     let arr = document.querySelectorAll(".nav__link__item")
//     return Array.from(arr).map((el) => {
//         return el.innerText
//     })
// }
// console.log(getArr())

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item
// const getArr = () => {
//     let arr = document.querySelectorAll(".nav__link__item")
//     let newArr =[]
//     for(i = 0; i < arr.length; i++){
//         newArr = [...newArr, `${arr[i].innerText} class`]  
//     }
//     return newArr
// }
// console.log(getArr())

// const getArr = () => {
//     let arr = document.querySelectorAll(".nav__link__item")
//     return Array.from(arr).map((el) => {
//         return el.className
//     })  
// }
// console.log(getArr())

// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .
// const getArr = () => {
//     let arr = document.querySelectorAll(".nav__link")
//     let newArr = []
//     for(i = 0; i < arr.length; i++){ 
//         newArr = [...newArr, arr[i].dataset.link]
//     }
//     return newArr
// }
// console.log(getArr())

// const getArr = () => {
//     let arr = document.querySelectorAll(".nav__link")
//     return Array.from(arr).map((el) => {
//         return el.dataset.link
//     })
// }
// console.log(getArr())


// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть //текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.

// const robot = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let secondClass = el.className.split(" ")[1]
//         let text = el.innerText
//         if(secondClass === text){
//             return el
//         }else{
//             return el
//         }

//     })
// }
// console.log(robot())


// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону

// const robot = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let secondClass = el.className.split(" ")[1]
//         let text = el.innerText
//         let dataLink = el.dataset.link
//         if(secondClass === text){
//             el.innerText = dataLink + el.innerText
//             return el
//         }else{
//             el.innerText = dataLink + secondClass
//             return el
//         }

//     })
// }
// console.dir(robot())


// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

// let arr = document.querySelectorAll(".nav__link")
// arr.forEach((el) => {
//     let str = el.className.split(" ")[1]
//     let text = el.innerText
//     if(str !== text){
//         el.remove()
//     }
// })


// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello
// let box = document.querySelector("#append-div")
// let box2 = document.createElement("div")
// box.appendChild(box2)
// box2.id = 'just-text'
// let desc = document.createElement('p')
// box2.appendChild(desc) 
// desc.innerText = "Hello"
// console.log(document.body)

// const createElement = () => {
//     let appendDiv = document.querySelector("#append-div")
//     let newElement = document.createElement("div")
//     newElement.id = 'just-text'
//     newElement.innerText = "Hello"
//     appendDiv.appendChild(newElement)
//     return appendDiv   
// }
// console.log(createElement())


// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента должен быть айди #list Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10

// const createElement = () => {
//     let appendDiv = document.querySelector("#append-div")
//     let list = document.createElement("ul")
//     list.id = 'list'
//     appendDiv.appendChild(list)   
//     for(let i = 1; i < 11; i++){
//         let newList = document.createElement("li")
//         list.appendChild(newList)
//         newList.innerText = `Child ${i}` 
//     }
//     return appendDiv
// }
// console.log(createElement())