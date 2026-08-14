// ======================================================
// ESCOLHAS QUE IMPORTAM
// Jogo educativo sobre bullying
// ======================================================


// ======================================================
// ELEMENTOS DA PÁGINA
// ======================================================

const homeScreen =
    document.getElementById("homeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const resultScreen =
    document.getElementById("resultScreen");

const rankingScreen =
    document.getElementById("rankingScreen");


const playerName =
    document.getElementById("playerName");

const nameError =
    document.getElementById("nameError");


const startButton =
    document.getElementById("startButton");

const rankingButton =
    document.getElementById("rankingButton");

const restartButton =
    document.getElementById("restartButton");

const resultRankingButton =
    document.getElementById("resultRankingButton");

const backButton =
    document.getElementById("backButton");


const playerDisplay =
    document.getElementById("playerDisplay");

const scoreElement =
    document.getElementById("score");


const character =
    document.getElementById("character");

const caseNumber =
    document.getElementById("caseNumber");

const storyTitle =
    document.getElementById("storyTitle");

const storyText =
    document.getElementById("storyText");


const choices =
    document.getElementById("choices");

const feedback =
    document.getElementById("feedback");


const progress =
    document.getElementById("progress");

const progressText =
    document.getElementById("progressText");


const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");


const rankingList =
    document.getElementById("rankingList");

const totalPlayers =
    document.getElementById("totalPlayers");

const totalGames =
    document.getElementById("totalGames");

const averageScore =
    document.getElementById("averageScore");


// ======================================================
// VARIÁVEIS DO JOGO
// ======================================================

let currentSituation = 0;

let score = 0;

let currentPlayer = "";


// ======================================================
// SITUAÇÕES DO JOGO
// ======================================================

const situations = [

    {
        character: "👧🏾",

        title: "Um comentário no corredor",

        text:
            "Você está no corredor quando percebe alguns alunos fazendo comentários sobre a aparência de Júlia. Ela abaixa a cabeça e tenta se afastar.",

        choices: [

            {
                text:
                    "Rir junto para não ficar de fora.",

                points: 0,

                correct: false,

                feedback:
                    "Participar da humilhação aumenta o sofrimento de Júlia e ajuda a normalizar o bullying."
            },

            {
                text:
                    "Pedir que parem e perguntar se Júlia está bem.",

                points: 2,

                correct: true,

                feedback:
                    "Boa escolha! Você interrompe a situação e demonstra que Júlia não está sozinha."
            },

            {
                text:
                    "Ignorar e continuar andando.",

                points: 1,

                correct: false,

                feedback:
                    "Não participar é melhor do que incentivar, mas procurar ajuda ou apoiar Júlia seria ainda mais positivo."
            }

        ]
    },


    {
        character: "👩🏾‍🎓",

        title: "Uma foto compartilhada",

        text:
            "No grupo da turma, alguém compartilha uma foto constrangedora de Ana. Algumas pessoas começam a fazer comentários ofensivos.",

        choices: [

            {
                text:
                    "Compartilhar a foto também.",

                points: 0,

                correct: false,

                feedback:
                    "Compartilhar aumenta o alcance da humilhação."
            },

            {
                text:
                    "Pedir para apagarem a foto e procurar um adulto.",

                points: 2,

                correct: true,

                feedback:
                    "Excelente! Você ajuda a interromper a situação e procura uma pessoa responsável."
            },

            {
                text:
                    "Mandar a foto para outro grupo.",

                points: 0,

                correct: false,

                feedback:
                    "Espalhar o conteúdo faz com que ainda mais pessoas participem da situação."
            }

        ]
    },


    {
        character: "👦🏽",

        title: "O aluno novo",

        text:
            "Miguel acabou de chegar à escola. Alguns estudantes começam a imitar seu jeito de falar e colocam apelidos nele.",

        choices: [

            {
                text:
                    "Criar um apelido ainda mais engraçado.",

                points: 0,

                correct: false,

                feedback:
                    "Apelidos usados para ridicularizar alguém podem machucar."
            },

            {
                text:
                    "Convidar Miguel para participar da atividade.",

                points: 2,

                correct: true,

                feedback:
                    "Ótimo! Incluir alguém novo é uma maneira simples de demonstrar empatia."
            },

            {
                text:
                    "Perguntar se ele quer ajuda e conversar com um professor.",

                points: 2,

                correct: true,

                feedback:
                    "Muito bem! Você oferece apoio e envolve um adulto que pode ajudar."
            }

        ]
    },


    {
        character: "👧🏻",

        title: "Sozinha no recreio",

        text:
            "No recreio, você percebe que Sofia está sozinha. Alguns alunos dizem que ninguém gosta dela.",

        choices: [

            {
                text:
                    "Sentar perto dela e conversar.",

                points: 2,

                correct: true,

                feedback:
                    "Uma atitude simples pode fazer uma grande diferença para alguém que está se sentindo excluído."
            },

            {
                text:
                    "Concordar com os outros alunos.",

                points: 0,

                correct: false,

                feedback:
                    "Concordar reforça a exclusão e pode aumentar o sofrimento de Sofia."
            },

            {
                text:
                    "Convidá-la para participar da sua atividade.",

                points: 2,

                correct: true,

                feedback:
                    "Excelente! Você está ajudando a criar um ambiente mais acolhedor."
            }

        ]
    },


    {
        character: "👦🏿",

        title: "Uma situação de violência",

        text:
            "No corredor, você vê dois estudantes empurrando Rafael e fazendo ameaças. Ele parece assustado.",

        choices: [

            {
                text:
                    "Entrar na briga para resolver sozinho.",

                points: 0,

                correct: false,

                feedback:
                    "Você pode acabar se machucando. Em situações de violência, procure um adulto responsável."
            },

            {
                text:
                    "Ignorar porque não é problema seu.",

                points: 0,

                correct: false,

                feedback:
                    "Quando presenciamos violência, procurar ajuda pode proteger a vítima."
            },

            {
                text:
                    "Procurar imediatamente um professor ou funcionário.",

                points: 2,

                correct: true,

                feedback:
                    "Excelente decisão! Você busca ajuda sem colocar sua própria segurança em risco."
            }

        ]
    }

];


// ======================================================
// TROCAR DE TELA
// ======================================================

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(function(item) {

            item.classList.remove("active");

        });


    screen.classList.add("active");

}


