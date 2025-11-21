import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/ItemService.service';
import { Item } from '../../model/items.model';
import { ItemcardComponent } from '../../core/modal/itemcard/itemcard.component';

@Component({
  selector: 'app-totalproduct',
  standalone: true,
  imports: [ItemcardComponent],
  templateUrl: './totalproduct.component.html',
  styleUrl: './totalproduct.component.css'
})
export class TotalproductComponent implements OnInit{

  private router = inject(Router);
  private itemService = inject(ItemService);

  items: Item[] = []

  ngOnInit() {
      this.itemService.getAllItems().subscribe(data => {
        this.items=data;
      })
  }

  goBack()
  {
    this.router.navigate(['/homepage']);
  }
}
