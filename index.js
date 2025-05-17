function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer test-token"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        const body = document.querySelector('body')
        body.innerHTML = data.id
        console.log(data)
    })
    .catch(error => {
        const body = document.querySelector('body')
        body.innerHTML = error
    })
    
}

