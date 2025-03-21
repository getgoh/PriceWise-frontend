import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchQuery: string;
  searchResults: any;
  searchService: SearchService = inject(SearchService);

  constructor() { 
    this.searchQuery = '';
    this.searchResults = [];
  }

  async searchUsers() {
    console.log('test');
    try {
      await this.searchService.getUserByName(this.searchQuery).then((response) => {
        this.searchResults = response.users;
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

}
