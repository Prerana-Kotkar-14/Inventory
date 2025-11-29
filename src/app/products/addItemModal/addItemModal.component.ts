import { Component, EventEmitter, inject, input, Output, signal } from '@angular/core';
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

    // @Output() close = new EventEmitter<void>();
    // @Output() save = new EventEmitter<void>();

    // isOpenModal = input.required<true | false>();

    showModal = signal(true);
    suppliers=signal<SupplierName[]>([]);
    category = signal<Category[]>([]);

  ngOnInit(){
    this.loadCategories();
    this.loadSuppliers();
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

  openModal(){
    this.showModal.set(true);
  }

  closeModal(){
    // this.showModal.set(false);
    this.showModal.set(false);
  }

  // isOpen = signal(false);

  // closeModal(){
  //   this.close.emit();
  // }

  saveItem(data : Item){
    this.itemService.saveItem(data).subscribe({
      next: () => this.showModal.set(false),
      error: (err) => console.error('Failed to save item : ',err)
    });
  }
}
