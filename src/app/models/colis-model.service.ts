import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Colis {
  // à décommenter
/*
  depart: string;
  destination: string;
  nameVoyageur: string;
  dateDepart: string;
  disponibleForBooking: boolean;
  idReservation: string;
  idTrajet: string;
  idVoyageur: string;
  numero: number;
  poidsDisponible: number;
  prixParKilo: number;
  prixTotal: number;
  heureDepart: string;

  constructor(){}
*/


  photo: string;
  synopsis: string;
  constructor(public title: string, public author: string) {
  }
}
