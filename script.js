const apiKey = AIzaSyDbMZpLPuDRmbz1i4FFWGMkdp3zpIDIico;

async function translateText(targetLang) {
  const textElements = document.querySelectorAll("#container h1, #container h2, #container p, #container a");

  for (const element of textElements) {
    const textToTranslate = element.innerText;

    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURI(textToTranslate)}&target=${targetLang}`;

    const res = await fetch(url, {
      method: 'POST'
    });

    const data = await res.json();

    if (data && data.data && data.data.translations && data.data.translations[0]) {
      element.innerText = data.data.translations[0].translatedText;
    }
  }
}

