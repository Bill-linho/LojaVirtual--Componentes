import Button from "./Button";
import "./ProductCard.css"

export default function ProductCard({ produto, destaque }) {

    function verProduto() {
        alert(`Você clicou no ${produto.nome}`)
    }

    const categoriaClasse = produto.categoria.toLowerCase()

    return (
        <article className="product-card">
            {/*Categoria */}
            <div className={`product-badge ${categoriaClasse}`}>
                {produto.categoria}
            </div>
            {/* destaque*/}
            {destaque && (
                <div className="product-highlight">
                    🔥
                </div>
            )}
            {/* imagem do produto */}
            <div className="product-image">
                <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="imagem"
                />
            </div>
            {/* informações do produto */}
            <div className="product-info">
                <h3 className="product-name">{produto.nome}</h3>
                <p className="product-price">
                    R$ {produto.preco}
                </p>
            </div>

            <Button text="Comprar" onClick={verProduto} />

        </article>
    )
}