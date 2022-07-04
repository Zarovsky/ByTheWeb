import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Galeria } from 'src/app/interfaces/galerias-inerfaces';
import { GaleriasService } from '../../../galerias/services/galerias.service';

@Component({
  selector: 'app-agregar-imagen',
  templateUrl: './agregar-imagen.component.html',
  styleUrls: ['./agregar-imagen.component.css']
})
export class AgregarImagenComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
  nombre: ['', Validators.required],
  galeria: ['', Validators.required],
  imagen: ['', Validators.required],
  descripcion: ['', [Validators.maxLength(50), Validators.minLength(10)]]
  });

  galerias: Galeria[] = [];

  constructor(private fb: FormBuilder, private srv: GaleriasService) { }

  ngOnInit(): void {
    this.srv.getGalerias().subscribe(galerias => { this.galerias = galerias});
  }

  onSubmit() {
    console.log(this.miFormulario.value());
  }

  getCampoNoValido(campo:string) {
    return (this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched);

  }

  // alguna validación
  getErrorCampoNoValido(campo: string):string {
    if (
      this.miFormulario.controls[campo].hasError('required')) {
      return `You must enter a value in ${campo}`;
    }
    return '';
  }

}
