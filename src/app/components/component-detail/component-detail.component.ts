import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {
  image?: Image;
  panelOpenState = false;

  constructor(private resultService: ResultService, 
    //to read parameter from url
    private activatedRoute: ActivatedRoute,
    //to redirect the user of this view if we don't have a valid identifier  
    private router: Router) {}

    ngOnInit(): void {
      const identifier = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('Identifier --> ' , identifier);

      this.resultService.getResultByName(identifier!).subscribe((image) => {

        if(!image){
          return this.router.navigateByUrl('/');
        }

        this.image = image;
        console.log('Image --> ', this.image);
        return null;
      });
    }

    ShowDetails() {
      this.panelOpenState = !this.panelOpenState;
    }
}

