### Project 3

``` javaScript 

const clock = document.getElementId('clock');
// const clock = document.querySelector('#clock')

setInterval(function (){
let date = new Date();
// console.log(date.toLocalTimeString());
clock.innerHTML = date.toLocalTimeString();
}, 1000);

```