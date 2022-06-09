import { IProyect } from 'utils/interfaces/proyects.interface'
import DonateApp from 'utils/assets/images/donate-app.png'
import MyMusicApp from 'utils/assets/images/my-music-app2.png'
import AlgoHispano from 'utils/assets/images/algo-hispano1.png'
import BlockMaster from 'utils/assets/images/blockmaster.png'
import TiendaGeek from 'utils/assets/images/tiendageek.png'

export const proyects: IProyect[] = [
  {
    id: 1,
    name: 'DotaneApp',
    description: 'App para hacer donaciones de productos, chatear en tiempo real con otros usuarios, registro con cuenta de Google o correo electrónico.',
    img: DonateApp,
    url: 'https://donate-app-26312.web.app/welcome'
  },
  {
    id: 5,
    name: 'Daily Bits',
    description: 'App de trivia de tecnologías web como HTML, Javascript, css, entre otras.',
    img: TiendaGeek,
    url: 'https://github.com/Jhon-H/DailyBits'
  },
  {
    id: 2,
    name: 'My Music App',
    description: 'App para listar músicas, esucuchar previews, buscar músicas y guardar tus favoritas. Incio de sesión con cuente de Google o correo electrónico.',
    img: MyMusicApp,
    url: 'https://music-app-47033.web.app/auth/login'
  },
  {
    id: 4,
    name: 'Block Master',
    description: 'Sitio web de peliculas, puedes filtrar por rating y puede agregar tus propias películas.',
    img: BlockMaster,
    url: 'https://jhon-h.github.io/block-master/'
  },
  {
    id: 3,
    name: 'AlgoHispano',
    description: 'Sitio web de comunidad de discord Algohispano, comunidad de algoritmos, ciencias de datos, entrevistas técnicas y más.',
    img: AlgoHispano,
    url: 'https://algo-hispano.web.app/'
  },
  {
    id: 6,
    name: 'Tienda Geek',
    description: 'E-commerce de ropa, simula pago con tarjeta y carrito de compras.',
    img: TiendaGeek,
    url: 'https://tienda-geeek.netlify.app/index.html'
  }
]
