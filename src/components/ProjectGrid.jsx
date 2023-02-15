import React from "react";
const ohmyfood = require("../images/ohmyfood.png")
const kanap = require("../images/kanap.png")
const kasa = require("../images/kasa.png")
const piiquante = require("../images/piiquante.png")

const ProjectGrid = () => { 
  return (
    <div className="projects__grid">
        <a href="https://github.com/Emiliengrbn/P3_ohmyfood" target="_blank" rel="noreferrer" className="card__project__grid">
            <img src={ohmyfood} alt="Oh my food" className="project__img project__img__ohmyfood" />
            <div className="content__project__grid">
                <p className="title__content__project__grid">Ohmyfood</p>
                <p className="text__content__project__grid">
                    Ohmyfood est un projet de la formation "Développeur web" d'openclassrooms. <br /> Celui-ci consiste à intégrer les maquettes d'un site qui répertorie les menus de restaurants gastronomiques.
                    Seul le html et css sont autorisés
                </p>
            </div>
        </a>
        <a href="https://github.com/Emiliengrbn/P5_KANAP" target="_blank" rel="noreferrer" className="card__project__grid">
            <img src={kanap} alt="Kanap" className="project__img project__img__kanap" />
            <div className="content__project__grid">
                <p className="title__content__project__grid">Kanap</p>
                <p className="text__content__project__grid">
                    Kanap est un projet de la formation "Développeur web" d'openclassrooms. Celui-ci consiste à apprendre le javaScript en codant un site e-commerce avec différentes fonctionnalitées que vous pourrez découvrir.
                    
                </p>
            </div>
        </a>
        <a href="https://github.com/Emiliengrbn/P6_piiquante" target="_blank" rel="noreferrer" className="card__project__grid">
            <img src={piiquante} alt="Piiquante" className="project__img project__img__piiquante" />
            <div className="content__project__grid">
                <p className="title__content__project__grid">Piiquante</p>
                <p className="text__content__project__grid">
                   Piiquante est un projet de la formation "Développeur web" d'openclassrooms. <br /> Pour ce projet j'étais chargé de créer une API pour un site qui permet aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent.
                </p>
            </div>
        </a>
        <a href="https://github.com/Emiliengrbn/P7_KASA" target="_blank" rel="noreferrer" className="card__project__grid">
            <img src={kasa} alt="kasa" className="project__img project__img__kasa" />
            <div className="content__project__grid">
                <p className="title__content__project__grid">Kasa</p>
                <p className="text__content__project__grid">
                   Kasa est le dernier projet de la formation "Développeur web" d'openclassrooms. <br /> La mission était de créer une application en React pour une entreprise de location d'appartements.
                   Nous avions un fichier JSON avec toutes les informations des logements.
                </p>
            </div>
        </a>
    </div>
  );
};

export default ProjectGrid;