$(function(){
    $('#selection1').click(function(){
        var color1 = "rgb(239 71 195 / 50%)";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "selectedColor", color: color1})
        })
    });

    $('#selection2').click(function(){
        var color2 = "rgb(53 221 198 / 50%)";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "selectedColor", color: color2})
        })
    });

    $('#selection3').click(function(){
        var color3 = "#f86b6b";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "selectedColor", color: color3})
        })
    });

    $('#selection4').click(function(){
        var color4 = "rgb(144 17 17)";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "selectedColor", color: color4})
        })
    });
})
