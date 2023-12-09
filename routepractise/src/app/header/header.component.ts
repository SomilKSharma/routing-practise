import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // router: Router = inject(Router);
  // activeRoute: ActivatedRoute = inject(ActivatedRoute);
  // navigateTo() {
  //   this.router.navigate(['Body2'], {relativeTo: this.activeRoute})
  // }
  showDropdown = false;
}