// ======================================================
// INICIAR JOGO
// ======================================================

startButton.addEventListener("click", function() {

    const name =
        playerName.value.trim();


    nameError.textContent = "";


    if (name === "") {

        nameError.textContent =
            "Digite seu nome para começar.";

        playerName.focus();

        return;

    }


    currentPlayer = name;

    currentSituation = 0;

    score = 0;


    playerDisplay.textContent =
        currentPlayer;


    scoreElement.textContent =
        "00";


    showScreen(gameScreen);


    loadSituation();

});


// ======================================================
// APERTAR ENTER NO NOME
// ======================================================

playerName.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        startButton.click();

    }

});


// ======================================================
// CARREGAR SITUAÇÃO
// ======================================================

function loadSituation() {

    const situation =
        situations[currentSituation];


    // Personagem

    character.textContent =
        situation.character;


    // Número

    const number =
        String(currentSituation + 1)
        .padStart(2, "0");


    caseNumber.textContent =
        number;


    // História

    storyTitle.textContent =
        situation.title;


    storyText.textContent =
        situation.text;


    // Pontuação

    scoreElement.textContent =
        String(score)
        .padStart(2, "0");


    // Progresso

    const percentage =
        (
            (currentSituation + 1)
            /
            situations.length
        ) * 100;


    progress.style.width =
        percentage + "%";


    progressText.textContent =
        `${currentSituation + 1} / ${situations.length}`;


    // Limpar alternativas

    choices.innerHTML = "";

    feedback.innerHTML = "";

    feedback.classList.remove("show");


    // Criar alternativas

    situation.choices.forEach(
        function(choice, index) {

            const button =
                document.createElement("button");


            button.className =
                "choice";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${choice.text}`;


            button.addEventListener(
                "click",
                function() {

                    chooseAnswer(
                        choice,
                        button
                    );

                }
            );


            choices.appendChild(button);

        }
    );

}


// ======================================================
// ESCOLHER RESPOSTA
// ======================================================

function chooseAnswer(choice, button) {

    // Adiciona os pontos

    score += choice.points;


    // Atualiza placar

    scoreElement.textContent =
        String(score)
        .padStart(2, "0");


    // Desabilita todos os botões

    const allButtons =
        document.querySelectorAll(".choice");


    allButtons.forEach(
        function(item) {

            item.disabled = true;

        }
    );


    // Marca a escolha

    if (choice.correct) {

        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

    }


    // Feedback

    feedback.innerHTML = `
        <strong>
            FEEDBACK
        </strong>
        <br>
        ${choice.feedback}
    `;


    feedback.classList.add("show");


    // Criar botão próximo

    const nextButton =
        document.createElement("button");


    nextButton.className =
        "next-button";


    if (
        currentSituation
        <
        situations.length - 1
    ) {

        nextButton.textContent =
            "PRÓXIMA SITUAÇÃO →";

    } else {

        nextButton.textContent =
            "VER RESULTADO →";

    }


    nextButton.addEventListener(
        "click",
        nextSituation
    );


    feedback.appendChild(nextButton);

}


// ======================================================
// PRÓXIMA SITUAÇÃO
// ======================================================

function nextSituation() {

    currentSituation++;


    if (
        currentSituation
        <
        situations.length
    ) {

        loadSituation();

    } else {

        finishGame();

    }

}


// ======================================================
// FINALIZAR JOGO
// ======================================================

function finishGame() {

    finalScore.textContent =
        String(score)
        .padStart(2, "0");


    let message;


    if (score >= 9) {

        message =
            "Excelente! Suas escolhas demonstraram muita empatia e responsabilidade.";

    }

    else if (score >= 6) {

        message =
            "Muito bem! Você demonstrou preocupação com as outras pessoas e fez boas escolhas.";

    }

    else if (score >= 3) {

        message =
            "Você está no caminho certo. Pense em como pequenas atitudes podem ajudar alguém.";

    }

    else {

        message =
            "Toda escolha é uma oportunidade de aprender. Reflita sobre como você poderia agir em situações de bullying.";

    }


    resultMessage.textContent =
        message;


    saveGame();


    showScreen(resultScreen);

}


// ======================================================
// BANCO DE DADOS
// localStorage
// ======================================================

function getDatabase() {

    const database =
        localStorage.getItem(
            "escolhasQueImportam"
        );


    if (!database) {

        return [];

    }


    try {

        return JSON.parse(database);

    }

    catch (error) {

        console.error(
            "Erro ao ler banco:",
            error
        );

        return [];

    }

}


// ======================================================
// SALVAR PARTIDA
// ======================================================

function saveGame() {

    const database =
        getDatabase();


    const game = {

        nome: currentPlayer,

        pontuacao: score,

        totalSituacoes:
            situations.length,

        data:
            new Date().toLocaleString(
                "pt-BR"
            )

    };


    database.push(game);


    localStorage.setItem(

        "escolhasQueImportam",

        JSON.stringify(database)

    );


    document.getElementById(
        "saveMessage"
    ).textContent =
        "✓ Resultado salvo no banco de dados local.";

}


// ======================================================
// JOGAR NOVAMENTE
// ======================================================

restartButton.addEventListener(
    "click",
    function() {

        currentSituation = 0;

        score = 0;


        playerName.value =
            currentPlayer;


        showScreen(homeScreen);

    }
);


// ======================================================
// ABRIR RANKING
// ======================================================

rankingButton.addEventListener(
    "click",
    function() {

        loadRanking();

        showScreen(rankingScreen);

    }
);


resultRankingButton.addEventListener(
    "click",
    function() {

        loadRanking();

        showScreen(rankingScreen);

    }
);


// ======================================================
// VOLTAR
// ======================================================

backButton.addEventListener(
    "click",
    function() {

        showScreen(homeScreen);

    }
);


// ======================================================
// CARREGAR RANKING
// ======================================================

function loadRanking() {

    const database =
        getDatabase();


    rankingList.innerHTML = "";


    if (database.length === 0) {

        rankingList.innerHTML = `

            <div class="empty-ranking">

                Ainda não existem partidas.

                <br><br>

                Seja o primeiro a jogar!

            </div>

        `;

        updateStatistics([]);

        return;

    }


    // Ordenar pela maior pontuação

    const ranking =
        [...database].sort(
            function(a, b) {

                return (
                    b.pontuacao
                    -
                    a.pontuacao
                );

            }
        );


    // Mostrar somente os 10 melhores

    const top10 =
        ranking.slice(0, 10);


    top10.forEach(
        function(player, index) {

            const row =
                document.createElement("div");


            row.className =
                "ranking-row";


            let medal = "";


            if (index === 0) {

                medal = "🥇";

            }

            else if (index === 1) {

                medal = "🥈";

            }

            else if (index === 2) {

                medal = "🥉";

            }

            else {

                medal =
                    `#${index + 1}`;

            }


            row.innerHTML = `

                <div class="position">
                    ${medal}
                </div>

                <div class="ranking-name">
                    ${escapeHTML(player.nome)}
                </div>

                <div class="ranking-points">
                    ${player.pontuacao} pts
                </div>

            `;


            rankingList.appendChild(row);

        }
    );


    updateStatistics(database);

}


// ======================================================
// ESTATÍSTICAS
// ======================================================

function updateStatistics(database) {

    // Total de partidas

    totalGames.textContent =
        database.length;


    // Jogadores diferentes

    const uniquePlayers =
        new Set();


    database.forEach(
        function(game) {

            uniquePlayers.add(
                game.nome.toLowerCase()
            );

        }
    );


    totalPlayers.textContent =
        uniquePlayers.size;


    // Média

    if (database.length === 0) {

        averageScore.textContent =
            "0";

        return;

    }


    let total = 0;


    database.forEach(
        function(game) {

            total += game.pontuacao;

        }
    );


    const average =
        total / database.length;


    averageScore.textContent =
        average.toFixed(1);

}


// ======================================================
// PROTEÇÃO DO NOME
// ======================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


// ======================================================
// INICIALIZAÇÃO
// ======================================================

loadRanking();