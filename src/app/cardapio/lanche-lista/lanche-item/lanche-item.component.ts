import { LancheService } from './../../lanche.service';
import { Component, Input, OnInit } from '@angular/core';
import { Lanche } from '../../lanche.model';

@Component({
  selector: 'app-lanche-item',
  templateUrl: './lanche-item.component.html',
  styleUrls: ['./lanche-item.component.css']
})
export class LancheItemComponent implements OnInit {

  constructor(private LancheService: LancheService) { }

  ngOnInit(): void {
  }
}
