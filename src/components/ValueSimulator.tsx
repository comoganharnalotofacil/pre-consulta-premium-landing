
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Clock, Calculator, DollarSign, CalendarDays, TrendingUp, Users } from "lucide-react";

const ValueSimulator: React.FC = () => {
  const [patients, setPatients] = useState<number>(20);
  const [minutesSaved, setMinutesSaved] = useState<number>(15);
  const [consultationValue, setConsultationValue] = useState<number>(150);
  const [workDays, setWorkDays] = useState<number>(22);

  // Calculated values
  const [dailyTimeSaved, setDailyTimeSaved] = useState<number>(0);
  const [monthlyTimeSaved, setMonthlyTimeSaved] = useState<number>(0);
  const [yearlyTimeSaved, setYearlyTimeSaved] = useState<number>(0);
  const [potentialExtraPatients, setPotentialExtraPatients] = useState<number>(0);
  const [potentialExtraRevenue, setPotentialExtraRevenue] = useState<number>(0);

  useEffect(() => {
    // Calculate time saved
    const dailyTime = patients * minutesSaved;
    const monthlyTime = dailyTime * workDays;
    const yearlyTime = monthlyTime * 12;
    
    // Calculate potential extra patients (assuming each consultation takes ~minutesSaved*2 minutes)
    const extraPatientsPerMonth = Math.floor((monthlyTime / (minutesSaved * 2)));
    
    // Calculate potential extra revenue
    const monthlyExtraRevenue = extraPatientsPerMonth * consultationValue;
    
    // Update state
    setDailyTimeSaved(dailyTime);
    setMonthlyTimeSaved(monthlyTime);
    setYearlyTimeSaved(yearlyTime);
    setPotentialExtraPatients(extraPatientsPerMonth);
    setPotentialExtraRevenue(monthlyExtraRevenue);
  }, [patients, minutesSaved, consultationValue, workDays]);

  // Format time in hours and minutes
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  return (
    <section id="simulador" className="py-20 relative bg-gradient-highlight overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-verde-claro/20 animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-verde-escuro/20 animate-float-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-verde-neon/10 animate-float-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-from-bottom">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-verde-escuro">
            <span className="relative inline-block">
              <span className="absolute -top-8 -left-8 w-16 h-16 bg-verde-neon/10 rounded-full animate-pulse-slow"></span>
              <TrendingUp className="inline-block w-10 h-10 mr-3 text-verde-neon animate-bounce-subtle" />
              <span className="text-gradient font-extrabold tracking-tight">Transforme Tempo em Lucro</span>
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-verde-neon to-verde-claro mx-auto my-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-cinza-escuro/80 max-w-3xl mx-auto">
            Descubra o <span className="font-bold text-verde-escuro">impacto financeiro real</span> que a Pre-Consulta pode gerar para sua clínica.
            Simule agora e veja quanto sua prática pode crescer!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Input controls */}
          <Card className="premium-glass overflow-hidden border-none shadow-premium">
            <div className="absolute inset-0 bg-gradient-to-br from-verde-escuro/5 to-verde-claro/10 backdrop-blur-sm"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl text-verde-escuro">Configurações</CardTitle>
              <CardDescription>Ajuste os parâmetros para sua realidade</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-verde-escuro" /> 
                    Pacientes atendidos por dia
                  </label>
                  <span className="bg-verde-escuro/10 px-3 py-1 rounded-full text-verde-escuro font-semibold">
                    {patients}
                  </span>
                </div>
                <Slider 
                  value={[patients]} 
                  min={5} 
                  max={50} 
                  step={1} 
                  onValueChange={(value) => setPatients(value[0])} 
                  className="py-2"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 text-verde-escuro" /> 
                    Minutos economizados por consulta
                  </label>
                  <span className="bg-verde-escuro/10 px-3 py-1 rounded-full text-verde-escuro font-semibold">
                    {minutesSaved} min
                  </span>
                </div>
                <Slider 
                  value={[minutesSaved]} 
                  min={5} 
                  max={30} 
                  step={1} 
                  onValueChange={(value) => setMinutesSaved(value[0])} 
                  className="py-2"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-verde-escuro" /> 
                    Valor médio da consulta (R$)
                  </label>
                  <span className="bg-verde-escuro/10 px-3 py-1 rounded-full text-verde-escuro font-semibold">
                    R$ {consultationValue}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-verde-escuro">R$</span>
                  <Input
                    type="number"
                    value={consultationValue}
                    onChange={(e) => setConsultationValue(Number(e.target.value))}
                    className="pl-10"
                    min={50}
                    max={1000}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-verde-escuro" /> 
                    Dias de trabalho por mês
                  </label>
                  <span className="bg-verde-escuro/10 px-3 py-1 rounded-full text-verde-escuro font-semibold">
                    {workDays} dias
                  </span>
                </div>
                <Slider 
                  value={[workDays]} 
                  min={10} 
                  max={26} 
                  step={1} 
                  onValueChange={(value) => setWorkDays(value[0])} 
                  className="py-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="premium-glass premium-border overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="bg-gradient-to-r from-verde-escuro to-verde-escuro/90 text-branco p-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5" /> Tempo Recuperado
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-verde-claro/10 rounded-xl">
                    <p className="text-sm text-cinza-escuro/70 mb-1">Por dia</p>
                    <p className="text-xl font-bold text-verde-escuro">{formatTime(dailyTimeSaved)}</p>
                  </div>
                  <div className="text-center p-3 bg-verde-claro/10 rounded-xl">
                    <p className="text-sm text-cinza-escuro/70 mb-1">Por mês</p>
                    <p className="text-xl font-bold text-verde-escuro">{formatTime(monthlyTimeSaved)}</p>
                  </div>
                  <div className="text-center p-3 bg-verde-claro/20 rounded-xl">
                    <p className="text-sm text-cinza-escuro/70 mb-1">Por ano</p>
                    <p className="text-xl font-bold text-verde-escuro">{formatTime(yearlyTimeSaved)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-glass premium-border overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="bg-gradient-to-r from-verde-escuro to-verde-escuro/90 text-branco p-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calculator className="h-5 w-5" /> Impacto no Faturamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-verde-claro/10 rounded-xl">
                    <p className="text-sm text-cinza-escuro/70 mb-1">Pacientes extras/mês</p>
                    <p className="text-2xl font-bold text-verde-escuro">+{potentialExtraPatients}</p>
                  </div>
                  <div className="text-center p-4 bg-verde-claro/20 rounded-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-verde-escuro/0 via-verde-claro/10 to-verde-escuro/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    <p className="text-sm text-cinza-escuro/70 mb-1">Faturamento extra/mês</p>
                    <p className="text-2xl font-bold text-verde-escuro">
                      +R$ {potentialExtraRevenue.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg font-bold text-verde-escuro">
                    Retorno anual estimado: R$ {(potentialExtraRevenue * 12).toLocaleString('pt-BR')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-cinza-escuro/60 italic max-w-2xl mx-auto">
            Esta simulação é uma estimativa baseada nos valores inseridos. Os resultados reais podem variar dependendo de fatores específicos da sua prática clínica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSimulator;
