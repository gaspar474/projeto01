import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <Container>
        <div
          ref={ref}
          className={`flex flex-col items-center gap-8 md:gap-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center space-y-6 max-w-3xl">
            <div className="flex justify-center gap-2 text-2xl mb-4">
              📚 🙏 ✨
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              +530 Dinâmicas Cristãs para Células
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Transforme suas reuniões com atividades criativas, práticas e cheias de propósito 🚀
            </p>
            <p className="text-lg text-gray-700">
              Chega de improvisar — tenha sempre a dinâmica certa, no momento certo ✅
            </p>
          </div>
          
          <div className="relative w-full max-w-2xl">
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full transform rotate-[-8deg] shadow-lg z-10">
              🔥 Oferta Limitada
            </div>
            <img
              src="https://rendaautomaticapro.site/wp-content/uploads/2025/05/mockup1_11zon.webp"
              alt="Dinâmicas Cristãs para Células"
              className="max-w-full h-auto transform hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl"
              style={{ maxHeight: '500px' }}
              loading="eager"
            />
          </div>

          <div className="w-full max-w-md space-y-4">
            <div className="animate-pulse bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full text-center">
              🎁 Últimas vagas com super desconto
            </div>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all text-xl py-6"
              onClick={scrollToPricing}
            >
              Quero transformar minhas células ⚡
            </Button>
            <div className="flex flex-col items-center text-sm space-y-2">
              <div className="flex items-center text-green-600 font-medium">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Compradores ativos neste momento
              </div>
              <p className="font-bold text-lg">
                De <span className="line-through text-gray-500">R$99,90</span> por apenas{' '}
                <span className="text-primary text-2xl">R$10</span>
              </p>
              <p className="text-gray-600">
                🔒 Acesso imediato • ⚡ Pagamento seguro • ✨ Satisfação garantida
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;