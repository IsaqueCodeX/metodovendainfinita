export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2026 Método Venda Infinita. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia 
          não deve ser interpretada como uma garantia de resultados.
        </p>
      </div>
    </footer>
  );
};
