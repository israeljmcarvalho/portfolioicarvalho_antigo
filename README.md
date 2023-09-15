# LibManager

## Indice

- [LibManager](#libmanager)
  - [Indice](#indice)
  - [Definição do problema problema](#definição-do-problema-problema)
  - [4C's](#4cs)
    - [1. Contexto (Context)](#1-contexto-context)
    - [2. Container (Contêiner)](#2-container-contêiner)
    - [3. Componente (Component)](#3-componente-component)
    - [4. Código (Code)](#4-código-code)
  - [Requisitos](#requisitos)
  - [Caso de Uso](#caso-de-uso)
    - [**Atores:**](#atores)
    - [**Casos de Uso:**](#casos-de-uso)
  - [Quadro Kambam](#quadro-kambam)

## Definição do problema problema

O problema com o gerenciamento atual da biblioteca de uma pequena escola é que ele não é eficiente. O sistema atual é baseado em planilhas e e-mails, o que torna difícil acompanhar os livros e outros materiais. Isso pode levar a problemas como livros perdidos ou danificados, multas não pagas e alunos que não conseguem encontrar os livros que precisam.

Uma solução que foi encontrada para esse problema é criar um sistema web. Esse sistema permitiria aos alunos e professores pesquisar livros, verificar livros, pagar multas e muito mais. O sistema também poderia ser usado para gerar relatórios sobre o uso da biblioteca, o que ajudaria a escola a tomar decisões sobre quais livros comprar e como alocar recursos.

O sistema web, seria uma solução eficiente para o problema. O sistema seria fácil de usar e manter, e ajudaria a escola a economizar tempo e dinheiro.

Aqui estão algumas das vantagens de usar um sistema web, para gerenciar uma biblioteca escolar:

- O sistema será fácil de usar e manter.
- O sistema ajudará a escola a economizar tempo e dinheiro.
- O sistema permitirá aos alunos e professores pesquisar livros, verificar livros, pagar multas e muito mais.
- O sistema poderá ser usado para gerar relatórios sobre o uso da biblioteca, o que ajudaria a escola a tomar decisões sobre quais livros comprar e como alocar recursos.

## 4C's

### 1. Contexto (Context)

![Contexto e Container](assets/images/Contexto.svg)

- **Nome:** LibManager
- **Objetivo:** Fornecer uma solução para gerenciar a coleção de livros de uma biblioteca escolar.
- **Stakeholders:** Bibliotecários, usuários da biblioteca.

---

### 2. Container (Contêiner)

![Contexto e Container](assets/images/Container.svg)

- **Nome:** Aplicação da Biblioteca
  - **Tecnologias:** Programação web: JavaScript (Node.js);

  - **Responsabilidade:** Interface com o usuário, gerenciamento de pedidos, pesquisa de livros.

- **Nome:** Banco de Dados
  - **Tecnologia:** Banco de Dados MongoDB
  - **Responsabilidade:** Armazenamento de informações sobre livros, autores, usuários e transações.

---

### 3. Componente (Component)

- **Nome:** Módulo de Autenticação
  - **Responsabilidade:** Gerenciar autenticação de usuários (login/logout).

- **Nome:** Módulo de Pesquisa
  - **Responsabilidade:** Permitir aos usuários pesquisar livros por título, autor, gênero.

- **Nome:** Módulo de Empréstimo
  - **Responsabilidade:** Permitir aos usuários solicitar empréstimo de livros.

- **Nome:** Módulo de Devolução
  - **Responsabilidade:** Gerenciar a devolução de livros emprestados.

---

### 4. Código (Code)

- **Estrutura de Pacotes:**
  - `lib_manager`
    - `models\auth`: Contém classes relacionadas à autenticação.
    - `models\research`: Contém classes relacionadas à pesquisa de livros.
    - `models\loan`: Contém classes relacionadas ao empréstimo de livros.
    - `models\return`: Contém classes relacionadas à devolução de livros.
    - `models\books`: Contém classes de modelo para representar livros, autores, usuários, etc.
    - `dbConfig`: Contém classes para acesso ao banco de dados.

---

## Requisitos

- **Cadastro de Livros:**
  - Cadastro de informações dos livros, incluindo título, autor, editora, ISBN, ano de publicação, número de exemplares, etc.

- **Cadastro de Usuários:**
  - Cadastro de alunos, professores e funcionários com informações pessoais, número de identificação, etc.

- **Controle de Empréstimos e Devoluções:**
  - Registro de empréstimos de livros para usuários.
  - Data de empréstimo e data de devolução prevista.
  - Geração de recibos de empréstimos.

- **Pesquisa e Catálogo:**
  - Sistema de pesquisa que permite aos usuários buscar livros por título, autor, categoria, ISBN, etc.
  - Exibição de informações detalhadas do livro, incluindo disponibilidade.

- **Reservas de Livros:**
  - Capacidade de reservar livros que estão atualmente emprestados.

- **Relatórios e Estatísticas:**
  - Geração de relatórios sobre o uso da biblioteca, como livros mais emprestados, frequência de empréstimos, etc.

- **Gerenciamento de Estoque:**
  - Controle de estoque de livros, incluindo adição, remoção e atualização de exemplares.

- **Segurança e Autenticação:**
  - Segurança para proteger informações sensíveis dos usuários e garantir que apenas pessoal autorizado tenha acesso ao sistema.

- **Backup e Recuperação de Dados:**
  - Implementação de rotinas de backup para proteger os dados da biblioteca.

- **Suporte Técnico e Treinamento:**
  - Fornecimento de suporte técnico e treinamento para a equipe da biblioteca.

## Caso de Uso

![Caso de Uso](Diagrama Casos de Uso.png)

### **Atores:**

1. **Médicos:** Serão os únicos atores da aplicação.

---

### **Casos de Uso:**

1. **Selecionar Dataset:**
   - **Ator:** Médico
   - **Descrição:** O usuário poderá selecionar um dataset em format xlsx para executar o algorítimo de Clustering.

2. **Selecionar Método de Cálculo :**
   - **Ator:** Médico
   - **Descrição:** O usuário poderá selecionar o método de cálculo que o algorítimo utilizará, sendo as opções:Euclidean Distance , Minkowski distance , Chebychev distance, Canberra distance ou Manhattan distance.

3. **Selecionar Método de Encadeamento:**
   - **Ator:** Médico
   - **Descrição:** O usuário poderá escolher qual o método de encadeamento do algorítimo, sendo as opções : Complete
Linkage , Single Linkage Centroid Method.

4. **Selecionar Número de Clusters:**
   - **Ator:** Médico
   - **Descrição:** O usuário poderá escolher qual o número de clusters no K-Means.

5. **Executar o Algorítimo:**
   - **Ator:** Médico
   - **Descrição:** O usuário poderá executar o algorítimo de ML.

6. **Exportar o Resultado:**
   - **Ator:** Médico
   - **Descrição:** O usuário poderá explortar o resultado em formato excel.


## Quadro Kambam

[Clique aqui para acessar o quadro Kambam](https://trello.com/invite/b/b0mpq9dW/ATTIf8882b9b47b05f4b332b943e5945413dF9714CA7/portfolio)

