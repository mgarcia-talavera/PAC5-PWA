import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ResultService } from 'src/app/services/result.service';


@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent implements OnInit {
  images: Image[] = [];
  ShowList: boolean;
  ShowGrid: boolean;

  constructor(private ResultService: ResultService) {
    this.images = new Array<Image>();
    this.ShowList = true; 
    this.ShowGrid = false;
  }
  

  ngOnInit(): void {
   
    this.ResultService.getResultAll().subscribe((images) => (this.images = images));
    }
  
  List(){
    this.ShowList = true;
    this.ShowGrid = false;
  }

  Grid() {
    this.ShowGrid = true;
    this.ShowList = false;
  }

}



