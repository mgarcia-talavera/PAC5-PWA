import { Component, Input } from '@angular/core';
import { Image } from 'src/app/models/image.interface'; 
import {trigger, style, transition, animate, state} from '@angular/animations';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('enterState',[
      state('void', style({
        transform: 'translateY(-100%)',
        opacity:0.5
      })),
      transition(':enter', [
        animate(2000, style({
          transform:'translateY(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class CardComponent {
  @Input() item: Image = {
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: '',
  };

}
