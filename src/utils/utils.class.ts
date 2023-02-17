export default class Utils {
    public cpfFormat(cpf: string): string {
        return cpf.replace(/[\s.-]*/igm, '');
    }

    public cnpjFormat(cnpj: string): string {
        return cnpj.replace(/[^\d]/g, '');
    }
}