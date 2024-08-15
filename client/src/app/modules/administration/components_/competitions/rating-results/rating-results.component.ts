import { Component, Inject, OnInit } from '@angular/core';
import { Result } from '../../../models/Result';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminCompetitionsService } from '../../../services/admin-competitions.service';
import { GResult } from '../../../models/GetResult';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MessageService } from 'src/shared/message.service';

@Component({
  selector: 'app-rating-results',
  templateUrl: './rating-results.component.html',
  styleUrls: ['./rating-results.component.scss']
})
export class RatingResultsComponent implements OnInit {

  isLocked: boolean | undefined = false
  currentResults: GResult = new GResult()

  // JEBU SA VALIDATORY, NEMAM NA TO NERVY, FIXNUT LATER

  public results = new FormGroup({
    time: new FormControl("00:00", [Validators.required]),
    timeLimit: new FormControl("00:00", [Validators.required]),
    l: new FormControl(0, [Validators.pattern(new RegExp('^[0-5]?$'))]),
    z: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    koliska: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    plachta: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    stvorec: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    cuvanie_Medzi_Kavaletami: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    lavicka_Vyssia: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    mostik_Najazdova_Rampa: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    slalom: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    stuzky: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    nizky_Podjazd: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    skok: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    lano_Branicka: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    uzka_Ulicka_Zvonec: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    kosik_Preniest_Krcah: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    kavalety_4_ks: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    technicky_Prekrok: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    labyrint: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    zastavenie_Cuvanie_Pri_Kuzelke: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    skok_50cm: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    sud_Kavaleta: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    tah_Vreca: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    fit_Lopta: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
    paleta_Statie: new FormControl(0, [Validators.maxLength(1), Validators.pattern(new RegExp('^[0-5]?$'))]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {
      competitionId: number,
      riderId: number,
      horseId: number | undefined,
      isLocked: boolean | undefined
    },
    private competitionService: AdminCompetitionsService, private dialog : MatDialog, private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.competitionService.getUserResult(this.data.riderId, this.data.competitionId).subscribe({
      next: response => {
        console.log(response)
        this.currentResults = response
        this.patchFormValues();
      }, complete: () => {
        this.isLocked = this.data.isLocked
      }
    }
    )
  }
  patchFormValues() {
    this.results.patchValue({
      time: this.currentResults.time,
      timeLimit: this.currentResults.timeLimit,
      l: this.currentResults.pointsAtObstacles.l,
      z: this.currentResults.pointsAtObstacles.z,
      koliska: this.currentResults.pointsAtObstacles.koliska,
      plachta: this.currentResults.pointsAtObstacles.plachta,
      stvorec: this.currentResults.pointsAtObstacles.stvorec,
      cuvanie_Medzi_Kavaletami: this.currentResults.pointsAtObstacles.cuvanie_Medzi_Kavaletami,
      lavicka_Vyssia: this.currentResults.pointsAtObstacles.lavicka_Vyssia,
      mostik_Najazdova_Rampa: this.currentResults.pointsAtObstacles.mostik_Najazdova_Rampa,
      slalom: this.currentResults.pointsAtObstacles.slalom,
      stuzky: this.currentResults.pointsAtObstacles.stuzky,
      nizky_Podjazd: this.currentResults.pointsAtObstacles.nizky_Podjazd,
      skok: this.currentResults.pointsAtObstacles.skok,
      lano_Branicka: this.currentResults.pointsAtObstacles.lano_Branicka,
      uzka_Ulicka_Zvonec: this.currentResults.pointsAtObstacles.uzka_Ulicka_Zvonec,
      kosik_Preniest_Krcah: this.currentResults.pointsAtObstacles.kosik_Preniest_Krcah,
      kavalety_4_ks: this.currentResults.pointsAtObstacles.kavalety_4_ks,
      technicky_Prekrok: this.currentResults.pointsAtObstacles.technicky_Prekrok,
      labyrint: this.currentResults.pointsAtObstacles.labyrint,
      zastavenie_Cuvanie_Pri_Kuzelke: this.currentResults.pointsAtObstacles.zastavenie_Cuvanie_Pri_Kuzelke,
      skok_50cm: this.currentResults.pointsAtObstacles.skok_50cm,
      sud_Kavaleta: this.currentResults.pointsAtObstacles.sud_Kavaleta,
      tah_Vreca: this.currentResults.pointsAtObstacles.tah_Vreca,
      fit_Lopta: this.currentResults.pointsAtObstacles.fit_Lopta,
      paleta_Statie: this.currentResults.pointsAtObstacles.paleta_Statie,
    })
  }

  public createResult() {
    let result = new Result()

    result.time = this.results.get("time")?.value as string
    result.l = this.results.get("l")?.value as number
    result.z = this.results.get("z")?.value as number
    result.koliska = this.results.get("koliska")?.value as number
    result.plachta = this.results.get("plachta")?.value as number
    result.stvorec = this.results.get("stvorec")?.value as number
    result.cuvanie_Medzi_Kavaletami = this.results.get("cuvanie_Medzi_Kavaletami")?.value as number
    result.lavicka_Vyssia = this.results.get("lavicka_Vyssia")?.value as number
    result.mostik_Najazdova_Rampa = this.results.get("mostik_Najazdova_Rampa")?.value as number
    result.slalom = this.results.get("slalom")?.value as number
    result.stuzky = this.results.get("stuzky")?.value as number
    result.nizky_Podjazd = this.results.get("nizky_Podjazd")?.value as number
    result.skok = this.results.get("skok")?.value as number
    result.lano_Branicka = this.results.get("lano_Branicka")?.value as number
    result.uzka_Ulicka_Zvonec = this.results.get("uzka_Ulicka_Zvonec")?.value as number
    result.kosik_Preniest_Krcah = this.results.get("kosik_Preniest_Krcah")?.value as number
    result.kavalety_4_ks = this.results.get("kavalety_4_ks")?.value as number
    result.technicky_Prekrok = this.results.get("technicky_Prekrok")?.value as number
    result.labyrint = this.results.get("labyrint")?.value as number
    result.zastavenie_Cuvanie_Pri_Kuzelke = this.results.get("zastavenie_Cuvanie_Pri_Kuzelke")?.value as number
    result.skok_50cm = this.results.get("skok_50cm")?.value as number
    result.sud_Kavaleta = this.results.get("sud_Kavaleta")?.value as number
    result.tah_Vreca = this.results.get("tah_Vreca")?.value as number
    result.fit_Lopta = this.results.get("fit_Lopta")?.value as number
    result.paleta_Statie = this.results.get("paleta_Statie")?.value as number
    result.timeLimit = this.results.get("timeLimit")?.value as string
    result.countTotalPoints()


    result.competitionId = this.data.competitionId
    if (this.data.horseId === undefined)
      result.horseId = 0
    else
      result.horseId = this.data.horseId as number

    this.competitionService.createResult(this.data.riderId, result).subscribe(
      {
        error: err => console.error(err)
      }
    )
  }

  hasInvalidValues(form: FormGroup): boolean {
    for (let control in form.controls) {
      if (form.get(control)?.value > 5) {
        return true;
      }
    }
    return false;
  }

  Confirm(){
     if (this.results.invalid) {
      this.messageService.message('Niektoré hodnoty prekračujú limit 5. Prosím, opravte ich.');
      return;
     }


    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: 'Potvrdenie zmeny',
        text: `Naozaj chcete vykonať túto zmenu? Po uložení už nebude možné zmeniť bodovanie pre daneho jazdca.`
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createResult()
      }
    })
  }
}
