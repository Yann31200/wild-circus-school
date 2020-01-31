import React from 'react';
import { Button } from 'semantic-ui-react';
import './formationPage.css';
import theatre from './assets/theatre.jpeg';
import acrobatie from './assets/acrobatie.jpeg';
import jonglage from './assets/jonglage.jpeg';
import dresseur from './assets/dresseur.jpeg';
import voltige from './assets/voltige.jpeg';
import pyrotechnie from './assets/pyrotechnie.jpeg';
import presigiditation from './assets/prestigiditation.jpeg';
import danse from './assets/danse.jpeg';

function FormationPage() {
  return (
    <div className="formation-page">
      <div className="formation-page-title">
        <h2>Formations</h2>
      </div>
      <div className="formations-présentations">
        <p>Au travers de ses formations la Wild Circus School cherche à faire découvrir les arts circassiens afin de s'inscrire dans la pérénitée detradition ancestral</p>
        <p>En étudiant dans notre école il est possible de suivre un apprentisage, selon ses affinitées. Et c'est ces spélisations que nos artiste enseigne au quotidien aupres d'eleve mélant reves et passion</p>
      </div>
      <div className="div-inscription-button" >
        <Button
          color="orange"
          type="button"
          className="button-inscription"
        // onClick={this.getThreeAbsencesWaiting}
        >
          Inscription
          </Button></div>
      <div className="global-card theatre">
        <h4 className="title-card">Théatre</h4>
        <p className="descriptif-card">oidnlkx nlknxlZN QKLNXLKQ NXQLKXho^r ĝgj rîgjeîj gôirrrrj goierhg oeijgio eh^rĝgjrî gjeîjg ôirrr rjgoierh gizh</p>
        <img className="img-card" src={theatre} alt="theatre"></img>
      </div>
      <div className="global-card acrobatie">
        <h4 className="title-card">Acrobatie</h4>
        <p className="descriptif-card">dn,qNKUODfrchir chrio hiuhroshj chiroh r_y_ r^rĝgjrîgjeîjgôirrrrjgoierhgoeijgioehjrijggQDHIHOjpld</p>
        <img className="img-card" src={acrobatie} alt="acrobie"></img>
      </div>
      <div className="global-card jonglage">
        <h4 className="title-card">jonglage</h4>
        <p className="descriptif-card">dsqldpkdeodpc,csoiojoijoics,yu_(y,tcey(_èe,c(ytpç_(e,cth_(pçu,cy(ht_,hdurhgc,rpiuurrrhcohoinxoizh</p>
        <img className="img-card" src={jonglage} alt="jonglage"></img>
      </div>
      <div className="global-card dressage">
        <h4 className="title-card">Dressage</h4>
        <p className="descriptif-card">cjsoi ejiu chsbn xinsic ijcie s,ci,c shkhjkk kkkk kkkkkk kkkkkkkkk kkk kkkkkkkk kkkkkkkk khkhh kjhkjh hhjhôiehjc</p>
        <img className="img-card" src={dresseur} alt="dresseur"></img>
      </div>
      <div className="global-card voltige">
        <h4 className="title-card">Voltige</h4>
        <p className="descriptif-card">idje oizcneiuy teifc,ie hfuei,hf iuerhi,r io,xroi zvbrhie uyxnurf èryncxg fyurgf,x ygrfyurg fyuxryeg fyrxgfyrg</p>
        <img className="img-card" src={voltige} alt="voltige"></img>
      </div>
      <div className="global-card pyrotechnie">
        <h4 className="title-card">Pyrotechnie</h4>
        <p className="descriptif-card">idje oizcneiuy teifc,ie hfuei,hf iuerhi,r io,xroi zvbrhie uyxnurf èryncxg fyurgf,x ygrfyurg fyuxryeg fyrxgfyrg</p>
        <img className="img-card" src={pyrotechnie} alt="pyrotechnie"></img>
      </div>
      <div className="global-card prestidigitation">
        <h4 className="title-card">Prestigiditation</h4>
        <p className="descriptif-card">idje oizcneiuy teifc,ie hfuei,hf iuerhi,r io,xroi zvbrhie uyxnurf èryncxg fyurgf,x ygrfyurg fyuxryeg fyrxgfyrg</p>
        <img className="img-card" src={presigiditation} alt="prestigiditation"></img>
      </div>
      <div className="global-card danse">
        <h4 className="title-card">Danse</h4>
        <p className="descriptif-card">idje oizcneiuy teifc,ie hfuei,hf iuerhi,r io,xroi zvbrhie uyxnurf èryncxg fyurgf,x ygrfyurg fyuxryeg fyrxgfyrg</p>
        <img className="img-card" src={danse} alt="danse"></img>
      </div>
    </div>
  )
}

export default FormationPage;