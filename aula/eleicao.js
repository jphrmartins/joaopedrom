module.exports = (function () {
    var Eleicao = function() {
        this.ano;
        this.candidatos = [];
    }
    Eleicao.prototype.setAno = function(novoAno) {
        this.ano = novoAno;
    } 
    Eleicao.prototype.addCandidatos = function(candidato) {
        this.candidatos.push(candidato);
    }
    Eleicao.prototype.getAno = function() {
        return this.ano;
    }
    Eleicao.prototype.getCandidatos = function() {
        return this.candidatos;
    }
    return Eleicao;
})();