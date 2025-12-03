const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Luis Guerreiro. Built with passion and code.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed by{" "}
            <span className="gradient-text font-medium">Luis Guerreiro</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
