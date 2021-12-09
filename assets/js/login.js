var LOGIN_API = "https://music-i-like.herokuapp.com/api/v1/accounts/authentication";
var btnSubmit = document.getElementById("btn-summit");
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        loginHandle();
    }
}
function loginHandle() {

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var obj = {
        "data": {
            "type": "MemberLogin",
            "attributes": {
                "email": email,
                "password": password
            }
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", LOGIN_API, true);
    xhr.send(JSON.stringify(obj));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var responseObject = JSON.parse(xhr.responseText);
            localStorage.setItem("access_token", responseObject.data.attributes.accessKey);
        } else {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                var responseObject = JSON.parse(xhr.responseText);
                responseObject.errors[0].detail;
            }
        }
    }
}
