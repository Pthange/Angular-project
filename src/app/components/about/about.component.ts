import { Component, OnInit } from '@angular/core';
import { DatashareService } from 'src/app/datashare.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: number | null = null;

  constructor(private dataShareService: DatashareService) { }

  ngOnInit( ): void {

    this.dataShareService.currentId.subscribe((id) => {
      this.id = id;
    });
  }

 
  

}
