import { Component, OnInit } from '@angular/core';

type objSocio = {
  nombre?: string;
  img?: string;
  cargo?: string;
  descrip?: string;
  experi?: string;
};

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css'],
})
export class SociosComponent implements OnInit {
  listSocios: objSocio[] = [];

  constructor() {
    this.listSocios = [
      {
        nombre: 'Danny H. Delgado Lugmaña',
        img: '../../../assets/images/socios/CEO.png',
        cargo: 'Socio Fundador',
        descrip:
          'Dirige la práctica corporativa y transaccional de la firma y se dedica principalmente asesorar a nuestros clientes en asuntos contables, tributarios y financieros. Gran parte de su experiencia profesional está relacionada con la contabilidad de Grandes Grupos Económicos y Pymes, especialmente en sectores agrícola, acuícola, industrial, comercial y de servicios.',
        experi:
          'Cuenta con Maestría en Contabilidad y Finanzas (c) (ESAI – UEES); Ingeniero en Contabilidad y Auditoría – CPA Universidad Laica Vicente Rocafuerte de Guayaquil; Programa de Perito Tributario Avanzado (UEES); Diplomado en NIIF (ESAI – UEES); Certificado Internacional en NIIF para las PyMEs en Escuela Internacional de Auditoría y NIIF (EIAN) Santa Cruz de la Sierra – Bolivia; Certificado Internacional en NIA en la Asociación Interamericana de Contabilidad (AIC), más la suma de cientos de horas en cursos de diversas ramas dentro y fuera del país.',
      },
      {
        nombre: 'Daniela Laborde Torres',
        img: '../../../assets/images/socios/danielaLaborde.jpeg',
        cargo: 'Asociado',
        descrip:
          'Cuenta con la experiencia y experticia en las áreas de auditoría externa e interna, durante su trayectoria profesional ha participado en Auditorías Financieras y Tributarias, Diseño e implementación de políticas y procedimientos, Evaluación del control interno, Análisis y prevención de riesgos, Diseño de matrices de riesgos, Informe de prevención de lavado de activos, Diseño de Manuales de prevención de lavado de activos e Informes de procedimientos previamente convenidos.',
        experi:
          'Cuenta con Maestría en Alta Dirección de la Universidad Rey Juan Carlos (España); Ingeniera en Contabilidad y Auditoría de la Universidad Laica Vicente Rocafuerte de Guayaquil; Certificada en Auditoría Internacional por el ACCA; Auditora externa calificada por la Superintendencia de Compañías, Valores y Seguros; Certificación en ISO 31000 Risk Manager.',
      },
      {
        nombre: 'Ricardo Cevallos Albornoz',
        img: '../../../assets/images/socios/RicardoCevallos.jpeg',
        cargo: 'Asociado',
        descrip:
          'Profesional experto en costos, su trayectoria profesional se encuentra relacionada con compañías del sector industrial agrícola y sus derivados, camaronera y electrónica, participando en actividades de Auditoría de Costos, Gestión y Control de la Producción, Implementación de Sistemas de Costeo por Procesos y Ordenes de Trabajo, Análisis de Costos Unitarios, Determinación de Costos Estándares, Formulación y Evaluación de proyectos de inversión, Elaboración y Control de Presupuestos, Reingeniería de Procesos y Análisis de Precios.',
        experi:
          'Cuenta con Maestría en Finanzas y Economía empresarial en la Universidad Católica Santiago de Guayaquil; Ingeniero en Contabilidad y Auditoría, Universidad Católica de Santiago de Guayaquil; Economista en la Universidad de Guayaquil.',
      },
      {
        nombre: 'Dionicio Tigua Lucas',
        img: '../../../assets/images/socios/DionicioTigua.jpeg',
        cargo: 'Asociado',
        descrip:
          'Admitido en la práctica de la abogacía en Ecuador desde el año 2009. Gran parte de su ejercicio profesional lo ha dedicado a la Asesoría Jurídica Societaria y en Propiedad Intelectual, para diversas compañías de ámbito privado.',
        experi:
          'Cuenta con estudios de Abogado de los Tribunales y Juzgados de la República Ecuador, en la Universidad de Guayaquil; Certificación en Derechos Humanos y Derecho Ambiental por la Universidad de Guayaquil, Certificación en Ciencias Penales y Criminología en el Instituto Latinoamericano.',
      },
    ];
  }

  ngOnInit(): void {}
}
