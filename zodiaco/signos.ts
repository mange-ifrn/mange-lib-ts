function ehDeAries(dia: number, mes: number): boolean {
    return (mes === 3 && dia >= 21) || (mes === 4 && dia <= 19);
}

function ehDeTouro(dia: number, mes: number): boolean {
    return (mes === 4 && dia >= 20) || (mes === 5 && dia <= 20);
}

function ehDeGemeos(dia: number, mes: number): boolean {
    return (mes === 5 && dia >= 21) || (mes === 6 && dia <= 20);
}

function ehDeCancer(dia: number, mes: number): boolean {
    return (mes === 6 && dia >= 21) || (mes === 7 && dia <= 22);
}

function ehDeLeao(dia: number, mes: number): boolean {
    return (mes === 7 && dia >= 23) || (mes === 8 && dia <= 22);
}

function ehDeVirgem(dia: number, mes: number): boolean {
    return (mes === 8 && dia >= 23) || (mes === 9 && dia <= 22);
}

function ehDeLibra(dia: number, mes: number): boolean {
    return (mes === 9 && dia >= 23) || (mes === 10 && dia <= 22);
}

function ehDeEscorpiao(dia: number, mes: number): boolean {
    return (mes === 10 && dia >= 23) || (mes === 11 && dia <= 21);
}

function ehDeSagitario(dia: number, mes: number): boolean {
    return (mes === 11 && dia >= 22) || (mes === 12 && dia <= 21);
}

function ehDeCapricornio(dia: number, mes: number): boolean {
    return (mes === 12 && dia >= 22) || (mes === 1 && dia <= 19);
}

function ehDeAquario(dia: number, mes: number): boolean {
    return (mes === 1 && dia >= 20) || (mes === 2 && dia <= 18);
}

function ehDePeixes(dia: number, mes: number): boolean {
    return (mes === 2 && dia >= 19) || (mes === 3 && dia <= 20);
}