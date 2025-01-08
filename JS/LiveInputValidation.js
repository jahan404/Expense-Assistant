
///////////////LIVE VALIDATION////////////////

document.getElementById('income').addEventListener('input',function(){

    const income = getInputFieldValueByID('income');

    if(isNaN(income) || income<=0){
        document.getElementById('income-error').classList.remove('hidden');
        return
    }
})


document.getElementById('software').addEventListener('input',function(){

    const software = getInputFieldValueByID('software');

    if(isNaN(software) || software<=0){
        document.getElementById('software-error').classList.remove('hidden');
        return
    }
})


document.getElementById('courses').addEventListener('input',function(){

    const courses = getInputFieldValueByID('courses');

    if(isNaN(courses) || courses<=0){
        document.getElementById('courses-error').classList.remove('hidden');
        return
    }
})


document.getElementById('internet').addEventListener('input',function(){

    const internet = getInputFieldValueByID('internet');

    if(isNaN(internet) || internet<=0){
        document.getElementById('internet-error').classList.remove('hidden');
        return
    }
})


