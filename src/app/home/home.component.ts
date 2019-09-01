import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UiCookie, UiToolbarService} from 'ng-smn-ui';
import * as XLSX from 'xlsx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [UiToolbarService]
})
export class HomeComponent implements OnInit {


  menuOpen: boolean;
  title: string;
  arrayBuffer: any;
  file: File;
  data: Object;
  info: any;

  curso: any
  periodo: any;
  semestre: any;
  genero: any;
  dataNascimento: any;
  estadoCivil: any;
  deficiencia: any;
  filhos: any;
  municipio: any;
  transporte: any;
  domicilio: any;
  tempoResidencia: any;
  comQuem: any;
  quantidadeFamilia: any;
  quantidadeDinheiro: any;
  internet: any;
  meiosInternet: any;
  somaRenda: any;
  escolaridadeMae: any;
  escolaridadePai: any;
  areaTrabalho: any;
  periodoTrabalho: any;
  ondeEstudou: any;
  conhecimentoInformatica: any;
  quaisAplicativos: any;
  idioma: any;
  estudouFatec: any;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.title = 'Home';

    this.menuOpen = false;

    const isNavDrawerPersistent = UiCookie.get('NavDrawerPersistent') === 'true';

    if (isNavDrawerPersistent) {
      this.menuOpen = true;
    }

    this.data = {
      chart: { },
      data: [
        {value: 500},
        {value: 600},
        {value: 700}
      ]
    };
  }

  insertFile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    if (this.file !== undefined) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        const data = new Uint8Array(this.arrayBuffer);
        const arr = new Array();
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, {type: 'binary'});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        this.info = XLSX.utils.sheet_to_json(worksheet, {raw: true});
        console.log(this.info)
        // this.router.navigate(['/grafico']);
        for (let i = 0; i < this.info.length; i++) {
          // console.log(this.info[i]["Curso"])
          console.log(this.info[i]["Gênero"])
        }
      };
      fileReader.readAsArrayBuffer(this.file);
      return this.info
    } else {
      console.log('teste');
    }
  }






}
