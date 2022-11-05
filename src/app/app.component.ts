import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Animating Clip-path';

  @ViewChild('sec1') sec1!: ElementRef;
  @ViewChild('sec2') sec2!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    let value  = window.scrollY;
    this.sec1.nativeElement.style.clipPath = 'circle('+value * 1.15+'px at 0 0)';
    this.sec2.nativeElement.style.clipPath = 'circle('+value * 0.85+'px at 100% 100%)';
  }

  ngOnInit() {

  }



}
