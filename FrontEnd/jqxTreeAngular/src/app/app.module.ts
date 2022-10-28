import { VersionService } from './components/version.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, jqxTreeModule, HttpClientModule],
  providers: [VersionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
