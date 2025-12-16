---
sidebar_position: 1
slug: /sprint-3/definicao-produto
description: "Definição do protótipo de dashboard interativo da Fazenda Modelo Agrominas"
---

# Definição do Protótipo / Dashboard

## 1. Objetivo do Protótipo

&emsp; O protótipo do **Dashboard da Fazenda Modelo Agrominas** tem como objetivo representar, de forma visual, interativa e integrada, a operação de uma fazenda regenerativa no Sul de Minas Gerais, conectando **território, sistemas produtivos, indicadores financeiros e certificações** em uma única interface.

&emsp; O dashboard é utilizado como:
- Ferramenta de **apresentação executiva** para parceiros e avaliadores;
- Suporte visual para **análise econômico-financeira** do projeto;
- Demonstração prática do **modelo regenerativo (SAF + SSP)** aplicado à fazenda;

---

## 2. Escopo do Protótipo

&emsp; O protótipo contempla:

- Visualização territorial baseada no **mapa real da fazenda** (imagem de satélite do Google Earth);
- Divisão das áreas produtivas conforme sistemas agrícolas;
- Painéis informativos interativos para **conceito, premissas, CAPEX, OPEX e certificações**;
- Simulação de navegação entre áreas e sistemas produtivos;
- Organização clara para facilitar entendimento por públicos técnicos e não técnicos.

&emsp; Não é objetivo do protótipo realizar cálculos em tempo real ou integração com bases externas nesta fase.

---

## 3. Componentes do Protótipo

### 3.1. Tela Inicial (Dashboard de Entrada)


![Tela inicial da dashboard](/img/home.png)

- Exibe o **logo do projeto Fazenda Modelo Agrominas**.
- Apresenta uma **porteira ilustrada** como elemento central de interação.
- Mensagem de convite à navegação (“Entre pela porteira e explore o mapa interativo”).
- Botão de ação: **“Acessar o Mapa”**.

Função: criar uma experiência narrativa e intuitiva de entrada no sistema.

---

### 3.2. Mapa Interativo da Fazenda

![Mapa principal da dashboard](/img/principal.png)
O mapa interativo é o **núcleo do protótipo**, construído a partir da imagem real da fazenda.

Características:
- Contorno da fazenda destacado em amarelo.
- Áreas internas divididas por sistema produtivo, respeitando geometria aproximada real.
- Áreas renderizadas como polígonos interativos (SVG).

Classificação das áreas:
- **SAF (Sistema Agroflorestal)**: Café Arábica e Abacate Hass.
- **SSP (Sistema Silvipastoril)**: Pecuária regenerativa.
- **Infraestrutura**: curral, galpão, sede, vias internas e compostagem.

Cada área é clicável e apresenta informações contextuais.

---

### 3.3. Painéis Laterais Informativos (Sidebars)

![Tela inicial da dashboard](/img/areas.png)
Ao clicar em qualquer elemento do mapa, abre-se um **painel lateral animado**, contendo informações detalhadas.

#### a) Painel SAF (Café e Abacate)
- Área total em hectares.
- Tipo de cultura.
- Descrição do sistema agroflorestal.
- Informações técnicas (espécie, espaçamento, manejo).
- Imagens ilustrativas das culturas.
- Acesso rápido aos dados de **CAPEX e OPEX** relacionados.

#### b) Painel SSP (Pecuária Regenerativa)
- Área destinada à pecuária.
- Quantidade de cabeças de gado.
- Descrição do manejo regenerativo.
- Integração pasto–árvores.
- Imagens ilustrativas do sistema.

#### c) Painel de Infraestrutura
- Curral, galpão, sede, armazém e compostagem.
- Função operacional de cada estrutura.
- Relação com o modelo sustentável da fazenda.

---

### 3.4. Painéis Conceituais e Financeiros
O dashboard inclui botões laterais que abrem modais com:

![Tela inicial da dashboard](/img/capex.png)


- **Conceito do Projeto**  
  Explicação do modelo regenerativo, tese econômica e princípios de manejo.

- **Premissas do Projeto**  
  Premissas técnicas, produtivas e econômicas utilizadas na modelagem.

- **CAPEX**  
  Investimentos iniciais detalhados por categoria, apresentados em tabelas claras.

- **OPEX**  
  Custos operacionais anuais por sistema produtivo, com visão consolidada.

- **Certificações**  
  Possíveis certificações ambientais e requisitos associados.

---

## 4. Estrutura dos Dados Esperados

| Campo             | Descrição                                  | Origem       |
|------------------|----------------------------------------------|--------------|
| area_saf_ha      | Área total destinada ao SAF                  | Sprint 1     |
| area_ssp_ha      | Área total destinada ao SSP                  | Sprint 1     |
| capex_total      | Investimento inicial consolidado             | Sprint 2     |
| opex_anual       | Custos operacionais anuais                   | Sprint 2     |
| receita_anual    | Receita projetada anual                      | Sprint 2     |

---

## 5. Navegação e Fluxo do Usuário

1. **Tela Inicial**  
   Usuário visualiza a porteira e acessa o mapa.

2. **Mapa Interativo**  
   Visualização geral da fazenda com legenda.

3. **Exploração por Área**  
   Clique nas áreas SAF, SSP ou Infraestrutura.

4. **Acesso aos Dados**  
   Visualização de informações técnicas, financeiras e conceituais.

5. **Análise Integrada**  
   Compreensão do modelo produtivo e econômico da fazenda.

---

## 6. Entregáveis Associados

- `/sprint-3/relatorio-executivo`
- `/sprint-3/analise-critica`
- `/sprint-3/mapa-variaveis-precificacao`

---


