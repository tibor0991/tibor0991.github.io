import { GridView, ProjectCard, Section } from "../Components";
import { PortfolioData } from "../data/data";

export const Portfolio = () =>
<div>
    <Section title="Delivered Projects">
        <GridView>
        {
            PortfolioData.delivered.map( 
                (project) => 
                <ProjectCard title={project.name} subtitle={project.description} preview={project.preview}/>
            )
        }
        </GridView>
    </Section>
</div>