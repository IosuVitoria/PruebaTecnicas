function compareSequences() {
    const sequence1 = document.getElementById('sequence1Input').value.toUpperCase();
    const sequence2 = document.getElementById('sequence2Input').value.toUpperCase();
    const resultsTable = document.getElementById('results');
    let differences = '';

    if (sequence1.length !== sequence2.length) {
        resultsTable.innerHTML = '<p>Las secuencias deben tener la misma longitud para ser comparadas.</p>';
        return;
    }

    for (let i = 0; i < sequence1.length; i++) {
        if (sequence1[i] !== sequence2[i]) {
            differences += `<tr><td>${i + 1}</td><td>${sequence1[i]}</td><td>${sequence2[i]}</td></tr>`;
        }
    }

    if (differences === '') {
        differences = '<tr><td colspan="3">No se encontraron SNP en las secuencias ingresadas.</td></tr>';
    }

    resultsTable.innerHTML = `
        <tr>
            <th>Posición</th>
            <th>Nucleótido en secuencia 1</th>
            <th>Nucleótido en secuencia 2</th>
        </tr>
        ${differences}
    `;
}

function translateToProteins() {
    const rnaSequence = document.getElementById('rnaInput').value.toUpperCase();
    const proteinResults = document.getElementById('proteinResults');

    const codonTable = {
        'AUG': 'Met', 'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
        'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser', 'UAU': 'Tyr',
        'UAC': 'Tyr', 'UAA': 'Stop', 'UAG': 'Stop', 'UGU': 'Cys', 'UGC': 'Cys',
        'UGA': 'Stop', 'UGG': 'Trp', 'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu',
        'CUG': 'Leu', 'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
        'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln', 'CGU': 'Arg',
        'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg', 'AUU': 'Ile', 'AUC': 'Ile',
        'AUA': 'Ile', 'AUC': 'Ile', 'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr',
        'ACG': 'Thr', 'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
        'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg', 'GUU': 'Val',
        'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val', 'GCU': 'Ala', 'GCC': 'Ala',
        'GCA': 'Ala', 'GCG': 'Ala', 'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu',
        'GAG': 'Glu', 'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
    };

    let proteins = '';
    for (let i = 0; i < rnaSequence.length - 2; i += 3) {
        const codon = rnaSequence.slice(i, i + 3);
        const aminoacid = codonTable[codon] || 'X';
        proteins += aminoacid + ' ';
    }

    proteinResults.textContent = proteins;
}