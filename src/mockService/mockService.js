/* -------------- BACK-END -------------- */
const itemsDB = [
{
      id: 1,
      category: "gatitos",
      name: "KITTEN HEALTHY DEVELOPMENT ORIGINAL",
      description: "Hill's® Science Diet® Kitten está recomendado para gatitos desde el destete hasta su primer año de vida. Por su composición también puede ser usado en gatas preñadas o en lactancia. Suplementado con DHA, un ácido graso omega 3, responsable del desarrollo del cerebro, la visión y los procesos de aprendizaje.",
      price: 33900,
      stock: 13,
      imgURL: "https://bestforpets.cl/tienda/9846-large_default/kitten-healthy-development-original.jpg"
    },
    {
      id: 2,
      category: "gatitos",
      name: "INDOOR KITTEN",
      description: "NutraGold Indoor Kitten es un alimento especialmente formulado para satisfacer las necesidades de gatitos en crecimiento, gatas preñadas y madres lactantes. Su fórmula incluye Taurina para cuidar el corazón y el desarrollo de la vista del gato. La forma de su croqueta y el tamaño están pensados para facilitar la masticación del gatito. Saco de 3 Kg.",
      price: 24900,
      stock: 25,
      imgURL: "https://bestforpets.cl/tienda/9264-large_default/indoor-kitten.jpg"
    },
    {
      id: 3,
      category: "gatitos",
      name: "BRAVERY - CHICKEN KITTEN",
      description: "Bravery Chicken Kitten es un alimento para gatitos. Libres de grano y cereales, los alimentos Bravery son mono proteicos, con carne siempre como primer ingrediente y enriquecidos con antioxidantes, hipo alergénicos y 100% naturales. Receta de pollo de elevado contenido en proteínas, alta digestibilidad y palatabilidad.",
      price: 17500,
      stock: 247,
      imgURL: "https://bestforpets.cl/tienda/9039-large_default/bravery-chicken-kitten.jpg"
    },
    {
      id: 4,
      category: "salud",
      name: "PERFECT WEIGHT FELINE",
      description: "Science Diet® Perfect Weight Feline es un alimento para gatos con una fórmula innovadora que ayuda a su gato a alcanzar un peso saludable y por tanto, mejora su calidad de vida. Con beneficios antioxidantes clínicamente probados. Más del 70% de los gatos perdieron peso en las primeras 10 semanas con este alimento. Sin colorantes, saborizantes ni conservantes artificiales. Saco de 1,3 kg. ",
      price: 20900,
      stock: 88,
      imgURL: "https://bestforpets.cl/tienda/9850-large_default/perfect-weight-feline.jpg"
    },
    {
      id: 5,
      category: "salud",
      name: "HEPATIC FELINE",
      description: "Royal Canin Hepatic Feline es un alimento para gatos con transtornos o problemas hepáticos. Contenido energético adecuado para satisfacer las necesidades de los gatos adultos sin sobrecargar el estómago. Alta palatabilidad. Bajo en cobre para ayudar a reducir su acumulación en las células del hígado. Complejo antioxidante para ayudar a neutralizar los radicales libres. Saco de 1,5 kg.",
      price: 29500,
      stock: 45,
      imgURL: "https://bestforpets.cl/tienda/12634-large_default/hepatic-feline.jpg"
    },
    {
      id: 6,
      category: "gatitos",
      name: "YOUNG MALE FELINO",
      description: "Royal Canin Young Male Felino es un alimento para gatos esterilizados hasta los 7 años. También se puede utilizar en hogares con varios gatos. Su fórmula hiperproteica contribuye a preservar la masa muscular y mantener un alto nivel de palatabilidad. ",
      price: 20500,
      stock: 65,
      imgURL: "https://bestforpets.cl/tienda/9322-large_default/young-male-felino.jpg"
    },
    {
      id: 7,
      category: "gatitos",
      name: "MOTHER & BABYCAT",
      description: "Royal Canin Mother & Babycat es un alimento de primera edad, desde el destete hasta los 4 meses de los gatitos y para las gatas hembras gestantes o lactantes. Sus croquetas miniatura son fácilmente rehidratables y permiten una sencilla transición a la alimentación sólida. Una textura tierna adecuada a los dientes de leche del gatito.",
      price: 18500,
      stock: 12,
      imgURL: "https://bestforpets.cl/tienda/9158-large_default/mother-babycat.jpg"
    },
    {
      id: 8,
      category: "salud",
      name: "CAT URINARY OPTITRACT",
      description: "Pro Plan Cat Urinary OptiTract Felino está indicado para gatos con vías urinarias sensibles. Formulado con una tecnología exclusiva, que incluye una combinación de nutrientes que ayuda a prevenir la formación de cristales de estruvita y de oxalato, manteniendo y protegiendo la salud del tracto urinario inferior de los gatos adultos. Disponible en sacos de 3 y 7,5 Kg.",
      price: 30900,
      stock: 34,
      imgURL: "https://bestforpets.cl/tienda/14104-large_default/cat-urinary-optitract.jpg"
    },
    {
      id: 9,
      category: "salud",
      name: "S/D URINARY CARE FELINO",
      description: "Hill's® Prescription Diet® S/D Urinary Care está indicado para cuidar la salud urinaria de su gato y para la disolución de urolitos de estruvita. Por su formulación, este alimento es muy efectivo para disolver los urolitos en períodos tan cortos como 14 días, sin embargo está contraindicado su uso a largo plazo (más de 6 meses). Saco 1,8 Kg",
      price: 29900,
      stock: 55,
      imgURL: "https://bestforpets.cl/tienda/9228-large_default/sd-urinary-care-felino.jpg"
    },
    {
      id: 10,
      category: "salud",
      name: "GRAIN FREE PESCADO OCEÁNICO FELINO",
      description: "Nutrience Grain Free Fórmula Pescado Oceánico es un alimento que constituye una dieta ideal para gatos sensibles a las proteínas de la tierra, huevos y carne de ave. Nutrience Grain Free con fórmula de pescado oceánico también constituye una dieta balanceada para el gato promedio en todas las etapas de su vida. Sin gluten. Saco de 2,5 Kg.",
      price: 28900,
      stock: 75,
      imgURL: "https://bestforpets.cl/tienda/9273-large_default/grain-free-pescado-oce%C3%A1nico-felino.jpg"
    },

];

export default function getItemsFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDB);
    }, 500);
  });
}

export function getSingleItemFromAPI(idParams) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemRequested = itemsDB.find((item) => {
        return item.id === parseInt(idParams);
      });

      console.log("Item Encontrado: ", itemRequested);

      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("El item no existe."));
      }
    }, 500);
  });
}

export function getItemsFromAPIByCategory(categoryid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let arrayItemsRequested = itemsDB.filter((item) => {
        let matchearon = item.category === categoryid;

        return matchearon;
      });

      resolve(arrayItemsRequested);
    }, 500);
  });
}
