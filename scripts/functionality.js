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

// const fiveText = document.getElementById('six-text');
// const num23Element = document.getElementById('num-23');
const numSpan = document.querySelector('.num-span');
const leftTaskSpan = document.querySelector('.left-task');

const buttons = document.querySelectorAll('.btn');
const container = document.getElementById('history-container');
//

for(const button of buttons){
    button.addEventListener('click', function(){
        // console.log(button.id)
        button.classList.remove('bg-[#3752FD]');
        button.style.backgroundColor = 'rgba(55, 82, 253, 0.2)';
        button.disabled = true;
        alert('Board Updated Successfully');


        let num23 = parseInt(numSpan.innerText);
        num23++;
        numSpan.innerText = num23;
        let lefttask = parseInt(leftTaskSpan.innerText);
        lefttask--;
        leftTaskSpan.innerText = lefttask;


        //
        const div = document.createElement('div');
        div.classList.add('delete-history');
        container.appendChild(div);

        //
        const parentClass = button.closest('.card');
        const allH3s = parentClass.querySelectorAll('h3');
        console.log(allH3s);
        
        // another div
        const div1 = document.createElement('div');
        div1.classList.add('info');
        div.appendChild(div1);

        const specificText = allH3s[0].innerText;
        console.log(specificText);
        // const deleteHistroy = document.querySelector('delete-history');
        const p = document.createElement('p');
        p.classList.add('font-bold');
        p.innerText= `
        You have completed the task ${specificText} at {} am
        `
        // p.classList.add('')
        div1.appendChild(p);

        if(lefttask === 0){
            alert('Congratulations!!! You have completed all the current task')
        }
    })
}

