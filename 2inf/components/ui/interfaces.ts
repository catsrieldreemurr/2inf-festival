interface Festival{
    navn: string
    dato: string
    sted: string
    bygning: string
    beskrivelse: string
    kontaktEpost: string
    startTid: string
    sluttTid: string
}

interface Bedrifter{
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

interface Laerere{
    id: number
    navn: string
    epost: string
    ansvarsomraade: string
    telefon: string
}

interface Elever{
    id: number
    navn: string
    klasse: string
    gruppe: string
    rolle: string
    epost: string
}

interface Rom{
    id: number
    romnummer: string
    bygning: string
    kapasitet: number
    utstyr: Array<String>
}

interface Foredrag{
    id: number
    tittel: string
    beskrivelse: string
    holderBedriftId: number
    startTid: string
    sluttTid: string
    maksPlasser: number
    kategori: string
    rom: string
    bedriftPlainText: string
}

interface Workshops{
    id: number
    tittel: string
    holderBedriftId: number
    romId: number
    startTid: string
    sluttTid: string
    maksPlasser: number
    forkunnskaper: string
}

interface AllFetchedData{
    festival: Festival[]
    bedrifter: Bedrifter[]
    laerere: Laerere[]
    elever: Elever[]
    rom: Rom[]
    foredrag: Foredrag[]
    workshops: Workshops[]
}

interface EditedObjectData{
    name: string
    compName: string
    desc: string
    room: string
    startTime: string
    stopTime: string
}

export type {Festival as Festival}
export type {Bedrifter as Bedrifter}
export type {Laerere as Laerere}
export type {Elever as Elever}
export type {Rom as Rom}
export type {Foredrag as Foredrag}
export type {Workshops as Workshops}
export type {AllFetchedData as AllFetchedData}
export type {EditedObjectData as EditedObjectData}