export interface ConstructionPackage {
  id: string;
  name: string;
  rate: number; // per sq.ft
  rateFormatted: string;
  tagline: string;
  isPopular?: boolean;
  steel: string;
  cement: string;
  sandAggregates: string;
  flooring: string;
  doorsWindows: string;
  kitchenBath: string;
  electricalPlumbing: string;
  paintingFinishes: string;
  keyHighlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  scope: string[];
  specs: string;
  badge: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential Villas' | 'Modern Independent Houses' | 'Commercial Buildings' | 'CC Roads' | 'Drainage Works' | 'Bridges and Culverts' | 'Infrastructure Development';
  location: string;
  areaOrLength: string;
  scope: string;
  completionYear: string;
  image: string;
  features: string[];
}

export const PHOTO_ASSETS = {
  mdPhoto: '/assets/aistudio/IMG_20250911_182104_02a6c3ee.png',
  ccRoad: '/assets/aistudio/cc-road-contract_27d13855.jpg',
  drainage: '/assets/aistudio/5-Important-Tips-to-Design-Drainage-System-1_15ae1cd0.jpg',
  culvertsBridges: '/assets/aistudio/images_190f6434.jpg',
  heroVilla3d: '/src/assets/images/hero_luxury_villa_3d_1794022270277.jpg',
  residentialVilla: '/src/assets/images/project_residential_villa_1794022272864.jpg',
  commercialBuilding: '/src/assets/images/project_commercial_building_1794022272778.jpg',
};

export const COMPANY_DETAILS = {
  name: 'BHANU BUILDERS',
  tagline: 'Building Trust. Building Tomorrow.',
  mdName: 'JADI SAMPATH',
  mdDesignation: 'Managing Director & Civil Engineering Contractor',
  phoneDisplay: '+91 9618492727',
  phoneClean: '+919618492727',
  whatsappNumber: '919618492727',
  email: 'Bhanubuilders09@gmail.com',
  address: 'Chennur, Mancherial District, Telangana, India',
  pincode: '504201',
  domain: 'www.bhanubuilders.in',
  establishedYear: '2016',
  workingHours: 'Mon - Sat: 8:30 AM - 7:30 PM (Sun By Appointment)',
};

