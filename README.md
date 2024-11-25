# App de Conversão de Moedas em Tempo Real com Ionic

## Descrição do Projeto
Este projeto consiste em um aplicativo móvel desenvolvido com o framework **Ionic** e a linguagem **TypeScript**, que realiza a conversão de moedas em tempo real, consumindo dados de APIs REST externas. Ele é voltado para a plataforma Android e oferece uma interface simples, intuitiva e responsiva.

### Funcionalidades Principais
1. **Integração com API de Conversão de Moedas**:
   - Consumo de APIs como [ExchangeRate API](https://www.exchangerate-api.com/) ou [CurrencyConverterAPI](https://www.currencyconverterapi.com/).
   - Permite selecionar moedas de origem e destino para conversão.

2. **Interface Responsiva**:
   - Interface adaptada para diferentes tamanhos de tela usando componentes do Ionic.

3. **Histórico de Conversões**:
   - Armazena e exibe as últimas conversões realizadas localmente.

4. **Suporte a Várias Moedas**:
   - Pesquise moedas por nome ou símbolo (ex.: USD, EUR, BRL).

5. **Atualização Automática de Taxas**:
   - Taxas de câmbio atualizadas ao abrir o app ou realizar uma conversão.

6. **Conversão Inversa**:
   - Inverta rapidamente as moedas de origem e destino.

7. **Funcionalidade Offline**:
   - Use taxas de câmbio armazenadas localmente quando estiver offline.

8. **Interface Gráfica de Cotações** (opcional):
   - Exibição de gráficos de variação de taxas de câmbio para moedas selecionadas.

9. **Opções de Configuração**:
   - Configure a frequência de atualização e notificações de variações.

---

## Tecnologias Utilizadas
- **Framework**: Ionic
- **Linguagem**: TypeScript
- **API REST**: ExchangeRate API, CurrencyConverterAPI (ou similar)
- **Armazenamento Local**: Local Storage ou SQLite

---

## Como Executar o Projeto

### Pré-requisitos
- **Node.js** (recomendado LTS)
- Ionic CLI instalado globalmente:
  ```bash
  npm install -g @ionic/cli

## Passos para Configuração
- Clone este repositório:
    `git clone https://github.com/seu-usuario/repo-conversao-moedas.git`
    `cd repo-conversao-moedas`
    
- Instale as dependências:
    `npm install`

-Execute o aplicativo em um navegador:
    `ionic serve`

-Para rodar no Android:
    `ionic capacitor add android`
    `ionic capacitor run android`


