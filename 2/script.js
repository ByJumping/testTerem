const submit = document.querySelector('.submit');
const data = document.querySelector('.data');
const getBtn = document.querySelector('.get');
const select = document.querySelector('.select');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(input1.value === '' || input2.value === '') {
        alert('Ошибка, введите данные')
    } else {
        data.insertAdjacentHTML('beforeend', `
            <div>Select: ${select.value}</div>
            <div>Первое значение: ${input1.value}</div>
            <div>Второе значение: ${input2.value}</div>
        `);
        createPerson().then();
    }
});

getBtn.addEventListener('click', ()=> {
    sendRequest('GET', 'https://terem-1c850-default-rtdb.firebaseio.com/people.json')
        .then(data=> console.log(Object.keys(data).map(key => data[key])))
        .catch(err=> console.log(err));
})

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => response.json());
}

sendRequest('GET', 'https://terem-1c850-default-rtdb.firebaseio.com/people.json')
.then(data => {
    const people = Object.keys(data).map(key=> data[key]);
    return generateHtml(people);
}).catch(err=> console.log(err));

function generateHtml(data1) {
    for (let item of data1) {
        data.insertAdjacentHTML('beforeend', `
            <div>Select: ${item.select}</div>
            <div>Первое значение: ${item.firstName}</div>
            <div>Второе значение: ${item.lastName}</div>
        `);
    }
}

function createPerson() {
    return fetch('https://terem-1c850-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            select: select.value,
            firstName: input1.value,
            lastName: input2.value
        })
    })
}

