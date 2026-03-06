# 📋 Tarefas Next.js 15

Projeto simples desenvolvido em **Next.js 15** com **TypeScript**, utilizando o **App Router**.  
Objetivo: praticar conceitos de **testes unitários** com **Jest** e **Testing Library**, além de reforçar o uso de **Server Components**, **Client Components** e **hooks personalizados**.

---

## 🚀 Funcionalidades

- Exibir uma lista inicial de tarefas (simulação de API com array local).
- Adicionar novas tarefas via formulário controlado (`<NovaTarefa />`).
- Contar a quantidade de tarefas com um hook personalizado (`useContadorDeTarefas`).
- Testes unitários cobrindo:
  - Renderização da página principal.
  - Componente `<NovaTarefa />`.
  - Hook `useContadorDeTarefas`.

---

## 📂 Estrutura do Projeto

tarefas-next15/
├── app/
│   └── page.tsx          # Server Component principal
├── components/
│   └── NovaTarefa.tsx    # Client Component para adicionar tarefas
├── hooks/
│   └── useContadorDeTarefas.ts
├── src/app/tests/
│   └── page.test.tsx     # Testes da página principal
│   └── NovaTarefa.test.tsx
│   └── useContadorDeTarefas.test.ts
├── jest.config.js
├── jest.setup.ts
├── tsconfig.json
└── README.md

Código

---

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)

---

## ⚙️ Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/CintiaLima-83/tarefas-next15.git
   cd tarefas-next15
Instale as dependências:

bash
npm install --legacy-peer-deps
Execute o servidor de desenvolvimento:

bash
npm run dev
Rode os testes:

bash
npm run test
✅ Testes
Os testes foram escritos com Jest e Testing Library.
Exemplos de cenários cobertos:

Renderização da lista inicial de tarefas.

Validação do formulário de nova tarefa.

Contagem de tarefas via hook personalizado.

Para rodar em modo contínuo:

bash
npm run test:watch
📖 Objetivo da Atividade
Este projeto foi desenvolvido como exercício prático para reforçar:

Configuração de ambiente de testes em Next.js.

Escrita de testes unitários e de integração.

Uso de Server Components, Client Components e hooks personalizados.

👩‍💻 Autora
Projeto desenvolvido por Cíntia Lima como parte dos estudos de Next.js e testes unitários.
