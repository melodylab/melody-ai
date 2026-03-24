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
  pipelineSteps = [
    'Documento / email / formulario llega',
    'Extracción inteligente (OCR + LLM)',
    'Validación y transformación de datos',
    'Enrutamiento automático al sistema destino',
    'Notificación y registro del resultado',
  ];

  techStack = [
    { icon: '🅰️', name: 'Angular' },
    { icon: '⚛️', name: 'React' },
    { icon: '🔷', name: '.NET' },
    { icon: '🤖', name: 'Kotlin' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🌐', name: 'GCP' },
    { icon: '💳', name: 'Stripe' },
    { icon: '📊', name: 'Salesforce' },
    { icon: '🔗', name: 'APIs REST' },
  ];
}
