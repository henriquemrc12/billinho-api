export class MatriculaDto {
    
    valorTotalDoCurso: number;
    quatidadeDeFaturas: number;
    diaDeVencimentoDaFatura: number;
    nomeDoCurso: string;
    alunoId: number;
    instituicaoId: number;

    constructor(
        valorTotalDoCurso: number,
        quatidadeDeFaturas: number,
        diaDeVencimentoDaFatura: number,
        nomeDoCurso: string,
        alunoId: number,
        instituicaoId: number
    ) {
        this.valorTotalDoCurso = valorTotalDoCurso;
        this.quatidadeDeFaturas = quatidadeDeFaturas;
        this.diaDeVencimentoDaFatura = diaDeVencimentoDaFatura;
        this.nomeDoCurso = nomeDoCurso;
        this.alunoId = alunoId;
        this.instituicaoId = instituicaoId ;        
    }
}