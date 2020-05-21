import { Component, OnInit } from '@angular/core';
import {Statement} from '../statement';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  statement: Statement = new Statement(10,"asfsdrwerwe",8,10,"this is test payment",15);
  message : any;
  constructor( private service:UpdateService ){}

  ngOnInit(): void {
  }

  public updateStatment(){
   let updatedStatement = this.service.updateStatement(this.statement);
   updatedStatement.subscribe((data)=>this.message=data);
  }

}
