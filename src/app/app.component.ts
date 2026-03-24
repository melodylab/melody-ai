import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Initial registration
    setTimeout(() => this.registerReveal(), 100);

    // Re-register on every route navigation (new components mount)
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.registerReveal(), 120));
  }

  private registerReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements that haven't been shown yet
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      observer.observe(el);
    });
  }
}
