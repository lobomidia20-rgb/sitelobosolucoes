import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-gradient-to-br from-card to-muted rounded-3xl p-8 md:p-12 border border-border shadow-card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Faça Seu Orçamento</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Economize até <span className="bg-gradient-primary bg-clip-text text-transparent">95%</span> na Sua Conta
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                placeholder="Seu nome completo" 
                className="bg-background border-border"
              />
              <Input 
                type="tel" 
                placeholder="Telefone/WhatsApp" 
                className="bg-background border-border"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-background border-border"
              />
              <Input 
                placeholder="Sua cidade" 
                className="bg-background border-border"
              />
            </div>

            <Input 
              placeholder="Qual seu gasto mensal com energia?" 
              className="bg-background border-border"
            />

            <Button 
              type="submit" 
              size="lg" 
              className="w-full gap-2 shadow-glow hover:scale-105 transition-transform"
            >
              <Zap className="w-5 h-5" />
              Solicitar Orçamento Gratuito
            </Button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Ou entre em contato diretamente:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/5573980641617"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(73) 98064-4161</span>
              </a>
              <a 
                href="mailto:adm.gestao@lobosolucoes.com.br" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>adm.gestao@lobosolucoes.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
