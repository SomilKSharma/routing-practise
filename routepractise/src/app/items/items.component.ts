import { Component, DoCheck, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements DoCheck {
  selectedItem: number | undefined;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngDoCheck() {
    this.selectedItem = this.activeRoute.snapshot.params['id'];
  }
}
