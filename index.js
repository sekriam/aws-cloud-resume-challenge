const counter = document.querySelector(".counter-number");
async function updateCounter(){
  let response = await fetch ("https://vmdgtg7nfp2ljgy4qrj4utybxe0sybws.lambda-url.us-east-1.on.aws/")
  let data = await response.json();
  counter.innerHTML = `Views: ${data}`;

}

updateCounter();