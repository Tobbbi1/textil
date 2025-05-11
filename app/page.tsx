import ProductConfigurator from "./components/ProductConfigurator";

export default function Home() {
    return (
        <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Textil Produktkonfigurator</h1>
            <ProductConfigurator />
        </main>
    );
}
