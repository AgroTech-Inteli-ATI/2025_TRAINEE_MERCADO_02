---
sidebar_position: 4
slug: /sprint-3/mapa-variaveis-precificacao
description: "Template do mapa de variáveis e premissas para precificação/indicadores do protótipo"
---

# Mapa de Variáveis e Premissas

Use esta página como referência para alimentar o protótipo (Power BI/Figma) e os cálculos financeiros.

## Variáveis de Entrada
| Grupo | Variável | Descrição | Unidade | Base | Fonte |
| :-- | :-- | :-- | :--: | :--: | :-- |
| Área | area_saf_ha | Área Café+Abacate | ha |  | Sprint 1 |
| Área | area_ssp_ha | Área Pecuária | ha |  | Sprint 1 |
| Produção | prod_cafe_saca_ha | Produtividade Café | saca/ha |  | Embrapa |
| Produção | prod_abacate_t_ha | Produtividade Abacate | t/ha |  | Epamig |
| Pecuária | lotacao_ua_ha | Taxa de Lotação | UA/ha |  | Embrapa |
| Pecuária | gmd_kg_dia | Ganho Médio Diário | kg/dia |  | Literatura |
| Mercado | preco_cafe_rs_saca | Preço Café | R$/saca |  | Mercado |
| Mercado | preco_abacate_rs_kg | Preço Abacate | R$/kg |  | Mercado |
| Mercado | preco_boi_rs_kg | Preço Arroba (kg) | R$/kg |  | Mercado |

## Parâmetros Financeiros
- WACC: [%]
- Inflação (IPCA): [%]
- Câmbio (se usado): [USD/BRL]

## Regras de Cálculo (Pseudo)
```text
Receita Café = area_saf_ha * prod_cafe_saca_ha * preco_cafe_rs_saca
Receita Abacate = area_saf_ha * prod_abacate_t_ha * 1000 * preco_abacate_rs_kg
Receita Pecuária = area_ssp_ha * lotacao_ua_ha * (gmd_kg_dia * dias) * preco_boi_rs_kg
```

## Observações
- Manter uma aba/tabela “Assunções” centralizada para o time atualizar.

