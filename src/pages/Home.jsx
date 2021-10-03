import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Section } from '../Components';
import {Skills, Contacts} from '../data/data';

export const Home = () =>
  <div className="flex flex-col gap-4">
    <Section title="Hello, World!">
      <p>Cillum ad duis ex enim do voluptate aliqua ut ad. Qui ipsum aliquip et duis anim enim aute eu adipisicing duis officia aliqua sit commodo. Aliqua culpa reprehenderit et ullamco consequat nostrud reprehenderit excepteur ut sit. Laborum quis deserunt aliqua laboris aliqua.

        Et deserunt ea anim in sit tempor duis exercitation magna excepteur cillum sit voluptate. Minim labore voluptate consequat nostrud pariatur excepteur laboris voluptate. Ut incididunt aute amet cupidatat tempor dolore commodo ea incididunt. In ipsum deserunt quis laborum consectetur in voluptate. Velit anim esse esse Lorem minim cupidatat officia ullamco ea aliqua ad.</p>
    <div className="container mx-auto my-2 flex flex-col md:flex-row justify-center">
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
      <div className="grid grid-rows-1 grid-cols-2">
        <div>
          <p>Need help for your next big project?</p>
        </div>
        <div className="flex flex-col">
          {
            Contacts.map( (contact) => 
            <Button>
              <div className="flex gap-2 mx-auto">
                <FontAwesomeIcon icon={contact.icon} size="2x"/>
                <p className="my-auto">{contact.sitename}</p>
              </div>
            </Button>)
          }
        </div>
      </div>
    </Section>
  </div>