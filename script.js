const mode = document.querySelector('.fa-adjust');
const form = document.querySelector('.tdForm');
const todo = document.querySelector('.textArea');
const button = document.querySelector('.btn');
const list = document.querySelector('.list-container');

mode.addEventListener('click',function(){
    const vc =getComputedStyle(document.documentElement).getPropertyValue('--bgcolor');

    if(vc.trim() === 'black')
        changeToWhite();
    else if(vc.trim() === 'white')
        changeToBlack();    
});

function changeToWhite(){
    document.documentElement.style.setProperty('--formcolor', '#f3f3f4');
    document.documentElement.style.setProperty('--bgcolor', 'white');
    document.documentElement.style.setProperty('--btncolor', '#ffa351ff');
    document.documentElement.style.setProperty('--btntextcolor', 'black');
    document.documentElement.style.setProperty('--listcolor', '#ffa351ff');
    document.documentElement.style.setProperty('--white', 'black');

    const is = document.querySelectorAll('.fa-check, .fa-trash');
    if(is.length > 0){
        is[0].style.backgroundColor = 'lightgreen'
        is[0].style.color = 'black';
        is[1].style.backgroundColor = 'red';
        is[1].style.color = 'black';
    }
}

function changeToBlack(){
    document.documentElement.style.setProperty('--bgcolor', 'black');
    document.documentElement.style.setProperty('--formcolor', '#191919');
    document.documentElement.style.setProperty('--btncolor', '#333333');
    document.documentElement.style.setProperty('--listcolor', '#2d283e');
    document.documentElement.style.setProperty('--btntextcolor', 'rgb(170, 165, 165)');
    document.documentElement.style.setProperty('--white', 'white');

    const is = document.querySelectorAll('.fa-check, .fa-trash');
    if(is.length > 0){
        is[0].style.backgroundColor = '#2d283e';
        is[0].style.color = 'gray';
        is[1].style.backgroundColor = '#2d283e';
        is[1].style.color = 'gray';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let p = document.createElement('p');
    let node = document.createElement('li');
    p.appendChild(document.createTextNode(todo.value));
    node.appendChild(p);
    node.appendChild(document.createElement('i')).className = "fa fa-check";
    node.appendChild(document.createElement('i')).className = "fa fa-trash";
    list.appendChild(node);
    todo.value = '';

    check();
    removeItem();
});


function check() {
    let checked = document.querySelectorAll('.fa-check');
    for(var i = 0; i < checked.length; i++) {
        checked[i].addEventListener('click', (e) => {
            e.target.style.display = 'none';
            let parent = e.target.parentElement.style;
            parent.backgroundColor = '#191919';
            parent.color = 'black';
            parent.textDecoration = 'line-through';
        })
    }
}


function removeItem(){
    let trash = document.querySelectorAll('.fa-trash');
    for(var i=0; i<trash.length; i++){
        trash[i].onclick = function(){
            var p = this.parentElement;
            p.style.display = "none";
        }
    }
}

