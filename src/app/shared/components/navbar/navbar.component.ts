import { Component, OnInit } from '@angular/core';
import { User } from '../../../modules/interfaces/user.interface';
import { Navegation } from '../../interfaces/menu-interface';

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

  menu:Navegation[]=[
    {
      name:'Listar Formulario',
      path:'comerciantes/ListaFormulario'
    },
    {
      name:'Crear Formulario',
      path:'comerciantes/CrearFormulario'
    }
  ]

  constructor() { }

  ngOnInit(): void { }
}


