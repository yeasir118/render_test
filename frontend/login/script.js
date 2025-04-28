const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch("http://localhost:3000/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
    .then(data => {
      if(data.token){
        localStorage.setItem('jwt_token', data.token);
        console.log('Token saved: ', data.token);
        window.location.href = '../fileUpload/form.html';
      }else{
        console.log(data);
      }
    })
    .catch(e => console.error(e));   
});