import { Component, OnInit } from '@angular/core';

interface enlaceMenu {
  usuario: string,
  literal: string,
  enlace: string,
  icono?: string
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listaMenu: enlaceMenu[] = [];
  tipoUser: string = 'all'; // por defecto all

  constructor() { }

  ngOnInit(): void {
    // cargamos todo el menú, ya se filtrará luego
    this.listaMenu = [
      {
        usuario: 'all',
        literal: 'Home',
        enlace: '/galerias/home',
        icono: 'home'
      },
      {
        usuario: 'all',
        literal: 'Search',
        enlace: '/galerias/search',
        icono: 'search'
      },
      {
        usuario: 'all',
        literal: 'Info',
        enlace: '/info',
        icono: 'info'
      },
      {
        usuario: 'all',
        literal: 'Contact',
        enlace: '/contacto',
        icono: 'mail'
      },
      {
        usuario: 'admin',
        literal: 'Galeria +',
        enlace: '/galerias',
        icono: 'fireplace'
      },
      {
        usuario: 'admin',
        literal: 'CRUD',
        enlace: '/galerias',
        icono: 'edit_note'
      }
    ];
  }

  getMenu() : enlaceMenu[] {
    return this.listaMenu.filter(item => item.usuario === this.tipoUser);
  }

}
