import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Check, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white" id="pricing">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Escolha seu plano</h2>
          <p className="text-gray-600">Selecione a opção que melhor atende suas necessidades</p>
        </div>

        <div
          ref={ref}
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-primary/20 transition-all relative">
            <div className="absolute -top-1 -right-1 bg-gradient-radial from-yellow-300/30 to-transparent w-32 h-32 blur-xl"></div>
            <div className="p-8 relative">
              <div className="text-center mb-6">
                <span className="bg-green-100 text-green-800 text-lg font-bold px-6 py-2 rounded-full inline-block">
                  🟢 OFERTA BÁSICA
                </span>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">R$10</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">530 Dinâmicas Criativas para Células <span className="text-sm text-gray-500">(<span className="line-through">R$97</span>)</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Devocional "Café com Deus Pai" <span className="text-sm text-gray-500">(<span className="line-through">R$47</span>)</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Treinamento para Líderes de Células <span className="text-sm text-gray-500">(<span className="line-through">R$147</span>)</span></p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📦</span>
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📱</span>
                  <span>Entrega digital imediata</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>🔒</span>
                  <span>Garantia de 7 dias</span>
                </div>
              </div>

              <a 
                href="https://seguro.plataformaplus.shop/checkout?skipToCheckout=1&tokenReference=EFR2J9VE6E"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Escolher Plano Básico
                </Button>
              </a>

              <p className="mt-4 text-sm text-gray-500 text-center">
                Ideal para quem quer começar com o essencial
              </p>
            </div>
          </div>

          {/* Complete Plan */}
          <div className="bg-gradient-to-br from-primary to-purple-800 rounded-2xl shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-bl-lg">
              MAIS VENDIDO 🔥
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <span className="bg-red-100 text-red-800 text-lg font-bold px-6 py-2 rounded-full inline-block">
                  🔴 OFERTA COMPLETA + BÔNUS VIP
                </span>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">R$27</span>
                </div>
              </div>

              <p className="text-white/90 mb-6 text-center">
                ⚡ Pacote COMPLETO de transformação para suas células + Bônus EXCLUSIVOS!
              </p>

              <div className="space-y-4 mb-8">
                {[
                  '530+ Dinâmicas Cristãs para Células',
                  'Devocional "Café com Deus Pai"',
                  '52 Quebra-Gelos Semanais para o Ano Todo',
                  'Treinamento Avançado para Líderes de Células',
                  '10 Devocionais Transformadores em PDF',
                  'Manual do Poder da Oração Intercessora',
                  'Guia Prático de Multiplicação de Células (EXCLUSIVO)',
                  'Atualizações GRÁTIS por 1 ano',
                  'Grupo VIP de líderes no WhatsApp',
                  'Desconto vitalício em futuros lançamentos',
                  'Suporte prioritário por 12 meses'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white">{item} {index < 6 && <span className="text-yellow-400">(<span className="line-through">R${[47, 27, 37, 67, 27, 27][index]}</span>)</span>}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 p-4 rounded-lg mb-8">
                <p className="text-yellow-400 font-bold text-center">
                  Valor Total: <span className="line-through">R$232</span>
                </p>
                <p className="text-white text-center mt-2">
                  Hoje por apenas R$27 (88% OFF)
                </p>
              </div>

              <a 
                href="https://seguro.plataformaplus.shop/r/PZ8G6W8DXL"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-xl"
                >
                  Escolher Plano Completo ⚡
                </Button>
              </a>

              <p className="mt-4 text-sm text-white/80 text-center">
                A escolha perfeita para maximizar seus resultados
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Card */}
        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Shield className="h-16 w-16 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Garantia Incondicional de 7 Dias</h3>
              <p className="text-gray-700 text-lg">
                Se por qualquer motivo você não ficar satisfeito com o material, devolvemos 100% do seu dinheiro. 
                Sem perguntas, sem burocracia. Você tem 7 dias para avaliar todo o conteúdo com total segurança.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;