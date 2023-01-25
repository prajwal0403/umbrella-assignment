function upload(image) {
    let newImg = image.replace(/^.*\\/, '');
    const imgDiv = document.getElementById('upload-img');
    const logoText = document.getElementById('logo-text');
    logoText.innerHTML = newImg;
    imgDiv.setAttribute('src', newImg);
    imgDiv.classList.remove('hide');
  }
  function chooseUmbrella(color) {
    const btn = document.getElementById('upload-btn');
    const imgDiv = document.getElementById('upload-img-div');
    const container = document.getElementById('container');
    imgDiv.classList.add('hide');
    const loader = document.getElementById('loader-icon');
    if (color === 'Yellow') {
      btn.classList.add('round-yellow');
      btn.classList.remove('round-blue');
      btn.classList.remove('round-pink');
      container.classList.remove('blue-bg');
      container.classList.remove('pink-bg');
      container.classList.add('yellow-bg');
      loader.classList.remove('pink');
      loader.classList.remove('blue');
      loader.classList.add('yellow');
    } else if (color === 'Pink') {
      btn.classList.add('round-pink');
      btn.classList.remove('round-blue');
      btn.classList.remove('round-yellow');
      container.classList.remove('yellow-bg');
      container.classList.remove('blue-bg');
      container.classList.add('pink-bg');
      loader.classList.remove('blue');
      loader.classList.remove('yellow');
      loader.classList.add('pink');
    } else if (color === 'Blue') {
      btn.classList.add('round-blue');
      btn.classList.remove('round-yellow');
      btn.classList.remove('round-pink');
      container.classList.remove('yellow-bg');
      container.classList.remove('pink-bg');
      container.classList.add('blue-bg');
      loader.classList.remove('yellow');
      loader.classList.remove('pink');
      loader.classList.add('blue');
    }
    const elem = document.getElementById('umbrella-img');
    loader.classList.remove('hide');
    elem.classList.add('hide');
    setTimeout(function () {
      switch (color) {
        case 'Yellow':
          elem.setAttribute('src', './Yello umbrella.png');
          loader.classList.add('hide');
          elem.classList.remove('hide');
          imgDiv.classList.remove('hide');
          break;
        case 'Pink':
          elem.setAttribute('src', './Pink umbrella.png');
          loader.classList.add('hide');
          elem.classList.remove('hide');
          imgDiv.classList.remove('hide');
          break;
        case 'Blue':
          elem.setAttribute('src', './Blue umbrella.png');
          loader.classList.add('hide');
          elem.classList.remove('hide');
          imgDiv.classList.remove('hide');
          break;
        default:
      }
    }, 3000);
  }