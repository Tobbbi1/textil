// app/components/ProductConfigurator.tsx

"use client";

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
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h2>Produktkonfigurator</h2>
            
            <label>Artikel:</label>
            <select onChange={(e) => setSelectedItem(e.target.value)} value={selectedItem}>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Pullover">Pullover</option>
                <option value="Jacke">Jacke</option>
            </select>
            
            <label>Farbe:</label>
            <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
                <option value="Weiß">Weiß</option>
                <option value="Schwarz">Schwarz</option>
                <option value="Blau">Blau</option>
                <option value="Rot">Rot</option>
            </select>
            
            <label>Größe:</label>
            <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            
            <label>Druck oder Stick:</label>
            <select onChange={(e) => setPrintType(e.target.value)} value={printType}>
                <option value="None">Keine</option>
                <option value="Druck">Druck</option>
                <option value="Stick">Stick</option>
            </select>
            
            {printType !== "None" && (
                <>
                    <label>Position:</label>
                    <select onChange={(e) => setPrintPosition(e.target.value)} value={printPosition}>
                        <option value="Front">Vorderseite</option>
                        <option value="Back">Rückseite</option>
                        <option value="Both">Beide</option>
                    </select>

                    <label>Text (optional):</label>
                    <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                    />
                </>
            )}

            <h3>Gesamtpreis: {price} €</h3>
        </div>
    );
}
