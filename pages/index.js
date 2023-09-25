import style from '/styles/index.module.css';
import Layout from '../components/layout';
import Box from '../components/box';

export default function Home() {
  return (
    <Layout>
      <p>Olá, sou o Eduardo, um apaixonado por front-end com foco em soluções criativas e resultados excepcionais. Minha jornada é marcada por anos de exploração em design responsivo, otimização de desempenho e integração perfeita de interfaces, capacitando-me a desenvolver sites responsivos e bem otimizados. Combinando expertise técnica e abordagem orientada para o cliente, estou comprometido em elevar cada projeto a um novo patamar. Explore meu portfólio e junte-se a mim em uma jornada de inovação e conquistas.</p>
      <h3>Meus Projetos:</h3>
      <div className={style.uga}>
      <Box title="bikcraft">
      </Box>
      <Box title="Wiki Valley">
      </Box>
      <Box title="Cauadsm">
      </Box>
      <Box title="camera.tools">
      </Box>
      </div>
    </Layout>
  );
}
