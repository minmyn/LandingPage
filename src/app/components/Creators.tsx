import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const creators = [
  {
    name: "Equipo Lectura Métrica",
    role: "Desarrollo y Diseño",
    bio: "Apasionados por la lectura y la tecnología, trabajamos para crear herramientas que inspiren el hábito de leer.",
  },
];

export function Creators() {
  return (
    <section
      id="creadores"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce a las personas detrás de Lectura Métrica
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {creators.map((creator, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="size-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold">
                    LM
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{creator.name}</h3>
                    <p className="text-blue-600 font-medium">{creator.role}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                    {creator.bio}
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <a
                      href="#"
                      className="size-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5 text-gray-700" />
                    </a>
                    <a
                      href="#"
                      className="size-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5 text-gray-700" />
                    </a>
                    <a
                      href="#"
                      className="size-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="size-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
