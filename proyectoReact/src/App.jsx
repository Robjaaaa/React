import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Tarjetas from './tarjetas'
import ferne from './assets/ferne.jpg'
import milanesa from './assets/milanesa.jpg'
import ribeye from './assets/ribeye.jpg'
import Anuncio from './anuncio'
import Secundaria from './secundaria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <section className="tarjetaflex">
        <Tarjetas img={ferne} titulo={"Fernet con Coca"} parrafo={"Se debe poner hielo en el recipiente, luego el fernet, la bebida de cola y por último si hace mucha espuma se debe cortar con más fernet."}/>
        <Tarjetas img={milanesa} titulo={"Milanesa Napolitana"} parrafo={"Milanesa de ternera cubierta con salsa de tomate y queso mozzarella, añadiendo diversos ingredientes, como jamón, rodajas de tomate, o cebolla."}/>
        <Tarjetas img={ribeye} titulo={"Ribeye"} parrafo={"Rib eye sazonado con sal y pimienta, y asado a la parrilla. Como todo buen corte de carne, éste sólo necesita su sal y pimienta."}/>

      </section>
      <div>
        <Secundaria titulo={"Horarios de atención"} parrafo={"🔸RESTAURANTE PET FRIENDLY🐾💕HORARIO🔸️Lunes a Domingo de 10:30 a 21:00 Hrs🔸️☎ 322772355"}/>
        <Secundaria titulo={"Ubicaciones"} parrafo={"Santa Ana, San José Province, Costa Rica · Pavas, San José Province, Costa Rica · Escazú, San José Province, Costa Rica · Los Yoses, San José Province, Costa Rica · Tres Ríos, Cartago Province, Costa Rica"}/>
      </div>
      <div className='ads'>
        <Anuncio titulo={"More for you"} subtitulo={"Primo"} parrafo={"Water Dispensers for cool, refreshing drinks"} linkuno={"Ad"} linkdos={"Microsoft Ads"}/>
        <Anuncio titulo={"More for you"} subtitulo={"Business Insider"} parrafo={"Elon Musk says he gets 'swarmed' at parties by people wanting to discuss work, and struggles to trust people, reporter who secured rare interview says"} linkuno={"Ad"} linkdos={"Microsoft Ads"}/>
        <Anuncio titulo={"More for you"} subtitulo={"Dubai Villa"} parrafo={"Prices for villas in Dubai may surprise you"} linkuno={"Ad"} linkdos={"Microsoft Ads"}/>
      </div>
    </div>

  )
}

export default App
