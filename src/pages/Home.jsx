import { Button, Card } from '../Components';

export const Home = () =>
  <div>
    <div className="container my-4 mx-auto">
      <h1 className="text-5xl text-center text-white">Hello, World!</h1>
      <p className="text-white">Cillum ad duis ex enim do voluptate aliqua ut ad. Qui ipsum aliquip et duis anim enim aute eu adipisicing duis officia aliqua sit commodo. Aliqua culpa reprehenderit et ullamco consequat nostrud reprehenderit excepteur ut sit. Laborum quis deserunt aliqua laboris aliqua.

        Et deserunt ea anim in sit tempor duis exercitation magna excepteur cillum sit voluptate. Minim labore voluptate consequat nostrud pariatur excepteur laboris voluptate. Ut incididunt aute amet cupidatat tempor dolore commodo ea incididunt. In ipsum deserunt quis laborum consectetur in voluptate. Velit anim esse esse Lorem minim cupidatat officia ullamco ea aliqua ad.</p>
    </div>
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

    <div id="skillcards" className="container mx-auto grid md:grid-cols-3 md:grid-flow-row grid-rows-3 grid-flow-col gap-4">
      <Card title="Unity Development" img="img/Unity.jpg" description="Eu pariatur ipsum sit ea commodo Lorem ea qui incididunt. Eiusmod nisi est quis velit aute. Incididunt mollit consequat occaecat eiusmod velit ullamco amet sunt laborum officia laborum aliquip minim. Sunt deserunt voluptate elit elit do ut ea ad. Velit culpa culpa tempor tempor."/>
      <Card title="Front-End Development" img="img/frontend.jpg" description="Eu pariatur ipsum sit ea commodo Lorem ea qui incididunt. Eiusmod nisi est quis velit aute. Incididunt mollit consequat occaecat eiusmod velit ullamco amet sunt laborum officia laborum aliquip minim. Sunt deserunt voluptate elit elit do ut ea ad. Velit culpa culpa tempor tempor."/>
      <Card title="Embedded Programming" img="img/Arduino.jpg" description="Eu pariatur ipsum sit ea commodo Lorem ea qui incididunt. Eiusmod nisi est quis velit aute. Incididunt mollit consequat occaecat eiusmod velit ullamco amet sunt laborum officia laborum aliquip minim. Sunt deserunt voluptate elit elit do ut ea ad. Velit culpa culpa tempor tempor."/>
    </div>
  </div>