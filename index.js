document.addEventListener('DOMContentLoaded', function() {
    const btnArquivos = document.getElementById('arquivosBtn');
    const senhaLabel = document.getElementById('senhaLabel');
    const closeLabel = document.getElementById('closeLabel');
    const senhaInput = document.getElementById('senhaInput');
    const btnVerificar = document.getElementById('verificarSenha');
    const mensagemErro = document.getElementById('mensagemErro');
    
    const SENHA_CORRETA = "admin123"; // Altere aqui
    
    // 1.a label aqui "
    btnArquivos.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita fechar ao clicar no botão
        senhaLabel.style.display = 'block';
        senhaInput.focus();
    });
    
    // 2. Fecha label ao clicar no X
    closeLabel.addEventListener('click', function() {
        senhaLabel.style.display = 'none';
        resetarLabel();
    });
    
    // 3. Verifica senha
    btnVerificar.addEventListener('click', function() {
        const senha = senhaInput.value.trim();
        
        if (senha === SENHA_CORRETA) {
            // Senha correta
            mensagemErro.textContent = '✅ Senha correta! Acesso concedido.';
            mensagemErro.className = 'mensagem-erro sucesso';
            
            // Fecha após 2 segundos e executa ação
            setTimeout(() => {
                senhaLabel.style.display = 'none';
                resetarLabel();
                alert('Abrindo arquivos...');

            }, 2000);
            
        } else {
            // Senha errada
            mensagemErro.textContent = '❌ errou a senha impostor';
            mensagemErro.className = 'mensagem-erro erro';
            
            // Limpa campo e foca novamente
            senhaInput.value = '';
            senhaInput.focus();
            
            // Fecha automaticamente após 3 segundos
            setTimeout(() => {
                senhaLabel.style.display = 'none';
                resetarLabel();
            }, 3000);
        }
    });
    
    // 4. Enter no campo de senha
    senhaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            btnVerificar.click();
        }
    });
    
    // 5. Fecha ao clicar fora da label
    document.addEventListener('click', function(e) {
        if (!senhaLabel.contains(e.target) && e.target !== btnArquivos) {
            senhaLabel.style.display = 'none';
            resetarLabel();
        }
    });
    
    // Função para resetar a label
    function resetarLabel() {
        senhaInput.value = '';
        mensagemErro.textContent = '';
        mensagemErro.className = 'mensagem-erro';
        mensagemErro.style.display = 'none';
    }
});