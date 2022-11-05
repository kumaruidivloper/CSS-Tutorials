import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AnalogandDigitalClock';

  @ViewChild('sc') sc!: ElementRef;
  @ViewChild('mn') mn!: ElementRef;
  @ViewChild('hr') hr!: ElementRef;


  ngOnInit() {
      this.callEverySec();
  }


  callEverySec() {
    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * 6;
      let ss = day.getSeconds() * 6;

      console.log(ss)

      this.hr.nativeElement.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      this.mn.nativeElement.style.transform = `rotateZ(${mm}deg)`;
      this.sc.nativeElement.style.transform = `rotateZ(${ss}deg)`;
    })
  }
}
