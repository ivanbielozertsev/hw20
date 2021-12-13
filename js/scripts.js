// // Task 1

// // вариант 1
// const arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

// // вариант 2
// const arr = ['a', 'b', 'c', 'd'];
// const arr2 = arr.slice(0, 2);
// const arr3 = arr.slice(2, 4);
// alert(`${arr2[0]}+${arr2[1]}, ${arr3[0]}+${arr3[1]}`)

// // вариант 3
// const arr = ['a', 'b', 'c', 'd'];
// const arr2 = arr.slice(0, 2);
// const arr3 = arr.slice(2, 4);
// const str1 = arr2.join(' + ');
// const str2 = arr3.join(' + ');
// alert(`${str1}, ${str2}`);

// Task 2

// function computeElements(array) {
//     const multipliedElements = array.reduce((accum, item, index) => {
//         if (index % 2) {
//             accum.push(accum.pop() * item);
//         } else {
//             accum.push(item);
//         }

//         return accum;
//     }, []);

//     return multipliedElements.reduce((prevValue, item) => prevValue + item);
// }
// alert(computeElements([2,5,3,9]))

//    Task 3
// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// alert(arr[1][0])

// task 4
// const obj =  {js:['jQuery','Angular'], php: 'hello', css: 'world'};
// alert(obj.js[0]);

// task 5
// let arr = [];
// let element = 'x';
// for (var i = 0; i < 5; i++) {
// 	arr.push(element);
// 	element += 'x';
// }
// alert(arr);

// task 6
// let arr = [];
// for (let i = 1; i < 10; i++) {
//      let str = '';
//      for (let j = 0; j < i; j++) {
//          str += i;
//      }
//      arr.push(str);
//  }
//  alert(arr);

// task 7
// function arrayFill(val, len) {
//     const arr = Array(len).fill(val);
//     console.log(arr);
//   }
//   arrayFill('x', 5)

// task 8
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 1;
// let result = arr.reduce(function(sum, elem) {
// 	if (sum > 10) {
// 		alert(num);
// 		return;
// 	} else {
// 		num++;
// 		return sum + elem;
// 	}
// }); 

// task 9
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.sort((a,b) => b - a);
// alert(arr);

// task 10
// let arr = [[1, 2, 3], [4, 5], [6]];
// arr1 = arr.flat().reduce((a, b) => a + b, 0);
// alert(arr1);

// task 11
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// arr1 = arr.flat(2).reduce((a, b) => a + b, 0);
// alert(arr1);
