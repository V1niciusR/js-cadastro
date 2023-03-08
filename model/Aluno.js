class Prof{
    constructor(id,nome,materia,carga)
    {
        this.id=id;
        this.nome=nome;
        this.materia=materia;
        this.carga=carga;
    }
    get getID(){return this.id;}
    set setID(id){this.id=id;}
    get getNome(){return this.nome;}
    set setNome(nome){this.nome=nome;}
    get getMateria(){return this.materia;}
    set setMateria(materia){this.materia=materia;}
    get getCarga(){return this.carga;}
    set setCarga(carga){this.carga=carga;}
}

module.exports= Prof;