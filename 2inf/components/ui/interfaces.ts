export interface Festival{
    navn: string
    dato: string
    sted: string
    bygning: string
    beskrivelse: string
    kontaktEpost: string
    startTid: string
    sluttTid: string
}

export interface Bedrifter{
    id: number
    navn: string
    epost: string
    telefon: string
    bransje: string
    standnummber: string
    harForedrag: boolean
    nettside: string
    beskrivelse: string
}

export interface Laerere{
    id: number
    navn: string
    epost: string
    ansvarsomraade: string
    telefon: string
}

export interface Elever{
    id: number
    navn: string
    klasse: string
    gruppe: string
    rolle: string
    epost: string
}

export interface Rom{
    id: number
    romnummer: string
    bygning: string
    kapasitet: number
    utstyr: Array<String>
}

export interface Foredrag{
    id: number
    tittel: string
    beskrivelse: string
    holderBedriftId: number
    startTid: string
    sluttTid: string
    maksPlasser: number
    kategori: string
    rom: string
}

export interface Workshops{
    id: number
    tittel: string
    holderBedriftId: number
    romId: number
    startTid: string
    sluttTid: string
    maksPlasser: number
    forkunnskaper: string
}
