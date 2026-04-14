import './Produtos.css';

import alfajor from '../../assets/alfajor.png';
import bomba from '../../assets/bomba.png';
import croissant from '../../assets/croissant.png';
import cupcake from '../../assets/cupcake.png';
import dunnut from '../../assets/dunnut.png';
import muffin from '../../assets/muffin.png';

export default function Produtos () {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Conheça nossos produtos e escolha o seu favorito! Temos uma variedade de opções deliciosas para satisfazer seu paladar. Desde os clássicos até as nossas criações exclusivas, cada produto é feito com ingredientes de alta qualidade e muito amor. Venha experimentar e se encantar com nossos sabores irresistíveis!
                </p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={alfajor} alt='Alfajor'/>
                            <span className='badge-venda'>Mais vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Alfajor</h3>
                            <p className='preco'>R$ 12,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={bomba} alt='Bomba'/>
                        </div>
                        <div className='card-info'>
                            <h3>Bomba</h3>
                            <p className='preco'>R$ 8,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={croissant} alt='Croissant'/>
                            <span className='badge-venda'>Lançamento</span>
                        </div>
                        <div className='card-info'>
                            <h3>Croissant</h3>
                            <p className='preco'>R$ 15,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={cupcake} alt='Cupcake'/>
                        </div>
                        <div className='card-info'>
                            <h3>Cupcake</h3>
                            <p className='preco'>R$ 8,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={dunnut} alt='Dunnut'/>
                            <span className='badge-venda'>Mais curtido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Dunnut</h3>
                            <p className='preco'>R$ 15,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={muffin} alt='Muffin'/>
                            <span className='badge-venda'>Especial</span>
                        </div>
                        <div className='card-info'>
                            <h3>Muffin</h3>
                            <p className='preco'>R$ 12,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}