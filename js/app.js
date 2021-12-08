// Burger-menu 
let menu = document.querySelector('span.burger-menu')

menu.addEventListener('click', () => {
    let links = document.querySelector('header div.container nav div.links ul');
    if (links.style.display == 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
})





let sayingArr = ['“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
    '“Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.”',
    'We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don\'t let yourself be lulled into inaction.'
]
let counter = 0;
let nameArr = ['Edward Newgate', 'Steve Jobs', 'Bill Gates'];
let jobArr = ['Founder Circle', 'Apple Founder', 'Microsoft Founder']
let imgArr = ['imgs/customer-one.png', 'imgs/customer-two.jpg', 'imgs/customer-three.jpg'];
// testemonials changes
setInterval(() => {
    let img = document.querySelector('.customer-info img');
    let name = document.querySelector('.customer-info h5');
    let job = document.querySelector('.customer-info h6');
    let saying = document.querySelector('.customer-info p');
    if (counter == nameArr.length)
        counter = 0;
    img.src = `${imgArr[counter]}`;
    name.innerHTML = nameArr[counter];
    saying.innerHTML = sayingArr[counter];
    name.className = '';
    job.innerHTML = jobArr[counter];
    counter++;

}, 4000)

window.onresize = () => {
    let width = window.innerWidth;
    if (width == 768) {
        window.location.reload();
    }
}