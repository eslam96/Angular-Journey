import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = Math.random() > 0.5 ? 'online': 'offline';

  constructor() {}

  ngOnInit(): void {}

  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus == 'online' ? "#0B5ED7" : '#f00';
  }
}
