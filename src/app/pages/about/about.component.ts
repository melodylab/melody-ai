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
      title: 'Resultados en semanas, no en trimestres',
      body: 'Cada proyecto tiene un entregable claro desde el día uno. Sin fases interminables de "descubrimiento", sin consultorías vacías — solo sistemas que funcionan.'
    },
    {
      title: 'Sistemas, no piezas sueltas',
      body: 'Diseñamos la IA, la automatización y el software como un ecosistema coherente. Cada componente amplifica al siguiente, no compite con él.'
    },
    {
      title: 'Nos comprometemos con el resultado, no con el alcance',
      body: 'No somos proveedores que entregan y desaparecen. Nos quedamos, iteramos y aseguramos que lo que construimos genere impacto real en tu negocio.'
    },
    {
      title: 'Construido para escalar desde el origen',
      body: 'Arquitectura limpia, CI/CD y monitoreo desde el día 1. Lo que funciona hoy debe seguir funcionando cuando crezcas x10 — y lo hacemos posible desde el inicio.'
    },
  ];

  valores = [
    { icon: '⚡', title: 'Velocidad con criterio', body: 'Entregamos en semanas porque tenemos claridad desde el inicio, no porque cortamos esquinas.' },
    { icon: '🧠', title: 'IA aplicada, no decorativa', body: 'No usamos IA para parecer innovadores. La usamos donde cambia resultados concretos y medibles.' },
    { icon: '🤝', title: 'Radical honesty', body: 'Timeline real, costos transparentes, y actualizaciones directas. Sin sorpresas al final del proyecto.' },
  ];
}
