// let num =[1,2,3,4]
// console.log(num)
// let name =['kafia', 'warda', 'nasta', 'nasra']
// console.log(name)
// let id =[4, 'kafia', 1, 'warda', 2, 'nasta', 3 ,'nasra']

// let x =['kafia','warda', 'nasta', 'nasra', 'aisha' , 'mulki']
// let showIndex = x.indexOf('nasta')
// let remove = x.slice(2,3)
// console.log(remove)

// slice ka wuxu qabtaa meel cayiman ayaad u sheagay oo aad rabto in laguso daabaco 
// let kafia = x.slice(1,3)
// console.log(kafia)

// splice elements aad rabto ayad delete daysaa
// let names = x.indexOf( 'nasra')
// let removeElement =  x.splice()
// let remove= x.splice(removeElement ,2)
// console.log(removeElement)
// console.log(x)
// console.log(names)

//wuu isku kaa jamcinaa join ka
// let joined = id.join(', ')

// wuu index ka ayuu kuu saxayaa sort mcnha 1 2 3 4 cml
// id.sort()

// reverse element ga ayuu kala gadinayaa mcnha kan hore ayuu gadaa gaynayaa kan danbana hore ayu keenayaa
// id.reverse()



// //another section in foor loop
// for(let i =0; i<id.length; i++){
//     console.log(id[i])
// }
// //push 
// //adding new element
// id.push(5, 'shukri')
// console.log(id)

// //removing element 
// id.pop(id)


// //adding new element in front
// id.unshift('shukri')
// console.log(id)

// // kan ugu horeyo ayu remove garaynayaa 
// id.shift(id)
// console.log(id)


// //construct array
// let newArray = new Array(1,2,3,4)
// console.log(newArray)








// filtering
let x = [1,2,3,4,5,6,7,8]
let filtered = x.filter(function (num){
    return num >= 5
} )
console.log(filtered)