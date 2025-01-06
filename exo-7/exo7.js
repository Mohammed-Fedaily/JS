console.log("exo-7");

console.log("1. Affichage des articles:");
jsonDatas.forEach((article) => {
  console.log(article);
});

const typeTranslations = {
  car: "Voitures",
  house: "Maisons",
  game: "Jeux",
  videoGame: "Jeux Vidéos",
  show: "Spectacles",
};

console.log("2. Objet de traduction:", typeTranslations);

const articlesWithTranslation = jsonDatas.map((article) => {
  return {
    ...article,
    translatedType: typeTranslations[article.type] || article.type,
  };
});

console.log("3. Articles avec traduction:");
articlesWithTranslation.forEach((article) => {
  console.log(
    `Article: ${article.name}, Type: ${article.type}, Type traduit: ${article.translatedType}`
  );
});

function transformData(originalData) {
  const groupedByType = originalData.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = {
        type: item.type,
        items: [],
      };
    }

    const itemWithContact = {
      ...item,
      contact: {
        lastName: "Luka",
        firstName: "Modric",
        address: "Luka.Modric@gmail.cpm",
      },
    };

    delete itemWithContact.type;

    acc[item.type].items.push(itemWithContact);
    return acc;
  }, {});

  return Object.values(groupedByType);
}

const newJsonDatas = transformData(jsonDatas);

console.log("Structure transformée :", newJsonDatas);
