import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
        id: uuidv4(),  
        nome: 'Bambuólogo',
        cor: '#4CAF50', // Verde Bambu
    },
    {
        id: uuidv4(),
        nome: 'Guardião das Montanhas Nebulosas',
        cor: '#5C6BC0', // Azul Nebuloso
    },
    {
        id: uuidv4(),
        nome: 'Artista de Nuvens',
        cor: '#81D4FA', // Azul Celeste
    },
    {
        id: uuidv4(),
        nome: 'Culinário do Néctar',
        cor: '#FF7043', // Laranja Néctar
    },
    {   
        id: uuidv4(),
        nome: 'Mestre da Dança do Crepúsculo',
        cor: '#AB47BC', // Roxo Crepúsculo
    },
    {   
        id: uuidv4(),
        nome: 'Tecelão de Estrelas',
        cor: '#FFD54F', // Amarelo Estrela
    },
    {   
        id: uuidv4(),
        nome: 'Navegador dos Sonhos',
        cor: '#8E24AA', // Roxo Sonho
    }
  ]);

  const inicial = [
    {   
        id: uuidv4(),
        favorito: false, 
        nome: 'Dr. Zhen Bao',
        cargo: 'Especialista em bambu',
        imagem: 'imagens/time/Dr. Zhen Bao.jfif',
        time: times[0].nome
    },
    {
        id: uuidv4(),
        favorito: false,
        nome: 'Prof. Wei Liang',
        cargo: 'Pesquisador de bambus',
        imagem: 'imagens/time/Prof. Wei Liang.jfif',
        time: times[0].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Dr. Yu Fei',
        cargo: 'Cientista ambiental',
        imagem: 'imagens/time/Dr. Yu Fei.jfif',
        time: times[0].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Profª. Mei Ling',
        cargo: 'Especialista em botânica',
        imagem: 'imagens/time/Prof. Mei Ling.jfif',
        time: times[0].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Shifu Tian',
        cargo: 'Protetor das montanhas',
        imagem: 'imagens/time/Shifu Tian.jfif',
        time: times[1].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Jian Guo',
        cargo: 'Explorador das montanhas',
        imagem: 'imagens/time/Jian Guo.jfif',
        time: times[1].nome
    },
    {   id: uuidv4(),
        favorito: false,
        nome: 'Ming Shan',
        cargo: 'Montanhista tradicional',
        imagem: 'imagens/time/Ming Shan.jfif',
        time: times[1].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Xue Long',
        cargo: 'Guia turística',
        imagem: 'imagens/time/Xue Long.jfif',
        time: times[1].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Mei Yun',
        cargo: 'Criadora de arte',
        imagem: 'imagens/time/Mei Yun.jfif',
        time: times[2].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Hua Yi',
        cargo: 'Pintora de nuvens',
        imagem: 'imagens/time/Hua Yi.jfif',
        time: times[2].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Xiao Ning',
        cargo: 'Artista visual',
        imagem: 'imagens/time/Xiao Ning.jfif',
        time: times[2].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Lan Mei',
        cargo: 'Designer de cenários',
        imagem: 'imagens/time/Lan Mei.jfif',
        time: times[2].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Lin Xi',
        cargo: 'Chef especialista',
        imagem: 'imagens/time/Chef Lin Xi.jfif',
        time: times[3].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Bao Yu',
        cargo: 'Alquimista de sabores',
        imagem: 'imagens/time/Chef Bao Yu.jfif',
        time: times[3].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Ping An',
        cargo: 'Confeiteiro criador',
        imagem: 'imagens/time/Chef Ping An.jfif',
        time: times[3].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Xiang Hua',
        cargo: 'Culinária floral',
        imagem: 'imagens/time/Chef Xiang Hua.jfif',
        time: times[3].nome
    },
    {   id: uuidv4(),
        favorito: false,
        nome: 'Lian Hua',
        cargo: 'Coreógrafa de dança',
        imagem: 'imagens/time/Lian Hua.jfif',
        time: times[4].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Mei Zhao',
        cargo: 'Instrutor de dança',
        imagem: 'imagens/time/Mei Zhao.jfif',
        time: times[4].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Yue Xin',
        cargo: 'Artista performática',
        imagem: 'imagens/time/Yue Xin.jfif',
        time: times[4].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Xiao Ming',
        cargo: 'Criadora de espetáculos',
        imagem: 'imagens/time/Xiao Ming.jfif',
        time: times[4].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Jin Xing',
        cargo: 'Tecelã celestial',
        imagem: 'imagens/time/jin_xing.jpg',
        time: times[5].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Xing Yue',
        cargo: 'Designer de moda',
        imagem: 'imagens/time/xing_yue.jpg',
        time: times[5].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Lan Tian',
        cargo: 'Artista têxtil',
        imagem: 'imagens/time/lan_tian.jpg',
        time: times[5].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Hua Cheng',
        cargo: 'Tecelão espacial',
        imagem: 'imagens/time/hua_cheng.jpg',
        time: times[5].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Meng Hao',
        cargo: 'Guia dos sonhos',
        imagem: 'imagens/time/meng_hao.jpg',
        time: times[6].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Xian Zhe',
        cargo: 'Contador de histórias',
        imagem: 'imagens/time/xian_zhe.jpg',
        time: times[6].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Ling Yun',
        cargo: 'Intérprete de sonhos',
        imagem: 'imagens/time/ling_yun.jpg',
        time: times[6].nome
    },
    {   
        id: uuidv4(),
        favorito: false,
        nome: 'Hua Meng',
        cargo: 'Pesquisador de sonhos',
        imagem: 'imagens/time/hua_meng.jpg',
        time: times[6].nome
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
        if(time.id === id) {
            time.cor = cor;
        }
        return time;
    }));
  }

 function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() } ])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime = {cadastrarTime}
        times={times.map(time => time.id)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
     />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
            <Time
                aoFavoritar={resolverFavorito}
                mudarCor={mudarCorDoTime} 
                key={indice} 
                time={time} 
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
