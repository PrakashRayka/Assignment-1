function showContent(page) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`a[href="#"][onclick="showContent('${page}')]`).classList.add('active');
    document.querySelector('#about-content').style.display = 'block';
    document.querySelector('#contact-content').style.display = 'inline';
    document.querySelector(`#${page}-content`).style.display = 'block';
}