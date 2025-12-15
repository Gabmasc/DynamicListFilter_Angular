import { IEndereco } from "./endereco.interface";
import { IStatus } from "./status.interface";

export interface IUser{
    nome: string;
    email: string;
    senha: string;
    idade: number;
    telefone: string;
    endereco: IEndereco;
    ativo: boolean;
    funcao: string;
    datacadastro: string;
    status: IStatus;
}