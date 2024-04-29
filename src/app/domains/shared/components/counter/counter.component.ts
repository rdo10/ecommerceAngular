import { Component, Input, SimpleChange, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }


  ngOnInit() {
    console.log('ng onInit');
    console.log('-'.repeat(10));
    console.log('duration=>',this.duration);

   this.counterRef =  window.setInterval(()=>{
   this.counter.update(state => state+1)
   console.log('run interval');
   
    },1000)
  }

  ngAfterViewInit(){
    console.log('ng afterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ng On destroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

}
