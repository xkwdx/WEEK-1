function oblicz() {

    const wartoscSprzedazy = parseFloat(document.getElementById('sprzedaz').value);
    const marza = parseFloat(document.getElementById('marza').value);

    if (isNaN(wartoscSprzedazy) || isNaN(marza)) {
        document.getElementById('wynik').innerHTML = "Proszę wprowadzić poprawne wartości.";
        return;
    }

    const kwotaProwizji = wartoscSprzedazy * (marza / 100);
    const kasaDlaSprzedawcy = wartoscSprzedazy - kwotaProwizji;

    document.getElementById('wynik').innerHTML = `
        Kwota prowizji: ${kwotaProwizji.toFixed(2)} zł<br>
        Kasa dla sprzedawcy: ${kasaDlaSprzedawcy.toFixed(2)} zł
    `;
}
