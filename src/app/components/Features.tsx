import {
  UserCog,
  Library,
  Clock,
  BarChart3,
  Trophy,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: UserCog,
    title: "Autenticación y Personalización",
    description:
      "Registro, inicio de sesión y formulario psicográfico de preferencias de lectura. Vinculación dinámica con un 'Radar de Curiosidades' que despliega datos curiosos, efemérides y notas de contexto cultural.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Library,
    title: "Biblioteca Personal Automatizada",
    description:
      "Gestión de lecturas mediante indexación y consumo de API externa de metadatos de libros y mangas, reduciendo el esfuerzo de llenado de datos.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Registro de Progreso Flexible",
    description:
      "Cuantificación automatizada de páginas/capítulos mediante temporizador interactivo en tiempo real, complementado con módulo de registro manual para capturar lecturas fuera de la aplicación.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analítico Dinámico",
    description:
      "Panel visual de estadísticas con distribución de géneros en gráficos interactivos, promedios diarios y líneas de tiempo de obras completadas.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Trophy,
    title: "Gamificación y Engagement",
    description:
      "Sistema de rachas consecutivas de días leyendo (streaks) y desbloqueo de insignias por méritos de lectura, implementado con lógica en el servidor.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Mail,
    title: "Buzón del Lector",
    description:
      "Intercambio asíncrono con algoritmo de asignación aleatoria y ciclos de bloqueo/apertura de cartas de recomendación cada 24 horas administrado internamente.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Funcionalidades que Transforman tu Lectura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un ecosistema completo diseñado para hacer de la lectura un hábito
            sostenible, medible y gratificante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className={`${feature.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`size-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
