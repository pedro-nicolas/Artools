export interface PenProduct {
  id: string;
  code: string;
  name: string;
  material: string;
  image: string;
  utility: string;
  tip: string;
  refill?: string;
  weight: string;
  balance: string;
  price: string;
  status: string;
  dimensions: string;
  finish: string;
  mechanism: string;
  tolerance: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  inBox: string[];
}

export const products: PenProduct[] = [
  {
    id: 'AR-P1',
    code: 'AR|P1',
    name: 'Titanium Stealth Minimalist',
    material: 'Titânio Grau 5',
    image: '/assets/images/pen_stealth.jpg',
    utility: 'Ponta cerâmica de fluxo iônico para traço técnico milimétrico.',
    tip: 'Aço Inox M',
    refill: 'Rollerball G2',
    weight: '28.4 g',
    balance: '42% CG',
    price: 'R$ 1.890,00',
    status: 'Esgotado',
    dimensions: '142.5 mm × 9.8 mm',
    finish: 'Microesferas de vidro e revestimento DLC fosco',
    mechanism: 'Trava magnética de neodímio N52 com recuo hidráulico',
    tolerance: '± 0.002 mm (Aeroespacial)',
    description: 'Construída a partir de um bloco maciço de titânio aeroespacial Ti-6Al-4V usinado em 5 eixos CNC com tolerância nanométrica. Incorpora rolamentos giroscópicos internos que anulam vibrações microscópicas da mão, garantindo linha fluida ininterrupta em papel técnico de alta gramatura.',
    features: [
      {
        title: 'Mecânica Giroscópica Calibrada',
        description: 'Centro de gravidade situado exatamente a 42% do comprimento para neutralizar a fadiga muscular em sessões de desenho de alta precisão.'
      },
      {
        title: 'Ponta Cerâmica de Fluxo Iônico',
        description: 'Microesfera sinterizada a 1.600°C que desliza sem atrito mecânico, permitindo vazão contínua com qualquer inclinação da pena.'
      },
      {
        title: 'Chassi Monolítico em Titânio Ti-6Al-4V',
        description: 'Usinado a frio a partir de tarugo único com certificação aeroespacial. Imunidade completa à corrosão, choque térmico e deformações.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P1 Titanium Stealth em Titânio Grau 5',
      '1× Estojo protetor fresado em alumínio anodizado CNC',
      '3× Refis cerâmicos calibrados (0.10mm, 0.35mm, 0.50mm)',
      '1× Certificado metrológico individual assinado e numerado'
    ]
  },
  {
    id: 'AR-P2',
    code: 'AR|P2',
    name: 'Precision Ceramic White',
    material: 'Cerâmica Zircônia',
    image: '/assets/images/pen_ceramic.jpg',
    utility: 'Revestimento cerâmico de alta resistência com acabamento fosco aveludado e mecanismo retrátil hidráulico.',
    tip: 'Aço Inox M',
    refill: 'Rollerball G2',
    weight: '33.5 g',
    balance: '45% CG',
    price: 'R$ 1.290,00',
    status: 'Em Breve',
    dimensions: '144.0 mm × 10.5 mm',
    finish: 'Cerâmica de zircônia aveludada antirrisco',
    mechanism: 'Mecanismo retrátil hidráulico amortecido',
    tolerance: '± 0.001 mm',
    description: 'Chassi forjado em zircônia sinterizada a 1.500°C com toque sedoso e acabamento aveludado impecável.',
    features: [
      {
        title: 'Cerâmica de Zircônia Ultrarresistente',
        description: 'Material inerte com condutividade térmica extremamente baixa, mantendo o corpo sempre agradável.'
      },
      {
        title: 'Mecanismo Retrátil Hidráulico',
        description: 'Amortecimento por fluido que recolhe a ponta com suavidade silenciosa incomparável.'
      }
    ],
    inBox: [
      '1× Caneta mecânica Precision Ceramic White em Cerâmica Zircônia',
      '1× Estojo protetor fresado em alumínio anodizado CNC',
      '3× Refis cerâmicos calibrados Rollerball G2',
      '1× Certificado metrológico individual assinado e numerado'
    ]
  },
  {
    id: 'AR-P3',
    code: 'AR|P3',
    name: 'Obsidian Matte Black',
    material: 'Fibra de Carbono 3K',
    image: '/assets/images/pen_carbon.jpg',
    utility: 'Corpo aerodinâmico ultraleve para escrita contínua sem fadiga.',
    tip: 'Aço Inox F',
    refill: 'Rollerball G2',
    weight: '22.1 g',
    balance: '40% CG',
    price: 'R$ 1.750,00',
    status: 'Esgotado',
    dimensions: '141.0 mm × 10.2 mm',
    finish: 'Trama 3K acetinada com resina UV aeroespacial',
    mechanism: 'Botão de acionamento cerâmico com rolamento de esferas',
    tolerance: '± 0.003 mm',
    description: 'Compósito de fibra de carbono estrutural de alta densidade selado em autoclave.',
    features: [
      {
        title: 'Chassi Ultraleve em Carbono 3K',
        description: 'Redução de 35% de inércia em movimentos rápidos de caligrafia, oferecendo resposta tátil imediata.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P3 Obsidian Matte Black em Fibra 3K',
      '1× Estojo protetor em alumínio anodizado CNC',
      '3× Refis cerâmicos calibrados (0.35mm)',
      '1× Certificado metrológico individual numerado'
    ]
  },
  {
    id: 'AR-P4',
    code: 'AR|P4',
    name: 'Ceramic Chrono',
    material: 'Cerâmica Hi-Tech Zircônia',
    image: '/assets/images/pen_ceramic.jpg',
    utility: 'Isolamento térmico neutro para assinaturas nobres e caligrafia.',
    tip: '0.30 mm',
    weight: '33.5 g',
    balance: '45% CG',
    price: 'R$ 2.450,00',
    status: 'Lote 01 Esgotado — Próxima Tiragem',
    dimensions: '144.0 mm × 10.5 mm',
    finish: 'Polimento óptico com acabamento cerâmico espelhado',
    mechanism: 'Giroscópio balanceado com anel de safira sintética',
    tolerance: '± 0.001 mm',
    description: 'Chassi forjado em zircônia sinterizada a 1.500°C com dureza de 1.500 Vickers (próxima à do diamante). Toque sedoso à mão e imunidade completa a arranhões, oxidação e agentes químicos agressivos.',
    features: [
      {
        title: 'Cerâmica de Zircônia Ultrarresistente',
        description: 'Material inerte com condutividade térmica extremamente baixa, mantendo o corpo da caneta sempre à temperatura agradável.'
      },
      {
        title: 'Mecanismo de Anel de Safira',
        description: 'Contato de rolamento com gema de safira sintética para suavidade mecânica eterna.'
      },
      {
        title: 'Tolerância Centesimal',
        description: 'Encaixes medidos com precisão óptica de feixe de laser para eliminar qualquer folga perceptual.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P4 Ceramic Chrono',
      '1× Estojo de madeira nobre com encaixe usinado em alumínio',
      '3× Refis cerâmicos calibrados',
      '1× Cartão de garantia vitalícia e autenticidade'
    ]
  },
  {
    id: 'AR-P5',
    code: 'AR|P5',
    name: 'Damascus Raw',
    material: 'Aço Padrão Damasco',
    image: '/assets/images/pen_damascus.jpg',
    utility: '180 camadas forjadas para durabilidade e padrão tátil único.',
    tip: '0.40 mm',
    weight: '36.2 g',
    balance: '43% CG',
    price: 'R$ 2.890,00',
    status: 'Lote 01 Esgotado — Próxima Tiragem',
    dimensions: '142.0 mm × 10.0 mm',
    finish: 'Ataque ácido seletivo com selamento térmico a vácuo',
    mechanism: 'Clipe fresado integralmente sem parafusos externos',
    tolerance: '± 0.002 mm',
    description: 'Obra-prima de metalurgia: barra forjada manualmente intercalando 180 camadas de aços de alto carbono com revelação em banho ácido. Nenhuma peça no mundo possui o mesmo padrão visual.',
    features: [
      {
        title: '180 Camadas Forjadas a Quente',
        description: 'Dobra e compressão artesanal de metais nobres que formam ondas topográficas microscópicas sob os dedos.'
      },
      {
        title: 'Equilíbrio Substancial de 36.2g',
        description: 'Massa intencional para quem busca estabilidade gravitacional máxima em assinaturas e documentos permanentes.'
      },
      {
        title: 'Clipe Monolítico Integrado',
        description: 'Esculpido a partir do próprio corpo do metal, sem pontos de solda suscetíveis à fadiga mecânica.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P5 Damascus Raw',
      '1× Estojo protetor em alumínio anodizado',
      '3× Refis calibrados 0.40mm',
      '1× Documento de forja com mapa de camadas'
    ]
  },
  {
    id: 'AR-P6',
    code: 'AR|P6',
    name: 'Flux Silver',
    material: 'Titânio Escovado Cirúrgico',
    image: '/assets/images/pen_silver.jpg',
    utility: 'Colar hidráulico que absorve 98% da vibração no papel.',
    tip: '0.35 mm',
    weight: '29.0 g',
    balance: '42% CG',
    price: 'R$ 1.820,00',
    status: 'Lote 01 Esgotado — Próxima Tiragem',
    dimensions: '142.5 mm × 9.8 mm',
    finish: 'Escovado fino longitudinal realizado à mão',
    mechanism: 'Absorvedor hidráulico de micro-impactos',
    tolerance: '± 0.002 mm',
    description: 'Acabamento escovado longitudinal realizado artesanalmente. Possui micro-amortecedor hidráulico interno que isola oscilações no bico cerâmico, assegurando uniformidade constante de fluxo.',
    features: [
      {
        title: 'Amortecimento Fluídico Interno',
        description: 'Câmara vedada com fluido de silicone aeroespacial que suaviza variações bruscas de pressão da mão.'
      },
      {
        title: 'Titânio Puro de Grau Cirúrgico',
        description: 'Biocompatibilidade completa e resistência incomparável a solventes e desgaste por fricção.'
      },
      {
        title: 'Ponta Cerâmica de Vazão Uniforme',
        description: 'Desenvolvida para secagem ultrarrápida sem borramento em canhotos ou destros.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P6 Flux Silver',
      '1× Estojo protetor em alumínio anodizado',
      '3× Refis cerâmicos 0.35mm',
      '1× Certificado metrológico individual'
    ]
  },
  {
    id: 'AR-P7',
    code: 'AR|P7',
    name: 'Bronze Hex',
    material: 'Bronze Naval & Titânio',
    image: '/assets/images/pen_bronze.jpg',
    utility: 'Chassi hexagonal ergonômico anti-rolamento de bancada.',
    tip: '0.30 mm',
    weight: '34.0 g',
    balance: '41% CG',
    price: 'R$ 1.950,00',
    status: 'Lote 01 Esgotado — Próxima Tiragem',
    dimensions: '140.5 mm × 10.0 mm',
    finish: 'Bronze natural naval escovado com pátina viva',
    mechanism: 'Trava magnética dupla de esfera',
    tolerance: '± 0.002 mm',
    description: 'Corpo usinado em perfil hexagonal puro para repouso seguro em qualquer superfície sem risco de rolamento. A liga de bronze naval desenvolve uma pátina natural e nobre ao longo do uso do proprietário.',
    features: [
      {
        title: 'Geometria Hexagonal Anti-Rolamento',
        description: '6 faces planas que garantem estabilidade total sobre mesas inclinadas de desenho e arquitetura.'
      },
      {
        title: 'Envelhecimento Nobre com Pátina',
        description: 'Metal vivo que registra a história de uso de quem o empunha, com oxidação superficial autorregulada.'
      },
      {
        title: 'Núcleo Interno em Titânio',
        description: 'Combinação híbrida: carcaça externa em bronze e tubo estrutural interno em titânio para máxima durabilidade.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P7 Bronze Hex',
      '1× Estojo protetor em alumínio anodizado',
      '3× Refis de 0.30mm',
      '1× Flanela especial de microfibra de preservação'
    ]
  },
  {
    id: 'AR-P8',
    code: 'AR|P8',
    name: 'Skeleton Gyro',
    material: 'Chassi Esqueletizado em Titânio',
    image: '/assets/images/pen_skeleton.jpg',
    utility: 'Mecânica giroscópica visível para foco cinemático e ritmo.',
    tip: '0.25 mm',
    weight: '31.8 g',
    balance: '42% CG',
    price: 'R$ 2.650,00',
    status: 'Lote 01 Esgotado — Próxima Tiragem',
    dimensions: '143.5 mm × 10.2 mm',
    finish: 'PVD cinza chumbo com chanfros polidos à mão',
    mechanism: 'Giroscópio cinemático de triplo anel visível',
    tolerance: '± 0.0015 mm',
    description: 'Arquitetura vazada inspirada na alta relojoaria esqueleto suíça. Permite vislumbrar os movimentos internos dos micro-ímãs de retração e do reservatório pressurizado em funcionamento.',
    features: [
      {
        title: 'Arquitetura Esqueletizada Fina',
        description: 'Aberturas geométricas milimétricas que reduzem massa periférica enquanto revelam o mecanismo interno.'
      },
      {
        title: 'Anel Cinemático com Rolamento Suíço',
        description: 'Micro-rolamento de precisão que permite rotação hipnótica e suave para alívio de estresse durante a criação.'
      },
      {
        title: 'Revestimento PVD Titanium Dark',
        description: 'Deposição física de vapor que confere dureza superficial extrema e estética furtiva industrial.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P8 Skeleton Gyro',
      '1× Estojo de exposição com cúpula em acrílico óptico',
      '3× Refis calibrados ultrafinos (0.25mm)',
      '1× Certificado de montagem de relojoaria'
    ]
  },
  {
    id: 'AR-P9',
    code: 'AR|P9',
    name: 'Macro Monolith',
    material: 'Monobloco Cirúrgico 316L',
    image: '/assets/images/pen_stealth.jpg',
    utility: 'Tolerância de 0.002mm para resistência perpétua a impactos.',
    tip: '0.15 mm',
    weight: '35.2 g',
    balance: '44% CG',
    price: 'R$ 2.100,00',
    status: 'Lote 01 Esgotado — Próxima Tiragem',
    dimensions: '142.0 mm × 9.9 mm',
    finish: 'Jateado de zircônio acetinado fosco',
    mechanism: 'Tampa magnética auto-centrante de alta sucção',
    tolerance: '± 0.002 mm',
    description: 'Estrutura sólida inteiriça sem rosqueamento intermediário. Criada para resistir a condições extremas sem deformação geométrica, garantindo calibração perpétua de fábrica.',
    features: [
      {
        title: 'Monobloco Maciço sem Juntas',
        description: 'Zero parafusos e zero cola: tolerância por interferência mecânica calculada para durabilidade secular.'
      },
      {
        title: 'Traço Extrafino de 0.15mm',
        description: 'Calibre cirúrgico para anotações microscópicas, diagramas de engenharia e renderizações técnicas.'
      },
      {
        title: 'Trava Magnética com Som Harmônico',
        description: 'Encaixe de tampa acústico que emite nota pura de 820Hz ao engatar perfeitamente.'
      }
    ],
    inBox: [
      '1× Caneta Mecânica AR|P9 Macro Monolith',
      '1× Estojo protetor em alumínio anodizado',
      '3× Refis cirúrgicos 0.15mm',
      '1× Certificado metrológico individual'
    ]
  }
];
