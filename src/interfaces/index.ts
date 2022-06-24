export interface Trip {
    id: string;
    title: string;
    description: string;
    board: string;
    accommodation: string;
    price: string;
    location: string;
}

export interface Board {
    id: string;
    board: string;
}

export interface Accommodation {
    id: string;
    accommodation: string;
}

export interface Location {
    id: string;
    location: string;
}