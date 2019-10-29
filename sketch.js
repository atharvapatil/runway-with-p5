// Update the following url based on the server address shown in your Runway app under Input--Network
const url = 'http://localhost:8001/query';
let inputText;

function setup() {
  noCanvas();
  inputText = document.getElementById('input-text');
}

function text2Image() {
  const input = {
  "caption": inputText.value
};

fetch('http://localhost:8001/query', {
  method: 'POST',
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(input)
})
  .then(response => response.json())
  .then(output => {
    const { result } = output;
    // use the outputs in your project
    if (output &&  output.result) {
          createImg(output.result);
        }
  })
}
