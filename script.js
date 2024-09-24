require('dotenv').config();

const apiKey = process.env.API_KEY;

function removeBg(image) {
  let image_url;
  const formData = new FormData();
  formData.append('image_file', image);
  formData.append('size', 'auto');

  const api_key = //enter your api key;

  fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: { 'X-Api-Key': api_key },
      body: formData
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('API request failed');
      }
      return response.blob();
  })
  .then(blob => {
      image_url = URL.createObjectURL(blob);
      const resultImage = document.getElementById("result-image");
      resultImage.src = image_url;
      const downloadLink = document.getElementById("download-link");
      downloadLink.href = image_url;
  })
  .catch(error => {
      console.error(error);
  });
}