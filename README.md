# EvalCore System

Bem-vindo ao **EvalCore**, um sistema avançado de avaliação por comparações binárias (Pairwise Comparison). 

Este monorepo foi projetado como um desafio de engenharia de software para Hackathons e seminários de ensino técnico.

## Como funciona a Avaliação por Pares (Pairwise)?

Em avaliações tradicionais, juízes costumam dar notas de 1 a 10 para projetos. Isso gera vieses (um juiz "bonzinho" dá 9 e 10 para todos, enquanto um juiz mais rígido dá no máximo 7).

O **EvalCore** resolve isso utilizando comparações binárias. O sistema apresenta dois projetos para o juiz, e ele simplesmente escolhe qual é o melhor: **A ou B**. 
Ao longo de várias rodadas, um algoritmo de ranqueamento (como o sistema Elo usado no Xadrez, ou matemática Bayesiana) é aplicado no backend para gerar um Ranking Global incrivelmente preciso e livre de distorções e vieses individuais.

## O Desafio (Para os Alunos)

Este repositório contém a **API (Backend)** estruturada em Clean Architecture com TypeScript, Express e Mongoose, além da infraestrutura básica para o cálculo das pontuações ELO/Bayesianas.

O **Dashboard (Frontend)** está inicializado, porém **vazio**.

**A Missão:**
Durante o Hackathon, os alunos deverão consumir a API do EvalCore e construir do zero a interface visual (Dashboard) em React. A interface deverá:
1. Ter uma tela para o Juiz escolher entre Projeto A e Projeto B.
2. Ter uma tela de Ranking em Tempo Real (Leaderboard).

## Estrutura do Monorepo

*   `api/`: Backend em Node.js e TypeScript seguindo rigorosamente a Clean Architecture (`domain`, `application`, `interface_adapters`, `infrastructure`).
*   `dashboard/`: Frontend React construído com Vite (TypeScript).

## Como rodar o projeto

1. **Backend:**
    ```bash
    cd api
    npm install
    npm run dev
    ```

2. **Frontend:**
    ```bash
    cd dashboard
    npm install
    npm run dev
    ```

Boa sorte e que vença o melhor projeto!
