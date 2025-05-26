import React from 'react';
import Container from './ui/Container';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Maria S.',
    role: 'Líder de célula',
    content:
      'Material incrível, já usei na minha célula e fez total diferença. Todas as reuniões agora são mais dinâmicas e os membros participam muito mais.',
    stars: 5,
  },
  {
    name: 'João P.',
    role: 'Pastor',
    content:
      'R$10 é simbólico, o valor real é imensurável. Este material tem sido uma benção para todos os líderes de células da nossa igreja.',
    stars: 5,
  },
  {
    name: 'Ana C.',
    role: 'Líder de jovens',
    content:
      'Nunca mais fiquei perdida sem saber que dinâmica aplicar. Tenho usado com os jovens e o engajamento aumentou significativamente.',
    stars: 5,
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-purple-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Depoimentos reais</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Veja o que dizem os líderes que já estão usando nossas dinâmicas em suas células.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute -top-4 -left-4 bg-primary rounded-full p-2">
                <Quote className="h-5 w-5 text-white" />
              </div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;