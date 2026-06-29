import { BookOpen, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="size-8 text-blue-400" />
              <span className="font-semibold text-xl text-white">
                Lectura Métrica
              </span>
            </div>
            <p className="text-sm mb-4 max-w-md">
              Software para incentivar el hábito de lectura. Mide, aprende y
              mantén tu hábito de lectura con las mejores herramientas.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="size-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="#"
                className="size-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="size-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#funcionalidades" className="hover:text-blue-400 transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#creadores" className="hover:text-blue-400 transition-colors">
                  Creadores
                </a>
              </li>
              <li>
                <a href="#soporte" className="hover:text-blue-400 transition-colors">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Lectura Métrica. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
