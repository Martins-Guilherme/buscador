import axios from "axios";

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;

/// https://viacep.com.br/ws/01310930/json

// {
//     "cep": "01310-930",
//     "logradouro": "Avenida Paulista",
//     "complemento": "2100",
//     "bairro": "Bela Vista",
//     "localidade": "São Paulo",
//     "uf": "SP",
//     "ibge": "3550308",
//     "gia": "1004",
//     "ddd": "11",
//     "siafi": "7107"
//   }