import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { AppComponent } from './app.component';
import { BitcoinHeaderComponent } from './components/bitcoin-header/bitcoin-header.component';
import { CryptoService } from './services/crypto.service';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinHeaderComponent,
    CryptoTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
