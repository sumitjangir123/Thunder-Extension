
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, "hi", final);
            })

        function final(res) {
            chrome.tabs.create({ url: 'localhost:8000/attendance/?name='+document.getElementById("email").value +'&sheetId=' + res.sheetId + "&branch=" + document.getElementById("branch").value + "&year=" +document.getElementById("year").value });
        }

    }
}, false)