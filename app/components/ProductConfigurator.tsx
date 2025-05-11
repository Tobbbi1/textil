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
            maxWidth: "100%",
            margin: "0 auto",
            padding: "20px",
            background: "#F5F5F7",
            borderRadius: "15px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            color: "#1D1D1F",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}>
            <h2 style={{ fontSize: "24px", color: "#0070F3", textAlign: "center" }}>Produktkonfigurator</h2>
            <label>Artikel:</label>
            <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Pullover">Pullover</option>
                <option value="Jacke">Jacke</option>
            </select>
            <label>Farbe:</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="Weiß">Weiß</option>
                <option value="Schwarz">Schwarz</option>
                <option value="Blau">Blau</option>
                <option value="Rot">Rot</option>
            </select>
            <label>Größe:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <h3 style={{ marginTop: 20, color: "#0070F3", textAlign: "center" }}>Gesamtpreis: {price} €</h3>
        </div>
    );
}
