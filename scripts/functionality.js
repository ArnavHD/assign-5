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

const buttons = document.querySelectorAll('.btn-card');
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
        console.log(parentClass)
        const allH3s = parentClass.querySelectorAll('h3');
        console.log(allH3s);
        
        // another div
        const div1 = document.createElement('div');
        div1.classList.add('info');
        div.appendChild(div1);

        const specificText = allH3s[0].innerText;
        console.log(specificText);
        // const deleteHistroy = document.querySelector('delete-history');

        // Time
        const now = new Date();
        const hour_24 = now.getHours();
        const hour_12 = hour_24 % 12;
        if (hour_12 == 0){
            hour_12 = 12;
        }
        const minute = now.getMinutes().toString().padStart(2, '0');
        const second = now.getSeconds().toString().padStart(2, '0');
        const period = hour_24 > 12 ? 'PM' : 'AM';

        const p = document.createElement('p');
        p.classList.add('font-semibold');
        if(hour_24 >= 12){
            p.innerText = `
                        You have completed the task ${specificText} at ${hour_12}:${minute}:${second} ${period}
                        `
        }
        else{
            p.innerText = `
                        You have completed the task ${specificText} at ${hour_12}:${minute}:${second}  ${period}
                        `
        }
        
        // p.classList.add('')
        div1.appendChild(p);

        if(lefttask === 0){
            alert('Congratulations!!! You have completed all the current task')
        }

        // deletion
        document.getElementById('del-btn')
            .addEventListener('click', function () {
                div.style.display = 'none';
            })


    })

}

// date show

const now_date = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

document.querySelector('.day-show').innerText = `${days[now_date.getDay()]},`

document.querySelector('.date-show').innerText = `
                                                 ${month[now_date.getMonth()]} ${now_date.getDate()} ${now_date.getFullYear()}
                                                `;


// QNA section start

document.querySelector('.link-qna')
    .addEventListener('click', function(){
        window.location.href = './Qna.html'
    })

