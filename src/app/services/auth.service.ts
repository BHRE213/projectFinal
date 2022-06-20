import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(_value: string | null, value: string | null) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
