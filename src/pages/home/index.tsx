import * as S from "./styled";

import About from "@/components/about";
import Certificate from "@/components/certificate";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Greetings from "@/components/greetings";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

function Home() {
  return (
    <S.Container>
      <Greetings />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificate />
      <Contact />
    </S.Container>
  );
}

export default Home;
