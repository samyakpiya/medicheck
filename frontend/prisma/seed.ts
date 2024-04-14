import { PrismaClient } from "@prisma/client";

const GENERIC_MEDS_LIST =
[
  {
    name: 'Acetaminophen',
    brandMeds: [ 'Tylenol', 'Feverall', 'Panadol' ],
    isGeneric: true
  },
  {
    name: 'Albuterol',
    brandMeds: [ 'Proventil', 'Ventolin', 'ProAir' ],
    isGeneric: true
  },
  {
    name: 'Amiodarone',
    brandMeds: [ 'Cordarone', 'Pacerone', 'Nexterone' ],
    isGeneric: true
  },
  {
    name: 'Amitriptyline',
    brandMeds: [ 'Elavil', 'Endep', 'Vanatrip' ],
    isGeneric: true
  },
  {
    name: 'Amlodipine',
    brandMeds: [ 'Norvasc', 'Amvaz', 'Katerzia' ],
    isGeneric: true
  },
  {
    name: 'Amoxicillin',
    brandMeds: [ 'Amoxil', 'Trimox', 'Moxatag' ],
    isGeneric: true
  },
  {
    name: 'Aripiprazole',
    brandMeds: [ 'Abilify', 'Aristada', 'Abilify Maintena' ],
    isGeneric: true
  },
  {
    name: 'Atorvastatin',
    brandMeds: [ 'Lipitor', 'Atorva', 'Torvast' ],
    isGeneric: true
  },
  {
    name: 'Azithromycin',
    brandMeds: [ 'Zithromax', 'Azasite', 'Zmax' ],
    isGeneric: true
  },
  {
    name: 'Baclofen',
    brandMeds: [ 'Lioresal', 'Gablofen', 'Ozobax' ],
    isGeneric: true
  },
  {
    name: 'Buprenorphine',
    brandMeds: [ 'Subutex', 'Belbuca', 'Butrans' ],
    isGeneric: true
  },
  {
    name: 'Captopril',
    brandMeds: [ 'Capoten', 'Acepril', 'Captoril' ],
    isGeneric: true
  },
  {
    name: 'Carvedilol',
    brandMeds: [ 'Coreg', 'Carvil', 'Carloc' ],
    isGeneric: true
  },
  {
    name: 'Ceftriaxone',
    brandMeds: [ 'Rocephin', 'Cefax', 'Ceftril' ],
    isGeneric: true
  },
  {
    name: 'Ciprofloxacin',
    brandMeds: [ 'Cipro', 'Ciloxan', 'Proquin' ],
    isGeneric: true
  },
  {
    name: 'Clindamycin',
    brandMeds: [ 'Cleocin', 'Clinda-Derm', 'Clindagel' ],
    isGeneric: true
  },
  {
    name: 'Clopidogrel',
    brandMeds: [ 'Plavix', 'Clovix', 'Grepid' ],
    isGeneric: true
  },
  {
    name: 'Codeine',
    brandMeds: [ 'Codar', 'Tylex', 'Tylenol with Codeine' ],
    isGeneric: true
  },
  {
    name: 'Cyclobenzaprine',
    brandMeds: [ 'Flexeril', 'Amrix', 'Fexmid' ],
    isGeneric: true
  },
  {
    name: 'Dexamethasone',
    brandMeds: [ 'Decadron', 'Hexadrol', 'DexPak' ],
    isGeneric: true
  },
  {
    name: 'Diazepam',
    brandMeds: [ 'Valium', 'Diastat', 'Diazemuls' ],
    isGeneric: true
  },
  {
    name: 'Diclofenac',
    brandMeds: [ 'Voltaren', 'Cataflam', 'Zorvolex' ],
    isGeneric: true
  },
  {
    name: 'Digoxin',
    brandMeds: [ 'Lanoxin', 'Digitek', 'Cardoxin' ],
    isGeneric: true
  },
  {
    name: 'Diltiazem',
    brandMeds: [ 'Cardizem', 'Tiazac', 'Dilacor' ],
    isGeneric: true
  },
  {
    name: 'Diphenhydramine',
    brandMeds: [ 'Benadryl', 'Nytol', 'Sominex' ],
    isGeneric: true
  },
  {
    name: 'Doxycycline',
    brandMeds: [ 'Vibramycin', 'Oracea', 'Doryx' ],
    isGeneric: true
  },
  {
    name: 'Duloxetine',
    brandMeds: [ 'Cymbalta', 'Drizalma', 'Irenka' ],
    isGeneric: true
  },
  {
    name: 'Enalapril',
    brandMeds: [ 'Vasotec', 'Epaned', 'Enalagamma' ],
    isGeneric: true
  },
  {
    name: 'Enoxaparin',
    brandMeds: [ 'Lovenox', 'Clexane', 'Xaparin' ],
    isGeneric: true
  },
  {
    name: 'Escitalopram',
    brandMeds: [ 'Lexapro', 'Cipralex', 'Esipram' ],
    isGeneric: true
  },
  {
    name: 'Esomeprazole',
    brandMeds: [ 'Nexium', 'Esotrax', 'Esomezol' ],
    isGeneric: true
  },
  {
    name: 'Ethinylestradiol',
    brandMeds: [ 'Estinyl', 'Feminone', 'Lynoral' ],
    isGeneric: true
  },
  {
    name: 'Famotidine',
    brandMeds: [ 'Pepcid', 'Acid Controller', 'Heartburn Relief' ],
    isGeneric: true
  },
  {
    name: 'Fentanyl',
    brandMeds: [ 'Duragesic', 'Actiq', 'Fentora' ],
    isGeneric: true
  },
  {
    name: 'Fluconazole',
    brandMeds: [ 'Diflucan', 'Trican', 'Flucoral' ],
    isGeneric: true
  },
  {
    name: 'Fluoxetine',
    brandMeds: [ 'Prozac', 'Sarafem', 'Selfemra' ],
    isGeneric: true
  },
  {
    name: 'Fluticasone',
    brandMeds: [ 'Flonase', 'Flovent', 'Cutivate' ],
    isGeneric: true
  },
  {
    name: 'Furosemide',
    brandMeds: [ 'Lasix', 'Frumex', 'Diural' ],
    isGeneric: true
  },
  {
    name: 'Gabapentin',
    brandMeds: [ 'Neurontin', 'Gralise', 'Gabarone' ],
    isGeneric: true
  },
  {
    name: 'Hydrochlorothiazide',
    brandMeds: [ 'HydroDiuril', 'Microzide', 'Oretic' ],
    isGeneric: true
  },
  {
    name: 'Hydrocodone',
    brandMeds: [ 'Vicodin', 'Lortab', 'Norco' ],
    isGeneric: true
  },
  {
    name: 'Ibuprofen',
    brandMeds: [ 'Advil', 'Motrin', 'Nurofen' ],
    isGeneric: true
  },
  {
    name: 'Imipramine',
    brandMeds: [ 'Tofranil', 'Imiprex', 'Depsonil' ],
    isGeneric: true
  },
  {
    name: 'Insulin Glargine',
    brandMeds: [ 'Lantus', 'Basaglar', 'Toujeo' ],
    isGeneric: true
  },
  {
    name: 'Ipratropium',
    brandMeds: [ 'Atrovent', 'Ipraxa', 'Rinatec' ],
    isGeneric: true
  },
  {
    name: 'Irbesartan',
    brandMeds: [ 'Avapro', 'Irovel', 'Aprovel' ],
    isGeneric: true
  },
  {
    name: 'Isosorbide',
    brandMeds: [ 'Isordil', 'Imdur', 'Monoket' ],
    isGeneric: true
  },
  {
    name: 'Ketorolac',
    brandMeds: [ 'Toradol', 'Acular', 'Ketofen' ],
    isGeneric: true
  },
  {
    name: 'Lamotrigine',
    brandMeds: [ 'Lamictal', 'Lamogine', 'Lamictin' ],
    isGeneric: true
  },
  {
    name: 'Lansoprazole',
    brandMeds: [ 'Prevacid', 'Zoton', 'Inhibitol' ],
    isGeneric: true
  },
  {
    name: 'Levofloxacin',
    brandMeds: [ 'Levaquin', 'Tavanic', 'Elequine' ],
    isGeneric: true
  },
  {
    name: 'Levothyroxine',
    brandMeds: [ 'Synthroid', 'Levoxyl', 'Euthyrox' ],
    isGeneric: true
  },
  {
    name: 'Lidocaine',
    brandMeds: [ 'Xylocaine', 'Lignospan', 'Versatis' ],
    isGeneric: true
  },
  {
    name: 'Lisinopril',
    brandMeds: [ 'Prinivil', 'Qbrelis', 'Zestril​' ],
    isGeneric: true
  },
  {
    name: 'Loratadine',
    brandMeds: [ 'Claritin', 'Alavert', 'Tavist' ],
    isGeneric: true
  },
  {
    name: 'Losartan',
    brandMeds: [ 'Cozaar', 'Losacor', 'Repace​ ' ],
    isGeneric: true
  },
  {
    name: 'Lovastatin',
    brandMeds: [ 'Mevacor', 'Altoprev', 'Lovalip' ],
    isGeneric: true
  },
  {
    name: 'Meloxicam',
    brandMeds: [ 'Mobic', 'Vivlodex', 'Qmiiz ODT' ],
    isGeneric: true
  },
  {
    name: 'Metformin',
    brandMeds: [ 'Glucophage', 'Fortamet', 'Glumetza​ ' ],
    isGeneric: true
  },
  {
    name: 'Methotrexate',
    brandMeds: [ 'Rheumatrex', 'Trexall', 'Otrexup' ],
    isGeneric: true
  },
  {
    name: 'Vecuronium',
    brandMeds: [
      'Norcuron',
      'Vecuronio',
      'Vecuronio',
      'Bromuro',
      'Vecuronium',
      'Bromide'
    ],
    isGeneric: true
  },
  {
    name: 'Midazolam',
    brandMeds: [ 'Versed', 'Dormicum', 'Hypnovel' ],
    isGeneric: true
  }
]

