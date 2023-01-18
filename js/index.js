let exampleForm = document.forms.example_form
let exmpleForm = document.forms.example_form
// let inp = document.querySelectorAll('.box-required input')
let reqInp = document.querySelectorAll('.secions input')
let all = document.querySelector('.all')
let need = document.querySelector('.need')
let input = document.querySelectorAll('input')
let error = document.querySelector('.errorr')
let success = document.querySelector('.success')

exmpleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    all.innerHTML = input.length
    reqInp.forEach((el) => {
        if (el.value.length === 0) {
            el.classList.add('red')
            error.innerHTML++
        }

        if (el.value.length >= 1) {
            success.innerHTML++
        }

        need.innerHTML = reqInp.length
    })



    submit()
}

function submit() {
    let user = {}
    let fm = new FormData(exmpleForm)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}




const pattern = {
    name: /^[a-z ,.'-']+$/i,
    surname: /^[a-z ,.'-']+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^998[012345789][0-9]{8}$/,
    momsName: /^[a-z ,.'-']+$/i,
    papsName: /^[a-z ,.'-']+$/i,
    age: /^\S[0-9]{0,3}$/,

}



function validate(field, regex) {
    if(regex.test(field.value)) {
        field.style.border = '2px solid rgb(0, 255, 38)'
    } else{
        field.style.border = '2px solid red'

    }
}

reqInp.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, pattern[inp.name])
    }
})
