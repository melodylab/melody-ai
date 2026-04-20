import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    const { name, company, email, service, message } = this.formData;

    const subject = encodeURIComponent(`Nuevo contacto desde la web — ${name}`);
    const body = encodeURIComponent(
      `Hola equipo Melody,\n\n` +
      `Nombre: ${name}\n` +
      `Empresa: ${company || '—'}\n` +
      `Email de contacto: ${email}\n` +
      `Servicio de interés: ${service || '—'}\n\n` +
      `Mensaje:\n${message || '—'}\n\n` +
      `---\nEnviado desde el formulario de contacto de melodyai.co`
    );

    window.location.href = `mailto:melodyai.team@gmail.com?subject=${subject}&body=${body}`;

    this.submitted = true;

    // Reset después de 4s
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', company: '', email: '', service: '', message: '' };
    }, 4000);
  }
}
