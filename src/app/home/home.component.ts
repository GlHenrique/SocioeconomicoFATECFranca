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
        //this.router.navigate(['/grafico']);
        //console.log(this.info.length);
        for (let i = 0; i < this.info.length; i++) {
          // console.log(this.info[i])
          console.log(this.info[i].Curso);
          console.log(this.info[i].periodo);
          console.log(this.info[i].semestre);
          console.log(this.info[i].genero);
          console.log(this.info[i].dataNascimento);
          console.log(this.info[i].estadoCivil);
          console.log(this.info[i].deficiencia);
          console.log(this.info[i].filhos);
          console.log(this.info[i].municipio);
          console.log(this.info[i].transporte);
          console.log(this.info[i].Curdomicilioso);
          console.log(this.info[i].tempoResidencia);
          console.log(this.info[i].comQuem);
          console.log(this.info[i].quantidadeFamilia);
          console.log(this.info[i].quantidadeDinheiro);
          console.log(this.info[i].internet);
          console.log(this.info[i].meiosInternet);
          console.log(this.info[i].somaRenda);
          console.log(this.info[i].escolaridadeMae);
          console.log(this.info[i].escolaridadePai);
          console.log(this.info[i].areaTrabalho);
          console.log(this.info[i].periodoTrabalho);
          console.log(this.info[i].ondeEstudou);
          console.log(this.info[i].conhecimentoInformatica);
          console.log(this.info[i].quaisAplicativos);
          console.log(this.info[i].idioma);

          // preciso alterar esses consoles acima para conforme o form

        }
      };
      fileReader.readAsArrayBuffer(this.file);
      return this.info
    } else {
      console.log('teste');
    }
  }

  




}
