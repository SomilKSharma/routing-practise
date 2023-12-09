import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data) => {
      this.jumpToSection(data);
    })
  }

  jumpToSection(data: string | null): void{
    const element = document.getElementById(data!);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}
