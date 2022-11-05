import { animation } from '@angular/animations';
import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Parallax Scrolling';
  @ViewChild('m1') m1!: ElementRef;
  @ViewChild('m2') m2!: ElementRef;
  @ViewChild('t2') t2!: ElementRef;
  @ViewChild('t1') t1!: ElementRef;
  @ViewChild('man') man!: ElementRef;
  @ViewChild('plants') plants!: ElementRef;
  @ViewChild('text') text!: ElementRef;


  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {

    
    
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.animation();
  }

  animation() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.m1.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      y: 100,
    })

    gsap.from(this.m2.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      y: 50,
    })

    gsap.from(this.t2.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      x: -50,
    })

    gsap.from(this.t1.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      x: 50,
    })

    gsap.from(this.man.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      x: -250,
    })

    gsap.from(this.plants.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      x: -50,
    })

    gsap.from(this.text.nativeElement, {
      scrollTrigger: {
        scrub: true
      },
      x: 600,
    })
  }



}
