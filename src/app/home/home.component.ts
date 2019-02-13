import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

  initializeLogin() {
    const { andelaAPIUrl, tembeaFrontEndUrl } = environment;
    const andelaAuthServiceUrl = `${andelaAPIUrl}/login?redirect_url`
    window.location.href = `${andelaAuthServiceUrl}=${tembeaFrontEndUrl}/login/redirect`;
  }
}
