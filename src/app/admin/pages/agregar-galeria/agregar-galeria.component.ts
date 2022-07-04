import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-galeria',
  templateUrl: './agregar-galeria.component.html',
  styleUrls: ['./agregar-galeria.component.css']
})
export class AgregarGaleriaComponent implements OnInit {

 miFormulario : FormGroup = this.fb.group ({
  titulo: ['', [Validators.required]],
  directorio: ['', Validators.required],
  descripcion: ['', [Validators.maxLength(50), Validators.minLength(10)]],
  imagen: [''], // imagen de portada galería
 });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.miFormulario.value());

    const { titulo, directorio, imagen, descripcion } = this.miFormulario.value;
    

/*
    this.http.post('apiUrl', formData)
      .subscribe(res => {

        alert('Uploaded Successfully.');
      })
      */
  }


  // validaciones
  getCampoNoValido(campo:string) {
    return (this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched);
  }

  getErrorCampoNoValido(campo: string):string {
    if (
      this.miFormulario.controls[campo].hasError('required')) {
      return `You must enter a value in ${campo}`;
    }
    return '';
  }

  // carga imagen
  onFileChange(event: any)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.miFormulario.controls['imagen'].setValue(file);
    }
  }



}
