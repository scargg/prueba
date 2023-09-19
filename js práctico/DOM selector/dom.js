const titulo = document.querySelector('h1')
const p1 = document.querySelector('.t1')
const input = document.querySelector('input')
const p3 = document.querySelector('.t3')
const div = document.querySelector('.img-cont')

titulo.innerText = 'Titulo'
console.log(p1.getAttribute('class'));
p1.setAttribute('class','p1')
console.log(p1.getAttribute('class'));
p1.classList.add('parrafo1')
p1.classList.remove('p1')
input.setAttribute('value','Holaaa')
input.value = 'Holaa'

const imagen = document.createElement('img')
const imagen2 = document.createElement('img')
imagen.classList.add('blog-img')
imagen2.classList.add('blog-img')
imagen.setAttribute('src','https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
imagen2.setAttribute('src','https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
div.append(imagen)
div.append(imagen2)