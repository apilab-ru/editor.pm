import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'q';
// import { WorkerAppModule } from '@angular/platform-webworker';

interface EventResponse {
  stat: boolean;
  client: any;
}

@Injectable()
export class EventsService {

  // public worker: Worker;

  // private connect = false;

  constructor(private http: HttpClient) {
    // this.worker = new Worker('worker.js');
  }


  pool() {
    return Promise((resolve, reject) => {
      this.connect(data => {
        resolve( data);
      });
    });
  }

  connect( callback ) {
    this.http.get<EventResponse>('events/read/').subscribe( data => {
      if (data.stat) {
        callback(data);
      }else {
        // console.log('no data', data);
        this.connect(callback);
      }
    });
  }

}
