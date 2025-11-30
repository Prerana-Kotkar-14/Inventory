import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SupplierName } from '../../../model/SupplierName.enum';
import { Category } from '../../../model/Category.enum';
import { Item } from '../../../model/items.model';

@Component({
  selector: 'app-add-edit-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit-modal.component.html',
  styleUrl: './add-edit-modal.component.css'
})
export class AddEditModalComponent {

  private formBuilder = inject(FormBuilder);

  mode = input<'add' | 'edit'>('add');
  itemData = input<any | null>(null);
  suppliers = input.required<SupplierName[]>();
  category = input.required<Category[]>();

  save = output<Item>();
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

      if(this.mode() ==='edit' && this.itemData()){
        this.itemForm.patchValue(this.itemData()!);
      }
      else{
        this.itemForm.reset();
      }
    });
  }

  submit(){
    if(this.itemForm.invalid) return;
    this.save.emit(this.itemForm.value as Item);
  }

  onCancel(){
    this.cancel.emit();
  }

}
