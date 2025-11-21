import { Component, Input } from '@angular/core';
import { Item } from '../../../model/items.model';

@Component({
  selector: 'app-itemcard',
  standalone: true,
  imports: [],
  templateUrl: './itemcard.component.html',
  styleUrl: './itemcard.component.css'
})
export class ItemcardComponent {
  @Input() item!: Item;
}
