
// from the example
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// now up to me!
// a <p> with red text that says “Hey I’m red!”

const redP = document.createElement('p');
redP.style.color = 'red';
redP.textContent = 'Hey, I\'m red!'

container.appendChild(redP);

// an <h3> with blue text that says “I’m a blue h3!”

const blueH3 = document.createElement('h3');
blueH3.style.cssText = 'color:blue;';
blueH3.textContent = 'I\'m a blue h3!';

container.appendChild(blueH3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

const div = document.createElement('div');
div.style.color = 'black'
// div.textContent = 'a test'
div.style.cssText = ('background-color:pink; border: 1px solid black')

const h1 = document.createElement('h1')
h1.textContent = 'I\'m in a div'

const p = document.createElement('p')
p.textContent = 'ME TOO!'

div.appendChild(h1)
div.appendChild(p)

container.append(div)
