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
  generoF: number = 0;
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
  meioSalario = 0;
  meioSalarioADoisSalarios = 0;
  doisSalariosATresSalarios = 0;
  tresSalariosACincoSalarios = 0;
  cincoSalariosADezSalarios = 0;
  dezSalariosADezesseteSalarios = 0;
  acimaDezesseteSalarios = 0;
  maeNuncaEstudouENaoSabeLer = 0;
  maeNuncaEstudouMasSabeLer = 0;
  maePrimarioIncompleto = 0;
  maePrimarioCompletoGinasialIncompleto = 0;
  maeGinasialCompletoColegialIncompleto = 0;
  maeColegialCompleto = 0;
  maeUniversitarioIncompleto = 0;
  maeUniversitarioCompleto = 0;

  paiNuncaEstudouENaoSabeLer = 0;
  paiNuncaEstudouMasSabeLer = 0;
  paiPrimarioIncompleto = 0;
  paiPrimarioCompletoGinasialIncompleto = 0;
  paiGinasialCompletoColegialIncompleto = 0;
  paiColegialCompleto = 0;
  paiUniversitarioIncompleto = 0;
  paiUniversitarioCompleto = 0;
  nuncaTrabalhei = 0;
  desempregadoMasJaTrabalheiNaArea = 0;
  trabalhoNaArea = 0;
  trabalhoForaDaArea = 0;
  desempregadoENuncaTrabalheiNaArea = 0;
  manhaOuTarde = 0;
  manhaETarde = 0;
  noite = 0;
  regimeDeTurnos = 0;
  variavel = 0;
  integralmenteEscolaPublica = 0;
  integralmenteEscolaParticular = 0;
  maiorParteEscolaPublica = 0;
  maiorParteEscolaParticular = 0;
  tenhoConhecimentoInformatica = 0;
  naoTenhoConhecimentoInformatica = 0;
  faloIngles = 0;
  faloEspanhol = 0;
  faloInglesEEspanhol = 0;
  jaEstudei = 0;
  naoEstudei = 0;


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
        console.log(this.info);
        // this.router.navigate(['/grafico']);
        for (let i = 0; i < this.info.length; i++) {

          switch (this.info[i].Curso) {
            case 'Análise e Desenvolvimento de Sistemas (ADS)':
              this.cursoADS++;
              break;
            case 'Gestão de Recursos Humanos (GRH)':
              this.cursoGRH++;
              break;
            case 'Gestão da Produção Industrial (GPI)':
              this.cursoGPI++;
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

          switch (this.info[i]['Semestre (Ciclo)']) {
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
          switch (this.info[i]['Estado Civil']) {
            case 'Solteiro':
              this.solteiro++;
              break;
            case 'Casado':
              this.casado++;
              break;
            case 'Separado':
              this.separado++;
              break;
            case 'Divorciado':
              this.divorciado++;
              break;
            case 'Viúvo':
              this.viuvo++;
              break;
            default:
              this.uniaoEstavel++;

          }

          switch (this.info[i]['Você é portador de Deficiências?']) {
            case 'Não':
              this.deficiencia++;
              break;
          }

          switch (this.info[i]['Quantos filhos você possui?']) {
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
              this.maisDeQuatroFilhos++;
          }

          switch (this.info[i]['Município de residência']) {
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

          switch (this.info[i]['Normalmente, como você vai para a Faculdade?']) {
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
              this.carona++;
              break;
            case 'Carro próprio':
              this.carroProprio++;
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

          switch (this.info[i]['Situação do domicílio onde mora.']) {
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

          switch (this.info[i]['Há aproximadamente quanto tempo você reside neste domicílio?']) {
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

          switch (this.info[i]['Com quem você mora?']) {
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

          switch (this.info[i]['Quantas pessoas compõem seu núcleo familiar, incluindo você?']) {
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

          switch (this.info[i]['Você possui acesso a internet em sua residencia']) {
            case 'Sim':
              this.tenhoInternet++;
              break;
            case 'Não':
              this.naoTenhoInternet++;
              break;
          }

          switch (this.info[i]['Qual é a soma da renda familiar, das pessoas de sua residência?']) {
            case 'Até 1/2 sálario mínimo':
              this.meioSalario++;
              break;
            case 'De 1/2 salário minimo a 2 salários mínimos':
              this.meioSalarioADoisSalarios++;
              break;
            case 'De 2 salário minimo a 3 salários mínimos':
              this.doisSalariosATresSalarios++;
              break;
            case 'De 3 salário minimo a 5 salários mínimos':
              this.tresSalariosACincoSalarios++;
              break;
            case 'De 5 salário minimo a 10 salários mínimos':
              this.cincoSalariosADezSalarios++;
              break;
            case 'De 10 salário minimo a 17 salários mínimos':
              this.dezSalariosADezesseteSalarios++;
              break;
            case 'Acima de 17 salários mínimos':
              this.acimaDezesseteSalarios++;
              break;
          }

          switch (this.info[i]['Qual o nível de escolaridade de sua mãe?']) {

            case 'Nunca estudou e não sabe ler e escrever':
              this.maeNuncaEstudouENaoSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.maeNuncaEstudouMasSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.maeNuncaEstudouMasSabeLer++;
              break;
            case 'Primário incompleto':
              this.maePrimarioIncompleto++;
              break;
            case 'Primário completo/ginasial incompleto':
              this.maePrimarioCompletoGinasialIncompleto++;
              break;
            case 'Ginasial completo/colegial incompleto':
              this.maeGinasialCompletoColegialIncompleto++;
              break;
            case 'Colegial completo':
              this.maeColegialCompleto++;
              break;
            case 'Universitário incompleto':
              this.maeUniversitarioIncompleto++;
              break;
            case 'Universitário completo':
              this.maeUniversitarioCompleto++;
              break;
          }
          switch (this.info[i]['Qual o nível de escolaridade de seu pai?']) {
            case 'Nunca estudou e não sabe ler e escrever':
              this.paiNuncaEstudouENaoSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.paiNuncaEstudouMasSabeLer++;
              break;
            case 'Nunca estudou, mas sabe ler e escrever':
              this.paiNuncaEstudouMasSabeLer++;
              break;
            case 'Primário incompleto':
              this.paiPrimarioIncompleto++;
              break;
            case 'Primário completo/ginasial incompleto':
              this.paiPrimarioCompletoGinasialIncompleto++;
              break;
            case 'Ginasial completo/colegial incompleto':
              this.paiGinasialCompletoColegialIncompleto++;
              break;
            case 'Colegial completo':
              this.paiColegialCompleto++;
              break;
            case 'Universitário incompleto':
              this.paiUniversitarioIncompleto++;
              break;
            case 'Universitário completo':
              this.paiUniversitarioCompleto++;
              break;
          }

          switch (this.info[i]['Atualmente, em que área você trabalha?']) {
            case 'Nunca trabalhei':
              this.nuncaTrabalhei++;
              break;
            case 'Estou desempregado(a), mas já trabalhei na área do curso que escolhi':
              this.desempregadoMasJaTrabalheiNaArea++;
              break;
            case 'Trabalho na área do curso que escolhi':
              this.trabalhoNaArea++;
              break;
            case 'Trabalho fora da área do curso que escolhi':
              this.trabalhoForaDaArea++;
              break;
            case 'Estou desempregado(a) e nunca trabalhei na área do curso que escolhi':
              this.desempregadoENuncaTrabalheiNaArea++;
              break;

          }

          switch (this.info[i]['Se você trabalha, qual o período?']) {
            case 'Manhã ou tarde':
              this.manhaOuTarde++;
              break;
            case 'Manhã e tarde (integral)':
              this.manhaETarde++;
              break;
            case 'Noite':
              this.noite++;
              break;
            case 'Regime de turnos':
              this.regimeDeTurnos++;
              break;
            case 'Variável':
              this.variavel++;
              break;
          }

          switch (this.info[i]['Durante sua vida escolar, você estudou:']) {
            case 'Integralmente em escola pública federal, estadual ou municipal':
              this.integralmenteEscolaPublica++;
              break;
            case 'Integralmente em escola particular':
              this.integralmenteEscolaParticular++;
              break;
            case 'Maior parte em escola pública':
              this.maiorParteEscolaPublica++;
              break;
            case 'Maior parte em escola particular':
              this.maiorParteEscolaParticular++;
              break;
          }

          switch (this.info[i]['Tem conhecimentos de informática?']) {
            case 'Sim':
              this.tenhoConhecimentoInformatica++;
              break;
            case 'Não':
              this.naoTenhoConhecimentoInformatica++;
              break;
          }

          switch (this.info[i]['Tem conhecimento básico em algum idioma além do Português? Qual(is)?']) {
            case 'Inglês;':
              this.faloIngles++;
              break;
            case 'Espanhol;':
              this.faloEspanhol++;
              break;
            case 'Inglês; Espanhol':
              this.faloInglesEEspanhol++;
              break;
          }

          switch (this.info[i]['Você já estudou na FATEC Franca?']) {
            case 'Sim':
              this.jaEstudei++;
              break;
              case 'Não':
              this.naoEstudei++;
              break;
          }


        }
        console.log(this.periodoMatutino);
        console.log(this.periodoNoturno);




      };
      fileReader.readAsArrayBuffer(this.file);
      return this.info;
    } else {
      console.log('teste');
    }
  }


}
