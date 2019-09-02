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
  info: any;
  data: any;

  cursoADS: number = 0;
  cursoGRH: number = 0;
  cursoGPI: number = 0;
  periodo: any;
  semestre: any;
  generoM: number = 0;
  generoF : number = 0
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
        {value: this.cursoADS},
        {value: this.cursoGPI},
        {value: this.cursoGRH}
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
          console.log(this.info[i]["Gênero"]);
          switch (this.info[i]["Curso"]) {
            case "Análise e Desenvolvimento de Sistemas (ADS)":
              this.cursoADS++
              console.log(this.cursoADS);
              break;
            case "Gestão de Recursos Humanos (GRH)":
              this.cursoGRH++
              console.log(this.cursoGRH);
              break;
            case "Gestão da Produção Industrial (GPI)":
              this.cursoGPI++
              console.log(this.cursoGPI);
              break;
          }

        


          switch (this.info[i]["Gênero"]) {
            case "Masculino":
              this.generoM++;
              break;
            case "Feminino":
              this.generoF++;
            break;
          }
          // console.log(this.generoM);
          // console.log(this.generoF);
          // console.log(this.info[i]);
        }

      
        
      };
      fileReader.readAsArrayBuffer(this.file);
      return this.info
    } else {
      console.log('teste');
    }
  }






}
