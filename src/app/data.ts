export class Tempo {
  tInc = {
    name: "Tempo de Incubação",
    value: 5,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
  tInfc = {
    name: "Tempo de Infecção",
    value: 12,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
  tLeito = {
    name: "Tempo em Leito Comum",
    value: 10,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
  tUti = {
    name: "Tempo em UTI",
    value: 6,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
  tLV = {
    name: "Tempo em Leito com Ventilação Mecânica",
    value: 5,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
  tLG = {
    name: "Tempo em Leito em Estado Grave",
    value: 3,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
  tInfcGrave = {
    name: "Tempo de Infecção Grave",
    value: 3,
    min: 0,
    max: 20,
    step: 1,
    unit: "dias",
    show: true,
    visible: true,
    fixed: 0 // Quantas casas decimais devem ser apresentadas
  };
}
export interface IModel {
  count: number;
  next: number;
  previous: number;
  results: any[];
}
export class Populacao {
  saudaveis = {
    name: "População Saudável",
    value: 0,
    show: false
  };
  exposto = {
    name: "População Exposta",
    value: 0,
    show: false
  };
  infectado = {
    name: "População Infectada",
    value: 5,
    show: true
  };
  infectadoGrave = {
    name: "População Infectada em Estado Grave",
    value: 0,
    show: false
  };
  hospitalizadoLeito = {
    name: "População Hospitalizada em Leito Comum",
    value: 0,
    show: false
  };
  hospitalizadoUTI = {
    name: "População Hospitalizada em UTI",
    value: 0,
    show: false
  };
  hospitalizadoVentilador = {
    name: "População Hospitalizada em Leito com Ventilador",
    value: 0,
    show: false
  };
  hospitalizadoGrave = {
    name: "População Hospitalizada em Estado Grave",
    value: 0
  };
  mortos = {
    name: "Mortos",
    value: 0,
    show: false
  };
  curados = {
    name: "Curados",
    value: 0,
    show: false
  };
  total = {
    name: "População Total",
    value: 7000000,
    show: true
  };
}
export class Capacidade {
  leito = {
    name: "Número de leitos comuns",
    value: 850
  };
  uti = {
    name: "Número de leitos de UTI",
    value: 80
  };
  ventilador = {
    name: "Número de Ventiladores",
    value: 15
  };
}
export class Sobrevida {
  infectado = {
    name: "Probabilidade de Melhora do Infectado",
    cura: 80,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    show: true,
    morte: () => {
      return 100 - this.infectado.cura;
    },
    visible: true,
    fixed: 0
  };
  infectadoGrave = {
    name: "Probabilidade de Melhora do Infectado Grave",
    cura: 30,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    show: true,
    visible: true,
    fixed: 0,
    morte: () => {
      return 100 - this.infectadoGrave.cura;
    }
  };
  hospitalizadoLeito = {
    name: "Probabilidade de Melhora do Hospitalizado em Leito",
    cura: 60,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    show: true,
    visible: true,
    fixed: 0,
    morte: () => {
      return 100 - this.hospitalizadoLeito.cura;
    }
  };
  hospitalizadoUTI = {
    name: "Probabilidade de Melhora do Hospitalizado em Leito de UTI",
    cura: 50,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    show: true,
    visible: true,
    fixed: 0,
    morte: () => {
      return 100 - this.hospitalizadoUTI.cura;
    }
  };
  hospitalizadoVentilador = {
    name: "Probabilidade de Melhora do Hospitalizado em Leito com Ventilador",
    cura: 50,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    show: true,
    visible: true,
    fixed: 0,
    morte: () => {
      return 100 - this.hospitalizadoVentilador.cura;
    }
  };
  hospitalizadoGrave = {
    name: "Probabilidade de Melhora do Hospitalizado em estado Grave",
    cura: 5,
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
    show: true,
    visible: true,
    fixed: 0,
    morte: () => {
      return 100 - this.hospitalizadoGrave.cura;
    }
  };
}
export class Dinamica {
  delta = {
    name: "Percentual Fora da Quarentena",
    min: 0,
    max: 100,
    value: 100,
    step: 1,
    unit: "%"
  };
  r0I = {
    name: "Número de reprodução do Infectados (R0)",
    min: 0,
    max: 20,
    value: 6.3,
    step: 0.1,
    unit: "contágios"
  };
  r0G = {
    name: "Número de reprodução dos Infectados Graves (R0)",
    min: 0,
    max: 20,
    value: 2.3,
    step: 0.1,
    unit: "contágios"
  };
  // zeta = {
  //   name: "Percentual de agravamento dos Infectados",
  //   min: 0,
  //   max: 100,
  //   value: 30,
  //   step: 1,
  //   unit: "%",
  // };
  gamma = {
    name: "Percentual de procura por Hospital",
    min: 0,
    max: 100,
    value: 80,
    step: 1,
    unit: "%"
  };
  // nu = {
  //   name: "Percentual de agravamento dos hospitalizados em leito comum",
  //   min: 0,
  //   max: 100,
  //   value: 10,
  //   step: 1,
  //   unit: "%",
  // };
}
