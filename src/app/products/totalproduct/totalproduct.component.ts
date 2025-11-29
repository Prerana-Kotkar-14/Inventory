import { Component, inject, InjectionToken, OnInit, signal} from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/ItemService.service';
import { Item } from '../../model/items.model';
import { ItemcardComponent } from '../../core/modal/itemcard/itemcard.component';
import { AddItemModalComponent } from '../addItemModal/addItemModal.component';

@Component({
  selector: 'app-totalproduct',
  standalone: true,
  imports: [ItemcardComponent, AddItemModalComponent],
  templateUrl: './totalproduct.component.html',
  styleUrl: './totalproduct.component.css'
})
export class TotalproductComponent implements OnInit{

  private router = inject(Router);
  private itemService = inject(ItemService);

  items= signal<Item[]>([])

  isAddItemModalOpen = signal(false);

  ngOnInit() {
      this.itemService.getAllItems().subscribe(data => {
        this.items.set(data);
      })
  }

  goBack()
  {
    this.router.navigate(['/homepage']);
  }

  openAddItemModal(){
    this.isAddItemModalOpen.set(true);
    console.log("modal Opens")
    console.log('signal : ',this.isAddItemModalOpen());
    document.body.style.overflow='hidden';
  }

  closeAddItemModal(){
    this.isAddItemModalOpen.set(false);
    document.body.style.overflow = 'auto';
  }

  loadItems(){
    this.itemService.getAllItems().subscribe(res => {
      this.items.set(res);
    })
  }
}
