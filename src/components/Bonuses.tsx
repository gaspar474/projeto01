import React from 'react';
import Container from './ui/Container';
import { Gift } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Bonuses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 p-3 rounded-full mb-4">
            <Gift className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bônus incluídos</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Além das 530+ dinâmicas, você ainda recebe estes bônus exclusivos:
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl border border-purple-100 p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">52 Quebra-gelos semanais</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Devocional "Café com Deus Pai"</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Manual "Treinamento para Líderes de Células"</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Ebook sobre Oração Intercessora</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">10 Devocionais para impulsionar sua célula</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-gray-700">Atualizações gratuitas por 12 meses</span>
              </li>
            </ul>
            
            <img
              src="https://plataformaplus.shop/wp-content/uploads/2025/05/nova-imaggem-mockup_11zon.png"
              alt="Café com Deus Pai"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700">
            Valor total dos bônus: <span className="line-through">R$197</span>{' '}
            <span className="text-primary font-bold">GRÁTIS</span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Bonuses;