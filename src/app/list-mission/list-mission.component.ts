import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuditeurService} from '../../services/auditeur.service';
import {CategorieService} from '../../services/categorie.service';
import {Auditeur} from '../../models/Auditeur';
import {Categorie} from '../../models/categorie';
import {Mission} from '../../models/Mission';
import {MissionService} from '../../services/mission.service';

@Component({
  selector: 'app-list-mission',
  templateUrl: './list-mission.component.html',
  styleUrls: ['./list-mission.component.scss']
})
export class ListMissionComponent implements OnInit {

  missions: Mission[];
  idx = '0';
  selectedMission:Mission;
  clients:String[]=["Amen Bank","Biat","Promosport"];


  constructor(private route: ActivatedRoute, private missionService: MissionService) { }

  ngOnInit() {
    this.getMissions();
  }

  getMissions(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.missionService.getMissions().subscribe(data => {
      this.missions = data;
    });
  }

  //interface d'ajout mission

  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }

  //interface detail mission
  onN(id:number) :void {
    this.missionService.getMission(id).subscribe(value => {
      this.selectedMission=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface delete mission
  ondelete(id: number): void {
    if (confirm("voulez vous supprimer cette mission ?")) {
      this.missionService.deleteMission(id);
    }
  }

  //interface update mission
  onNUpdate(id:number) :void {
    this.missionService.getMission(id).subscribe(value => {
      this.selectedMission=value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate() :void {
    document.getElementById('overlay3').style.display = 'none';
  }




}
