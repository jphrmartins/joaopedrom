var Candidato = require('./candidato');
var Eleicao = require('./eleicao');

var cand1 = new Candidato();
var cand2 = new Candidato();

cand1.setNome('Pedro');
cand1.setCodigo(1);
cand1.setNomePartdo("front da união");

cand2.setNome('Jp');
cand2.setCodigo(2);
cand2.setNomePartdo("Proteçãodos prog");

var eleicao = new Eleicao();
eleicao.setAno(2018);
eleicao.addCandidatos(cand1);
eleicao.addCandidatos(cand2);

for (var i = 0; i < 30; i++) {
  if (i % 3 == 0) {
    eleicao.getCandidatos()[1].adicionarVotos();
  } else {
    eleicao.getCandidatos()[0].adicionarVotos();
  }
}
console.log(eleicao.getCandidatos()[1].getNome() + ": " + eleicao.getCandidatos()[1].getQuantidadeDeVotos());
console.log(eleicao.getCandidatos()[0].getNome() + ": " + eleicao.getCandidatos()[0].getQuantidadeDeVotos());
