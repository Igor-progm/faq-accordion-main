const perguntaEResposta = document.querySelectorAll('.item');

perguntaEResposta.forEach((item) => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('ativo');

        document.querySelectorAll('.ativo').forEach((itemAtivo) => {
            itemAtivo.classList.remove('ativo');
        });

        if (!isActive) {
            item.classList.add('ativo');
        }
    });
});