const BRAND_MEDS_LIST = [
  "Abilify",
  "Abilify Maintena",
  "Acepril",
  "Acid Controller",
  "Actiq",
  "Acular",
  "Advil",
  "Alavert",
  "Altoprev",
  "Amoxil",
  "Amrix",
  "Amvaz",
  "Aprovel",
  "Aristada",
  "Atorva",
  "Atrovent",
  "Avapro",
  "Azasite",
  "Basaglar",
  "Belbuca",
  "Benadryl",
  "Butrans",
  "Capoten",
  "Captoril",
  "Cardizem",
  "Cardoxin",
  "Carloc",
  "Carvil",
  "Cataflam",
  "Cefax",
  "Ceftril",
  "Ciloxan",
  "Cipralex",
  "Cipro",
  "Claritin",
  "Cleocin",
  "Clexane",
  "Clinda-Derm",
  "Clindagel",
  "Clovix",
  "Codar",
  "Cordarone",
  "Coreg",
  "Cozaar",
  "Cutivate",
  "Cymbalta",
  "Decadron",
  "Depsonil",
  "DexPak",
  "Diastat",
  "Diazemuls",
  "Diflucan",
  "Digitek",
  "Dilacor",
  "Diural",
  "Doryx",
  "Drizalma",
  "Duragesic",
  "Elavil",
  "Elequine",
  "Enalagamma",
  "Endep",
  "Epaned",
  "Esipram",
  "Esomezol",
  "Esotrax",
  "Estinyl",
  "Euthyrox",
  "Feminone",
  "Fentora",
  "Feverall",
  "Fexmid",
  "Flexeril",
  "Flonase",
  "Flovent",
  "Flucoral",
  "Fortamet",
  "Frumex",
  "Gabarone",
  "Gablofen",
  "Glucophage",
  "Glumetza\u200b ",
  "Gralise",
  "Grepid",
  "Heartburn Relief",
  "Hexadrol",
  "HydroDiuril",
  "Imdur",
  "Imiprex",
  "Inhibitol",
  "Ipraxa",
  "Irenka",
  "Irovel",
  "Isordil",
  "Katerzia",
  "Ketofen",
  "Lamictal",
  "Lamictin",
  "Lamogine",
  "Lanoxin",
  "Lantus",
  "Lasix",
  "Levaquin",
  "Levoxyl",
  "Lexapro",
  "Lignospan",
  "Lioresal",
  "Lipitor",
  "Lortab",
  "Losacor",
  "Lovalip",
  "Lovenox",
  "Lynoral",
  "Mevacor",
  "Microzide",
  "Mobic",
  "Monoket",
  "Motrin",
  "Moxatag",
  "Neurontin",
  "Nexium",
  "Nexterone",
  "Norco",
  "Norvasc",
  "Nurofen",
  "Nytol",
  "Oracea",
  "Oretic",
  "Otrexup",
  "Ozobax",
  "Pacerone",
  "Panadol",
  "Pepcid",
  "Plavix",
  "Prevacid",
  "Prinivil",
  "ProAir",
  "Proquin",
  "Proventil",
  "Prozac",
  "Qbrelis",
  "Qmiiz ODT",
  "Repace\u200b ",
  "Rheumatrex",
  "Rinatec",
  "Rocephin",
  "Sarafem",
  "Selfemra",
  "Sominex",
  "Subutex",
  "Synthroid",
  "Tavanic",
  "Tavist",
  "Tiazac",
  "Tofranil",
  "Toradol",
  "Torvast",
  "Toujeo",
  "Trexall",
  "Trican",
  "Trimox",
  "Tylenol",
  "Tylenol with Codeine",
  "Tylex",
  "Valium",
  "Vanatrip",
  "Vasotec",
  "Ventolin",
  "Versatis",
  "Vibramycin",
  "Vicodin",
  "Vivlodex",
  "Voltaren",
  "Xaparin",
  "Xylocaine",
  "Zestril\u200b",
  "Zithromax",
  "Zmax",
  "Zorvolex",
  "Zoton",
  "Norcuron",
  "Vecuronio",
  "Vecuronio",
  "Bromuro",
  "Vecuronium",
  "Bromide",
  "Versed",
  "Dormicum",
  "Hypnovel",
];

