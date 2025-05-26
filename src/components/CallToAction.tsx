import React, { useEffect, useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { ArrowUp } from 'lucide-react';

const CallToAction = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Essa é a oportunidade perfeita para líderes que querem fazer a diferença
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Lidere com criatividade, edifique com propósito e veja suas células crescendo com
              leveza e profundidade.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              Quero transformar minhas células agora
            </Button>
            <p className="mt-4 text-gray-500">
              Pagamento 100% seguro • Acesso imediato • Satisfação garantida
            </p>
          </div>
        </Container>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all animate-bounce z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default CallToAction;