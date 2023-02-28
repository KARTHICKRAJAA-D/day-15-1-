let form = document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    parent = document.querySelector('.data table')

    let tablerow = document.createElement('tr');

    arr=['firstName','lastName','gender','adress','pincode','state','country','food']
    for(let i of arr){

    let fn = document.createElement('td')
    fndata = document.querySelector(`[placeholder="${i}"]`);
    fn.innerText = fndata.value;
    tablerow.append(fn);
    fndata.value = '';
    }

     parent.append(tablerow)
})