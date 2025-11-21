import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { DataViz } from './DataViz'
import { reportData } from '../data/report'

interface ExperienceProps {
  activeMonthIndex: number
}

export const Experience = ({ activeMonthIndex }: ExperienceProps) => {
  return (
    <>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Environment preset="city" />
      
      <group position-y={-2}>
        <DataViz data={reportData.categories[activeMonthIndex]} />
        <ContactShadows opacity={0.5} scale={15} blur={2} far={10} resolution={256} color="#000000" />
      </group>
    </>
  )
}
