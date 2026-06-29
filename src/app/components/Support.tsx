import { MessageSquare, Shield, Wrench, HeartHandshake, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const supportItems = [
  {
    icon: MessageSquare,
    title: "Soporte Técnico",
    description:
      "Nuestro equipo está disponible para resolver cualquier duda o problema técnico que puedas tener.",
    contact: "soporte@lecturametrica.com",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Continuo",
    description:
      "Actualizaciones regulares y mejoras constantes para ofrecerte la mejor experiencia.",
    info: "Actualizaciones semanales",
  },
  {
    icon: Shield,
    title: "Seguridad y Privacidad",
    description:
      "Tus datos están protegidos con los más altos estándares de seguridad.",
    info: "Cifrado de extremo a extremo",
  },
  {
    icon: HeartHandshake,
    title: "Comunidad",
    description:
      "Únete a nuestra comunidad de lectores y comparte tu experiencia.",
    info: "Próximamente",
  },
];

export function Support() {
  return (
    <section id="soporte" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Soporte y Mantenimiento</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos comprometidos con ofrecerte el mejor servicio y experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-shadow text-center"
              >
                <CardHeader>
                  <div className="bg-blue-50 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="size-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">{item.description}</p>
                  {item.contact && (
                    <p className="text-sm font-medium text-blue-600">
                      {item.contact}
                    </p>
                  )}
                  {item.info && (
                    <p className="text-sm font-medium text-gray-700">
                      {item.info}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            No dudes en contactarnos. Estamos aquí para ayudarte a aprovechar
            al máximo Lectura Métrica.
          </p>
          <a
            href="mailto:soporte@lecturametrica.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Mail className="size-5" />
            Contactar Soporte
          </a>
        </div>
      </div>
    </section>
  );
}
