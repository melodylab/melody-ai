import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  stats = [
    { value: '2–6', label: 'semanas de implementación', accent: false },
    { value: '100%', label: 'soluciones a medida', accent: true },
    { value: '3', label: 'pilares: IA · Auto · Dev', accent: false },
    { value: 'EC', label: 'con visión global', accent: false },
  ];

  principles = [
    {
      title: 'Entregamos sistemas, no promesas',
      body: 'Roadmaps claros, entregables concretos y timelines reales. Nada de meses de "descubrimiento" sin resultado tangible.'
    },
    {
      title: 'Pensamos en ecosistemas',
      body: 'No construimos piezas aisladas. Diseñamos cómo la IA, la automatización y el software trabajan juntos como un sistema único.'
    },
    {
      title: 'Tu equipo es nuestro equipo',
      body: 'No somos proveedores externos que entregan y desaparecen. Trabajamos con tu gente, entendemos tu contexto y nos comprometemos con el resultado.'
    },
    {
      title: 'Tecnología que escala sola',
      body: 'Construimos con arquitectura limpia, CI/CD y monitoreo desde el día 1 — para que lo que funciona hoy siga funcionando cuando tu negocio crezca x10.'
    },
  ];

  valores = [
    { icon: '⚡', title: 'Velocidad sin sacrificar calidad', body: 'En 2 a 6 semanas tienes algo en producción, con calidad de ingeniería de primera.' },
    { icon: '🧠', title: 'IA como herramienta, no como moda', body: 'Usamos IA donde realmente agrega valor. No forzamos soluciones donde no encajan.' },
    { icon: '🤝', title: 'Transparencia total', body: 'Costos claros, timeline honesto, y comunicación directa durante todo el proceso.' },
  ];
}
