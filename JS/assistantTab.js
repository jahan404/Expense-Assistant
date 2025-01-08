document.getElementById('assistant-tab').addEventListener('click',function(){
    //adding css to assistant tab 
    document.getElementById('assistant-tab').classList.add("text-white","font-semibold","bg-gradient-to-r","from-blue-500","to-purple-600")
    document.getElementById('assistant-tab').classList.remove('text-gray-600')

    //removing css to history tab
    document.getElementById('history-tab').classList.add('text-gray-600')
    document.getElementById('history-tab').classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600")
    
    //unhide the calculation form
    document.getElementById('expense-form').classList.remove('hidden')
    //hide history section
    document.getElementById('history-section').classList.add('hidden')
})

