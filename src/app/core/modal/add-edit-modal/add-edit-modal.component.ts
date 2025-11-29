import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SupplierName } from '../../../model/SupplierName.enum';
import { Category } from '../../../model/Category.enum';
import { AddItemModalComponent } from '../../../products/addItemModal/addItemModal.component';

@Component({
  selector: 'app-add-edit-modal',
  standalone: true,
  imports: [ReactiveFormsModule, AddItemModalComponent],
  templateUrl: './add-edit-modal.component.html',
  styleUrl: './add-edit-modal.component.css'
})
export class AddEditModalComponent {

  private formBuilder = inject(FormBuilder);

  mode = input<'add' | 'edit'>('add');
  itemData = input<any | null>(null);
  suppliers = input.required<SupplierName[]>();
  category = input.required<Category[]>();

  save = output<any>();
  cancel= output<void>();

  itemForm = this.formBuilder.group({
    itemName: ['',Validators.required],
    description:[''],
    price:[0,[Validators.required, Validators.min(1)]],
    category: ['',Validators.required],
    supplierName: ['',Validators.required],
  });

  constructor() {
    console.log("generic modal");
    
    effect(() => {
      const modeValue = this.mode();
      const dataValue = this.itemData();

      if(modeValue==='edit' && dataValue){
        this.itemForm.patchValue(dataValue);
      }

      if(modeValue==='add'){
        this.itemForm.reset();
      }
    });
  }

  submit(){
    this.save.emit(this.itemForm.value);
  }

  onCancel(){
    this.cancel.emit();
  }

}
