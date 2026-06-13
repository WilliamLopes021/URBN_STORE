# URBN STORE

<p align="center">
  <img alt="URBN STORE Logo/Banner" src="https://via.placeholder.com/800x200?text=URBN+STORE" />
</p>

<p align="center">
  <strong>Um e-commerce moderno e responsivo focado em vestuário urbano.</strong>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-arquitetura">Arquitetura</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-como-executar">Como Executar</a>
</p>

## 💻 Sobre o Projeto

O **URBN STORE** é uma aplicação completa de comércio eletrônico, desenvolvida para proporcionar a melhor experiência de usuário possível. Com um design arrojado e focado em conversão, o projeto utiliza as melhores práticas do mercado, como **Feature-Sliced Design** (FSD) para garantir uma arquitetura escalável e de fácil manutenção.

> 🚧 **[🔗 Acesse a demonstração ao vivo aqui! (Coloque seu link do deploy aqui)]()** 🚧

---

## 🛠 Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **React 19**
- **TypeScript**
- **Vite**
- **TailwindCSS 4**
- **React Router v7**

---

## 🎨 Design e UI

O design da aplicação foi pensado para ser moderno, responsivo e acessível.

- **Cor Primária:** `#1A1A1A`
- **Texto Primário:** `#FFFFFF`
- **Destaque (Rosa):** `#FF0066`
- **Destaque (Azul):** `#00FFFF`
- **Tipografia:** Montserrat

---

## 🏗 Arquitetura

O projeto utiliza um padrão arquitetural baseado em uma variação de **Feature-Sliced Design** e conceitos de **Clean Architecture**.

A separação de responsabilidades permite que a aplicação cresça de maneira organizada:

```text
src/
├── app/        # Configurações globais (Providers, Store, Rotas principais)
├── features/   # Módulos funcionais isolados (Ex: auth, product, payment)
│   ├── components/ # Componentes específicos da feature (separados em atoms, molecules, etc.)
│   ├── hooks/      # Hooks específicos da feature
│   ├── services/   # Integrações com API
│   ├── types/      # Tipagens e DTOs
│   └── pages/      # Páginas da feature
├── shared/     # Código compartilhado entre features (UI components, hooks utilitários)
├── domain/     # Entidades e regras de negócio centrais
└── infra/      # Detalhes de infraestrutura (Axios adapters, HTTP)
```

### 🧠 Decisões Técnicas e Aprendizados

O maior desafio neste projeto foi estruturar a comunicação e o gerenciamento de estado entre as diferentes áreas do e-commerce (ex: sincronizar o carrinho de compras com a listagem de produtos). A separação de responsabilidades e o uso de _custom hooks_ permitiram resolver isso mantendo o código limpo, testável e os componentes focados unicamente na Interface de Usuário (UI).

---

## ✨ Funcionalidades

- [x] Catálogo de Produtos
- [x] Detalhes do Produto
- [x] Carrinho de Compras
- [x] Adicionar aos Favoritos
- [x] Design Responsivo (Mobile First)

---

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) instalado
- Git instalado

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/WilliamLopes021/URBN_STORE.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd URBN_STORE
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. O aplicativo estará disponível no seu navegador em `http://localhost:5173`.

---

<p align="center">
  Desenvolvido com 💜 por William Lopes.
</p>
