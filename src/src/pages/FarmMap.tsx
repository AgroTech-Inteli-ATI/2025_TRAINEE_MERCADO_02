import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, Sprout, Beef as CowIcon, Package, Warehouse, MapPin } from "lucide-react";
import farmAerialMap from "@/assets/farm-aerial-map.jpg";
import farmLogo from "@/assets/farm-logo.png";
import AreaPanel from "@/components/AreaPanel";

type AreaType = "saf-coffee" | "saf-avocado" | "ssp" | "composting" | "infrastructure" | null;

const FarmMap = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<AreaType>(null);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full py-4 px-4 flex justify-between items-center bg-emerald-950/85 text-white shadow-soft z-40">
        <Button 
          variant="secondary" 
          onClick={() => navigate("/")}
          className="gap-2 bg-white/95 text-emerald-950 hover:bg-white shadow-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        
        <div className="flex items-center gap-3">
          <img 
            src={farmLogo} 
            alt="Logo" 
            className="h-10 w-10 object-contain drop-shadow"
          />
          <h1 className="text-lg md:text-xl font-bold hidden sm:block">
            Mapa Interativo
          </h1>
        </div>
        
        <div className="w-24" /> {/* Spacer for centering */}
      </header>

      {/* Main Content */}
      <div className="flex-1 relative flex">
        {/* Map Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Aerial Map Background Image */}
          <div className="absolute inset-0">
            <img 
              src={farmAerialMap} 
              alt="Mapa Aéreo da Fazenda" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Interactive Map Overlay */}
          <div className="relative h-full">
            {/* Legend */}
            <div className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur-sm rounded-xl p-4 shadow-medium border border-emerald-800/50 z-20 text-white">
              <h3 className="text-sm font-semibold mb-3 text-white">Legenda</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-saf/15 flex items-center justify-center text-saf">
                    <Sprout className="h-3 w-3" />
                  </div>
                  <span className="text-white/90">SAF (20,67 ha)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-ssp/15 flex items-center justify-center text-ssp">
                    <CowIcon className="h-3 w-3" />
                  </div>
                  <span className="text-white/90">SSP (13,75 ha)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-compost/15 flex items-center justify-center text-compost">
                    <Package className="h-3 w-3" />
                  </div>
                  <span className="text-white/90">Compostagem</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-infra/15 flex items-center justify-center text-infra">
                    <Warehouse className="h-3 w-3" />
                  </div>
                  <span className="text-white/90">Infraestrutura</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="absolute bottom-4 right-4 bg-emerald-950/85 backdrop-blur-sm rounded-xl p-4 shadow-medium border border-emerald-800/50 z-20 text-white max-w-xs">
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1.5 text-xs">
                  <p className="text-white font-medium leading-tight">
                    Sul de Minas Gerais, município de São Bento Abade (MG), região de Lavras e Varginha.
                  </p>
                  <div className="space-y-1 text-white/80">
                    <p className="font-mono text-[10px] leading-tight">
                      <span className="font-semibold">Coordenadas centrais:</span> 23K 463389.79 m E / 7580621.7 m S
                    </p>
                    <p className="text-[10px] leading-tight">
                      <span className="font-semibold">Altitude média:</span> ~939 m
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premissas / CAPEX / OPEX buttons */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-3 z-20">
              {/* Dialog de Conceito */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="px-4 py-2 rounded-full shadow-soft bg-emerald-950/85 text-white hover:bg-emerald-900/90">
                    Conceito
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Conceito: Fazenda Modelo Regenerativa (ILPF)</DialogTitle>
                    <DialogDescription>
                      Este projeto é o blueprint de uma operação lucrativa no Sul de Minas, integrando Café, Abacate e
                      Pecuária de Corte.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 text-sm text-foreground">
                    {/* 1. A Tese: Lucro via Restauração */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">1. A Tese: Lucro via Restauração</h3>
                      <p className="text-muted-foreground">
                        A Agricultura Regenerativa não é apenas ambiental, é uma estratégia financeira. O modelo gera lucro
                        através de dois vetores:
                      </p>
                      <div className="space-y-2 pl-4">
                        <div>
                          <p className="font-semibold text-foreground">Resiliência Climática:</p>
                          <p className="text-muted-foreground">
                            Um solo biologicamente ativo retém mais água e resiste melhor a secas e geadas, reduzindo custos
                            com perdas e insumos químicos.
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Valor Agregado:</p>
                          <p className="text-muted-foreground">
                            Produtos cultivados neste sistema acessam mercados premium e certificações de sustentabilidade.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 2. Os 5 Princípios de Manejo */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">2. Os 5 Princípios de Manejo</h3>
                      <p className="text-muted-foreground">
                        Para ativar a vida do solo (os 4 pilares: Solo, Água, Biodiversidade e Carbono), a fazenda segue
                        regras estritas:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                        <li>
                          <span className="font-semibold text-foreground">Mínimo Revolvimento:</span> Não arar/gradear para
                          preservar a estrutura do solo.
                        </li>
                        <li>
                          <span className="font-semibold text-foreground">Cobertura Permanente:</span> Solo sempre protegido
                          por palhada ou plantas vivas.
                        </li>
                        <li>
                          <span className="font-semibold text-foreground">Biodiversidade:</span> Consórcios de culturas para
                          equilíbrio ecológico.
                        </li>
                        <li>
                          <span className="font-semibold text-foreground">Raízes Vivas:</span> Manter a fotossíntese ativa o
                          ano todo para alimentar microrganismos.
                        </li>
                        <li>
                          <span className="font-semibold text-foreground">Integração Animal:</span> Uso do gado para acelerar
                          a ciclagem de nutrientes.
                        </li>
                      </ul>
                    </section>

                    {/* 3. Os Sistemas Produtivos (SAF e SSP) */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">3. Os Sistemas Produtivos (SAF e SSP)</h3>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg border border-border bg-muted/40">
                          <p className="font-semibold text-foreground mb-1">SAF (Café + Abacate):</p>
                          <p className="text-muted-foreground text-xs">
                            O abacateiro cria um microclima que protege o café de geadas (segurança) e melhora a qualidade da
                            bebida via sombreamento (preço), além de diversificar a receita.
                          </p>
                        </div>
                        <div className="p-3 rounded-lg border border-border bg-muted/40">
                          <p className="font-semibold text-foreground mb-1">SSP (Gado + Floresta):</p>
                          <p className="text-muted-foreground text-xs">
                            A pecuária é conduzida com conforto térmico e pastagens resilientes, garantindo bem-estar animal
                            e ganho de peso constante.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 4. A Sinergia Operacional (ILPF via Compostagem) */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">4. A Sinergia Operacional (ILPF via Compostagem)</h3>
                      <p className="text-muted-foreground">
                        A inovação do modelo está na conexão segura entre os sistemas:
                      </p>
                      <div className="space-y-2 pl-4">
                        <div>
                          <p className="font-semibold text-foreground">Integração Indireta:</p>
                          <p className="text-muted-foreground">
                            O gado não entra na área de café (evitando danos).
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Ciclo de Nutrientes:</p>
                          <p className="text-muted-foreground">
                            O esterco do gado (SSP) é recolhido, compostado e aplicado como adubo organomineral de alta
                            performance nas lavouras de alto valor (SAF).
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 5. O Papel do Dunito Agrominas */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">5. O Papel do Dunito Agrominas</h3>
                      <p className="text-muted-foreground">
                        O produto do cliente é o elo estratégico. O Dunito atua como catalisador dos princípios regenerativos,
                        melhorando a CTC do solo, fortalecendo as plantas contra estresse hídrico e potencializando o
                        processo de compostagem.
                      </p>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Dialog de Premissas Financeiras */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="px-4 py-2 rounded-full shadow-soft bg-emerald-950/85 text-white hover:bg-emerald-900/90">
                    Premissas
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Premissas Financeiras — O que foi considerado</DialogTitle>
                    <DialogDescription>
                      Visão geral das principais premissas utilizadas na modelagem econômica e financeira do projeto
                      da Fazenda Modelo Agrominas.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 text-sm text-foreground">
                    <section className="space-y-2">
                      <h3 className="font-semibold text-base">Base de Referência</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>
                          Valores de mercado 2024–2025, consultados em cooperativas (Cocapec, Cooxupé), fornecedores
                          da Agrominas, plataformas agrícolas (Aegro) e dados empíricos.
                        </li>
                        <li>
                          Sistemas produtivos reais das três vertentes do projeto: café, abacate e pecuária regenerativa.
                        </li>
                        <li>
                          Coeficientes técnicos padrão para cada cultura (mão de obra, insumos, manutenção,
                          produtividade e renovação).
                        </li>
                        <li>
                          Dimensionamento proporcional à área e ao nível de tecnologia adotado (irrigação, mudas,
                          máquinas compatíveis com área total, etc.).
                        </li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h3 className="font-semibold text-base">Premissas Econômicas</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Taxa de desconto (TMA): 12–15% recomendada para projetos agropecuários.</li>
                        <li>Inflação: 5% ao ano (composta), aplicada a todos os custos operacionais.</li>
                        <li>FUNRURAL: 1,5% sobre a receita bruta.</li>
                        <li>
                          Prêmio de certificação: adicional entre <span className="font-semibold">+5%</span> e{" "}
                          <span className="font-semibold">+15%</span> nas vendas projetadas a partir do ano 4.
                        </li>
                        <li>Horizonte de análise: 10 anos.</li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h3 className="font-semibold text-base">Premissas Produtivas</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Pecuária adotada: 30 cabeças em sistema regenerativo.</li>
                        <li>Custo pecuário base: R$ 900 por cabeça/ano (média 2024–2025).</li>
                        <li>
                          Café: custo reduzido nos primeiros anos (baixa carga produtiva) e duplicado após maturação do
                          cafezal.
                        </li>
                        <li>
                          Abacate: curva de custo crescente conforme o pomar entra em produção (principalmente entre os
                          anos 4 e 7).
                        </li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h3 className="font-semibold text-base">Premissas de CAPEX</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>
                          Preços estimados para maquinário e implementos compatíveis com uma fazenda de aproximadamente
                          36 ha.
                        </li>
                        <li>
                          Irrigação baseada em custo médio de <span className="font-semibold">R$ 10.000/ha</span> para
                          gotejamento (referências Cocapec + Aegro).
                        </li>
                        <li>
                          Mudas com valores de mercado atualizados:{" "}
                          <span className="font-semibold">R$ 2,00/unidade</span> para café e{" "}
                          <span className="font-semibold">R$ 27,00/unidade</span> para abacate.
                        </li>
                        <li>
                          Estruturas pecuárias (cercas, bebedouros, sombreamento, cochos) dimensionadas para um rebanho
                          de 30 cabeças em sistema regenerativo.
                        </li>
                      </ul>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Dialog de CAPEX — Investimentos Iniciais */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="px-4 py-2 rounded-full shadow-soft bg-emerald-950/85 text-white hover:bg-emerald-900/90">
                    CAPEX
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>CAPEX — Investimentos Iniciais (Ano 0)</DialogTitle>
                    <DialogDescription>
                      Detalhamento dos principais investimentos iniciais em infraestrutura, material vegetal, pecuária
                      e máquinas para a implantação da Fazenda Modelo Agrominas.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 text-sm text-foreground">
                    {/* 3.1 Infraestrutura Agrícola */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">3.1. Infraestrutura Agrícola (Solo, Pastagem, Irrigação)</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Item</th>
                              <th className="px-3 py-2 font-medium text-right">Quantidade</th>
                              <th className="px-3 py-2 font-medium text-right">V. Unit (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Preparo do solo</td>
                              <td className="px-3 py-2 text-right">34,42 ha</td>
                              <td className="px-3 py-2 text-right">3.000</td>
                              <td className="px-3 py-2 text-right font-semibold">103.260</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Formação de pastagem (SSP)</td>
                              <td className="px-3 py-2 text-right">13,75 ha</td>
                              <td className="px-3 py-2 text-right">4.000</td>
                              <td className="px-3 py-2 text-right font-semibold">55.000</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">Irrigação por gotejamento (SAF)</td>
                              <td className="px-3 py-2 text-right">20,67 ha</td>
                              <td className="px-3 py-2 text-right">10.000</td>
                              <td className="px-3 py-2 text-right font-semibold">206.700</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className="bg-muted/60 border-t border-border">
                              <td className="px-3 py-2 font-medium">Subtotal — Infraestrutura</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right font-bold">364.960</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </section>

                    {/* 3.2 Material Vegetal (Mudas) */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">3.2. Material Vegetal (Mudas)</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Item</th>
                              <th className="px-3 py-2 font-medium text-right">Quantidade</th>
                              <th className="px-3 py-2 font-medium text-right">V. Unit (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Mudas de café</td>
                              <td className="px-3 py-2 text-right">67.350 un</td>
                              <td className="px-3 py-2 text-right">2,00</td>
                              <td className="px-3 py-2 text-right font-semibold">134.700</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">Mudas de abacate</td>
                              <td className="px-3 py-2 text-right">1.080 un</td>
                              <td className="px-3 py-2 text-right">27,00</td>
                              <td className="px-3 py-2 text-right font-semibold">29.160</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className="bg-muted/60 border-t border-border">
                              <td className="px-3 py-2 font-medium">Subtotal — Mudas</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right font-bold">163.860</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </section>

                    {/* 3.3 Pecuária */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">3.3. Pecuária (Animais e Estruturas)</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Item</th>
                              <th className="px-3 py-2 font-medium text-right">Quantidade</th>
                              <th className="px-3 py-2 font-medium text-right">V. Unit (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Bezerros (material vivo)</td>
                              <td className="px-3 py-2 text-right">30 cabeças</td>
                              <td className="px-3 py-2 text-right">3.100</td>
                              <td className="px-3 py-2 text-right font-semibold">93.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Cercas (5 fios)</td>
                              <td className="px-3 py-2 text-right">5.000 m</td>
                              <td className="px-3 py-2 text-right">35,00</td>
                              <td className="px-3 py-2 text-right font-semibold">175.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Curral</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">35.000</td>
                              <td className="px-3 py-2 text-right font-semibold">35.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Galpão / Armazém</td>
                              <td className="px-3 py-2 text-right">100 m²</td>
                              <td className="px-3 py-2 text-right">900</td>
                              <td className="px-3 py-2 text-right font-semibold">90.000</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">Compostagem</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">15.000</td>
                              <td className="px-3 py-2 text-right font-semibold">15.000</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className="bg-muted/60 border-t border-border">
                              <td className="px-3 py-2 font-medium">Subtotal — Pecuária</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right font-bold">408.000</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </section>

                    {/* 3.4 Máquinas e Equipamentos */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">3.4. Máquinas e Equipamentos</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Item</th>
                              <th className="px-3 py-2 font-medium text-right">Quantidade</th>
                              <th className="px-3 py-2 font-medium text-right">V. Unit (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Trator 75 cv</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">280.000</td>
                              <td className="px-3 py-2 text-right font-semibold">280.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Roçadeira agrícola</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">18.000</td>
                              <td className="px-3 py-2 text-right font-semibold">18.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Distribuidor de composto 6 t</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">37.000</td>
                              <td className="px-3 py-2 text-right font-semibold">37.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Carreta basculante</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">25.000</td>
                              <td className="px-3 py-2 text-right font-semibold">25.000</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">Pulverizador acoplado</td>
                              <td className="px-3 py-2 text-right">1</td>
                              <td className="px-3 py-2 text-right">15.000</td>
                              <td className="px-3 py-2 text-right font-semibold">15.000</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className="bg-muted/60 border-t border-border">
                              <td className="px-3 py-2 font-medium">Subtotal — Máquinas</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right">—</td>
                              <td className="px-3 py-2 text-right font-bold">375.000</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </section>

                    {/* 3.5 CAPEX Total Consolidado */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">3.5. CAPEX Total Consolidado</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Categoria</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Infraestrutura Agrícola</td>
                              <td className="px-3 py-2 text-right font-semibold">364.960</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Mudas</td>
                              <td className="px-3 py-2 text-right font-semibold">163.860</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">Pecuária</td>
                              <td className="px-3 py-2 text-right font-semibold">408.000</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">Máquinas e Equipamentos</td>
                              <td className="px-3 py-2 text-right font-semibold">375.000</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className="bg-emerald-950/90 text-white">
                              <td className="px-3 py-2 font-semibold">CAPEX TOTAL</td>
                              <td className="px-3 py-2 text-right font-bold">1.311.820</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Dialog de OPEX — Custos Operacionais */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="px-4 py-2 rounded-full shadow-soft bg-emerald-950/85 text-white hover:bg-emerald-900/90">
                    OPEX
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>OPEX — Custos Operacionais (Ano a Ano, com 5% de inflação)</DialogTitle>
                    <DialogDescription>
                      Custos operacionais anuais projetados para café, abacate, pecuária e despesas fixas,
                      considerando inflação de 5% ao ano.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 text-sm text-foreground">
                    {/* Premissas gerais */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">Premissas gerais</h3>
                      <div className="grid gap-3 md:grid-cols-2 text-muted-foreground">
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">Café</p>
                          <p>Anos 1–4: R$ 9.000/ha</p>
                          <p>Anos 5–10: R$ 18.100/ha</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">Abacate</p>
                          <p>Anos 1–3: R$ 4.000/ha</p>
                          <p>Anos 4–6: R$ 7.000/ha</p>
                          <p>Anos 7–10: R$ 10.000/ha</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">Pecuária</p>
                          <p>30 cabeças × R$ 900/cabeça/ano</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-foreground">Inflação</p>
                          <p>
                            Fator de inflação: <span className="font-mono">1,05^(ano − 1)</span>
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1 text-muted-foreground">
                        <p className="font-semibold text-foreground">Custos fixos anuais</p>
                        <p>Manutenção de máquinas: R$ 15.000</p>
                        <p>Certificações: R$ 5.000</p>
                        <p>Mão de obra fixa (com encargos): R$ 33.384</p>
                        <p className="font-semibold text-foreground">Total fixo anual: R$ 53.384</p>
                      </div>
                    </section>

                    {/* 4.1 Café — Custo Anual */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">4.1. Café — Custo Anual (13,47 ha)</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Ano</th>
                              <th className="px-3 py-2 font-medium text-right">V.U. nominal (R$/ha)</th>
                              <th className="px-3 py-2 font-medium text-right">Fator infl.</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">1</td>
                              <td className="px-3 py-2 text-right">9.000</td>
                              <td className="px-3 py-2 text-right">1,0000</td>
                              <td className="px-3 py-2 text-right font-semibold">121.230</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">2</td>
                              <td className="px-3 py-2 text-right">9.000</td>
                              <td className="px-3 py-2 text-right">1,0500</td>
                              <td className="px-3 py-2 text-right font-semibold">127.292</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">3</td>
                              <td className="px-3 py-2 text-right">9.000</td>
                              <td className="px-3 py-2 text-right">1,1025</td>
                              <td className="px-3 py-2 text-right font-semibold">133.656</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">4</td>
                              <td className="px-3 py-2 text-right">9.000</td>
                              <td className="px-3 py-2 text-right">1,1576</td>
                              <td className="px-3 py-2 text-right font-semibold">140.339</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">5</td>
                              <td className="px-3 py-2 text-right">18.100</td>
                              <td className="px-3 py-2 text-right">1,2155</td>
                              <td className="px-3 py-2 text-right font-semibold">296.349</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">6</td>
                              <td className="px-3 py-2 text-right">18.100</td>
                              <td className="px-3 py-2 text-right">1,2763</td>
                              <td className="px-3 py-2 text-right font-semibold">311.166</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">7</td>
                              <td className="px-3 py-2 text-right">18.100</td>
                              <td className="px-3 py-2 text-right">1,3401</td>
                              <td className="px-3 py-2 text-right font-semibold">326.725</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">8</td>
                              <td className="px-3 py-2 text-right">18.100</td>
                              <td className="px-3 py-2 text-right">1,4071</td>
                              <td className="px-3 py-2 text-right font-semibold">343.061</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">9</td>
                              <td className="px-3 py-2 text-right">18.100</td>
                              <td className="px-3 py-2 text-right">1,4775</td>
                              <td className="px-3 py-2 text-right font-semibold">360.214</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">10</td>
                              <td className="px-3 py-2 text-right">18.100</td>
                              <td className="px-3 py-2 text-right">1,5513</td>
                              <td className="px-3 py-2 text-right font-semibold">378.225</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* 4.2 Abacate — Custo Anual */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">4.2. Abacate — Custo Anual (7,20 ha)</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Ano</th>
                              <th className="px-3 py-2 font-medium text-right">V.U. nominal (R$/ha)</th>
                              <th className="px-3 py-2 font-medium text-right">Fator infl.</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">1</td>
                              <td className="px-3 py-2 text-right">4.000</td>
                              <td className="px-3 py-2 text-right">1,0000</td>
                              <td className="px-3 py-2 text-right font-semibold">28.800</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">2</td>
                              <td className="px-3 py-2 text-right">4.000</td>
                              <td className="px-3 py-2 text-right">1,0500</td>
                              <td className="px-3 py-2 text-right font-semibold">30.240</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">3</td>
                              <td className="px-3 py-2 text-right">4.000</td>
                              <td className="px-3 py-2 text-right">1,1025</td>
                              <td className="px-3 py-2 text-right font-semibold">31.752</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">4</td>
                              <td className="px-3 py-2 text-right">7.000</td>
                              <td className="px-3 py-2 text-right">1,1576</td>
                              <td className="px-3 py-2 text-right font-semibold">58.344</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">5</td>
                              <td className="px-3 py-2 text-right">7.000</td>
                              <td className="px-3 py-2 text-right">1,2155</td>
                              <td className="px-3 py-2 text-right font-semibold">61.262</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">6</td>
                              <td className="px-3 py-2 text-right">7.000</td>
                              <td className="px-3 py-2 text-right">1,2763</td>
                              <td className="px-3 py-2 text-right font-semibold">64.325</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">7</td>
                              <td className="px-3 py-2 text-right">10.000</td>
                              <td className="px-3 py-2 text-right">1,3401</td>
                              <td className="px-3 py-2 text-right font-semibold">96.487</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">8</td>
                              <td className="px-3 py-2 text-right">10.000</td>
                              <td className="px-3 py-2 text-right">1,4071</td>
                              <td className="px-3 py-2 text-right font-semibold">101.311</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">9</td>
                              <td className="px-3 py-2 text-right">10.000</td>
                              <td className="px-3 py-2 text-right">1,4775</td>
                              <td className="px-3 py-2 text-right font-semibold">106.377</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">10</td>
                              <td className="px-3 py-2 text-right">10.000</td>
                              <td className="px-3 py-2 text-right">1,5513</td>
                              <td className="px-3 py-2 text-right font-semibold">111.696</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* 4.3 Pecuária — Custo Anual */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">4.3. Pecuária — Custo Anual</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Ano</th>
                              <th className="px-3 py-2 font-medium text-right">Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">1</td>
                              <td className="px-3 py-2 text-right font-semibold">27.000</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">2</td>
                              <td className="px-3 py-2 text-right font-semibold">28.350</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">3</td>
                              <td className="px-3 py-2 text-right font-semibold">29.768</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">4</td>
                              <td className="px-3 py-2 text-right font-semibold">31.256</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">5</td>
                              <td className="px-3 py-2 text-right font-semibold">32.819</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">6</td>
                              <td className="px-3 py-2 text-right font-semibold">34.460</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">7</td>
                              <td className="px-3 py-2 text-right font-semibold">36.183</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">8</td>
                              <td className="px-3 py-2 text-right font-semibold">37.992</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">9</td>
                              <td className="px-3 py-2 text-right font-semibold">39.891</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">10</td>
                              <td className="px-3 py-2 text-right font-semibold">41.886</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* 4.4 OPEX Total Anual */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-base">4.4. OPEX Total Anual</h3>
                      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-muted">
                            <tr className="border-b border-border text-muted-foreground">
                              <th className="px-3 py-2 font-medium">Ano</th>
                              <th className="px-3 py-2 font-medium text-right">Café (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Abacate (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Pecuária (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">Fixos (R$)</th>
                              <th className="px-3 py-2 font-medium text-right">OPEX Total (R$)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">1</td>
                              <td className="px-3 py-2 text-right">121.230</td>
                              <td className="px-3 py-2 text-right">28.800</td>
                              <td className="px-3 py-2 text-right">27.000</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">230.414</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">2</td>
                              <td className="px-3 py-2 text-right">127.292</td>
                              <td className="px-3 py-2 text-right">30.240</td>
                              <td className="px-3 py-2 text-right">28.350</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">239.266</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">3</td>
                              <td className="px-3 py-2 text-right">133.656</td>
                              <td className="px-3 py-2 text-right">31.752</td>
                              <td className="px-3 py-2 text-right">29.768</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">248.560</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">4</td>
                              <td className="px-3 py-2 text-right">140.339</td>
                              <td className="px-3 py-2 text-right">58.344</td>
                              <td className="px-3 py-2 text-right">31.256</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">283.323</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">5</td>
                              <td className="px-3 py-2 text-right">296.349</td>
                              <td className="px-3 py-2 text-right">61.262</td>
                              <td className="px-3 py-2 text-right">32.819</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">443.814</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">6</td>
                              <td className="px-3 py-2 text-right">311.166</td>
                              <td className="px-3 py-2 text-right">64.325</td>
                              <td className="px-3 py-2 text-right">34.460</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">463.335</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">7</td>
                              <td className="px-3 py-2 text-right">326.725</td>
                              <td className="px-3 py-2 text-right">96.487</td>
                              <td className="px-3 py-2 text-right">36.183</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">512.779</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">8</td>
                              <td className="px-3 py-2 text-right">343.061</td>
                              <td className="px-3 py-2 text-right">101.311</td>
                              <td className="px-3 py-2 text-right">37.992</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">535.748</td>
                            </tr>
                            <tr className="border-b border-border/60">
                              <td className="px-3 py-2">9</td>
                              <td className="px-3 py-2 text-right">360.214</td>
                              <td className="px-3 py-2 text-right">106.377</td>
                              <td className="px-3 py-2 text-right">39.891</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">559.866</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2">10</td>
                              <td className="px-3 py-2 text-right">378.225</td>
                              <td className="px-3 py-2 text-right">111.696</td>
                              <td className="px-3 py-2 text-right">41.886</td>
                              <td className="px-3 py-2 text-right">53.384</td>
                              <td className="px-3 py-2 text-right font-semibold">585.191</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Dialog de Certificados */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="px-4 py-2 rounded-full shadow-soft bg-emerald-950/85 text-white hover:bg-emerald-900/90">
                    Certificados
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Certificações Sustentáveis Prioritárias</DialogTitle>
                    <DialogDescription>
                      Lista contextualizada das certificações adotadas para validar o modelo de negócio da Fazenda Agrominas.
                      A estratégia de valor da Agrominas baseia-se na obtenção de selos que validem a sustentabilidade ambiental,
                      a segurança alimentar e a responsabilidade social do sistema ILPF.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 text-sm text-foreground">
                    {/* 1. Rainforest Alliance */}
                    <section className="p-4 rounded-lg border border-border bg-muted/40">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          1
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-base text-foreground">Rainforest Alliance</h3>
                          <p className="text-xs text-muted-foreground font-medium">
                            <span className="font-semibold text-foreground">Contexto Agrominas:</span> Focada nas culturas
                            de Café e Abacate.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">Por que escolhemos:</span> Certifica que o nosso
                            sistema de sombreamento (SAF) protege a biodiversidade local e os recursos hídricos. É um selo
                            essencial para entrada em mercados internacionais (Europa/EUA) que exigem conservação ambiental.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 2. Selo Carbono Neutro */}
                    <section className="p-4 rounded-lg border border-border bg-muted/40">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          2
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-base text-foreground">Selo Carbono Neutro (IBDN)</h3>
                          <p className="text-xs text-muted-foreground font-medium">
                            <span className="font-semibold text-foreground">Contexto Agrominas:</span> Focada exclusivamente
                            na Pecuária.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">Por que escolhemos:</span> Necessário para
                            neutralizar a imagem negativa das emissões de metano do gado. Valida matematicamente que as
                            árvores do sistema (Eucalipto/Abacate) sequestram carbono suficiente para compensar o rebanho,
                            permitindo a venda de "Carne Carbono Neutro".
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 3. Produto Orgânico Brasil */}
                    <section className="p-4 rounded-lg border border-border bg-muted/40">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          3
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-base text-foreground">Produto Orgânico Brasil (SisOrg)</h3>
                          <p className="text-xs text-muted-foreground font-medium">
                            <span className="font-semibold text-foreground">Contexto Agrominas:</span> Focada na produção
                            vegetal (Café e Abacate).
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">Por que escolhemos:</span> Garante que o manejo
                            é 100% livre de agroquímicos sintéticos e transgênicos. É a certificação que gera o maior prêmio
                            de preço imediato no mercado interno e acessa redes de varejo especializadas.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 4. Fair Trade */}
                    <section className="p-4 rounded-lg border border-border bg-muted/40">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          4
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-base text-foreground">Fair Trade (Comércio Justo)</h3>
                          <p className="text-xs text-muted-foreground font-medium">
                            <span className="font-semibold text-foreground">Contexto Agrominas:</span> Transversal, com foco
                            forte na comercialização do Café.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">Por que escolhemos:</span> Endereça o pilar social
                            (o "S" do ESG). Garante aos compradores que a eficiência da fazenda não custa o bem-estar dos
                            trabalhadores, protegendo a reputação da marca e atraindo investidores éticos.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 5. Certifica Minas */}
                    <section className="p-4 rounded-lg border border-border bg-muted/40">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          5
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-base text-foreground">Certifica Minas</h3>
                          <p className="text-xs text-muted-foreground font-medium">
                            <span className="font-semibold text-foreground">Contexto Agrominas:</span> Base para todas as
                            culturas.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">Por que escolhemos:</span> É a chancela
                            governamental de legalidade e boas práticas dentro do estado. Agrega o valor de "origem" (Terroir
                            Mineiro) e facilita o acesso a políticas públicas e crédito estadual.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* 6. GlobalG.A.P. */}
                    <section className="p-4 rounded-lg border border-border bg-muted/40">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          6
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-base text-foreground">GlobalG.A.P.</h3>
                          <p className="text-xs text-muted-foreground font-medium">
                            <span className="font-semibold text-foreground">Contexto Agrominas:</span> Crítica para a
                            exportação do Abacate.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">Por que escolhemos:</span> Enquanto o café aceita
                            outras normas, o mercado internacional de frutas frescas exige garantias estritas de segurança
                            alimentar (food safety). Sem este selo, é praticamente impossível exportar abacate in natura para
                            a Europa.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Interactive Areas - Positioned within farm boundary polygon */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">

              {/* SAF Coffee Areas (distribuídos mais para a parte superior do polígono amarelo) */}
              <g 
                onClick={() => setSelectedArea("saf-coffee")}
                className="cursor-pointer pointer-events-auto group"
              >
                {/* Polígono SAF Café 1 (esquerda, parte superior) */}
                <polygon
                  points="230,165 320,155 360,165 350,190 275,200 230,180"
                  transform="translate(290, -1)"
                  className="fill-saf/40 stroke-saf stroke-2 hover:fill-saf/70 transition-all duration-300"
                />
                {/* Ícone SAF Café 1 */}
                <foreignObject
                  x={564}
                  y={160}
                  width={40}
                  height={40}
                  className="pointer-events-none"
                >
                  <div className="h-8 w-8 rounded-full bg-saf/90 flex items-center justify-center shadow-soft">
                    <Sprout className="h-4 w-4 text-white" />
                  </div>
                </foreignObject>
                {/* Polígono SAF Café 2 (mais ao centro) */}
                <polygon
                  points="365,185 445,175 485,180 475,205 405,215 365,200"
                  transform="translate(130, 55)"
                  className="fill-saf/40 stroke-saf stroke-2 hover:fill-saf/70 transition-all duration-300"
                />
                {/* Ícone SAF Café 2 */}
                <foreignObject
                  x={537}
                  y={234}
                  width={40}
                  height={40}
                  className="pointer-events-none"
                >
                  <div className="h-8 w-8 rounded-full bg-saf/90 flex items-center justify-center shadow-soft">
                    <Sprout className="h-4 w-4 text-white" />
                  </div>
                </foreignObject>
              </g>

              {/* SAF Avocado (um pouco acima do centro, à direita) */}
              <g 
                onClick={() => setSelectedArea("saf-avocado")}
                className="cursor-pointer pointer-events-auto group"
              >
                {/* Polígono SAF Abacate */}
                <polygon
                  points="510,190 605,180 700,185 715,205 640,220 545,215 510,200"
                  transform="translate(-50, -78)"
                  className="fill-saf/40 stroke-saf stroke-2 hover:fill-saf/70 transition-all duration-300"
                />
                {/* Ícone SAF Abacate */}
                <foreignObject
                  x={540}
                  y={105}
                  width={40}
                  height={40}
                  className="pointer-events-none"
                >
                  <div className="h-8 w-8 rounded-full bg-saf/90 flex items-center justify-center shadow-soft">
                    <Sprout className="h-4 w-4 text-white" />
                  </div>
                </foreignObject>
              </g>

              {/* SSP Pasture (topo à esquerda, mas agora garantido dentro do polígono amarelo) */}
              <g 
                onClick={() => setSelectedArea("ssp")}
                className="cursor-pointer pointer-events-auto group"
              >
                {/* Polígono SSP (topo mais à esquerda, porém interno) */}
                <polygon
                  points="200,185 260,180 320,178 345,185 335,205 270,210 215,208 200,195"
                  transform="translate(320, -125)"
                  className="fill-ssp/40 stroke-ssp stroke-2 hover:fill-ssp/70 transition-all duration-300"
                />
                {/* Ícone SSP */}
                <foreignObject
                  x={568}
                  y={53}
                  width={70}
                  height={90}
                  className="pointer-events-none"
                >
                  <div className="h-8 w-8 rounded-full bg-ssp/90 flex items-center justify-center shadow-soft">
                    <CowIcon className="h-4 w-4 text-white" />
                  </div>
                </foreignObject>
              </g>

              {/* Composting (pequeno polígono ainda mais abaixo, próximo ao centro) */}
              <g 
                onClick={() => setSelectedArea("composting")}
                className="cursor-pointer pointer-events-auto group"
              >
                {/* Polígono Compostagem */}
                <polygon
                  points="540,260 600,255 655,260 665,280 625,295 565,292 540,275"
                  transform="translate(-20, 90)"
                  className="fill-compost/40 stroke-compost stroke-2 hover:fill-compost/70 transition-all duration-300"
                />
                {/* Ícone Compostagem */}
                <foreignObject
                  x={559}
                  y={348}
                  width={70}
                  height={35}
                  className="pointer-events-none"
                >
                  <div className="h-8 w-8 rounded-full bg-compost/90 flex items-center justify-center shadow-soft">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                </foreignObject>
              </g>

              {/* Infrastructure (mais à direita e na parte inferior do polígono amarelo) */}
              <g 
                onClick={() => setSelectedArea("infrastructure")}
                className="cursor-pointer pointer-events-auto group"
              >
                {/* Polígono Infraestrutura (padronizado em tamanho e forma semelhante aos demais) */}
                <polygon
                  points="620,260 700,258 760,262 770,282 730,298 660,298 620,280"
                  transform="translate(-125, 30)"
                  className="fill-infra/40 stroke-infra stroke-2 hover:fill-infra/70 transition-all duration-300"
                />
                {/* Ícone Infraestrutura */}
                <foreignObject
                  x={550}
                  y={290}
                  width={40}
                  height={40}
                  className="pointer-events-none"
                >
                  <div className="h-8 w-8 rounded-full bg-infra/90 flex items-center justify-center shadow-soft">
                    <Warehouse className="h-4 w-4 text-white" />
                  </div>
                </foreignObject>
              </g>
            </svg>

            {/* Mobile-friendly buttons overlay (visible on small screens) */}
            <div className="absolute bottom-4 left-4 right-4 md:hidden flex flex-wrap gap-2 z-20">
              <Button 
                onClick={() => setSelectedArea("saf-coffee")}
                className="bg-saf hover:bg-saf/90 text-white text-xs px-3 py-2 h-auto flex-1 min-w-[120px]"
              >
                <Sprout className="h-4 w-4 mr-1" />
                SAF Café
              </Button>
              <Button 
                onClick={() => setSelectedArea("saf-avocado")}
                className="bg-saf hover:bg-saf/90 text-white text-xs px-3 py-2 h-auto flex-1 min-w-[120px]"
              >
                <Sprout className="h-4 w-4 mr-1" />
                SAF Abacate
              </Button>
              <Button 
                onClick={() => setSelectedArea("ssp")}
                className="bg-ssp hover:bg-ssp/90 text-white text-xs px-3 py-2 h-auto flex-1 min-w-[120px]"
              >
                <CowIcon className="h-4 w-4 mr-1" />
                SSP
              </Button>
              <Button 
                onClick={() => setSelectedArea("composting")}
                className="bg-compost hover:bg-compost/90 text-white text-xs px-3 py-2 h-auto flex-1 min-w-[120px]"
              >
                <Package className="h-4 w-4 mr-1" />
                Compostagem
              </Button>
              <Button 
                onClick={() => setSelectedArea("infrastructure")}
                className="bg-infra hover:bg-infra/90 text-white text-xs px-3 py-2 h-auto flex-1 min-w-[120px]"
              >
                <Warehouse className="h-4 w-4 mr-1" />
                Infraestrutura
              </Button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <AreaPanel 
          selectedArea={selectedArea} 
          onClose={() => setSelectedArea(null)} 
        />
      </div>
    </div>
  );
};

export default FarmMap;
