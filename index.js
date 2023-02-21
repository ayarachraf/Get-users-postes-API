function getPosts(userId){
    const request = new XMLHttpRequest()
    request.open("GET" , "https://jsonplaceholder.typicode.com/posts?userId=" +userId)
    request.send()
    request.responseType = "json"
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let posts = request.response
            document.getElementById("posts").innerHTML = "";
            for(post of posts){
                let content = `
                <div id="post">
                    <h1> ${post.title} </h1>
                    <hr>
                    <p> ${post.body} </p>

                </div>`
                document.getElementById("posts").innerHTML += content;
            
            }
          
            
    }else{
        alert("error");
    }
        }
        
    }
getPosts();


function getUsers(){
    const request = new XMLHttpRequest()
    request.open("GET" , "https://jsonplaceholder.typicode.com/users")
    request.send()
    request.responseType = "json"
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let users = request.response
            document.getElementById("users").innerHTML = "";
            for(user of users){
                let content = `
                <div id="user" onclick ="userclicked(${user.id} , this )" >
                    <h1> ${user.name} </h1>
                    <hr>
                    <p> ${user.email} </p>

                </div>`
                document.getElementById("users").innerHTML += content;
            
            }
          
            
    }else{
        alert("error");
    }
        }
    }
    getUsers()