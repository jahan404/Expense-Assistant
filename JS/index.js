document.getElementById('calculate').addEventListener('click',function(event){
  event.preventDefault();

  const income = getInputFieldValueByID('income')
  const software = getInputFieldValueByID('software')
  const courses = getInputFieldValueByID('courses')
  const internet = getInputFieldValueByID('internet')
  

  //see console as a table+as an object
  console.table({income,software,courses,internet})
  

  //make the results section unhidden
  document.getElementById('results').classList.remove('hidden')

  //calculation
  const totalExpense = software+courses+internet;
  const balance = income-totalExpense;
  

  //place the calculated amount
  document.getElementById('total-expenses').innerText = totalExpense.toFixed(2)
  document.getElementById('balance').innerText = balance.toFixed(2);



  //////////////////////EXPENSE FORM////////////////////////
  const log = document.createElement('div')
  log.className = 'bg-white rounded-md p-3 border-l-2 border-indigo-500 '

  
  //for DATE & TIME
  //<p class="text-md text-blue-900 font-medium">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
  log.innerHTML =`
    <p class="text-md text-blue-900 font-medium">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500 ">${new Date().toLocaleTimeString()}</p>
    <p class="text-sm text-gray-500">Income : $${income.toFixed(2)}</P>
    <p class="text-sm text-gray-500">Total Expense : $${totalExpense.toFixed(2)}</P>
    <p class="text-sm text-gray-500">Balance : $${balance.toFixed(2)}</P>
  `
  

  //inject the log in the history section
  /*
  appendChild(variable) -->> new item adds at the last
  prepend(variable) -->> new item adds at the first

  document.getElementById('history-list').prepend(log)
  */
  document.getElementById('history-list').insertBefore(log , document.getElementById('history-list').firstChild)
})


document.getElementById('calculate-savings').addEventListener('click', function(event){
   event.preventDefault();

  const income = getInputFieldValueByID('income')
  const software = getInputFieldValueByID('software')
  const courses = getInputFieldValueByID('courses')
  const internet = getInputFieldValueByID('internet') 

  const savings = getInputFieldValueByID('savings') 

  //calculation
  const totalExpense = software+courses+internet;
  const balance = income-totalExpense;

  const savingsAmount = (balance*savings)/100

  const remainingBalance = balance-savingsAmount;


  //place the calculated amount
  document.getElementById('savings-amount').innerText = savingsAmount;
  document.getElementById('remaining-balance').innerText = remainingBalance;

})