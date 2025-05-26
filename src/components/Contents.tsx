import React from 'react';
import Container from './ui/Container';
import { BookOpen, Users, CheckCircle, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const contents = [
  {
    icon: <BookOpen className="h-6 w-6 text-white" />,
    title: 'Dinâmicas completas',
    description: 'Para quebra-gelo, reflexão e aplicação bíblica em todas as reuniões.',
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: 'Atividades de integração',
    description: 'Para grupos e discipulado, fortalecendo relacionamentos.',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-white" />,
    title: 'Conteúdo testado',
    description: 'Por líderes experientes em diferentes contextos de células.',
  },
  {
    icon: <Calendar className="h-6 w-6 text-white" />,
    title: 'Material anual',
    description: 'Útil para o ano inteiro, com dinâmicas para todas as ocasiões.',
  },
];

const Contents = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O que você vai receber</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Um conjunto completo de recursos para tornar suas células mais dinâmicas e impactantes.
          </p>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {contents.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 bg-primary rounded-full p-3">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-700">
            Mais de 530 dinâmicas diferentes para manter suas células sempre renovadas e envolventes!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Contents;