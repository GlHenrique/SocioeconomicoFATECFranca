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
  generoF: number = 0
  dataNacimento: any;
  estadoCivil: any;
  deficiencia = 0;
  filhos: any;
  municipio: any;
  transporte: any;
  domicilio: any;
  tempoResidencia: any;
  comQuem: any;
  quantdataNacimentoFamilia: any;
  quantdataNacimentoDinheiro: any;
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
  periodoMatutino = 0;
  periodoNoturno = 0;
  ciclo1 = 0;
  ciclo2 = 0;
  ciclo3 = 0;
  ciclo4 = 0;
  ciclo5 = 0;
  ciclo6 = 0;
  datasDeNascimento = [];
  today = new Date().getFullYear();
  ate18 = 0;
  ate30 = 0;
  acima30 = 0;
  idade: {};
  solteiro = 0;
  casado = 0;
  separado = 0;
  divorciado = 0;
  viuvo = 0;
  uniaoEstavel = 0;
  zeroFilhos = 0;
  umFilho = 0;
  doisFilhos = 0;
  tresFilhos = 0;
  quatroFilhos = 0;
  maisDeQuatroFilhos = 0;
  franca = 0;
  cristaisPaulista = 0;
  ibiraci = 0;
  nuporanga = 0;
  orlandia = 0;
  patrocinioPaulista = 0;
  pedregulho = 0;
  ribeiraoCorrente = 0;
  saoJoseDaBelaVista = 0;
  restinga = 0;
  aplicativoTransporte = 0;
  aPe = 0;
  bicicleta = 0;
  carona = 0;
  carroProprio = 0;
  motoPropria = 0;
  onibus = 0;
  vanEscolar = 0;
  alugado = 0;
  arrendado = 0;
  cedido = 0;
  financiado = 0;
  imovelProprio = 0;
  menosUmAno = 0;
  aproximadamenteUmAno = 0;
  aproximadamenteDoisAnos = 0;
  aproximadamenteTresAnos = 0;
  aproximadamenteQuatroAnos = 0;
  aproximadamenteCincoAnos = 0;
  sozinho = 0;
  comMinhaFamilia = 0;
  comFamiliaCompanheiro = 0;
  comEsposo = 0;
  emAbrigo = 0;
  umaPessoa = 0;
  tresPessoas = 0;
  quatroPessoas = 0;
  cincoPessoas = 0;
  umaPessoaExercem = 0;
  tresPessoasExercem = 0;
  cincoPessoasExercem = 0;
  tenhoInternet = 0;
  naoTenhoInternet = 0;

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
      chart: {},
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
        const workbook = XLSX.read(bstr, {type: 'binary', cellDates: true});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        this.info = XLSX.utils.sheet_to_json(worksheet, {raw: true});
        console.log(this.info)
        // this.router.navigate(['/grafico']);
        for (let i = 0; i < this.info.length; i++) {

          switch (this.info[i].Curso) {
            case 'Análise e Desenvolvimento de Sistemas (ADS)':
              this.cursoADS++
              break;
            case 'Gestão de Recursos Humanos (GRH)':
              this.cursoGRH++
              break;
            case 'Gestão da Produção Industrial (GPI)':
              this.cursoGPI++
              break;
          }

          switch (this.info[i].Período) {
            case 'Matutino':
              this.periodoMatutino++;
              break;
            case 'Noturno':
              this.periodoNoturno++;
              break;
          }

          switch (this.info[i]["Semestre (Ciclo)"]) {
            case '1º Ciclo':
              this.ciclo1++;
              break;
            case '2º Ciclo':
              this.ciclo2++;
              break;
            case '3º Ciclo':
              this.ciclo3++;
              break;
            case '4º Ciclo':
              this.ciclo4++;
              break;
            case '5º Ciclo':
              this.ciclo5++;
              break;
            case '6º Ciclo':
              this.ciclo6++;
              break;
          }

          switch (this.info[i].Gênero) {
            case 'Masculino':
              this.generoM++;
              break;
            case 'Feminino':
              this.generoF++;
              break;
          }
          // this.dataNacimento = new Date(this.info[i]['Data de Nascimento'])
          // this.datasDeNascimento.push(this.dataNacimento.getFullYear()),
          //   // console.log(this.today);
          //   //console.log(this.datasDeNascimento);
          // () => {
          //   this.idade = this.today - this.datasDeNascimento[i];
          //   switch (this.idade) {
          //     case  this.idade <= 18:
          //       this.ate18++
          //       break;
          //     case this.idade > 18 && this.idade <= 30:
          //       this.ate30++
          //     default:
          //       this.acima30++;
          //   }
          // }
          switch (this.info[i]["Estado Civil"]) {
            case 'Solteiro':
              this.solteiro++
              break;
            case 'Casado':
              this.casado++
              break;
            case 'Separado':
              this.separado++;
              break;
            case 'Divorciado':
              this.divorciado++
              break;
            case 'Viúvo':
              this.viuvo++
              break;
            default:
              this.uniaoEstavel++;

          }

          switch (this.info[i]["Você é portador de Deficiências?"]) {
            case 'Não':
              this.deficiencia++;
              break;
          }

          switch (this.info[i]["Quantos filhos você possui?"]) {
            case 'Nenhum':
              this.zeroFilhos++;
              break;
            case '1':
              this.umFilho++;
              break;
            case '2':
              this.doisFilhos++;
              break;
            case '3':
              this.tresFilhos++;
              break;
            case '4':
              this.quatroFilhos++;
              break;
            default:
              this.maisDeQuatroFilhos++
          }

          switch (this.info[i]["Município de residência"]) {
            case 'Franca':
              this.franca++;
              break;
            case 'Cristais Paulista':
              this.cristaisPaulista++;
              break;
            case 'Ibiraci':
              this.ibiraci++;
              break;
            case 'Nuporanga':
              this.nuporanga++;
              break;
            case 'Orlandia':
              this.orlandia++;
              break;
            case 'Patrocínio Paulista':
              this.patrocinioPaulista++;
              break;
            case 'Pedregulho':
              this.pedregulho++;
              break;
            case 'Ribeirão Corrente':
              this.ribeiraoCorrente++;
              break;
            case 'São José da Bela Vista':
              this.saoJoseDaBelaVista++;
              break;
            case 'Restinga':
              this.restinga++;
              break;

          }

          switch (this.info[i]["Normalmente, como você vai para a Faculdade?"]) {
            case 'Aplicativo de transporte (Ex.: Uber, 99 Táxi, Lift)':
              this.aplicativoTransporte++;
              break;
            case 'A pé':
              this.aPe++;
              break;
            case 'Bicicleta':
              this.bicicleta++;
              break;
            case 'Carona':
              this.carona++
              break;
            case 'Carro próprio':
              this.carroProprio++
              break;
            case 'Moto própria':
              this.motoPropria++;
              break;
            case 'Ônibus':
              this.onibus++;
              break;
            case 'Van escolar':
              this.vanEscolar++;
              break;
          }

          switch (this.info[i]["Situação do domicílio onde mora."]) {
            case 'Alugado':
              this.alugado++;
              break;
            case 'Arrendado':
              this.arrendado++;
              break;
            case 'Cedido':
              this.cedido++;
              break;
            case 'Financiado':
              this.financiado++;
              break;
            case 'Próprio':
              this.imovelProprio++;
              break;
          }

          switch (this.info[i]["Há aproximadamente quanto tempo você reside neste domicílio?"]) {
            case 'Menos de 1 ano':
              this.menosUmAno++;
              break;
            case '1 ano':
              this.aproximadamenteUmAno++;
              break;
            case '2 anos':
              this.aproximadamenteDoisAnos++;
              break;
            case '3 anos':
              this.aproximadamenteTresAnos++;
              break;
            case '4 anos':
              this.aproximadamenteQuatroAnos++;
              break;
            case '5 anos ou mais':
              this.aproximadamenteCincoAnos++;
              break;
          }

          switch (this.info[i]["Com quem você mora?"]) {
            case 'Sozinho(a)':
              this.sozinho++;
              break;
            case 'Com minha família (pais e/ou parentes)':
              this.comMinhaFamilia++;
              break;
            case 'Com a família do(a) esposo(a), ou companheiro(a)':
              this.comFamiliaCompanheiro++;
              break;
            case 'Com o(a) esposo(a), companheiro(a)':
              this.comEsposo++;
              break;
            case 'Em abrigo ou equivalente':
              this.emAbrigo++;
              break;

          }

          switch (this.info[i]["Quantas pessoas compõem seu núcleo familiar, incluindo você?"]) {
            case '1':
              this.umaPessoa++;
              break;
            case '2':
              this.umaPessoa++;
              break;
            case '3':
              this.tresPessoas++;
              break;
            case '4':
              this.quatroPessoas++;
              break;
            case '5':
              this.cincoPessoas++;
              break;
          }

          switch (this.info[i]['Quantas pessoas de sua família, incluindo você, exercem atividade remunerada?']) {
            case '1':
              this.umaPessoaExercem++;
              break;
            case '2':
              this.umaPessoaExercem++;
              break;
            case '3':
              this.tresPessoasExercem++;
              break;
            case '4':
              this.tresPessoasExercem++;
              break;
            case '5':
              this.cincoPessoasExercem++;
              break;

          }

          switch (this.info[i]["Você possui acesso a internet em sua residencia"]) {
            case 'Sim':
              this.tenhoInternet++;
              break;
            case 'Não':
              this.naoTenhoInternet++;
              break;
          }





        }


      };
      fileReader.readAsArrayBuffer(this.file);
      return this.info;
    } else {
      console.log('teste');
    }
  }


}
