import React from 'react';
import Container from './ui/Container';
import { BookOpenCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <BookOpenCheck className="h-8 w-8 text-primary" />
            <span className="font-semibold text-lg">Dinâmicas Cristãs</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-4">© {currentYear} Dinâmicas Cristãs. Todos os direitos reservados.</p>
          <p className="text-sm">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <p className="text-sm mt-2">
            © 2025 plataformaplus.shop/dinamicascriativas. Powered by plataformaplus.shop/dinamicascriativas.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;