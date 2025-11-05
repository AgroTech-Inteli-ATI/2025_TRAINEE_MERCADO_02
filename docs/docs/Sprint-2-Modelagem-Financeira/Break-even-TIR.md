---
sidebar_position: 3
slug: /sprint-2/break-even-tir
title:  Cálculo de Break-even e TIR
description: "Template para análise de ponto de equilíbrio e taxa interna de retorno"
---

# Cálculo de Break-even e Taxa Interna de Retorno (TIR)

Este documento apresenta os cálculos de ponto de equilíbrio (break-even) e taxa interna de retorno (TIR) do projeto Fazenda Modelo Agrominas.

## Premissas para Cálculo

### 1. Dados de Entrada

| Variável | Valor | Unidade | Fonte |
| :-- | :--: | :--: | :-- |
| CAPEX Total |  | R$ | [CAPEX-OPEX](/sprint-2/capex-opex) |
| OPEX Anual (Regime) |  | R$/ano | [CAPEX-OPEX](/sprint-2/capex-opex) |
| Receita Anual (Regime Maduro) |  | R$/ano | [Contexto](/sprint-2/contexto-recapitulacao) |
| Horizonte do Projeto | 10 | anos |  |
| Taxa de Desconto (WACC) |  | % |  |

## Break-even (Ponto de Equilíbrio)

### 2.1. Break-even Financeiro (Anual)

**Fórmula:** `Receita = OPEX + Depreciação`

| Conceito | Valor (R$) | Observações |
| :-- | :--: | :-- |
| OPEX Anual |  |  |
| Depreciação Anual |  | (CAPEX / vida útil) |
| **Receita Mínima (Break-even)** | ** |  |

### 2.2. Break-even por Produto

#### Café
- Produtividade mínima necessária: [X] sacas/ha
- Preço mínimo necessário: [R$/saca]
- Área mínima necessária: [X] ha

#### Abacate
- Produtividade mínima necessária: [X] t/ha
- Preço mínimo necessário: [R$/kg]
- Área mínima necessária: [X] ha

#### Pecuária
- Lotação mínima necessária: [X] UA/ha
- GMD mínimo necessário: [X] kg/dia
- Preço mínimo necessário: [R$/kg]

### 2.3. Análise de Sensibilidade - Break-even

| Cenário | Variável | Valor | Break-even (R$) | Impacto |
| :-- | :-- | :--: | :--: | :-- |
| Base | - | - | ** | - |
| Preço -10% | Preço Café |  | ** |  |
| Preço +10% | Preço Café |  | ** |  |
| Produtividade -10% | Prod. Café |  | ** |  |
| Produtividade +10% | Prod. Café |  | ** |  |

## Taxa Interna de Retorno (TIR)

### 3.1. Fluxo de Caixa Projetado (10 anos)

| Ano | Receita (R$) | OPEX (R$) | CAPEX (R$) | Fluxo de Caixa Livre (R$) | Fluxo Acumulado (R$) |
| :-- | :--: | :--: | :--: | :--: | :--: |
| 0 (Início) | - | - | **(CAPEX)** | **(CAPEX)** | **(CAPEX)** |
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |
| 6 |  |  |  |  |  |
| 7 |  |  |  |  |  |
| 8 |  |  |  |  |  |
| 9 |  |  |  |  |  |
| 10 |  |  |  |  |  |

**Observações:**
- Receitas podem começar em anos diferentes conforme maturação (Café: ano 2-3, Abacate: ano 3-4)
- Considerar valor residual de máquinas/equipamentos no ano 10 (opcional)

### 3.2. Resultado TIR

**TIR Calculada:** [X]% ao ano

**Interpretação:**
- Se TIR > WACC: Projeto viável
- Se TIR < WACC: Projeto não viável

### 3.3. VPL (Valor Presente Líquido)

**VPL (WACC = [X]%):** [R$]

**Interpretação:**
- VPL > 0: Projeto cria valor
- VPL < 0: Projeto destrói valor

### 3.4. Payback (Tempo de Retorno)

**Payback Simples:** [X] anos

**Payback Descontado (WACC = [X]%):** [X] anos

### 3.5. Análise de Sensibilidade - TIR

| Cenário | Variável Ajustada | TIR (%) | VPL (R$) | Payback (anos) |
| :-- | :-- | :--: | :--: | :--: |
| Base | - | ** | ** | ** |
| Otimista | Preços +15%, Produtividade +10% | ** | ** | ** |
| Conservador | Preços -10%, Produtividade -5% | ** | ** | ** |
| Pessimista | Preços -20%, Produtividade -15% | ** | ** | ** |

## Metodologia de Cálculo

### Fórmulas Utilizadas

**TIR:** Taxa de desconto que torna VPL = 0
```
VPL = Σ [FCFt / (1 + TIR)^t] - CAPEX = 0
```

**VPL:** 
```
VPL = Σ [FCFt / (1 + WACC)^t] - CAPEX
```

**Payback Simples:**
```
Ano em que Fluxo Acumulado = 0
```

### Ferramentas Utilizadas

- **Excel/Google Sheets:** Para montagem da planilha de fluxo de caixa
- **Python (opcional):** Para automatizar cálculos de TIR e VPL
- **Power BI:** Para visualizações e dashboards interativos

## Próximos Passos

- Validar premissas com dados de mercado atualizados
- Comparar TIR com custo de capital (WACC) do investidor
- Preparar relatório de viabilidade financeira consolidada

