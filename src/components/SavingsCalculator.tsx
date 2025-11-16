import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

export const SavingsCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState(1960);
  const [inputValue, setInputValue] = useState("1960");

  // Calculate yearly savings (approximately 31.7% discount based on the example)
  const yearlySavings = (monthlyBill * 12 * 0.317).toFixed(2);

  const handleSliderChange = (values: number[]) => {
    const value = values[0];
    setMonthlyBill(value);
    setInputValue(value.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputValue(value);
    
    const numValue = parseInt(value) || 0;
    if (numValue >= 100 && numValue <= 10000) {
      setMonthlyBill(numValue);
    }
  };

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue) || 1960;
    const clampedValue = Math.max(100, Math.min(10000, numValue));
    setMonthlyBill(clampedValue);
    setInputValue(clampedValue.toString());
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section id="servicos" className="py-20 px-6 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        <div className="bg-gradient-to-br from-card to-background rounded-3xl p-8 md:p-12 border border-border shadow-card">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calcule quanto você vai economizar
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Valor da sua conta de luz mensal
            </p>

            {/* Value Display */}
            <div className="inline-block bg-primary/20 rounded-full px-8 py-4 mb-8">
              <Input
                type="text"
                value={formatCurrency(monthlyBill)}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="text-2xl md:text-3xl font-bold text-center bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-primary"
              />
            </div>

            {/* Slider */}
            <div className="mb-4">
              <Slider
                value={[monthlyBill]}
                onValueChange={handleSliderChange}
                min={100}
                max={10000}
                step={50}
                className="cursor-pointer"
              />
            </div>

            <p className="text-sm text-muted-foreground mb-12">
              Deslize pela barra ou digite o valor desejado
            </p>
          </div>

          {/* Results */}
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              No primeiro ano, você vai economizar até
            </p>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {formatCurrency(parseFloat(yearlySavings))}
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
              Simulação de economia baseada em contrato de 5 anos. Valor real pode sofrer alterações
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full md:w-auto px-12 py-6 text-lg shadow-glow hover:scale-105 transition-transform"
              asChild
            >
              <a href="http://wa.me/+5573998064161" target="_blank" rel="noopener noreferrer">
                Calcular desconto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
