import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _httpClient = inject(HttpClient);
  
  title = 'langserve-chatbot-frontend';
  messageText: string = '';
  messages: string[] = [];

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push(this.messageText.trim());
      this.messageText = '';
    }
  }
}