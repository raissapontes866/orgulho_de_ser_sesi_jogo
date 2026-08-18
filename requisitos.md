# Requisitos do Projeto - Orgulho de Ser SESI Jogo

## 📋 Visão Geral
Jogo interativo de múltiplas escolhas desenvolvido para apresentar e discutir problemas e situações recorrentes em escolas, promovendo reflexão sobre temas relevantes ao ambiente educacional.

---

## 1. Requisitos Funcionais

### 1.1 Mecânica do Jogo
- [ ] O jogo deve apresentar perguntas com múltiplas opções de resposta (mínimo 2, máximo 4 alternativas)
- [ ] O jogador deve poder selecionar uma resposta clicando na opção desejada
- [ ] O sistema deve registrar a resposta selecionada e dar feedback imediato
- [ ] O jogo deve avançar para a próxima pergunta após o jogador selecionar uma resposta
- [ ] Deve haver um indicador de progresso (questão X de Y)

### 1.2 Fluxo de Perguntas
- [ ] Carregar perguntas de forma organizada (lista/banco de dados)
- [ ] Perguntas podem ser apresentadas em ordem sequencial ou aleatória (configurável)
- [ ] Cada pergunta deve ter uma descrição de cenário/situação contextualizada
- [ ] As perguntas devem abordar temas recorrentes em escolas (bullying, inclusão, comportamento, etc.)

### 1.3 Sistema de Feedback
- [ ] Fornecer feedback textual para cada resposta (explicação de por que essa resposta é apropriada/inadequada)
- [ ] Exibir pontuação ou resultado ao final do jogo
- [ ] Mostrar um resumo das respostas do usuário (opcional: comparar com respostas ideais)

### 1.4 Tela Final
- [ ] Exibir pontuação total ou resultado final
- [ ] Mostrar uma mensagem motivacional baseada no desempenho
- [ ] Permitir reiniciar o jogo ou sair

### 1.5 Responsividade
- [ ] Interface deve funcionar em dispositivos desktop, tablet e mobile
- [ ] Layout deve se adaptar aos diferentes tamanhos de tela

---

## 2. Requisitos Não-Funcionais

### 2.1 Performance
- [ ] Tempo de carregamento da página: máximo 3 segundos
- [ ] Resposta à interação do usuário: máximo 500ms
- [ ] Suporte a pelo menos 100 perguntas no banco de dados

### 2.2 Usabilidade
- [ ] Interface intuitiva e fácil de usar
- [ ] Botões e elementos clicáveis com tamanho mínimo de 44x44px (acessibilidade mobile)
- [ ] Contraste adequado entre texto e fundo (WCAG AA)
- [ ] Fonte legível com tamanho mínimo de 14px

### 2.3 Compatibilidade
- [ ] Suportar navegadores modernos (Chrome, Firefox, Safari, Edge - versões recentes)
- [ ] Funcionar em dispositivos com JavaScript habilitado

### 2.4 Acessibilidade
- [ ] Usar semântica HTML apropriada
- [ ] Implementar labels em formulários e inputs
- [ ] Suportar navegação por teclado
- [ ] Usar cores não como único meio de comunicação de informações

---

## 3. Requisitos de Conteúdo

### 3.1 Banco de Perguntas
- [ ] Mínimo de 10 perguntas iniciais
- [ ] Temas abordados:
  - [ ] Comportamento e disciplina
  - [ ] Inclusão e diversidade
  - [ ] Bullying e assédio
  - [ ] Relacionamento interpessoal
  - [ ] Respeito e empatia
  - [ ] Outro(s) tema(s) relevante(s)

### 3.2 Estrutura de Pergunta
Cada pergunta deve conter:
- Identificador único
- Descrição do cenário/situação
- Múltiplas alternativas de resposta
- Resposta correta/ideal
- Explicação/feedback para cada alternativa
- Categoria/tema

---

## 4. Requisitos Técnicos

### 4.1 Tecnologias Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Estrutura**: Arquivo único ou modular (conforme decisão do time)
- **Dados**: JSON (arquivo local) ou API (se expandir no futuro)

### 4.2 Organização do Código
- [ ] Código bem documentado e comentado
- [ ] Variáveis e funções com nomes descritivos
- [ ] Separação clara entre lógica, apresentação e dados
- [ ] Arquivo de configuração para perguntas (JSON)

### 4.3 Versionamento
- [ ] Utilizar Git com commits descritivos
- [ ] Manter histórico de alterações
- [ ] Branches para novas features (opcional)

---

## 5. Requisitos de Segurança

- [ ] Validar entrada de dados (proteção contra injeção de código)
- [ ] Não armazenar dados sensíveis no cliente (se houver)
- [ ] Usar HTTPS (se hospedado online)

---

## 6. Requisitos Futuros (Backlog)

- [ ] Sistema de login e pontuação por usuário
- [ ] Salvar progresso do jogador
- [ ] Rankinings de desempenho
- [ ] Temas visuais diferentes
- [ ] Suporte a múltiplos idiomas
- [ ] Integração com plataformas educacionais (Google Classroom, etc.)
- [ ] Análise de dados e estatísticas de uso
- [ ] Sons e animações

---

## 7. Critérios de Aceitação

Um requisito é considerado completo quando:
- ✅ O código está funcional e testado
- ✅ A funcionalidade foi testada em diferentes navegadores
- ✅ O código está documentado
- ✅ Não há erros no console do navegador
- ✅ A interface é responsiva

---

## 8. Notas Adicionais

- Este documento deve ser revisado e atualizado conforme o projeto evolui
- Feedback dos usuários (alunos e professores) deve ser coletado para melhorias contínuas
- Validar se o conteúdo das perguntas está apropriado para o público-alvo
