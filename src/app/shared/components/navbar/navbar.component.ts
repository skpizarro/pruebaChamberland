import { Component, OnInit } from '@angular/core';
import { User } from '../../../modules/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  currentUser: User = {
    name: 'John Doe',
    role: 'Admin',
    profilePicture: 'https://placehold.co/300x300' // Replace with actual profile picture URL
  };

  constructor() { }

  ngOnInit(): void { }
}


