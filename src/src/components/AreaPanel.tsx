import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import coffeePlantation from "@/assets/coffee-plantation.jpg";
import avocadoPlantation from "@/assets/avocado-plantation.jpg";
import cattlePasture from "@/assets/cattle-pasture.jpg";
import composting from "@/assets/composting.jpg";
import corral from "@/assets/corral.jpg";

type AreaType = "saf-coffee" | "saf-avocado" | "ssp" | "composting" | "infrastructure" | null;

interface AreaPanelProps {
  selectedArea: AreaType;
  onClose: () => void;
}

const areaData = {
  "saf-coffee": {
    title: "SAF Café Arábica",
    area: "13,47 hectares",
    color: "saf",
    images: [coffeePlantation],
    description: "Sistema Agroflorestal dedicado ao cultivo de café arábica em consórcio com árvores nativas e frutíferas.",
    details: [
      {
        label: "Espécie Principal",
        value: "Coffea arabica (Café Arábica)"
      },
      {
        label: "Espaçamento",
        value: "Sistema agroflorestal com múltiplos estratos"
      },
      {
        label: "Produtividade",
        value: "Sistema regenerativo focado em qualidade"
      },
      {
        label: "Manejo",
        value: "Adubação orgânica com composto da fazenda, controle biológico de pragas"
      },
      {
        label: "Benefícios",
        value: "Melhoria da fertilidade do solo, conservação de água, biodiversidade aumentada"
      }
    ]
  },
  "saf-avocado": {
    title: "SAF Abacate Hass",
    area: "7,20 hectares",
    color: "saf",
    images: [avocadoPlantation],
    description: "Sistema Agroflorestal com abacate Hass integrado a espécies arbóreas que promovem sombreamento e biodiversidade.",
    details: [
      {
        label: "Espécie Principal",
        value: "Persea americana 'Hass' (Abacate Hass)"
      },
      {
        label: "Espaçamento",
        value: "6m x 6m com consórcio de árvores de serviço"
      },
      {
        label: "Produtividade",
        value: "Foco em frutos de alta qualidade para mercados premium"
      },
      {
        label: "Manejo",
        value: "Irrigação localizada, poda de formação, adubação orgânica"
      },
      {
        label: "Ciclo",
        value: "Produção iniciando após 3-4 anos do plantio"
      }
    ]
  },
  "ssp": {
    title: "SSP Pecuária Regenerativa",
    area: "13,75 hectares",
    color: "ssp",
    images: [cattlePasture],
    description: "Sistema Silvipastoril integrado, combinando pecuária regenerativa com árvores nativas e exóticas para sombreamento e bem-estar animal.",
    details: [
      {
        label: "Rebanho",
        value: "30 cabeças de gado"
      },
      {
        label: "Raça",
        value: "Mestiço adaptado ao sistema silvipastoril"
      },
      {
        label: "Manejo",
        value: "Pastejo rotacionado com períodos de descanso, lotação controlada"
      },
      {
        label: "Árvores",
        value: "Espécies nativas e exóticas distribuídas estrategicamente para sombra"
      },
      {
        label: "Benefícios",
        value: "Maior conforto animal, recuperação do solo, sequestro de carbono, produção de madeira"
      },
      {
        label: "Produção",
        value: "Esterco coletado e destinado à compostagem para fertilização das áreas SAF"
      }
    ]
  },
  "composting": {
    title: "Sistema de Compostagem",
    area: "Central",
    color: "compost",
    images: [composting],
    description: "Centro de compostagem que processa o esterco bovino e resíduos vegetais da fazenda, transformando-os em adubo orgânico de alta qualidade.",
    details: [
      {
        label: "Fonte de Material",
        value: "Esterco bovino do SSP + resíduos vegetais das áreas SAF"
      },
      {
        label: "Processo",
        value: "Compostagem aeróbica em leiras, reviramento periódico"
      },
      {
        label: "Tempo de Maturação",
        value: "60-90 dias até composto estabilizado"
      },
      {
        label: "Aplicação",
        value: "Utilizado nas áreas SAF de café e abacate, fechando o ciclo de nutrientes"
      },
      {
        label: "Benefícios",
        value: "Redução de custos com insumos externos, melhoria da estrutura do solo, ciclo fechado de nutrientes"
      },
      {
        label: "Integração",
        value: "Conecta o sistema SSP com as áreas SAF, promovendo sinergia entre pecuária e agricultura"
      }
    ]
  },
  "infrastructure": {
    title: "Infraestrutura da Fazenda",
    area: "Distribuída",
    color: "infra",
    images: [corral],
    description: "Conjunto de estruturas essenciais para o funcionamento da fazenda, incluindo curral, galpões, sede e cercas.",
    details: [
      {
        label: "Curral",
        value: "Estrutura para manejo do gado, vacinação, pesagem e procedimentos veterinários"
      },
      {
        label: "Galpão/Armazém",
        value: "Armazenamento de ferramentas, insumos orgânicos, equipamentos e produtos colhidos"
      },
      {
        label: "Casa/Sede",
        value: "Residência e escritório administrativo da fazenda"
      },
      {
        label: "Cercas",
        value: "Sistema de cercamento para divisão de piquetes e controle do pastejo rotacionado"
      },
      {
        label: "Relação com Manejo",
        value: "Toda infraestrutura foi planejada para apoiar o manejo regenerativo e otimizar os processos produtivos"
      },
      {
        label: "Sustentabilidade",
        value: "Estruturas construídas com materiais locais quando possível, minimizando impacto ambiental"
      }
    ]
  }
};

const AreaPanel = ({ selectedArea, onClose }: AreaPanelProps) => {
  if (!selectedArea) return null;

  const data = areaData[selectedArea];

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-card border-l border-border shadow-strong z-50 animate-slide-in-right">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className={`bg-${data.color} p-6 text-white relative`}>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
          
          <h2 className="text-2xl font-bold mb-2 pr-12">{data.title}</h2>
          <p className="text-white/90 text-sm">Área: {data.area}</p>
        </div>

        {/* Content */}
        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            {/* Images */}
            <div className="space-y-3">
              {data.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${data.title} - Imagem ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow-medium"
                />
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Informações Detalhadas</h3>
              <div className="space-y-4">
                {data.details.map((detail, idx) => (
                  <div key={idx} className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {detail.label}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AreaPanel;
