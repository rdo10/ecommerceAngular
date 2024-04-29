import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  private phoneNumber: string = '1234567890'; // Cambia esto por tu número de WhatsApp
  private message: string = encodeURIComponent('Hola, me gustaría obtener más información.'); // Mensaje predeterminado

  constructor() {}

  sendWhatsAppMessage(): void {
    window.open(`https://wa.me/${this.phoneNumber}?text=${this.message}`, '_blank');
  }


}
