import { Component, DoCheck, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements DoCheck {
  selectedItem: number | undefined |string;
  searchText: string = '';
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  searchClick(value: string) {
    this.router.navigate(['/items'], {
      queryParams: { search: value }
    });
  }

  ngDoCheck() {
    this.selectedItem = this.activeRoute.snapshot.params['id'];
    if (this.activeRoute.snapshot.queryParams['search']) {
      this.selectedItem = this.activeRoute.snapshot.queryParams['search']
    }
  }
}
