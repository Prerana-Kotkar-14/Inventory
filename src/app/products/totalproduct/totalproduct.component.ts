import { Component, computed, inject, OnInit, signal} from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/ItemService.service';
import { Item } from '../../model/items.model';
import { ItemcardComponent } from '../../core/modal/itemcard/itemcard.component';
import { AddEditModalComponent } from '../../core/modal/add-edit-modal/add-edit-modal.component';
import { SuppliersService } from '../../services/suppliers.service';
import { categoriesService } from '../../services/categories.service';
import { SupplierName } from '../../model/SupplierName.enum';
import { Category } from '../../model/Category.enum';

@Component({
  selector: 'app-totalproduct',
  standalone: true,
  imports: [ItemcardComponent, AddEditModalComponent],
  templateUrl: './totalproduct.component.html',
  styleUrl: './totalproduct.component.css'
})
export class TotalproductComponent implements OnInit{

  private router = inject(Router);
  private itemService = inject(ItemService);
  private supplierService = inject(SuppliersService);
  private categoryService = inject(categoriesService);

  items= signal<Item[]>([]);
  suppliers = signal<SupplierName[]>([]);
  categories = signal<Category[]>([]);

  isModalOpen = signal(false);
  isEditModalOpen = signal(false);
  isAnyModalOpen = computed(()=>
    this.isModalOpen() || this.isEditModalOpen()
  );

  modalMode = signal<'add' | 'edit'>('add');
  selectedItem = signal<Item | null>(null);

  ngOnInit() {
    this.loadItems();
    this.loadSuppliers();
    this.loadCategories();
  }

  loadItems(){
    this.itemService.getAllItems().subscribe(res => {
      this.items.set(res);
    })
  }

  loadSuppliers(){
    this.supplierService.getSuppliers().subscribe((res) => {
      this.suppliers.set(res as SupplierName[]);
    })
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe((res) =>{
      this.categories.set(res as Category[]);
    })
  }

  openAddModal(){
    this.modalMode.set('add');
    this.selectedItem.set(null);
    this.isModalOpen.set(true);
  }

  openEditModal(item : Item){
    this.modalMode.set('edit');
    this.selectedItem.set(item);
    this.isEditModalOpen.set(true);
  }

  saveItem(item:Item){
    if(this.modalMode() === 'add'){
      this.itemService.saveItem(item).subscribe(()=>{
        this.loadItems();
        this.closeModal();
      });
    }
    else{
      this.itemService.updateItem(item.id!, item).subscribe(() =>{
        this.loadItems();
        this.closeModal();
      });
    }
  }

  closeModal(){
    this.isModalOpen.set(false);
    this.isEditModalOpen.set(false);
    this.selectedItem.set(null);
  }

  goBack()
  {
    this.router.navigate(['/homepage']);
  }

  updateItemList(updatedItem : Item){
    const current = this.items();

    const index = current.findIndex((i:Item) => i.id === updatedItem.id);

    if(index !== -1){
      
      const updatedList = [...current];
      updatedList[index]=updatedItem;

      this.items.set(updatedList);
    }
  }
}
