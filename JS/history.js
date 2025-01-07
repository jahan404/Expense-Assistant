document.getElementById('history-tab').addEventListener('click',function(){
    
    //adding css to history tab
    document.getElementById('history-tab').classList.add("text-white","font-semibold","bg-gradient-to-r","from-blue-500","to-purple-600")
    document.getElementById('history-tab').classList.remove('text-gray-600')

    //removing css to assistant tab
    document.getElementById('assistant-tab').classList.add('text-gray-600')
    document.getElementById('assistant-tab').classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600")
    
    //hiding the calculation form
    document.getElementById('expense-form').classList.add('hidden')
    //unhide history section
    document.getElementById('history-section').classList.remove('hidden')

})