# 📋 Lista com Filtro – Projeto Angular

Este repositório contém uma aplicação desenvolvida em **Angular**, cujo objetivo é exibir uma lista de pessoas e permitir que o usuário aplique filtros personalizados.  
É possível filtrar por:

- **Nome**
- **Data inicial**
- **Data final**
- **Status (Ativo / Inativo)**

O projeto também faz uso de diversos recursos fundamentais do Angular, incluindo **Pipes**, **Data Binding**, **Event Binding**, **Property Binding**, **@Input() e @Output()**, além de componentes do **Angular Material**.

---

## 🚀 Tecnologias Utilizadas

- **Angular** (versão mais recente)
- **TypeScript**
- **Angular Material**
- **HTML5 / CSS3**

---

## 🎯 Objetivo do Projeto

Demonstrar a implementação de filtros dinâmicos em uma lista, aplicando boas práticas do Angular e explorando recursos como pipes personalizados, comunicação entre componentes, e uso de componentes visuais modernos com Angular Material.

---

## 🧩 Funcionalidades

### ✔️ Listagem de Pessoas
A aplicação exibe uma lista contendo:
- Nome  
- Data de registro  
- Status (Ativo / Inativo)

### ✔️ Filtros disponíveis
- **Filtro por nome** (texto)
- **Filtro por data inicial e final** (Datepicker do Angular Material)
- **Filtro por status** (toggle, select ou radio do Angular Material)

### ✔️ Atualização automática  
Os filtros são aplicados em tempo real graças ao uso de:
- **Two-way Data Binding (`[(ngModel)]`)**
- **Pipes personalizados para filtragem**

---

## 🛠️ Técnicas e Recursos do Angular Utilizados

### 🔹 **1. Pipes Personalizados**
Criado um pipe para filtrar a lista conforme os critérios selecionados.  
Exemplo:
- Filtro por nome
- Filtro por intervalo de datas
- Filtro por status

O pipe recebe a lista e os parâmetros e retorna apenas os itens filtrados.

### 🔹 **2. Data Binding**
Utilização de diferentes tipos de binding:

- **Interpolation (`{{ }}`)** – exibir dados na tela  
- **Property Binding (`[property]`)** – configurar propriedades de componentes  
- **Event Binding (`(event)`)** – capturar eventos como `click`, `input`, etc.  
- **Two-way Binding (`[(ngModel)]`)** – atualizar automaticamente os filtros na tela

### 🔹 **3. Diretivas `@Input()` e `@Output()`**
Utilizadas para comunicação entre componentes, como por exemplo:

- Componente de filtro → envia eventos ao componente de listagem  
- Componente pai → recebe valores e aplica a filtragem

### 🔹 **4. Angular Material**
Foram utilizados componentes modernos para melhorar a usabilidade:

- **MatInput** (campos de texto)
- **MatDatepicker** (data inicial e final)
- **MatSelect / MatRadioGroup** (status)
- **Matbutton**

### 🔹 **5. Estrutura modular**
O projeto está organizado em módulos e componentes independentes, facilitando a manutenção e evolução.

---

## 📦 Como Rodar o Projeto

### 1️⃣ Clonar o reposítorio
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
