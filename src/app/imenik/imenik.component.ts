import { Component, OnInit } from '@angular/core';
import { ImenikService } from '../imenik.service';

@Component({
  selector: 'app-imenik',
  templateUrl: './imenik.component.html',
  styleUrls: ['./imenik.component.css']
})
export class ImenikComponent implements OnInit {

  kontakt = { ime: '', brojTelefona: '' };
  kontakti: { ime: string; brojTelefona: string }[] = [];


  constructor(private imenikService: ImenikService) { }

  ngOnInit(): void {    
    this.ucitajKontakte();
  }


  snimi(): void {
    this.imenikService.snimiKontakt(this.kontakt);
    this.kontakt = { ime: '', brojTelefona: '' };
    this.ucitajKontakte();
  }
  obrisi(index: any): void {
    this.imenikService.obrisiKontakt(index);
    this.ucitajKontakte();
  }

  ucitajKontakte(): any {
    this.kontakti = this.imenikService.getKontakti();
  }

}
