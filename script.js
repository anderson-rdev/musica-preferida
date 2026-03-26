// =====================================================
// EXERCÍCIO 1: SELEÇÃO DE GÊNERO MUSICAL
// =====================================================

function selecionarGenero() {
    // Captura o valor digitado pelo usuário
    const opcao = parseInt(document.getElementById('generoInput').value);

    // Elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultadoGenero');

    // Variável para armazenar o gênero selecionado
    let generoSelecionado = '';
    let mensagem = '';
    let tipoMensagem = '';

    // Estrutura SWITCH para determinar o gênero
    switch (opcao) {
        case 1:
            generoSelecionado = 'Rock';
            mensagem = `🎸 Seu gênero musical preferido é: <strong>${generoSelecionado}</strong><br>
                        Excelente escolha! O Rock é cheio de energia e atitude!`;
            tipoMensagem = 'success';
            break;

        case 2:
            generoSelecionado = 'Pop';
            mensagem = `🎤 Seu gênero musical preferido é: <strong>${generoSelecionado}</strong><br>
                        Ótima escolha! O Pop é contagiante e sempre atual!`;
            tipoMensagem = 'success';
            break;

        case 3:
            generoSelecionado = 'Hip Hop';
            mensagem = `🎧 Seu gênero musical preferido é: <strong>${generoSelecionado}</strong><br>
                        Maravilha! O Hip Hop é ritmo e poesia urbana!`;
            tipoMensagem = 'success';
            break;

        case 4:
            generoSelecionado = 'Eletrônica';
            mensagem = `🎹 Seu gênero musical preferido é: <strong>${generoSelecionado}</strong><br>
                        Fantástico! A música eletrônica é pura inovação sonora!`;
            tipoMensagem = 'success';
            break;

        case 5:
            generoSelecionado = 'Jazz';
            mensagem = `🎺 Seu gênero musical preferido é: <strong>${generoSelecionado}</strong><br>
                        Sofisticado! O Jazz é improvisação e alma!`;
            tipoMensagem = 'success';
            break;

        case 6:
            generoSelecionado = 'Clássica';
            mensagem = `🎻 Seu gênero musical preferido é: <strong>${generoSelecionado}</strong><br>
                        Elegante! A música clássica é atemporal e majestosa!`;
            tipoMensagem = 'success';
            break;

        default:
            mensagem = '❌ <strong>Opção inválida!</strong><br>Por favor, digite um número entre 1 e 6.';
            tipoMensagem = 'error';
            break;
    }

    // Exibe o resultado
    exibirResultado(resultadoDiv, mensagem, tipoMensagem);

    // Limpa o input
    document.getElementById('generoInput').value = '';
}


// =====================================================
// EXERCÍCIO 2: SELEÇÃO DE TEMA/ÁREA DE ESTUDO
// =====================================================

