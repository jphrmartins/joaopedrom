module.exports = (function () {
    var Candidato = function () {
        this.nome;
        this.codigo;
        this.nomePartido;
        this.quantdadeVotos = 0;
    }    
    Candidato.prototype.setNome = function(novoNome) {
        this.nome = novoNome;
    }
    Candidato.prototype.setCodigo = function(novoCodigo) { 
        this.codigo = novoCodigo;
    }
    Candidato.prototype.setNomePartdo = function(novoNomePartido) {
        this.nomePartido = novoNomePartido;
    }
    Candidato.prototype.adicionarVoto = function() {
        this.quantdadeVotos++;
    }
    Candidato.prototype.getAdicionarVoto = function() {
        return this.adicionarVoto;
    }
    Candidato.prototype.getNome = function() {
        return this.nome;
    }
    Candidato.prototype.getCodigo = function() {
        return this.codigo;
    }
    Candidato.prototype.getNomePartido = function() {
        return this.nomePartido;
    }
    return Candidato;
})();