const body = document.getElementById('body-html');
const colors = ['#bbf7d0', '#fbcfe8', '#fecaca', '#fde047', '#d1d5db', '#ffffff'];
let index = 0;

document.getElementById('theme')
    .addEventListener('click', function () {
        index++;
        if (index === colors.length) {
            index = 0;
        }

        
        body.style.backgroundColor = colors[index];
        document.getElementById('first-div').style.backgroundColor = colors[index];
        document.getElementById('second-div').style.backgroundColor = colors[index];
        document.getElementById('cover-grid').style.backgroundColor = colors[index];
    });

const fiveText = document.getElementById('six-text');
const num23 = document.getElementById('num-23');

const buttons = document.querySelectorAll('.btn');
for(const button of buttons){
    button.addEventListener('click', function(){
        console.log(button.id)
        button.classList.remove('bg-[#3752FD]');
        button.style.backgroundColor = 'rgba(55, 82, 253, 0.2)';
        button.disabled = true;
    })
}

