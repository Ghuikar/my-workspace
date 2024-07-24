import { Component } from '@angular/core';
import { ChatBoxComponent } from './pages/chat-box/chat-box.component';

@Component({
  selector: 'lib-DeepakModi',
  standalone: true,
  imports: [ChatBoxComponent],
  template: `
 <lib-chat-box></lib-chat-box>
  `,
  styles: ``
})
export class DeepakModiComponent {

}
