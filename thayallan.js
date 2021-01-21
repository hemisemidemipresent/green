let thing = document.getElementById('listofshit');

for (let i = 0; i < 10000; i++) {
    let li = document.createElement('li');

    let input = document.createElement('input');
    input.type = 'checkbox';
    li.appendChild(input);

    let p = document.createElement('p');
    p.innerText = pad(i, 4);

    li.appendChild(p);

    thing.appendChild(li);
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
}
