import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private _loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    
    this.loadStart
    
  }

  loadStart(){
    this._loader.start();
  }

  loadStop(){
    this._loader.stop();
  }

}
