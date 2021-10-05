import { useEffect } from "react";
import { Switch } from "react-router";
import { GridView, ProjectCard, Section } from "../Components";
import { PortfolioData } from "../data/data";

export const Portfolio = () =>
<div>
    <Section title="Delivered Projects">
        <p>Here you'll find my released projects, click on each item to read more.</p>
        <GridView columns="4">
        {
            PortfolioData.delivered.map( 
                (project) => 
                <ProjectCard title={project.name} subtitle={project.description} preview={project.preview}/>
            )
        }
        </GridView>
    </Section>
    <Section title="Demos & Samples">
        <p>A collection of demos, samples and abandoned projects; click on each item to know more.</p>
        <GridView columns="8">
        {
            PortfolioData.demos.map( (sample) => <ProjectCard />)
        }
        </GridView>
    </Section>
</div>