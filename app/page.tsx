import ProductConfigurator from "./components/ProductConfigurator";

export default function Home() {
    return (
        <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", fontSize: "32px", color: "#0070F3", marginBottom: "20px" }}>Textil Produktkonfigurator</h1>
            <ProductConfigurator />
        </main>
    );
}
