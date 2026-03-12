import Button from "./Button"
import './ProductCard.css'

export default function ProductCard({ produto, destaque}) {
function verProduto(){
    alert(`Você clicou no ${produto.nome}`)
}
const categoriaClass = produto.categoria.toLowerCase()

    return (
        <article className="Product-card">
            { /*Categoria*/}
            <div className={`product-badge ${categoriaClass}`}>
                {produto.categoria}
            </div>
            {/*Destaque*/}
            {destaque && (
                <div className="product-higlight">
                    💀
                </div>
            )}
            {/*Imagem*/}
            <div className="product-image">
                <img src={produto.imagem} alt={produto.nome} className="imagem" />
            </div>
            {/*informações do produto*/}
            <div className="Product-info">
                <h3 className="product-name">{produto.nome}</h3>
                <p className="product-price">
                    R${produto.preco}
                </p>
            </div>

            <button onClick={verProduto}>
                comprar
            </button>
        </article>
    )
}