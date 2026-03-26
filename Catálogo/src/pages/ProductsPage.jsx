import Header from "../components/Header"
import ProductCard from "../components/ProductCard"

export default function ProductsPage() {
    const produtos = [{
        id: 1,
        nome: "Mause",
        categoria: "Eletronico",
        preco: 100.00,
        imagem: "/Mause.jpg"
    },
    {
        id: 2,
        nome: "Monitor",
        categoria: "Eletronico",
        preco: 400.00,
        imagem: "/Monitor.jpg",
    },
    {
        id: 3,
        nome: "Teclado",
        categoria: "Eletronico",
        preco: 150.00,
        imagem: "/Teclado.jpg",
    }
    ]
    return (
        <div className="products-page">
            <Header />
            <section className="products-grid">
                {produtos.map((produtos)=>{
                    const destaque = produtos.preco >= 300 || produtos.categoria === "promoção"
                    return(
                        <ProductCard key={produtos.id} produto={produtos} destaque={destaque}/>
                    )
                })}

            </section>
        </div>
    )
}