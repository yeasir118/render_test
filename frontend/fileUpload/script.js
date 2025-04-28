const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const files = document.getElementById("files");
  const formData = new FormData();
  for(let i=0;i<files.files.length;i++){
    formData.append("files", files.files[i]);
  }

  const token = localStorage.getItem('jwt_token');

  fetch("http://localhost:3000/upload_files", {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
});