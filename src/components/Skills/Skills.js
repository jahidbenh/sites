import React from 'react';
import Skilltemplate from './Skilltemplate';

function Skills() {

  return(
  <div class="items-center align-middle">
  <div class="flex flex-row items-center">
    <div class="basis-1/3 font-amatic text-center text-6xl font-extrabold text-slate-600 tracking-widest">
      experience<span class="text-secondary">.</span>
    </div>
    <div class="basis-2/3 flex flex-col items-center">
      <div class="flex flex-row items-center pb-10">
        <div class="pr-10">
        <Skilltemplate title="Power BI" elements={['DAX','Power Query','Premium Workspace']} description="I manage the premium Workspace for Cartier Operations and develop dataflows and dashboards for a various set of clients" />
        </div>
        <div class="">
        <Skilltemplate title="Front-End Development" elements={['React','TailwindCSS','Learning Next.js']} description="I am learning Front-End web development on the side as a hobby, although I am sure it will be helpful at some point." />
        </div>
      </div>
      <div class="flex flex-row items-center">
        <div class="pr-10">
        <Skilltemplate title="Languages" elements={['Native French','Fluent English','Fluent Spanish']} description="🇫🇷🗣 I was born in Marseille ⚽️. I love watching TV series 🇺🇸🇬🇧🗣 and my girlfriend is from Venezuela 🇻🇪🇪🇸🗣" />
        </div>
        <div class="">
          <Skilltemplate title="Other" elements={['SAP / SAP BW','Looker','BigQuery']} description="I used SAP as a planner, and I develop various SQL queries in BigQuery, alimenting dashboard I build in Looker" />
        </div>
        
      </div>
    </div>
  </div>
  </div>
)
  }

export default Skills