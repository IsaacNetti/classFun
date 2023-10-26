const getMargaritas = async () => {
    const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
};
const showMargaritas = async () => {
    let margaritas = await getMargaritas();
    let margaritaSection = document.getElementById("margarita-body");
  
    margaritas.forEach((margarita) =>
      margaritaSection.append(getMargaritaItem(margarita))
    );
  };

const getMargaritaItem = (margarita) => {
    const margaritaSection = document.createElement("section");
    margaritaSection.classList.add("margarita");

    const img = document.createElement("img");
    img.src = margarita.strDrinkThumb;

    margaritaSection.append(img);
};

window.onload = () => showMargaritas();