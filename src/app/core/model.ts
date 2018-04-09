
export interface Admin {
    login: string;
    password: string;
}

export interface Case {
    id?: number;
    date?: string;
    name?: string;
    description?: string;
    Comment?: Comment[];
    User?: User[];
    pieceOfEvidence?: PieceOfEvidence[];
    people?: People[];
    weapon?: Weapon[];
    vehicule?: Vehicule[];
    listTag?: Tag[];
}

export interface Comment {
    id?: number;
    date: string;
    text: string;
    user: User;
}

export interface Message {
    id?: number;
    date: string;
    description: string;
    user: User;
}

export interface People {
    id?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    country?: string;
    city?: string;
    region?: string;
    postalZip?: string;
    adress?: string;
    tatoo?: string;
    skinColor?: string;
    eyeColor?: string;
    hairColor?: string;
    hairStyle?: string;
    size?: number;
    weight?: number;
    comment?: string;
    dna?: string;
    status?: string;
    createDate?: Date;
    uptdateDate?: Date;
    fingerPrint?: FingerPrint[];
}

export interface PieceOfEvidence {
    id?: number;
    createDate: Date;
    updateDate: Date;
    type: string;
    serialNumber: string;
    // description: string;
    // listComment: Comment[];
    // listPhoto: Photo[];
    // listCase: Case [];
    // listTag: Tag[];
}

export interface Role {
    name: string;
}

export interface Tag {
    name: string;
}

export interface User {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
}

export interface Vehicule {
    id?: number;
    marque: string;
    model: string;
    color: string;
    licensePlate: string;
    createDate: Date;
    updateDate: Date;
    listCase: Case [];
}

export interface Weapon {
    id?: number;
    type: string;
    modele: string;
    createDate: string;
    updateDate: string;
}

export interface FingerPrint {
    id?: number;
    fingerprint: string;
    createDate: Date;
    updateDate: Date;
}
