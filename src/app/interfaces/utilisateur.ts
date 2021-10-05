export interface Utilisateur {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  ville: string;
  postal: number;
  status: boolean;
  numero: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
}

export interface Role {
  _id: string;
  nom: string;
}
