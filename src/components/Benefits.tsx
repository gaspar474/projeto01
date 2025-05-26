import React from 'react';
import Container from './ui/Container';
import { Check, Smartphone, Mail, FileText, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: 'Use em qualquer dispositivo',
    description: 'Acesse pelo celular, tablet ou computador com facilidade.',
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: 'Acesso instantâneo',
    description: 'Receba todo o conteúdo por e-mail ou WhatsApp imediatamente após a compra.',
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: 'Versátil',
    description: 'Pode imprimir ou usar direto da tela, como preferir.',
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: '100% prático',
    description: 'Aplicável para qualquer tipo de grupo cristão, em qualquer contexto.',
  },
];

const Benefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefícios diretos</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-purple-50 p-6 rounded-lg border border-purple-100">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-primary rounded-full p-2">
              <Check className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Garantia incondicional de 7 dias</h3>
              <p className="text-gray-600">
                Compra 100% segura. Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-shrink-0 bg-primary rounded-full p-2">
              <Check className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Aprovado por mais de 600 líderes</h3>
              <p className="text-gray-600">
                Centenas de líderes de células já transformaram suas reuniões com esse material!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;