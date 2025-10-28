const body = document.getElementById('body-html');
const colors = ['#bbf7d0', '#fbcfe8', '#fecaca', '#fde047', '#d1d5db', '#ffffff'];
let index = 0;

document.getElementById('theme')
    .addEventListener('click', function () {
        // Remove the current color
        // console.log('got clicked');
        // body.classList.remove(colors[index]);
        // document.getElementById('first-div').classList.remove(colors[index]);
        // document.getElementById('second-div').classList.remove(colors[index]);
        // document.getElementById('cover-grid').classList.remove(colors[index]);

        // Move to next color
        index++;
        if (index === colors.length) {
            index = 0;
        }

        
        body.style.backgroundColor = colors[index];
        document.getElementById('first-div').style.backgroundColor = colors[index];
        document.getElementById('second-div').style.backgroundColor = colors[index];
        document.getElementById('cover-grid').style.backgroundColor = colors[index];
    });