const medsObjectList = BRAND_MEDS_LIST.map(medName => ({
  name: medName,
  isGeneric: false
}));


const patients = [
  { name: "John Doe", age: 32, height: 175, weight: 70, gender: 0, seizures: false },
  { name: "Jane Smith", age: 28, height: 162, weight: 55, gender: 1, seizures: true },
  { name: "Alice Johnson", age: 45, height: 158, weight: 60, gender: 1, seizures: false },
  { name: "Bob Brown", age: 54, height: 182, weight: 80, gender: 0, seizures: true },
  { name: "Mary Davis", age: 37, height: 170, weight: 65, gender: 1, seizures: false },
  { name: "Michael Wilson", age: 29, height: 180, weight: 75, gender: 0, seizures: false },
  { name: "Rachel Green", age: 22, height: 160, weight: 50, gender: 1, seizures: true },
  { name: "Lucas Martin", age: 48, height: 174, weight: 85, gender: 0, seizures: false },
  { name: "Linda King", age: 31, height: 165, weight: 58, gender: 1, seizures: true },
  { name: "Kevin Lee", age: 50, height: 188, weight: 90, gender: 0, seizures: false }
];


const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  console.log("Seeding generic meds...")
  for (const med of [...GENERIC_MEDS_LIST, ...medsObjectList]) {
    const result = await prisma.genericMed.create({
      data: {
        name: med.name,
        isGeneric: med.isGeneric,
      },
    });
    console.log(`Created med with id: ${result.id}`);
  }

  console.log("Seeding patients...")
  for (const patient of patients) {
    const result = await prisma.patient.create({
      data: {
        name: patient.name,
        age: patient.age,
        height: patient.height,
        weight: patient.weight,
        gender: patient.gender,
        seizures: patient.seizures,
      }
    });
    console.log(`Created patient with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
