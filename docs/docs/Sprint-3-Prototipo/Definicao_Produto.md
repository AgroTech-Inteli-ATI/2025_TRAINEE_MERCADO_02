---
sidebar_position: 1
slug: /sprint-3/definicao-produto
description: "Template de definição do protótipo/dash da Fazenda Modelo Agrominas"
---

# Definição do Protótipo/Dashboard

## Objetivo do Protótipo
- Representar a divisão territorial e indicadores econômico-financeiros da Fazenda Modelo Agrominas.
- Facilitar a apresentação final com visão integrada de áreas, custos, receitas e certificações.

## Componentes do Protótipo (Template)
1. Mapa Interativo (QGIS/Google Earth → imagem ou embed no Figma)
2. Painéis de Indicadores (Power BI/Figma):
   - Área por sistema (SAF, SSP, ILPF, APP, Infra)
   - CAPEX, OPEX e Receita por sistema
   - Payback, TIR e VPL
3. Seção de Certificações e Requisitos
4. Guia de operação (como atualizar dados)

## Estrutura dos Dados Esperados
| Campo | Descrição | Fonte |
| :-- | :-- | :-- |
| area_saf_ha | Área de Café+Abacate | Sprint 1 |
| area_ssp_ha | Área de Pecuária | Sprint 1 |
| capex_total | Investimento inicial | Sprint 2 |
| opex_anual | Custos anuais | Sprint 2 |
| receita_anual | Receitas anuais | Sprint 2 |

## Navegação/Fluxo do Usuário
1. Tela 1: Visão Geral da Fazenda (mapa e KPIs)
2. Tela 2: Detalhes por Sistema (SAF/SSP)
3. Tela 3: Cenários Financeiros (base/otimista/conservador)
4. Tela 4: Certificações e Plano de Ação

## Entregáveis Associados
- `/sprint-3/relatorio-executivo`
- `/sprint-3/analise-critica`
- `/sprint-3/mapa-variaveis-precificacao`
