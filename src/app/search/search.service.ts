import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  async getUsers(): Promise<any> {
    try {
      const response = await this.http.get('https://dummyjson.com/users').toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async getUserByName(name: string): Promise<any> {
    try {
      const response = await this.http.get(`https://dummyjson.com/users/search?q=${name}`).toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching user by name:', error);
      throw error;
    }
  }

}
