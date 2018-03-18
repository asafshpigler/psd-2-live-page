function toggleArrow(el) {
    var elArrowImg = el.children[0];
    elArrowImg.classList.toggle('show');
}

function toggleMenu() {
    var elMenuNav = document.querySelector('header nav');
    elMenuNav.classList.toggle('open-nav');

    var elHamburger = document.querySelector('.hamburger');
    
    if (elHamburger.classList.contains('fa-bars')) {
        console.log('HEY');
        elHamburger.classList.remove('fa-bars');
        elHamburger.classList.add('fa-times');
    } else {
        console.log('YO');        
        elHamburger.classList.add('fa-bars');
        elHamburger.classList.remove('fa-times');
    }
}

function togglePageNavColor(el) {
    var elArrowImg;
    var elTxt;

    for (var i=0; i<el.children.length; i++) {
        var child = el.children[i];
        if (child.classList.contains('arrow')) elArrowImg = child.children[0]
        else elTxt = child.children[0];
    }

    var endSliceIdx, strContent;
    if (elArrowImg.src.includes('green')) {
        endSliceIdx = elArrowImg.src.lastIndexOf('-green');
        strContent = elArrowImg.src.slice(0, endSliceIdx);
        elArrowImg.src = strContent + '.png';
            
    } else {
        endSliceIdx = elArrowImg.src.lastIndexOf('.');
        strContent = elArrowImg.src.slice(0, endSliceIdx);
        elArrowImg.src = strContent += '-green.png';
    }

    elTxt.classList.toggle('mark-txt');
}

function toggleModal() {
    var elModal = document.querySelector('.modal');
    elModal.classList.toggle('show');
}