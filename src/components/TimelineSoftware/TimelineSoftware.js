import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index'; // Importing Section components
import theme from '../../themes/default'; 
import TimelineItemSoftware from './TimelineItemSoftware';


  function TimelineSoftware() {
    const { colors } = theme; // Destructuring colors from theme
    return (
      <>
        {/* Profile section */}
        <Section id="profile" style={{
          marginLeft:"0px",
          }}>
          <SectionTitle>About Me:</SectionTitle>
            <SectionText >
              Combining a background in organic chemistry with a fervent passion for software, my career reflects a journey of innovation and dedication. Transitioning from mastering organic synthesis to delving into software development intricacies, I embody a fusion of analytical prowess and creative problem-solving.
            </SectionText>
        </Section>
        
        {/* Research Experience section */}
        <Section id="Journey-in-Software">
          <SectionTitle>My Journey towards Software Development:</SectionTitle>
          <br/>
          <TimelineItemSoftware title="Intro to Html,CSS and Pascal, High School" date=" 2015">
            <SectionText>
              <br />
              I was initially introduced to web development through HTML and CSS. My first project involved creating an emulator, similar to that of Wikipedia. At the time, I opted to use tables to structure the layout, as I was unfamiliar with CSS grid. Consequently, I improvised my own makeshift "grid" property. <br/>
              My first encounter with Pascal introduced me to the world of programming languages. It led me to embark on a project where I developed a calculator, marking my initial journey into coding. 
            </SectionText>
          </TimelineItemSoftware>
        <Section style={{
          display:"flex",
          flex: "1fr 1fr",
          flexDirection: "row",
          marginTop:"-40px",
          marginBottom:"20px",
        }}>
          <img src="/images/HtmlIcon.png" width="50%"  style={{
            borderRadius:"3%",
          }
            }/> 
          <img src="/images/CSSIcon.png" width="50%"  style={{
            borderRadius:"3%",
          }
            }/><div/>
        </Section>
       
          <TimelineItemSoftware title="Intro to Object Oriented Programming - Java" date=" 2017">
            <SectionText>
              From my initial exposure to Java and object-oriented programming during my university studies, I've been drawn to the precision and logic inherent in coding. This structured approach resonates with my background in organic chemistry, where creativity is encouraged within the framework of defined principles. Programming offers a realm where multiple correct solutions exist, mirroring the nuanced challenges of scientific exploration.
            </SectionText>
          </TimelineItemSoftware>
          <img src="/images/JavaIcon.png" width="15%"/><div/>

          <TimelineItemSoftware title="Undergraduate Research Assistant - McGill University, Ariya Group (2019 - 2020)" date=" September 2019">
            <SectionText>
            
            </SectionText>
          </TimelineItemSoftware>
          <TimelineItemSoftware title="Undergraduate Research Assistant - McGill University, Tsantrizos Group (2019 - 2020)" date=" September 2019">
            <SectionText>
            
            </SectionText>
          </TimelineItemSoftware>

           <div/>

          <TimelineItemSoftware title="Research Assistant Intern - IntelliSyn R&D (2020)" date=" May 2020">
            <SectionText>
              
            </SectionText>
          </TimelineItemSoftware>
          <TimelineItemSoftware title="Graduate Research Assistant - McGill University, Gleason Group (2020 - 2023)" date=" September 2020">
            <SectionText>
               
            </SectionText>
          </TimelineItemSoftware>
          
          <TimelineItemSoftware title="Research Associate - NuChem Sciences (2023 - Present)" date="October 2023">
            <SectionText>
              
            </SectionText>
          </TimelineItemSoftware>
        </Section>
        
      </>
    );
  }

export default TimelineSoftware;
