/*
* File: settlements.components.ts
* Author: Sangare F. Felisha
* Copyright: 2022, Sangare F. Felisha
* Group: SZOFT II N
* Date: 2022-12-28
* Github: https://github.com/fe-ktch/Angular-latogatos
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.css']
})
export class SettlementsComponent implements OnInit {

  settlements = [
    {name: 'Görcsöny', county: 'Baranya', area: 18.52, population: 1517, populationDensity: 81.53,},
    {name: 'Mozsgó', county: 'Baranya', area: 21.76, population: 959, populationDensity: 45.77,},
    {name: 'Kétújfalu', county: 'Baranya', area: 16.3, population: 689, populationDensity: 41.77,},
    {name: 'Beremend', county:'Baranya', area: 48.26, population: 2306, populationDensity: 49.71,},
    {name: 'Sellye', county: 'Baranya', area: 25.18, population: 2448, populationDensity: 98.45,},
    {name: 'Lad', county: 'Somogy', area: 22.35, population: 572, populationDensity: 24.47,},
    {name: 'Babócsa', county: 'Somogy', area: 30.99, population: 1510, populationDensity: 48.73,},

  ]
path: any;
  constructor() { }

  ngOnInit(): void {
  }

}