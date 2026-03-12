import Header from "../components/Header"
import ProductCard from "../components/ProductCard"

export default function ProductsPage() {
    const produtos = [{
        id: 1,
        nome: "Vitor",
        categoria: "gay",
        preco: 1.00,
        imagem: "/Vitor.jpg"
    },
    {
        id: 2,
        nome: "VitorClt",
        categoria: "Assexuado",
        preco: 0.01,
        imagem: "/Vitor2.jpg",
    },
    {
        id: 3,
        nome: "VitorCastrato",
        categoria: "Escravo",
        preco: 0.15,
        imagem: "/Vitor3.jpg",
    }
    ]
    return (
        <div className="products-page">
            <Header />
            <section className="products-grid">
                {produtos.map((produtos)=>{
                    const destaque = produtos.preco >= 1.00 || produtos.categoria === "promoção"
                    return(
                        <ProductCard key={produtos.id} produto={produtos} destaque={destaque}/>
                    )
                })}

            </section>
        </div>
    )
}