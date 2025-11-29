import { Component, inject, input, output, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { categoriesService } from '../../services/categories.service';
import { SuppliersService } from '../../services/suppliers.service';
import { ItemService } from '../../services/ItemService.service';
import { SupplierName } from '../../model/SupplierName.enum';
import { Category } from '../../model/Category.enum';
import { Item } from '../../model/items.model';
import { AddEditModalComponent } from '../../core/modal/add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-add-item-modal',
  standalone: true,
  imports: [ReactiveFormsModule, AddEditModalComponent],
  templateUrl: './addItemModal.component.html',
  styleUrl: './addItemModal.component.css'
})
export class AddItemModalComponent {

  private categoryService = inject(categoriesService);
  private suplierService = inject(SuppliersService);
  private itemService = inject(ItemService);

  closeModalForParent = output<void>();

    showModal = signal(true);
    suppliers = signal<SupplierName[]>([]);
    category = signal<Category[]>([]);

    consoleMsg()
    {
      console.log("Modal called");
    }

  ngOnInit(){
    this.loadCategories();
    this.loadSuppliers();
    console.log("Add item modal called");
  }

  loadSuppliers(){
    this.suplierService.getSuppliers().subscribe((res) =>{
      this.suppliers.set(res as SupplierName[]);
    });
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe((res) => {
      this.category.set(res as Category[]);
    });
  }

  saveItem(data : Item){
    this.itemService.saveItem(data).subscribe({
      next: () => this.showModal.set(false),
      error: (err) => console.error('Failed to save item : ',err)
    });
  }

  closeModal(){
    this.showModal.set(false);
    this.closeModalForParent.emit();
  }
}