function selecionarTema() {
    // Captura o valor digitado pelo usuário
    const opcao = parseInt(document.getElementById('temaInput').value);

    // Elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultadoTema');

    // Variável para armazenar o tema selecionado
    let temaSelecionado = '';
    let mensagem = '';
    let tipoMensagem = '';

    // Estrutura SWITCH para determinar o tema
    switch (opcao) {
        case 1:
            temaSelecionado = 'Desenvolvimento Web';
            mensagem = `💻 <strong>Tema escolhido: ${temaSelecionado}</strong><br><br>
                        🚀 <em>Incentivo:</em> Você está prestes a criar experiências digitais incríveis! 
                        O Desenvolvimento Web é a porta de entrada para transformar ideias em realidade. 
                        Domine HTML, CSS e JavaScript, explore frameworks modernos como React e Vue, 
                        e construa aplicações que impactam milhões de pessoas!<br><br>
                        📚 <strong>Próximos passos:</strong> Pratique projetos reais, contribua em open source 
                        e nunca pare de aprender!`;
            tipoMensagem = 'info';
            break;

        case 2:
            temaSelecionado = 'Inteligência Artificial';
            mensagem = `🤖 <strong>Tema escolhido: ${temaSelecionado}</strong><br><br>
                        🚀 <em>Incentivo:</em> Bem-vindo ao futuro da tecnologia! A IA está revolucionando 
                        todas as áreas do conhecimento humano. Você pode criar sistemas que aprendem, 
                        reconhecem padrões e tomam decisões inteligentes. Explore Machine Learning, 
                        Deep Learning e Natural Language Processing!<br><br>
                        📚 <strong>Próximos passos:</strong> Estude Python, TensorFlow, PyTorch e 
                        mergulhe no mundo dos dados!`;
            tipoMensagem = 'info';
            break;

        case 3:
            temaSelecionado = 'Segurança da Informação';
            mensagem = `🔒 <strong>Tema escolhido: ${temaSelecionado}</strong><br><br>
                        🚀 <em>Incentivo:</em> Você será um guardião do mundo digital! A segurança é 
                        fundamental em nossa era conectada. Aprenda a proteger sistemas, identificar 
                        vulnerabilidades e defender contra ataques cibernéticos. Sua expertise será 
                        essencial para empresas e organizações!<br><br>
                        📚 <strong>Próximos passos:</strong> Estude criptografia, ethical hacking, 
                        redes e certificações como CEH e CISSP!`;
            tipoMensagem = 'info';
            break;

        case 4:
            temaSelecionado = 'Desenvolvimento Mobile';
            mensagem = `📱 <strong>Tema escolhido: ${temaSelecionado}</strong><br><br>
                        🚀 <em>Incentivo:</em> O mundo está literalmente na palma da mão! Desenvolver 
                        apps mobile significa alcançar bilhões de usuários. Crie aplicativos nativos 
                        com Swift/Kotlin ou multiplataforma com React Native/Flutter. Suas criações 
                        podem mudar a rotina das pessoas!<br><br>
                        📚 <strong>Próximos passos:</strong> Escolha uma plataforma, domine suas 
                        ferramentas e publique seu primeiro app!`;
            tipoMensagem = 'info';
            break;

        case 5:
            temaSelecionado = 'Ciência de Dados';
            mensagem = `📊 <strong>Tema escolhido: ${temaSelecionado}</strong><br><br>
                        🚀 <em>Incentivo:</em> Os dados são o novo petróleo! Como Cientista de Dados, 
                        você transformará números em insights valiosos que orientam decisões estratégicas. 
                        Domine estatística, visualização de dados e storytelling com dados. Empresas de 
                        todos os setores precisam de profissionais como você!<br><br>
                        📚 <strong>Próximos passos:</strong> Aprenda Python, R, SQL, pandas e técnicas 
                        de análise exploratória!`;
            tipoMensagem = 'info';
            break;

        case 6:
            temaSelecionado = 'DevOps';
            mensagem = `⚙️ <strong>Tema escolhido: ${temaSelecionado}</strong><br><br>
                        🚀 <em>Incentivo:</em> Você será a ponte entre desenvolvimento e operações! 
                        DevOps é sobre automação, eficiência e entrega contínua. Aprenda a criar 
                        pipelines CI/CD, gerenciar infraestrutura como código e garantir que aplicações 
                        rodem de forma confiável e escalável!<br><br>
                        📚 <strong>Próximos passos:</strong> Explore Docker, Kubernetes, Jenkins, 
                        AWS/Azure e práticas de automação!`;
            tipoMensagem = 'info';
            break;

        default:
            mensagem = '❌ <strong>Opção inválida!</strong><br>Por favor, digite um número entre 1 e 6.';
            tipoMensagem = 'error';
            break;
    }

    // Exibe o resultado
    exibirResultado(resultadoDiv, mensagem, tipoMensagem);

    // Limpa o input
    document.getElementById('temaInput').value = '';
}


// =====================================================
// FUNÇÃO AUXILIAR PARA EXIBIR RESULTADOS
// =====================================================

function exibirResultado(elemento, mensagem, tipo) {
    // Remove classes anteriores
    elemento.className = 'result';

    // Adiciona a nova classe baseada no tipo
    elemento.classList.add(tipo);
    elemento.classList.add('show');

    // Define o conteúdo HTML
    elemento.innerHTML = mensagem;

    // Scroll suave até o resultado
    elemento.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


// =====================================================
// EVENT LISTENERS PARA TECLA ENTER
// =====================================================

// Permitir seleção com Enter no exercício 1
document.addEventListener('DOMContentLoaded', function () {
    const generoInput = document.getElementById('generoInput');
    if (generoInput) {
        generoInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                selecionarGenero();
            }
        });
    }

    // Permitir seleção com Enter no exercício 2
    const temaInput = document.getElementById('temaInput');
    if (temaInput) {
        temaInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                selecionarTema();
            }
        });
    }
});