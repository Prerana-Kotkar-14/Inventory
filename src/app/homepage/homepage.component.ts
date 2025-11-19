import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  private router = inject(Router);

  goToTotalProduct()
  {
    this.router.navigateByUrl('/totalproduct');
  }

}
