import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isDarkMode : boolean = false;
  constructor(private service:APIService) { }

  ngOnInit(): void {
  }
  mode: string = 'dark';
  toggleMode({ value }: any) {
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
    this.service.setTheme(this.mode);
  }

}
