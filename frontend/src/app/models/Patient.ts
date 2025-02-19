export class Patient {
    patientId? : number;
    title? : string;
    firstName? : string;
    lastName? : string;
    nic? : string;
    phone? : string;
    email? : string;
    dob? : string;
    password? : string;
    appointments?: string[];
}

export interface PatientModel {
    patientId : number;
    title : string;
    firstName : string;
    lastName : string;
    nic : string;
    phone : string;
    email : string;
    dob : string;
    password : string;
}