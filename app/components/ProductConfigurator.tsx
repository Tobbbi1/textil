import React, { useState, useEffect } from "react";

export default function ProductConfigurator() {
    const [selectedItem, setSelectedItem] = useState("T-Shirt");
    const [selectedColor, setSelectedColor] = useState("Weiß");
    const [selectedSize, setSelectedSize] = useState("M");
    const [printType, setPrintType] = useState("None");
    const [printPosition, setPrintPosition] = useState("");
    const [customText, setCustomText] = useState("");
    const [price, setPrice] = useState(20);

    useEffect(() => {
        let calculatedPrice = 20;
        if (printType !== "None") {
            calculatedPrice += 5;
            if (printPosition === "Both") calculatedPrice += 5;
        }
        setPrice(calculatedPrice);
    }, [printType, printPosition]);

    return (
        <div style={{
            maxWidth: "420px",
            margin: "40px auto",
            padding: "20px",
            background: "#F5F5F7",
            borderRadius: "15px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            color: "#1D1D1F",
            boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            textAlign: "center"
        }}>
            <h2 style={{ fontSize: "28px", color: "#0070F3", fontWeight: "600" }}>Produktkonfigurator</h2>
            <div style={{ marginTop: "15px" }}>
                <label>Artikel:</label>
                <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} style={{ padding: "10px", borderRadius: "8px", border: "1px solid #DDD", width: "100%", marginTop: "8px", transition: "box-shadow 0.2s", cursor: "pointer" }}>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Pullover">Pullover</option>
                    <option value="Jacke">Jacke</option>
                </select>
            </div>

            <div style={{ marginTop: "15px" }}>
                <label>Farbe:</label>
                <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} style={{ padding: "10px", borderRadius: "8px", border: "1px solid #DDD", width: "100%", marginTop: "8px", transition: "box-shadow 0.2s", cursor: "pointer" }}>
                    <option value="Weiß">Weiß</option>
                    <option value="Schwarz">Schwarz</option>
                    <option value="Blau">Blau</option>
                    <option value="Rot">Rot</option>
                </select>
            </div>

            <div style={{ marginTop: "15px" }}>
                <label>Größe:</label>
                <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={{ padding: "10px", borderRadius: "8px", border: "1px solid #DDD", width: "100%", marginTop: "8px", transition: "box-shadow 0.2s", cursor: "pointer" }}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <h3 style={{ marginTop: 20, color: "#0070F3", fontWeight: "600", textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>Gesamtpreis: {price} €</h3>
        </div>
    );
}
