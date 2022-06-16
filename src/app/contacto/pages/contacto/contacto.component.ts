import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder) {}

  contactoForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
    ]),
  });

  getCampoNoValido(campo:string) {
    return (this.contactoForm.controls[campo].errors &&
      this.contactoForm.controls[campo].touched);

  }

  // alguna validación
  getErrorCampoNoValido(campo: string):string {
    if (
      this.contactoForm.controls[campo].hasError('required')) {
      return `You must enter a value in ${campo}`;
    }
    if (campo === 'email') {
      if (
        this.contactoForm.controls[campo].hasError('email')) {
        return 'Not a valid email';
      }
    }
    return '';
  }

  onSubmit() {

    if (this.contactoForm.invalid) {
      // si queremos que se muestren todos los errores cuando se pulse
      // el botón guardar, deben cumplirse las condiciones
      // que tenemos en campoNoValido
      // Hay una propiedad para marcar como touched todos los campos
      this.contactoForm.markAllAsTouched();
      return;

    }

    console.log(this.contactoForm.value);
    // limpiamos todos los campos
    this.contactoForm.reset();
  }
}
