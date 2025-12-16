import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import farmGate from "@/assets/farm-gate.jpg";
import farmLogo from "@/assets/farm-logo.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-black">
      {/* Navbar sobreposta em verde escuro */}
      <header className="absolute top-0 left-0 w-full z-20 bg-emerald-950/85 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <img 
            src={farmLogo} 
            alt="Fazenda Modelo Agrominas" 
            className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Fazenda Modelo Agrominas
            </h1>
            <p className="text-xs md:text-sm text-white/80">
              Sistema de Gestão Regenerativa
            </p>
          </div>
        </div>
      </header>

      {/* Imagem da porteira ocupando toda a tela */}
      <main className="min-h-screen">
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate("/mapa")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/mapa");
          }}
          className="relative w-full h-screen focus:outline-none cursor-pointer"
        >
          <img 
            src={farmGate} 
            alt="Porteira da Fazenda" 
            className="w-full h-full object-cover"
          />

          {/* Gradiente para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* CTA central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
            <p className="text-white/90 text-lg md:text-2xl font-semibold tracking-tight text-center drop-shadow">
              Entre pela porteira e explore o mapa interativo
            </p>

            <Button 
              size="lg" 
              className="bg-white/90 text-emerald-900 hover:bg-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] px-10 py-7 rounded-full text-lg md:text-xl font-semibold"
            >
              Acessar o Mapa
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
