import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImenikService {
  private key = 'kontakti'; // kljuc po kojem pretrazujemo localstorage i po kojem pristupamo memoriji


  snimiKontakt(contact: { ime: string; brojTelefona: string }) {
    const kontakti = this.getKontakti();
    kontakti.push(contact);
    localStorage.setItem(this.key, JSON.stringify(kontakti));
  }

  getKontakti() {
    const contacts = localStorage.getItem(this.key);
    return contacts ? JSON.parse(contacts) : [];
  }

  obrisiKontakt(index: number): void {
    let kontakti = this.getKontakti();
    kontakti.splice(index, 1); 
    localStorage.setItem(this.key, JSON.stringify(kontakti));
  }

}
