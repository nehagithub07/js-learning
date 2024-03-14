document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on chai aur code​</h1>​

document.getElementById('title').id
'title'

document.getElementById('title').class
undefined

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }


document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').setAttribute('class', 'test')
undefined

const title = document.getElementById('title')
undefined

title
<h1 id=​"title" class=​"test">​DOM learning on chai aur code​</h1>​

title.style.backgroundColor = 'green'
'green'

title.style.padding = "15px"
'15px'

title.style.borderRadius = "15px"
'15px'

title.innerText
'DOM learning on chai aur code'

title.textContent
'DOM learning on chai aur code test text'

title.innerHTML
'DOM learning on chai aur code <span style="display: none;">test text</span>'


document.querySelector('h2')
<h2>​Lorem ipsum dolor sit.​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>

document.querySelector('input[type="password"]')
<input type=​"password" name id>​


document.querySelector('ul')
<ul>​…​</ul>​
const myUl = document.querySelector('ul')
undefined
myUl.querySelector('li')
<li>​…​</li>​
const turnGreen = myUl.querySelector('li')
undefined
turnGreen.style.backgroundColor = "green"
'green'
turnGreen.style.padding = "10px"
'10px'
turnGreen.innerText
'One'
turnGreen.innerText = "five"
'five'