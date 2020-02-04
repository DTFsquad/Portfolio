import React from 'react';
import './App.css';
// import Navigation from './Navigation/Navigation';
import NavBar from './NavBar/NavBar';
import LineUnderNavigation from './LineUnderNavigation/LineUnderNavigation';


export default class extends React.Component {
  render() {
    return (
      <div className='Frame'>
          <NavBar />
          <LineUnderNavigation />
      </div>
        
    );
  }
}

//Frame (DONE) ROOT

//Home 
  //Navigation
    //Home (DONE)
    //About me (DONE)
    //Skills (DONE)
    //Portfolio (DONE)
    //Contacts (DONE)
  //Name, Role, Light/Dark switch
  //Desktop wide picture/Mobile tall picture
//About me
//Skills
  //Paragraph
  //Icons of tech tools
    //Icon1container
      //LogoSvg
      //NameTool
      //SkillLevelSvg
    //Icon2container
      //LogoSvg
      //NameTool
      //SkillLevelSvg
    //Icon3container
      //LogoSvg
      //NameTool
      //SkillLevelSvg
//Portfolio
  //Paragraph
    //1stProject
      //ScreenshootSVG
      //ProjectNameHyperlink
    //2ndProject
      //ScreenshootSVG
      //ProjectNameHyperlink
    //3rdProject
      //ScreenshootSVG
      //ProjectNameHyperlink
//Contacts
  //Paragraph
  //ContactButton
  //SocialsIcon
    //1stIcon
      //IconSvg
    //2ndIcon
      //IconSvg
    //3rdIcon
      //IconSvg
  //Paragraph