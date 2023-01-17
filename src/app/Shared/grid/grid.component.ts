import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
  dataSource = new MatTableDataSource<Image>;
  displayedColumns: string[] = ['id', 'author'];
 

  @Input() item: Image[] = [{
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: '',
  }];


  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.item);
    }
}

