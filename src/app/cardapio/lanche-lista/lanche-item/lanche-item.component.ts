import { Component, Input, OnInit } from '@angular/core';
import { Lanche } from '../../lanche.model';

import { LancheService } from './../../lanche.service';

@Component({
  selector: 'app-lanche-item',
  templateUrl: './lanche-item.component.html',
  styleUrls: ['./lanche-item.component.css'],
})
export class LancheItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
