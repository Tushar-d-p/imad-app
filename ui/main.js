console.log('Loaded!');
// change the text of main-text div


var element = document.getElementById('main-text'
    );

element.innerHTML= 'New Value';

// move the image

var img = document.getElementById('monu');
img.onclick = function() {img.style.marginLeft = '100 px';
};

