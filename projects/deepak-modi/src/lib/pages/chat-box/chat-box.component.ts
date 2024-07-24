import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-chat-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {


  isOpen = false;
  messages: string[] = [];
  newMessage: string = '';

  toggleChatbox() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage.trim());
      this.newMessage = '';
    }
  }

}
