import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private idSource = new BehaviorSubject<number | null>(null);
  currentId = this.idSource.asObservable();

  setId(id: number) {
    this.idSource.next(id);
  }
}
