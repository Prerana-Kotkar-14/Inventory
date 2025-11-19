import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totalproduct',
  standalone: true,
  imports: [],
  templateUrl: './totalproduct.component.html',
  styleUrl: './totalproduct.component.css'
})
export class TotalproductComponent {

  private router = inject(Router);

  goBack()
  {
    this.router.navigate(['/homepage']);
  }
}
