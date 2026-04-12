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
    { value: '100%', label: 'soluciones a medida', accent: true },
    { value: '3', label: 'pilares: IA · Auto · Dev', accent: false },
    { value: 'EC', label: 'con visión global', accent: false },
    { value: '0', label: 'demos vacíos entregados', accent: false },
  ];

  principles = [
    {
      title: 'Entregables concretos desde el inicio',
      body: 'Cada proyecto tiene un entregable claro definido desde antes de empezar. Sin fases interminables de "descubrimiento", sin consultorías vacías — solo sistemas que funcionan.'
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
      title: 'Construido para escalar',
      body: 'Arquitectura limpia, CI/CD y monitoreo. Lo que funciona debe seguir funcionando cuando crezcas — y lo hacemos posible desde el inicio.'
    },
  ];

  valores = [
    { icon: '⚡', title: 'Claridad', body: 'Entregamos con precisión porque tenemos claridad desde el inicio — no porque cortamos esquinas ni hacemos suposiciones.' },
    { icon: '🧠', title: 'IA aplicada, no decorativa', body: 'No usamos IA para parecer innovadores. La usamos donde cambia resultados concretos y medibles en tu operación.' },
    { icon: '🤝', title: 'Radical honesty', body: 'Costos transparentes, alcance honesto y actualizaciones directas. Sin sorpresas al final del proyecto.' },
  ];
}
