import { Hero } from '../components/sections/Hero';
import { Manifesto } from '../components/sections/Manifesto';
import { Purpose } from '../components/sections/Purpose';
import { Pillars } from '../components/sections/Pillars';
import { TechSteps } from '../components/sections/TechSteps';
import { Awareness } from '../components/sections/Awareness';
import { CompareTeaser } from '../components/sections/CompareTeaser';
import { ProjectTeaser } from '../components/sections/ProjectTeaser';
import { Closing } from '../components/sections/Closing';
import { useSeo } from '../hooks/useSeo';

export default function Home() {
  useSeo('', 'Plataforma de informação, apoio técnico e conscientização sobre pulverização com drones agrícolas — projeto de extensão da FEMA.');
  return (
    <>
      <Hero />
      <Manifesto />
      <Pillars />
      <Purpose />
      <TechSteps />
      <Awareness />
      <CompareTeaser />
      <ProjectTeaser />
      <Closing />
    </>
  );
}