export const PACKAGES: ConstructionPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    rate: 1800,
    rateFormatted: '₹1,800/sq.ft.',
    tagline: 'Sturdy & budget-conscious residential construction with quality engineering standards.',
    steel: 'Fe 550D TMT Steel (Kamdhenu / Radha / Simhadri)',
    cement: '43/53 Grade OPC & PPC (Zuari / Maha / Dalmia)',
    sandAggregates: 'High grade Robo Sand (P-sand for plaster, M-sand for concrete) & 20mm/40mm machine crushed granite stone.',
    flooring: '2ft × 2ft Double Charged Vitrified Tiles (up to ₹50/sq.ft value). Ceramic tiles in wet areas.',
    doorsWindows: 'Teak wood main door frame with laminated flush shutter. Internal painted flush doors. Powder-coated aluminum sliding windows with safety grills.',
    kitchenBath: 'Polished Black Granite platform with SS Sink, 2ft ceramic wall dado. Branded CP fittings (Cera / Parryware).',
    electricalPlumbing: 'Concealed fire-retardant copper wiring (Polycab/Anchor), modular switches, Supreme/Ashirvad CPVC & PVC pipes.',
    paintingFinishes: 'Internal 2 coats Asian Tractor Emulsion over putty; External Asian Apex weather-shield paint.',
    keyHighlights: [
      'Engineered RCC frame structure with soil load check',
      'Anti-termite pest treatment at foundation level',
      'Solid red brick / solid block masonry with 1:6 cement mortar',
      'Dedicated on-site quality inspection'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    rate: 2000,
    rateFormatted: '₹2,000/sq.ft.',
    isPopular: true,
    tagline: 'Most chosen residential package balancing luxury aesthetics, branded materials, and enduring durability.',
    steel: 'JSW NeoSteel / Tata Tiscon / Jindal Panther Fe 550D TMT',
    cement: 'UltraTech / Birla A1 / ACC 53 Grade',
    sandAggregates: 'Washed river sand for smooth internal & external plastering; certified granite blue metal aggregates.',
    flooring: '4ft × 2ft Glazed Vitrified Tiles (GVT/PGVT up to ₹75/sq.ft value) with 3-inch skirting. Anti-skid rustic tiles in balconies.',
    doorsWindows: '100% Seasoned Indian Teak Wood main door and 5"×3" frame with brass hardware. UPVC 2.5-track windows with mosquito mesh and Saint-Gobain glass.',
    kitchenBath: 'Premium Jet Black or Galaxy Granite counter, Carysil/Franke quartz-blend sink, Jaquar Continental CP fittings, wall-hung EWCs.',
    electricalPlumbing: 'Finolex / Havells multi-strand FR wiring, Legrand / Schneider Lyncus modular switches with MCB protection.',
    paintingFinishes: 'Asian Paints Royale Luxury Emulsion on internal walls; Asian Apex Ultima with silicon protection on elevation.',
    keyHighlights: [
      'M20/M25 design concrete mix with cube testing',
      'Designer false ceiling in living and master bedroom with LED cob lights',
      'Vaastu-compliant space planning and structural drawings',
      'Complete terrace waterproofing with 10-year assurance'
    ]
  },
  {
    id: 'deluxe',
    name: 'Deluxe Package',
    rate: 2300,
    rateFormatted: '₹2,300/sq.ft.',
    tagline: 'Architectural sophistication with large format porcelain, premium sanitaryware and superior thermal insulation.',
    steel: 'Tata Tiscon Super Ductile 550D / SAIL Primary TMT',
    cement: 'UltraTech Super / ACC Concrete Plus / Birla Super 53 Grade',
    sandAggregates: 'Double-screened river sand for silky plaster finishes and certified quarry gravel with zero silt content.',
    flooring: '6ft × 4ft Large Format GVT Slabs or Imported Composite Marble (up to ₹120/sq.ft value). Wooden texture tiles in master suite.',
    doorsWindows: 'Heavy Carved Teak Wood Main Door (7.5ft height) with multi-point lock. Fenesta / Kommerling heavy-gauge UPVC sound-reducing windows.',
    kitchenBath: 'Quartz or nano-white kitchen platform with built-in hob provision, Kohler / Grohe single-lever thermostatic diverters and glass shower screens.',
    electricalPlumbing: 'Schneider Electric / Legrand Arteor luxury switchboards, home automation conduit layout ready, solar water line.',
    paintingFinishes: 'Asian Paints Royale Aspira washable paint, Italian PU wood polish on main door, anti-fungal exterior textured elevation.',
    keyHighlights: [
      'Complete false ceiling across all rooms with cove lights',
      'Toughened glass railing with 304-grade stainless steel hardware',
      'Independent underground RCC sump & overhead Sintex/concrete tank',
      'Detailed 3D elevation renders and structural engineering report'
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Package',
    rate: 2500,
    rateFormatted: '₹2,500/sq.ft.',
    tagline: 'Ultra-luxury bespoke villa construction with Italian marble, smart home provisions, and resort-grade finishes.',
    steel: 'Tata Tiscon 550D / JSW Neosteel with specialized anti-corrosive epoxy coating & structural warranty certificate',
    cement: 'UltraTech Weather Plus / ACC Hydraulic specialized damp-proof cements',
    sandAggregates: 'Premium washed river sand & micro-graded aggregate mix for high-density crack-resistant concrete.',
    flooring: 'Imported Italian Marble (Dyna/Botticino/Statuario up to ₹200/sq.ft value) with mirror diamond polish in foyer, living & dining.',
    doorsWindows: 'Royal Burma Teak wood entrance door (8ft height) with biometric Yale digital lock. Fenesta acoustic double-glazed glass systems.',
    kitchenBath: 'Island kitchen prep station with Quartz/Corian surface, Hansgrohe / Kohler premium rain showers and sensor faucets.',
    electricalPlumbing: 'Smart IoT automation-ready wiring, Legrand Arteor touch switches, EV vehicle charging point in car port, copper piping for AC.',
    paintingFinishes: 'Asian Paints Royale Velvet Touch with designer accent wall, Jotun luxury weather-shield texture on all exterior elevations.',
    keyHighlights: [
      'Earthquake-resistant frame with Fosroc/Dr. Fixit advanced membrane waterproofing',
      'Terrace heat-reflective cool tiles with aesthetic rooftop pergola structure',
      'Complete architectural lighting profile and landscape walkway layout',
      'Executive turnkey handover with deep cleaning & handover audit'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Building Construction',
    category: 'Villas & Homes',
    badge: 'Turnkey Construction',
    description: 'Bespoke independent villas, duplex homes, and multi-storey residential buildings built with stringent engineering standards, modern architectural aesthetics, and 100% Vaastu alignment.',
    scope: [
      'Custom luxury villas & modern duplexes',
      'Structural RCC framing & soil load testing',
      'End-to-end turnkey civil construction',
      'Interior finishing, carpentry & false ceilings'
    ],
    specs: 'M20/M25 Grade Concrete · Fe 550D TMT Steel · 100% Vaastu Compliance',
    image: '/src/assets/images/project_residential_villa_1794022272864.jpg'
  },
  {
    id: 'commercial',
    title: 'Commercial Building Construction',
    category: 'Commercial & Retail',
    badge: 'High-Capacity Engineering',
    description: 'High-strength commercial spaces, retail shopping complexes, corporate offices, and institutional buildings designed for high footfalls, maximum usable carpet area, and long-term durability.',
    scope: [
      'Multi-storey commercial shopping complexes',
      'Office towers & business workspaces',
      'Structural steel framing & post-tensioned slabs',
      'Glass facade & exterior cladding integration'
    ],
    specs: 'Commercial Grade Load Compliance · Fire Safety Standards · High-Span Columns',
    image: '/src/assets/images/project_commercial_building_1794022272778.jpg'
  },
  {
    id: 'cc-roads',
    title: 'CC Roads Construction',
    category: 'Infrastructure',
    badge: 'Govt & Municipal Grade',
    description: 'Heavy-duty Cement Concrete (CC) road execution for municipal corporations, gram panchayats, industrial zones, and gated townships with mechanical paving and durable camber gradients.',
    scope: [
      'M30/M40 grade machine-mixed cement concrete roads',
      'Proper sub-base compaction (GSB & WMM)',
      'Expansion and contraction joint cutting & groove sealing',
      'Kerb stone installation with reflective markings'
    ],
    specs: 'IRC Specifications · Heavy Axle Load Capacity · 25+ Year Service Life',
    image: PHOTO_ASSETS.ccRoad
  },
  {
    id: 'drainage',
    title: 'Drainage Construction',
    category: 'Civic Infrastructure',
    badge: 'Stormwater & Sewerage',
    description: 'Engineered stormwater storm drains, RCC box drains, and covered civic drainage networks designed with hydraulic gradient precision to eliminate waterlogging and erosion.',
    scope: [
      'RCC box drainage channels with heavy precast covers',
      'Township underground stormwater drainage networks',
      'Interconnecting silt traps and inspection manholes',
      'Anti-overflow hydraulic slope engineering'
    ],
    specs: 'Heavy RCC Slab Covers · Non-Clogging Slope Design · Water-Tight Seams',
    image: PHOTO_ASSETS.drainage
  },
  {
    id: 'culverts-bridges',
    title: 'Culverts and Small Bridges',
    category: 'Transportation Works',
    badge: 'High Hydraulic Flow',
    description: 'Precision-engineered RCC box culverts, pipe culverts, causeways, and minor bridges over streams and canals ensuring year-round, flood-resilient rural and highway road connectivity.',
    scope: [
      'Single & multi-cell RCC box culverts',
      'Hume pipe culverts with concrete wing walls',
      'Submersible causeways and approach ramps',
      'Scour protection and stone pitching revetments'
    ],
    specs: 'IRC 78 / IRC 112 Standard · High Peak Discharge Ratings · Deep Foundation Footings',
    image: PHOTO_ASSETS.culvertsBridges
  },
  {
    id: 'layout-development',
    title: 'Layout Development',
    category: 'Real Estate Development',
    badge: 'Gated Communities',
    description: 'Complete master development of open plots and residential ventures including perimeter fencing, wide internal BT/CC roads, underground cabling conduits, water supply, and streetlights.',
    scope: [
      'Site levelling, contour surveying & master layout demarcation',
      'Avenue plantation & park boundary development',
      'Internal 30ft, 40ft & 60ft wide CC road networks',
      'Overhead water tank and pipeline distribution lines'
    ],
    specs: 'DTCP & Municipal Approval Compliance · Clean Legal Plotting · Turnkey Execution',
    image: PHOTO_ASSETS.heroVilla3d
  },
  {
    id: 'government-civil-works',
    title: 'Government Civil Works',
    category: 'Public Sector Contracts',
    badge: 'Tenders & Public Works',
    description: 'Official contractor for Panchayat Raj, Roads & Buildings (R&B), Municipalities, and State Government departmental tenders with impeccable audit compliance and timely delivery.',
    scope: [
      'Panchayat Raj & R&B departmental infrastructure projects',
      'Community halls, Rythu Vedikas, and administrative buildings',
      'Government hospital & educational facility renovations',
      'Rigorous material lab testing and measurement audits'
    ],
    specs: 'PWD / CPWD Schedule of Rates · Quality Certification · Zero-Defect Handover',
    image: PHOTO_ASSETS.mdPhoto
  },
  {
    id: 'engineering-consultancy',
    title: 'Building Planning and Engineering Consultancy',
    category: 'Civil & Architectural',
    badge: 'Technical Precision',
    description: 'Full-spectrum architectural drafting, structural analysis, Vaastu advisory, 3D elevation rendering, estimation, and municipal building permission documentation.',
    scope: [
      'Detailed 2D floor plans & 3D realistic exterior renders',
      'Structural design with STAAD.Pro foundation load calculations',
      'Municipal building approval drawings & sanction files',
      'Detailed Bill of Quantities (BOQ) and cost estimation'
    ],
    specs: 'IS 456:2000 Code Compliance · Accurate Material Estimation · Certified Structural Stability',
    image: '/src/assets/images/hero_luxury_villa_3d_1794022270277.jpg'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Emerald Crest Luxury Villa',
    category: 'Residential Villas',
    location: 'Chennur, Telangana',
    areaOrLength: '4,200 sq.ft. (G+2)',
    scope: 'Turnkey Architectural & Civil Construction',
    completionYear: '2025',
    image: '/src/assets/images/hero_luxury_villa_3d_1794022270277.jpg',
    features: [
      'Cantilevered balconies with toughened glass',
      'Custom Italian marble flooring in living spaces',
      'Landscaped courtyard and private terrace pergola',
      '100% Vaastu compliant orientation'
    ]
  },
  {
    id: 'p2',
    title: 'Contemporary Duplex Residence',
    category: 'Modern Independent Houses',
    location: 'Mancherial Road, Chennur',
    areaOrLength: '2,800 sq.ft. (G+1)',
    scope: 'Structural Design, Elevation & Civil Execution',
    completionYear: '2024',
    image: '/src/assets/images/project_residential_villa_1794022272864.jpg',
    features: [
      'Geometric exterior elevation with teak wood louvers',
      'Modular kitchen with German hardware fittings',
      'Rainwater harvesting recharge pit system',
      'Finolex & Legrand high-efficiency electrification'
    ]
  },
  {
    id: 'p3',
    title: 'Sri Lakshmi Commercial Arcade',
    category: 'Commercial Buildings',
    location: 'Main Road, Chennur',
    areaOrLength: '12,500 sq.ft. (G+3)',
    scope: 'Commercial RCC Frame & Multi-Storey Retail Complex',
    completionYear: '2024',
    image: '/src/assets/images/project_commercial_building_1794022272778.jpg',
    features: [
      'High-span column layout for flexible shop frontages',
      'Modern glass curtain wall facade with LED illumination',
      'Heavy-load basement parking and generator backup room',
      'Approved municipal fire safety exit staircases'
    ]
  },
  {
    id: 'p4',
    title: 'Panchayat Link CC Road & Drainage Package',
    category: 'CC Roads',
    location: 'Chennur Sector, Mancherial District',
    areaOrLength: '3.8 km length · 5.5m width',
    scope: 'High-Strength M35 CC Pavement & Kerb Stones',
    completionYear: '2024',
    image: PHOTO_ASSETS.ccRoad,
    features: [
      'Machine vibrated and vacuum dewatered concrete finish',
      'Continuous RCC side drainage channels',
      'Precision groove cutting with bituminous joint sealant',
      'Signage and solar road cat-eye studs'
    ]
  },
  {
    id: 'p5',
    title: 'Township Stormwater RCC Drainage Network',
    category: 'Drainage Works',
    location: 'Chennur Municipality Limits',
    areaOrLength: '2.4 km Box Drain',
    scope: 'Reinforced Concrete Stormwater Conduit & Cover Slabs',
    completionYear: '2023',
    image: PHOTO_ASSETS.drainage,
    features: [
      'M25 grade heavy RCC box canal sections',
      'Heavy vehicular grade precast inspection lids',
      'Engineered hydraulic drop levels to natural stream',
      'Prevention of monsoon waterlogging across 4 colonies'
    ]
  },
  {
    id: 'p6',
    title: 'Stream Crossing Twin-Cell Box Culvert',
    category: 'Bridges and Culverts',
    location: 'Chennur Rural Connectivity Highway',
    areaOrLength: '18m Span · Twin 4.5m x 3.5m Vents',
    scope: 'High-Discharge Box Culvert & Retaining Wing Walls',
    completionYear: '2024',
    image: PHOTO_ASSETS.culvertsBridges,
    features: [
      'IRC load classification compliant for heavy agricultural & mineral trucks',
      'Substantial upstream and downstream stone pitching',
      'RCC crash barriers with high-visibility safety painting',
      'Zero scouring foundation design'
    ]
  },
  {
    id: 'p7',
    title: 'Surya Teja Green Valley Gated Layout',
    category: 'Infrastructure Development',
    location: 'Chennur Outskirts, Telangana',
    areaOrLength: '15 Acres Residential Layout',
    scope: 'Earthworks, Internal CC Roads, Water & Power Infrastructure',
    completionYear: '2025',
    image: '/src/assets/images/hero_luxury_villa_3d_1794022270277.jpg',
    features: [
      'Grand architectural entrance arch with security gatehouse',
      '40ft & 33ft wide CC roads with curbs and avenue trees',
      'Underground electrical conduits and LED street pole lighting',
      '100,000 litre capacity overhead RCC reservoir'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Certified Quality Materials',
    description: 'We strictly procure primary Tata Tiscon / JSW steel, UltraTech / Birla cement, and laboratory-tested aggregates. No substandard substitution, ever.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Skilled Engineering Team',
    description: 'Directly supervised by civil engineers with extensive field expertise in structural RCC framing, survey levelling, and modern construction practices.',
    icon: 'HardHat'
  },
  {
    title: 'Professional Project Management',
    description: 'Structured milestone schedules, daily photographic progress logs, stage-by-stage quality checks, and systematic material accounting.',
    icon: 'Briefcase'
  },
  {
    title: '100% Timely Execution',
    description: 'We respect your time. Clear delivery timelines committed in our agreement with optimized workforce deployment to ensure on-schedule handover.',
    icon: 'Clock'
  },
  {
    title: 'Competitive & Transparent Pricing',
    description: 'Clear sq.ft rates starting at ₹1,800/sq.ft. with zero hidden costs, itemized material specifications, and transparent payment milestones.',
    icon: 'BadgePercent'
  },
  {
    title: 'Customer-Focused Approach',
    description: 'We tailor every elevation, floor plan, and material choice to your family’s lifestyle, budget, and long-term aspirations.',
    icon: 'Users'
  },
  {
    title: '100% Vaastu & Transparent Communication',
    description: 'Direct direct accessibility to Managing Director Jadi Sampath for all design consultations, site queries, and project decisions.',
    icon: 'Compass'
  }
];
