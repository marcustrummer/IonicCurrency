# **IonicCurrency - Conversor de Moedas em Tempo Real**

Este projeto é um aplicativo móvel construído com **Ionic Framework** e **TypeScript**, que permite a conversão de moedas em tempo real. Utilizando dados de APIs REST externas, o aplicativo entrega uma interface intuitiva e funcional, com suporte para dispositivos Android.

---

## **Funcionalidades**

- **Integração com APIs de Conversão de Moedas**:
  - Taxas de câmbio atualizadas de API.
  - Seleção de moedas de origem e destino para conversão.

- **Interface Responsiva e Intuitiva**:
  - Componentes do Ionic adaptados para diferentes tamanhos de tela.

- **Histórico de Conversões**:
  - Armazena localmente e exibe as últimas transações realizadas.

- **Conversão de Múltiplas Moedas**:
  - Pesquise por moedas usando código ou nome (ex.: USD, EUR, BRL).

- **Conversão Rápida e Inversa**:
  - Troque facilmente as moedas de origem e destino.

- **Funcionalidade Offline**:
  - Permite uso com taxas de câmbio armazenadas localmente.

---

## **Tecnologias Utilizadas**

- **Framework**: Ionic
- **Linguagem**: TypeScript
- **APIs REST**: ExchangeRate API ou equivalentes
- **Armazenamento Local**: Local Storage para persistência de dados

---

## **Como Executar o Projeto**

### **Pré-requisitos**

1. **Node.js**: Instale o [Node.js](https://nodejs.org) (versão LTS recomendada).  
2. **Ionic CLI**: Instale a CLI do Ionic globalmente:  
   ```bash
   npm install -g @ionic/cli
   ```

---

### **Passos para Configuração**

1. Clone o repositório:  
   ```bash
   git clone https://github.com/marcustrummer/IonicCurrency.git
   cd IonicCurrency
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Execute o aplicativo no navegador:  
   ```bash
   ionic serve
   ```

4. Para rodar no Android:  
   ```bash
   ionic capacitor add android
   ionic capacitor run android
   ```

---

## **Contribuições**

Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um fork do projeto.
2. Crie um branch para suas alterações:  
   ```bash
   git checkout -b minha-feature
   ```
3. Realize os commits:  
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie suas alterações para o seu fork:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no repositório principal detalhando suas mudanças.
