import { Component, inject, input, Input, output, signal } from '@angular/core';
import { Item } from '../../../model/items.model';
import { AddEditModalComponent } from '../add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-itemcard',
  standalone: true,
  imports: [AddEditModalComponent],
  templateUrl: './itemcard.component.html',
  styleUrl: './itemcard.component.css'
})
export class ItemcardComponent {
  item = input.required<Item>();

  editRequested = output<Item>();
  itemUpdated = output<Item>();

  editItem(){
    this.editRequested.emit(this.item());
  }
}
