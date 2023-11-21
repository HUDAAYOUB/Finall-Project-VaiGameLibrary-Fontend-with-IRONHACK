import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  gameForm: FormGroup; // Declare a FormGroup for the form

  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: [null, Validators.required],
      // Add other form controls for additional game properties
    });
  }

  onSubmit(): void {
    if (this.gameForm.valid) {
      const gameData = this.gameForm.value;
      // Implement the logic to send the game data to the backend
      // You can use a service to handle HTTP requests
      console.log("Game data submitted:", gameData);

      // Reset the form after submission
      this.gameForm.reset();
    }
  }
}