
// Mascara de nome
export function PrimeiraMaiusculo(nome) {
  return nome[0].toUpperCase() + nome.slice(1).toLowerCase();
}

// Mascara de CPF
function Cpf_Cnpj(v) {
    let valor = v;
    if(valor == ""){
      return ("Inválido ou Inexistente!")
    }
     if (valor.length > 11) {
      return ("Inválido ou Inexistente!")
    };
  if (valor.length === 11) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  };
  if (valor.length < 11) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5");
  };
};

// Mascara de Telefone / Celular
export function Telefone(v) {
  let r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (v.trim() !== "") {
    r = "Número inválido"
  }
  return r;
}

// Mascara de CEP
 export function Cep(d) {
  d = soNumeros(d)
  d=d.replace(/(\d{5})(\d{3})/g, "$1-$2");
  return d
 }

 function soNumeros(d){
  return d.replace(/\D/g,"")
 }


// Mascara de Data
 export function DataInvert(data) {  
  data = soNumeros(data);
  if(data.length < 8){
    return data = "Data inválida ou inexistênte";
  }
  data = data.replace(/(\d{4})(\d{2})(\d{2})/g, "$3/$2/$1");
  return data;;
 }

 export function Maiusculo(valor){
  return valor.toUpperCase()
 }

 export {Cpf_Cnpj};