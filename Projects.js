const projects_container = document.getElementById("projets-wrapper");
const vignette_path = "Images/Vignettes";
const langage_path = "Images/Langages";


// Ouvrir le fichier JSON
fetch("data.json")
  .then(response => {
	if (response.ok){
		response.json().then(data => {
			var datefirst = data['projets'][data['projets'].length-1]['date'];
			let text = document.createElement("p");
			text.classList.add("date-indicator");
			text.innerHTML = datefirst;
			projects_container.appendChild(text);
			
			for (let i = data['projets'].length-1; i >= 0; i--){

				if (data['projets'][i]['date'] != datefirst){
					datefirst = data['projets'][i]['date'];
					let text = document.createElement("p");
					text.classList.add("date-indicator");
					text.innerHTML = datefirst;
					projects_container.appendChild(text);
				}
				Create_Projet(data['projets'][i]);
			}
	  })
	}
	else{
	  console.log("Erreur : Pas d'accès aux données");
	}
  });


  /* Fonction qui créer un projet */
function Create_Projet(projet){
	// Créer la carte pour le projet
	let projet_element = document.createElement("div");
   projet_element.classList.add("projet-element");
   projects_container.appendChild(projet_element);
	// Vignette container
	let image_div = document.createElement("div");
   image_div.classList.add("vignette_projet");
   projet_element.appendChild(image_div);
	// Vignette
	let vignette_projet = document.createElement("img");
	vignette_projet.classList.add("image_projet")
	vignette_projet.src = `${vignette_path}/${projet['image']}`;
	vignette_projet.alt = `Logo ${projet['nom']}`;
	image_div.appendChild(vignette_projet);
	// Informations container
	let informations_div = document.createElement("div");
   informations_div.classList.add("text_projet");
   projet_element.appendChild(informations_div);
	// Titre
	let title_projet = document.createElement("h2");
	title_projet.innerHTML = projet['nom'];
	informations_div.appendChild(title_projet);
	// Date
	let date_projet = document.createElement("p");
	date_projet.classList.add("légende_projet");
	date_projet.innerHTML = `Créé en ${projet['date']}`;
	informations_div.appendChild(date_projet);
	// Collaboration
	if (projet['collaboration'] !== null){
		date_projet.innerHTML += ` avec <span style="font-weight: 600;">${projet['collaboration']}</span>`;
	}
	// Voir / Télécharger
	if (projet['lien_voir'] !== null){
		date_projet.innerHTML += `<a class="télecharger_projet" href="${projet['lien_voir']}" target="_blank">Voir</a>`;
	} else if (projet['lien_télécharger'] !== null){
		date_projet.innerHTML += ` <a class="télecharger_projet" href="${projet['lien_télécharger']}" target="_blank">Télécharger</a>`;
	}
	// Description
	let description_projet = document.createElement("p");
	description_projet.innerHTML = projet['description'];
	informations_div.appendChild(description_projet);
	// Langage container
	let langage_projet = document.createElement("div");
   langage_projet.classList.add("langage_container");
   informations_div.appendChild(langage_projet);
	// Langages
	for (let i = 0; i < projet['langage'].length; i++) {
		langage_projet.innerHTML += `
			<img class="langage_logo" src="${langage_path}/${projet["langage"][i]}.png" title="${projet['langage'][i]}" alt="Logo ${projet['langage'][i]}"></img>
		`;
	}
}