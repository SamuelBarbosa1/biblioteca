function lerLivro(idLivro, caminhoPdf) {
    const livro = document.getElementById(idLivro);
    let iframe = livro.querySelector('iframe');

    if (!iframe) {
        // Criar o iframe se ele ainda não existe
        iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.border = '1px solid #ccc';
        iframe.src = caminhoPdf;
        livro.appendChild(iframe);
    }

    // Ajustar a visibilidade e redimensionamento
    if (iframe.style.display === 'none' || iframe.style.display === '') {
        iframe.style.display = 'block';

        // Ajustar a altura conforme o dispositivo
        if (window.innerWidth <= 768) {
            iframe.style.height = '90vh'; 
        } else {
            iframe.style.height = '800px'; 
        }
    } else {
        iframe.style.display = 'none';
    }
}
