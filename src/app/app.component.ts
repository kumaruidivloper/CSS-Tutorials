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

  @ViewChild('hour') hour!: ElementRef;
  @ViewChild('minutes') minutes!: ElementRef;
  @ViewChild('seconds') seconds!: ElementRef;
  @ViewChild('ampm') ampm!: ElementRef;



  ngOnInit() {
      this.callEverySec();
  }


  callEverySec() {
    setInterval(() => {
      let date = new Date();
      this.analog(date);
      this.digital(date);
    });
  }

  analog(date:any) {
    
      let hh = date.getHours() * 30;
      let mm = date.getMinutes() * 6;
      let ss = date.getSeconds() * 6;


      this.hr.nativeElement.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      this.mn.nativeElement.style.transform = `rotateZ(${mm}deg)`;
      this.sc.nativeElement.style.transform = `rotateZ(${ss}deg)`;
  }

  digital(date:any) {
    let hour:number | string = date.getHours();
    let minutes:number | string = date.getMinutes();
    let seconds:number | string = date.getSeconds();
      
    
      // add zero befor sigle digit number
      hour  = (hour < 10) ? '0' + hour : hour
      minutes  = (minutes < 10) ? '0' + minutes : minutes
      seconds  = (seconds < 10) ? '0' + seconds : seconds

      // conver 24hr clock to 12hr clock
      if(hour > 12) {
        hour = +hour - 12;
      }

      this.hour.nativeElement.innerHTML = hour;
      this.minutes.nativeElement.innerHTML = minutes;
      this.seconds.nativeElement.innerHTML = seconds;
      this.ampm.nativeElement.innerHTML = hour >= 12 ? 'PM' : 'AM';
  }
}
