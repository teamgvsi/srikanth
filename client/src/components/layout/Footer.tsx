export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 mt-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4">
        <span className="font-serif text-2xl font-bold text-foreground">
          Srikanth <span className="font-script text-primary text-3xl font-normal relative top-1">Raheja</span>
        </span>
        <p className="text-muted-foreground text-sm max-w-md">
          Entrepreneur, Brand Strategist & Marketing Leader building scalable brands through data-driven creativity.
        </p>
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/srikanthraheja/" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          
          <a href="https://www.instagram.com/raheja_sri?igsh=MWl4ZWQ1cDRrcWczNw==" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
        </div>
        <p className="text-xs text-muted-foreground/60 pt-8">
          © {new Date().getFullYear()} Srikanth Raheja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
