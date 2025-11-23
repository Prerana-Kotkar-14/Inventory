import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupplierName } from '../../model/SupplierName.enum';
import { categoriesService } from '../../services/categories.service';
import { SuppliersService } from '../../services/suppliers.service';
import { Category } from '../../model/Category.enum';

@Component({
  selector: 'app-add-item-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addItemModal.component.html',
  styleUrl: './addItemModal.component.css'
})
export class AddItemModalComponent {

  private formBuilder = inject(FormBuilder);
  private categoryService = inject(categoriesService);
  private suplierService = inject(SuppliersService);

  ngOnInit(){
    this.loadCategories();
    this.loadSuppliers();
  }

  @Output() close = new EventEmitter<void>();

  // main form
  itemForm = this.formBuilder.group({
    itemName: ['',Validators.required],
    description:[''],
    price:['',[Validators.required, Validators.min(1)]],
    category: ['',Validators.required],
    SupplierName: ['',Validators.required],
  })

  categories: any[] =[];
  suppliers: any[] = [];


  isOpen = signal(false);

  closeModal(){
    this.close.emit();
  }

  submitForm(){
    if(this.itemForm.invalid){
      this.itemForm.markAllAsTouched();
      return;
    }

    console.log("Form Sumitted : ",this.itemForm.value);
    this.closeModal();
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe((res:any)=>{
      this.categories=res;
    })
  }

  loadSuppliers(){
    this.suplierService.getSuppliers().subscribe((res:any)=>{
      this.suppliers=res;
    })
  }
}
