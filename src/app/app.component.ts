import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DataItem {
  string: string;
  length: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleAngularApp';
  data: DataItem[] = [];  // Use the DataItem interface for the data array
  dataLoaded = false; // Flag to check if data is available

  fetchData() {
    // Simulating fetching data from backend
    this.data = [
      { string: "Hello", length: 5 },
      { string: "World", length: 5 }
    ];
    this.dataLoaded = true;
  }
}
