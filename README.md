# EvalCore System

> Conceito e estrutura para sistemas de avaliação por comparação pareada em hackathons, bancas acadêmicas e ranqueamento de projetos.

---

## 💡 Visão Geral

O **EvalCore System** é uma prova de conceito (PoC) que demonstra o uso de algoritmos de comparação pareada (como o método de Elo ou Bradley-Terry) simplificados para otimizar o julgamento de projetos em maratonas de programação (hackathons) ou bancas avaliadoras. 

Em vez de atribuir notas absolutas e subjetivas (de 0 a 10) para cada projeto individualmente, os avaliadores realizam escolhas binárias simples entre pares de projetos ("Qual projeto apresenta melhor viabilidade técnica? A ou B?"). O sistema consolida as escolhas de forma estatística para gerar uma classificação final justa e altamente estável.

---

## 🛠️ Arquitetura e Estrutura do Projeto

O repositório é intencionalmente minimalista, servindo como uma estrutura conceitual de vitrine:

* **index.html**: Página estática demonstrativa com design responsivo e tokens visuais inspirados no estilo "Laboratório Vivo" (cores sóbrias, fontes modernas e estrutura limpa).
* **Temática Estética**:
  - Cores: HSL personalizados com gradientes suaves (`#245f57` verde floresta/laboratório e tons neutros).
  - Tipografia: Inter e fontes nativas do sistema.
  - Acessibilidade e responsividade baseadas em grades fluídas e fontes escaláveis.

---

## 🚀 Como Executar

Não há dependências complexas de build. Para rodar localmente:

1. Abra o arquivo `index.html` diretamente em seu navegador web.
2. Alternativamente, sirva localmente usando Python:
   ```bash
   python -m http.server 8000
   ```
   Acesse no navegador: `http://localhost:8000`.

---

## 📋 Contexto de Portfólio

Este projeto faz parte do portfólio de **Alberto Mateus P. da Gama**, visando demonstrar:
- Conceituação clara de arquiteturas baseadas em dados seguros (sem exposição de informações de terceiros).
- Organização profissional com documentação acessível e licença MIT.
- Design responsivo e focado em legibilidade.
