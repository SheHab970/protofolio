import { Component , inject, ElementRef, ViewChild, ViewChildren, QueryList, HostListener, AfterViewInit  } from '@angular/core';
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
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    massage: ['', [Validators.required]],
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

    // for Animation 
    @ViewChild('animatedElement') animatedElement!: ElementRef;
    @ViewChild('animatedElement1') animatedElement1!: ElementRef;
    @ViewChild('parentContainer') parentContainer!: ElementRef;
    @ViewChildren('child') childElements!: QueryList<ElementRef>;
    isVisible = false;
    isVisible1 = false;
  
    ngAfterViewInit() {
      this.setTransitionDelays();
      this.checkVisibility1(); // check once when loaded
      this.checkVisibility2();
      this.checkVisibility3();
      
    }
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.checkVisibility1();
      this.checkVisibility2();
      this.checkVisibility3();
    }
  
    setTransitionDelays() {
      const children = this.parentContainer.nativeElement.querySelectorAll('.child');
      children.forEach((child: HTMLElement, index: number) => {
        child.style.transitionDelay = `${index * 0.3}s`; // 0s, 0.2s, 0.4s, 0.6s
      });
    }
  
    checkVisibility1() {
      const rect = this.animatedElement.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
    
      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }
    checkVisibility2() {
      const rect1 = this.parentContainer.nativeElement.getBoundingClientRect();
    
      if (rect1.top < window.innerHeight - 100 && rect1.bottom > 100) {
        this.parentContainer.nativeElement.classList.add('show');
      } else {
        this.parentContainer.nativeElement.classList.remove('show');
      }
    }
      checkVisibility3() {
    const rect = this.animatedElement1.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    if (rect.top < windowHeight - 100 && rect.bottom > 100) {
      this.isVisible1 = true;
    } else {
      this.isVisible1 = false;
    }
  }
}
