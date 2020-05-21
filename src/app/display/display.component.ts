import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  statement: any;
  constructor(private service: UpdateService) { }

  ngOnInit(): void {
    let response = this.service.viewStatements();
    console.log(response);
    response.subscribe((data) => this.statement = data);
  }
  public viewStatements() {

  }
}
