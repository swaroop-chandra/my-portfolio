import * as React from "react";
import CardData from "../card/CardData";
import bikeimage from "../../images/bikeimage.webp";
import dashboard_image from "../../images/dashboard_image.jpeg";
import netflix from "../../images/netflix.jpeg";

export default function Projects() {
  const dataCard1 = `Developed a member-only application for all the project associates to check the required ASM(Area Sales Manager) and FSE(Field Sales Executive)for their respective projects.`;
  const title1 = "P";
  const cardTitle1 = "Project Associate Dashboard";
  const cardHeader1 = "Jul 14/21 - Sep 30/21";
  const cardImage1 = dashboard_image;
  const gitLink1 = "";
  const appLink1 =
    "https://drive.google.com/drive/u/1/folders/11lGGEqqjbFohomhlN5iv9dNAbGUFSbfX";

  const dataCard2 = `Khoka is an online rental bike booking platform, that is solely designed for students to use rental bikes for their commute at affordable rates.`;
  const title2 = "K";
  const cardTitle2 = "Khoka Bike Rents";
  const cardHeader2 = "Dec 1/21 - Mar 22/21";
  const cardImage2 = bikeimage;
  const gitLink2 = "https://github.com/swaroop-chandra/khoka.git";
  const appLink2 = "https://khokaa-9963c.firebaseapp.com";

  const dataCard3 = `A project made for practice and to show my ability to create a flexible application that adapts the UI changes.`;
  const title3 = "N";
  const cardTitle3 = "Netflix Clone";
  const cardHeader3 = "Dec 14/20 - Sep 30/20";
  const cardImage3 = netflix;
  const gitLink3 = "https://github.com/swaroop-chandra/netflix-clone";
  const appLink3 = "https://netflix-clone-51c14.firebaseapp.com/";

  return (
    <div id="projects">
      <div className="projects_container">
        <CardData
          title={title2}
          dataCard={dataCard2}
          cardTitle={cardTitle2}
          cardHeader={cardHeader2}
          cardImage={cardImage2}
          gitLink={gitLink2}
          appLink={appLink2}
        />
        <CardData
          title={title1}
          dataCard={dataCard1}
          cardTitle={cardTitle1}
          cardHeader={cardHeader1}
          cardImage={cardImage1}
          gitLink={gitLink1}
          appLink={appLink1}
        />

        <CardData
          title={title3}
          dataCard={dataCard3}
          cardImage={cardImage3}
          cardTitle={cardTitle3}
          cardHeader={cardHeader3}
          gitLink={gitLink3}
          appLink={appLink3}
        />
      </div>
    </div>
  );
}
