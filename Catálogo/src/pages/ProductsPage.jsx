import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import "./ProductsPage.css"

export default function ProductsPage() {

    const produtos = [
        {
            id: 1,
            nome: "Mouse Gamer RGB",
            preco: 149.90,
            categoria: "Periféricos",
            imagem: "/Mause.jpg"
        },
        {
            id: 2,
            nome: "Teclado mecânico gamer",
            categoria: "Promoção",
            imagem: "/Teclado.jpg",
            preco: 299.90
        },
        {
            id: 3,
            nome: "Monitor gamer",
            categoria: "monitor",
            preco: 1199.90,
            imagem: "/Monitor.jpg"
        },
        {
            id: 4,
            nome: "Headset gamer",
            categoria: "Periféricos",
            preco: 199.90,
            imagem: "/Headset.jpg"
        },
        {
            id: 5,
            nome: "Placa de vídeo",
            categoria: "Promoção",
            preco: 2499.90,
            imagem: "/Placa.jpg"
        },
    ]

    return (
        <div className="products-page">
            <Header />
            <section className="products-grid">
                {produtos.map((produto) => {

                    const destaque =
                        produto.preco >= 500 || produto.categoria === "Promoção"

                    return (
                        <ProductCard
                            key={produto.id}
                            produto={produto}
                            destaque={destaque}
                        />
                    )
                })}
            </section>
        </div>
    )
}