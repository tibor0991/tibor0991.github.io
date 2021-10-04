import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Section } from '../Components';
import {Skills, Contacts} from '../data/data';

export const Home = () =>
  <div className="flex flex-col gap-4">
    <Section title="Hello, World!">
      <p>Cillum ad duis ex enim do voluptate aliqua ut ad. Qui ipsum aliquip et duis anim enim aute eu adipisicing duis officia aliqua sit commodo. Aliqua culpa reprehenderit et ullamco consequat nostrud reprehenderit excepteur ut sit. Laborum quis deserunt aliqua laboris aliqua.

        Et deserunt ea anim in sit tempor duis exercitation magna excepteur cillum sit voluptate. Minim labore voluptate consequat nostrud pariatur excepteur laboris voluptate. Ut incididunt aute amet cupidatat tempor dolore commodo ea incididunt. In ipsum deserunt quis laborum consectetur in voluptate. Velit anim esse esse Lorem minim cupidatat officia ullamco ea aliqua ad.</p>
    <div className="container mx-auto flex flex-col md:flex-row justify-center">
      <Button>
        Download my CV
      </Button>
      <Button>
        Check my Portfolio
      </Button>
      <Button>
        Contact Me
      </Button>
    </div>
    </Section>
    <Section title="My Skills">
      <div id="skillcards" className="container mx-auto grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-row grid-flow-col grid-cols-1 grid-rows-3 gap-4">
        {Skills.map( (skill) => 
        <div className="text-white p-4">
          <div className="flex flex-row gap-2 mb-2">
            <FontAwesomeIcon icon={skill.icon} size="6x"/>
            <p className="text-4xl text-center">{skill.name}</p>
          </div>
          <p>{skill.description}</p>
        </div>)}
      </div>
    </Section>  
    <Section title="Contacts">
      <div className="flex flex-row">
        <div>
          <p className="mr-0 ml-auto">Commodo ad Lorem labore quis magna voluptate eu excepteur. Anim velit excepteur occaecat laboris veniam nisi adipisicing fugiat quis do et. Cillum Lorem quis elit cupidatat enim duis velit sunt. Et adipisicing occaecat id consequat amet in ex nisi elit nostrud adipisicing Lorem.</p>
        </div>
        <div className="flex flex-col ml-0 mr-auto">
          {
            Contacts.map( (contact) => 
            <Button>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={contact.icon} size="2x"/>
                <p className="my-auto">{contact.sitename}</p>
              </div>
            </Button>)
          }
        </div>
      </div>
    </Section>
  </div>