chrome.storage.sync.get('enable', (result) => {
  console.log(`Value currently is ${result.enable}`);
  if (result.enable) {
    console.log('Where\'s Tim???');
    const imgs = document.getElementsByTagName('img');
    const filenames = [
      'img/tim1.jpg',
      'img/tim2.jpg',
      'img/tim3.jpg',
      'img/tim4.jpg',
      'img/tim5.jpg',
    ];
    for (imgElement of imgs) {
      const r = Math.floor(Math.random() * filenames.length);
      const file = filenames[r];
      const url = chrome.runtime.getURL(file);
      imgElement.src = url;
      console.log(url);
    }
    const text = document.querySelectorAll('p,li,h1,h2,h3,h4,span,div,b');
    for (element of text) {
      element.innerHTML = element.innerHTML.replace(/\b([A-Z]\w*)\b/g, 'Tim!');
    }
  }
});
