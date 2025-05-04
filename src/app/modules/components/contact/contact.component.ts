import { Component , inject } from '@angular/core';
import { ContactService } from '../../../core/services/contact.service';
import { GooglesheetService } from '../../../core/services/googlesheet.service';
import { 
  FormsModule, 
  FormBuilder,  
  ReactiveFormsModule, 
  Validators, 
  FormGroup, 
  FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private service: GooglesheetService) {}

  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    massage: ['', Validators.required],
  })



  onSubmit(): void{
    if(this.contactForm.valid){
      const name = this.contactForm.value.name;
      const email = this.contactForm.value.email;
      const massage = this.contactForm.value.massage;
      const msg = document.getElementById("msg")!;

      this.service.createsheet(name, email, massage).subscribe({
        next: (res) => {
          console.log("success", res);
          msg.innerHTML = "Masssge sent successfully";

          setTimeout(()=>{
            msg.innerHTML = "";
          },5000);
          this.contactForm.reset();
          
        },
        error: (err) => {
          console.log("error", err);
          
        }
      })

      console.log(this.contactForm.value);

    }else{
      this.validateAllFormFileds(this.contactForm);
      console.log(this.contactForm.controls.name.dirty);
      
    }
    
  }

    private validateAllFormFileds(formGroup: FormGroup){
      Object.keys(formGroup.controls).forEach(filed =>{
        const control = formGroup.get(filed);
        if(control instanceof FormControl){
          control.markAsDirty({ onlySelf: true });
        } else if(control instanceof FormGroup){
          this.validateAllFormFileds(control);
        }
      })
    }
}
