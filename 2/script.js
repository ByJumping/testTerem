const submit = document.querySelector('.submit')
const reqURL = './data.json'
const data = document.querySelector('.data')
const getBtn = document.querySelector('.get')
const select = document.querySelector('.select')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    if(input1.value === '' || input2.value === '') {
        alert('Ошибка, введите данные')
    }else {
        data.insertAdjacentHTML('beforeend', `
    <div>Select: ${select.value}</div>
    <div>Первое значение: ${input1.value}</div>
    <div>Второе значение: ${input2.value}</div>
    `)
    }
})

getBtn.addEventListener('click', ()=> {
    sendRequest('GET', reqURL)
        .then(data=> alert(`Имя: ${data.firstName}
Фамилия: ${data.lastName}`))
        .catch(err=> console.log(err))
})


function sendRequest(method, url, body = null) {
    return fetch(url).then(response=> {
        return response.json()
    })
}
sendRequest('GET', reqURL)
.then(data=> console.log(data))
.catch(err=> console.log(err))
