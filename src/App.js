import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
      <div class ='contenedor-principal'>
        <h1>Empoderamiento Digital: Mujeres Transformando el Código</h1>
        {/* Componente reutilizable */}
        <Perfil
          nombre = 'Adriana Maulini 🩷'
          pais = 'Buenos Aires'
          /* El unico que sera dinamico */
          imagen = 'adriana'
          cargo = 'Technical leader'
          empresa = 'Innovation Lab de AlixPartners'
          resena = 'Adriana es una ingeniera de software con 10 años de experiencia en desarrollo de software con diferentes tecnologías, específicamente Microsoft .Net. Antes de unirse a AlixPartners, trabajó como desarrolladora senior en una destacada firma multinacional de consultoría de software.'
        />

        <Perfil
          nombre = 'Miriam Gonzalez 💜'
          pais = 'España'
          /* El unico que sera dinamico */
          imagen = 'miriam'
          cargo = 'Ingeniera de software, divulgadora y podcaster'
          empresa = '64 Robots'
          resena = 'Creadora de contenido sobre programación y tecnología, divulgadora y podcaster. Con una gran comunidad de más de 260k followers en redes sociales, ha sido nombrada Top Voices Next Generation por LinkedIn como una de las 10 jóvenes profesionales a seguir en 2022. Además, trabajo en remoto como ingeniera de software para 64 Robots, una empresa de Estados Unidos, y he dado charlas técnicas en eventos internaciones sobre programación.'
        />

        <Perfil
          nombre = 'Arelis Reyes 💙'
          pais = 'México'
          /* El unico que sera dinamico */
          imagen = 'arelis'
          cargo = 'Ingeniera de software, divulgadora y podcaster'
          empresa = '64 Robots'
          resena = 'Más de dos años de experiencia enseñando programación enfocada en: Visión por Computador e IA (Python, OpenCV, Numpy, Pandas), Videojuegos 2D, 3D, Móvil, Realidad Aumentada (Godot, Roblox, Unity), desarrollo web (HTML, CSS, JavaScript ). Creador de contenidos educativos en redes sociales enfocados en tecnología, programación y videojuegos para principiantes.'
        />
          
      </div>
    </div>
  );
}

export default App;
