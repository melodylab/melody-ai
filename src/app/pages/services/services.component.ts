import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  activeStep: number | null = null;

  pipelineSteps = [
    {
      label: 'Documento / email / formulario llega',
      detail: 'Tu equipo no necesita estar pendiente. El sistema detecta la entrada automáticamente, sin intervención humana.'
    },
    {
      label: 'Extracción inteligente (OCR + LLM)',
      detail: 'La IA lee, interpreta y extrae la información relevante — igual que lo haría una persona, pero sin errores ni fatiga.'
    },
    {
      label: 'Validación y transformación de datos',
      detail: 'Los datos se limpian y formatean para que lleguen exactamente como los necesitas — sin trabajo manual de tu equipo.'
    },
    {
      label: 'Enrutamiento automático al sistema destino',
      detail: 'La información va directo a donde debe ir: tu CRM, ERP, base de datos o herramienta interna. Cero copiar-pegar.'
    },
    {
      label: 'Notificación y registro del resultado',
      detail: 'Queda un registro trazable de cada ejecución. Tu equipo recibe alertas solo cuando algo requiere atención real.'
    },
  ];

  techStack = [
    { icon: '🅰️', name: 'Angular', value: 'Interfaces web rápidas y funcionales que tu equipo puede usar sin frustración' },
    { icon: '⚛️', name: 'React', value: 'Aplicaciones modernas con experiencia fluida para tus clientes' },
    { icon: '🔷', name: '.NET', value: 'Backend robusto y seguro que soporta tu operación sin caída' },
    { icon: '🤖', name: 'Kotlin', value: 'Apps móviles nativas para Android que se sienten profesionales' },
    { icon: '☁️', name: 'AWS', value: 'Infraestructura que escala con tu negocio sin que te preocupes por servidores' },
    { icon: '🌐', name: 'GCP', value: 'Plataforma de IA y datos con capacidades que antes eran solo para grandes empresas' },
    { icon: '💳', name: 'Stripe', value: 'Pagos integrados en tu sistema sin fricción ni burocracia' },
    { icon: '📊', name: 'Salesforce', value: 'Conectamos tu CRM con tus flujos de trabajo para que nada se pierda' },
    { icon: '🔗', name: 'APIs REST', value: 'Integramos cualquier sistema que ya uses con tu nueva solución' },
  ];
}
