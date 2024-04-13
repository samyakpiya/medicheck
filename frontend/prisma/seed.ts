import { PrismaClient } from "@prisma/client";

const GENERIC_MEDS_LIST = [
  {
    name: "Acetaminophen",
    count: 100,
    brandMeds: ["Tylenol", "Feverall", "Panadol"],
  },
  {
    name: "Albuterol",
    count: 150,
    brandMeds: ["Proventil", "Ventolin", "ProAir"],
  },
  {
    name: "Amiodarone",
    count: 200,
    brandMeds: ["Cordarone", "Pacerone", "Nexterone"],
  },
  {
    name: "Amitriptyline",
    count: 120,
    brandMeds: ["Elavil", "Endep", "Vanatrip"],
  },
  {
    name: "Amlodipine",
    count: 130,
    brandMeds: ["Norvasc", "Amvaz", "Katerzia"],
  },
  {
    name: "Amoxicillin",
    count: 140,
    brandMeds: ["Amoxil", "Trimox", "Moxatag"],
  },
  {
    name: "Aripiprazole",
    count: 160,
    brandMeds: ["Abilify", "Aristada", "Abilify Maintena"],
  },
  {
    name: "Atorvastatin",
    count: 180,
    brandMeds: ["Lipitor", "Atorva", "Torvast"],
  },
  {
    name: "Azithromycin",
    count: 190,
    brandMeds: ["Zithromax", "Azasite", "Zmax"],
  },
  {
    name: "Baclofen",
    count: 110,
    brandMeds: ["Lioresal", "Gablofen", "Ozobax"],
  },
  {
    name: "Buprenorphine",
    count: 170,
    brandMeds: ["Subutex", "Belbuca", "Butrans"],
  },
  {
    name: "Captopril",
    count: 165,
    brandMeds: ["Capoten", "Acepril", "Captoril"],
  },
  {
    name: "Carvedilol",
    count: 175,
    brandMeds: ["Coreg", "Carvil", "Carloc"],
  },
  {
    name: "Ceftriaxone",
    count: 185,
    brandMeds: ["Rocephin", "Cefax", "Ceftril"],
  },
  {
    name: "Ciprofloxacin",
    count: 195,
    brandMeds: ["Cipro", "Ciloxan", "Proquin"],
  },
  {
    name: "Clindamycin",
    count: 105,
    brandMeds: ["Cleocin", "Clinda-Derm", "Clindagel"],
  },
  {
    name: "Clopidogrel",
    count: 115,
    brandMeds: ["Plavix", "Clovix", "Grepid"],
  },
  {
    name: "Codeine",
    count: 125,
    brandMeds: ["Codar", "Tylex", "Tylenol with Codeine"],
  },
  {
    name: "Cyclobenzaprine",
    count: 135,
    brandMeds: ["Flexeril", "Amrix", "Fexmid"],
  },
  {
    name: "Dexamethasone",
    count: 145,
    brandMeds: ["Decadron", "Hexadrol", "DexPak"],
  },
  {
    name: "Diazepam",
    count: 155,
    brandMeds: ["Valium", "Diastat", "Diazemuls"],
  },
  {
    name: "Diclofenac",
    count: 165,
    brandMeds: ["Voltaren", "Cataflam", "Zorvolex"],
  },
  {
    name: "Digoxin",
    count: 175,
    brandMeds: ["Lanoxin", "Digitek", "Cardoxin"],
  },
  {
    name: "Diltiazem",
    count: 185,
    brandMeds: ["Cardizem", "Tiazac", "Dilacor"],
  },
  {
    name: "Diphenhydramine",
    count: 95,
    brandMeds: ["Benadryl", "Nytol", "Sominex"],
  },
  {
    name: "Doxycycline",
    count: 85,
    brandMeds: ["Vibramycin", "Oracea", "Doryx"],
  },
  {
    name: "Duloxetine",
    count: 75,
    brandMeds: ["Cymbalta", "Drizalma", "Irenka"],
  },
  {
    name: "Enalapril",
    count: 65,
    brandMeds: ["Vasotec", "Epaned", "Enalagamma"],
  },
  {
    name: "Enoxaparin",
    count: 55,
    brandMeds: ["Lovenox", "Clexane", "Xaparin"],
  },
  {
    name: "Escitalopram",
    count: 45,
    brandMeds: ["Lexapro", "Cipralex", "Esipram"],
  },
  {
    name: "Esomeprazole",
    count: 35,
    brandMeds: ["Nexium", "Esotrax", "Esomezol"],
  },
  {
    name: "Ethinylestradiol",
    count: 25,
    brandMeds: ["Estinyl", "Feminone", "Lynoral"],
  },
  {
    name: "Famotidine",
    count: 15,
    brandMeds: ["Pepcid", "Acid Controller", "Heartburn Relief"],
  },
  {
    name: "Fentanyl",
    count: 5,
    brandMeds: ["Duragesic", "Actiq", "Fentora"],
  },
  {
    name: "Fluconazole",
    count: 95,
    brandMeds: ["Diflucan", "Trican", "Flucoral"],
  },
  {
    name: "Fluoxetine",
    count: 85,
    brandMeds: ["Prozac", "Sarafem", "Selfemra"],
  },
  {
    name: "Fluticasone",
    count: 75,
    brandMeds: ["Flonase", "Flovent", "Cutivate"],
  },
  {
    name: "Furosemide",
    count: 65,
    brandMeds: ["Lasix", "Frumex", "Diural"],
  },
  {
    name: "Gabapentin",
    count: 55,
    brandMeds: ["Neurontin", "Gralise", "Gabarone"],
  },
  {
    name: "Hydrochlorothiazide",
    count: 45,
    brandMeds: ["HydroDiuril", "Microzide", "Oretic"],
  },
  {
    name: "Hydrocodone",
    count: 35,
    brandMeds: ["Vicodin", "Lortab", "Norco"],
  },
  {
    name: "Ibuprofen",
    count: 25,
    brandMeds: ["Advil", "Motrin", "Nurofen"],
  },
  {
    name: "Imipramine",
    count: 15,
    brandMeds: ["Tofranil", "Imiprex", "Depsonil"],
  },
  {
    name: "Insulin Glargine",
    count: 5,
    brandMeds: ["Lantus", "Basaglar", "Toujeo"],
  },
  {
    name: "Ipratropium",
    count: 15,
    brandMeds: ["Atrovent", "Ipraxa", "Rinatec"],
  },
  {
    name: "Irbesartan",
    count: 25,
    brandMeds: ["Avapro", "Irovel", "Aprovel"],
  },
  {
    name: "Isosorbide",
    count: 35,
    brandMeds: ["Isordil", "Imdur", "Monoket"],
  },
  {
    name: "Ketorolac",
    count: 45,
    brandMeds: ["Toradol", "Acular", "Ketofen"],
  },
  {
    name: "Lamotrigine",
    count: 55,
    brandMeds: ["Lamictal", "Lamogine", "Lamictin"],
  },
  {
    name: "Lansoprazole",
    count: 65,
    brandMeds: ["Prevacid", "Zoton", "Inhibitol"],
  },
  {
    name: "Levofloxacin",
    count: 75,
    brandMeds: ["Levaquin", "Tavanic", "Elequine"],
  },
  {
    name: "Levothyroxine",
    count: 85,
    brandMeds: ["Synthroid", "Levoxyl", "Euthyrox"],
  },
  {
    name: "Lidocaine",
    count: 95,
    brandMeds: ["Xylocaine", "Lignospan", "Versatis"],
  },
  {
    name: "Lisinopril",
    count: 105,
    brandMeds: ["Prinivil", "Qbrelis", "Zestril​"],
  },
  {
    name: "Loratadine",
    count: 115,
    brandMeds: ["Claritin", "Alavert", "Tavist"],
  },
  {
    name: "Losartan",
    count: 125,
    brandMeds: ["Cozaar", "Losacor", "Repace​ "],
  },
  {
    name: "Lovastatin",
    count: 135,
    brandMeds: ["Mevacor", "Altoprev", "Lovalip"],
  },
  {
    name: "Meloxicam",
    count: 145,
    brandMeds: ["Mobic", "Vivlodex", "Qmiiz ODT"],
  },
  {
    name: "Metformin",
    count: 155,
    brandMeds: ["Glucophage", "Fortamet", "Glumetza​ "],
  },
  {
    name: "Methotrexate",
    count: 165,
    brandMeds: ["Rheumatrex", "Trexall", "Otrexup"],
  },
  {
    name: "Vecuronium",
    count: 175,
    brandMeds: [
      "Norcuron",
      "Vecuronio",
      "Vecuronio",
      "Bromuro",
      "Vecuronium",
      "Bromide",
    ],
  },
];

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
  for (const med of GENERIC_MEDS_LIST) {
    const result = await prisma.genericMed.create({
      data: {
        name: med.name,
        count: med.count,
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
