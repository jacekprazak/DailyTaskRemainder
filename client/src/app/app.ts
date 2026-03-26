import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private http = inject(HttpClient);
  protected title = 'My tasks';
  protected users = signal<any>([])

  async ngOnInit() {
    this.users.set(await this.getUsers());
  }

  async getUsers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/users'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
