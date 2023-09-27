import React, { useState } from 'react';
import style from '/styles/index.module.css';
import Layout from '../components/layout';
import Box from '../components/box';

export default function Home() {
  const projects = [
    { title: "wiki-valley", href: "https://wiki-valley.github.io" },
    { title: "Cauadsm", href: "https://cauadsm.github.io" },
    { title: "bikcraft", href: "https://bikcraft.github.io/" },
    { title: "camera.tools", href: "https://camera-tools.github.io/" },
    { title: "github", href: "/" },
    // Adicione mais projetos conforme necessário
  ];
  return (
    <Layout>
      <p>Olá, sou o Eduardo, um apaixonado por front-end com foco em soluções criativas e resultados excepcionais. Minha jornada é marcada por anos de exploração em design responsivo, otimização de desempenho e integração perfeita de interfaces, capacitando-me a desenvolver sites responsivos e bem otimizados. Combinando expertise técnica e abordagem orientada para o cliente, estou comprometido em elevar cada projeto a um novo patamar. Explore meu portfolio e junte-se a mim em uma jornada de inovação e conquistas.</p>
      <h3>Meus Projetos:</h3>
      <div className={style.uga}>
      {projects.map((project, index) => (
        <Box key={index} title={project.title} href={project.href}/>
      ))}
      </div>
    </Layout>
  );
}
