import './Capa.css';
import banner from '../../assets/banner.png';
import bannerMobile from '../../assets/banner_mobile.png';

export default function Capa() {
    return (
        <section className='secao_capa'
            style={{
                backgroundImage: `url(${banner})`
            }}
            >

            <div className='texto'>
                <h2>Preview</h2>
                <h1>Mais curtidos</h1>
                <button className='btn'>Comprar</button>
            </div>
        </section>
    )
}