'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, Users, FileText, BarChart2, Lock, Cog, ExternalLink, CheckCircle } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">CliSync</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-gray-800">Características</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Gestión Inmobiliaria Simplificada</h2>
            <p className="text-xl text-gray-600 mb-8">Somos la solución integral para administrar tus propiedades y clientes con eficiencia</p>
            <Button size="lg">Solicitar Demo</Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="w-10 h-10 text-blue-500" />}
                title="Gestión de Clientes"
                description="Registra y segmenta clientes, actualiza información y realiza un seguimiento detallado de todas las interacciones."
              />
              <FeatureCard
                icon={<Home className="w-10 h-10 text-blue-500" />}
                title="Gestión de Propiedades"
                description="Registra propiedades con detalles completos, actualiza estados y asocia con clientes interesados."
              />
              <FeatureCard
                icon={<BarChart2 className="w-10 h-10 text-blue-500" />}
                title="Seguimiento de Ventas"
                description="Registra oportunidades, visualiza el embudo de ventas y genera informes detallados."
              />
              <FeatureCard
                icon={<FileText className="w-10 h-10 text-blue-500" />}
                title="Gestión Documental"
                description="Almacena y gestiona documentos clave con control de versiones y búsqueda eficiente."
              />
              <FeatureCard
                icon={<Lock className="w-10 h-10 text-blue-500" />}
                title="Seguridad y Acceso"
                description="Control de acceso basado en roles, autenticación segura y encriptación de datos sensibles."
              />
              <FeatureCard
                icon={<Cog className="w-10 h-10 text-blue-500" />}
                title="Personalización"
                description="Personaliza la interfaz, configura notificaciones y adapta el sistema a tus necesidades."
              />
              <FeatureCard
                icon={<ExternalLink className="w-10 h-10 text-blue-500" />}
                title="Integraciones"
                description="Conecta con CRM, plataformas de pago y servicios de anuncios inmobiliarios."
              />
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">¿Por qué elegir CliSync?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitItem text="Gestión centralizada de clientes y propiedades" />
              <BenefitItem text="Seguimiento eficiente de ventas y alquileres" />
              <BenefitItem text="Informes y análisis detallados en tiempo real" />
              <BenefitItem text="Seguridad y control de acceso avanzados" />
              <BenefitItem text="Personalización y configuración flexibles" />
              <BenefitItem text="Integraciones con sistemas externos" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contáctanos</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Nombre" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Correo electrónico" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Mensaje" />
              </div>
              <Button type="submit" className="w-full">Enviar</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CliSync. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitItem({ text }) {
  return (
    <div className="flex items-center">
      <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
      <span>{text}</span>
    </div>
  )
}