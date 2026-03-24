import {
  Component, HostListener, ElementRef,
  ViewChildren, QueryList, OnInit, AfterViewInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type TiltState = { rx: number; ry: number; tz: number };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('bounceBtn') bounceBtns!: QueryList<ElementRef>;

  tilts: Record<number, TiltState> = {};
  private bounceTimer: any = null;

  ngOnInit() {
    this.updateHoverCapability();
  }

  ngAfterViewInit() {
    this.bounceTimer = setInterval(() => {
      const buttons = this.bounceBtns.toArray();
      if (!buttons.length) return;
      const random = Math.floor(Math.random() * buttons.length);
      const el = buttons[random].nativeElement as HTMLElement;
      el.classList.remove('bounce-once');
      void el.offsetWidth;
      el.classList.add('bounce-once');
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.bounceTimer);
    clearTimeout(this.hoverTimer);
  }

  // ---------- Card tilt ----------
  onCardMove(event: MouseEvent, i: number) {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 12;
    const rx = (0.5 - py) * 12;
    this.tilts[i] = { rx, ry, tz: 6 };
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--tz', `${this.tilts[i].tz}px`);
  }

  onCardLeave(event: MouseEvent, i: number) {
    const el = event.currentTarget as HTMLElement;
    this.tilts[i] = { rx: 0, ry: 0, tz: 0 };
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
    el.style.setProperty('--tz', `0px`);
  }

  // ---------- Hover ----------
  canHover = false;
  hoverTimer: any = null;

  @HostListener('window:resize')
  updateHoverCapability() {
    this.canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  @HostListener('document:keydown.escape')
  onEsc() { /* noop */ }
}
