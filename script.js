function lerLivro(idLivro, caminhoPdf) {
    const livro = document.getElementById(idLivro);
    let iframe = livro.querySelector('iframe');

    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.border = '1px solid #ccc';
        iframe.src = caminhoPdf;
        iframe.setAttribute('type', 'application/pdf'); 
        iframe.setAttribute('allowfullscreen', '');
        livro.appendChild(iframe);
    }

    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block';

        if (window.innerWidth <= 768) {
            iframe.style.height = '90vh'; 
        } else {
            iframe.style.height = '800px'; 
        }
    } else {
        iframe.style.display = 'none';
    }
}
