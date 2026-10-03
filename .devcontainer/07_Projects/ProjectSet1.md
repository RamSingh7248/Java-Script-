# Projects related to DOM

## project link : https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

## Solution code

## projects 1

``` javascript
console.log("Ramu)

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach(function (button){
  console.log(button);
  button.addEvenListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;     
    }
  })
});

```