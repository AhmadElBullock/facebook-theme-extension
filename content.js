chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "selectedColor"){
        $('.j83agx80').css('background-color', request.color);
        $('.hybvsw6c').css('background-color', request.color);
    }
})