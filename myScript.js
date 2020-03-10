const container = document.querySelector('#container'); 

content = document.createElement('div'); 
content.classList.add('content'); 
content.textContent = 'This is the glorious text-content';

container.appendChild(content); 

paragraph = document.createElement('p'); 
paragraph.style.color = 'red'; 
paragraph.textContent = 'Hey I am red'; 

container.appendChild(paragraph); 

header = document.createElement('h3');
header.style.color = 'blue'; 
header.textContent = 'I am a blue h3'; 

container.appendChild(header);  

myDiv = document.createElement('div');  
myDiv.classList.add('new');
myDiv.style.border = 'thick solid #0000FF'; 
myDiv.style.borderColor = 'black'; 
myDiv.style.backgroundColor = 'pink';
h1 = document.createElement('h1');
h1.textContent = 'I am in a div'; 
myDiv.appendChild(h1); 
p = document.createElement('p'); 
p.textContent = 'Me too baby!!'; 
myDiv.appendChild(p);  

container.appendChild(myDiv);






 

 




 



 






 







