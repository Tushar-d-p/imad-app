

// submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
  // make request to server and send the name
  var request = new XMLHttpRequest();
  
  // capture a list of name and rendered it as list
  request.onreadystatechange = function()
    {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                console.log('user logged in');
                alert('logged in successfully');
            }
            else
            {
                if(request.status == 403)
                {
                    alert('username/password is incorrect');
                }
                else
                {
                    if(request.status == 500)
                    {
                        alert('something went wrong');
                    }
                }
            }
        }
        
        
        
    };
    
    var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
    //make the request
    request.open('POST','http://algorithm321.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
    // capture names of list and rendered it in list
  
  
};
