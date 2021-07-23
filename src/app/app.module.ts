import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, UsersComponent, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
