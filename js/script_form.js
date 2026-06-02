/**
 * Script standalone para criação dinâmica do jogo de roleta
 * Pode ser usado via JWT ou função global window.sellflux_game()
 */


(function() {
    'use strict';
  
    // Lista de países com máscaras e códigos de discagem
    const countryList = [
      {
        country_code: "AD",
        phone_mask: "999-999",
        country_name: "Andorra",
        regionCode: "376",
        emoji: "🇦🇩",
      },
      {
        country_code: "AE",
        phone_mask: "(99) 999-9999",
        country_name: "Emirados Árabes Unidos",
        regionCode: "971",
        emoji: "🇦🇪",
      },
      {
        country_code: "AF",
        phone_mask: "(99) 999-9999",
        country_name: "Afeganistão",
        regionCode: "93",
        emoji: "🇦🇫",
      },
      {
        country_code: "AL",
        phone_mask: "(99) 999-9999",
        country_name: "Albânia",
        regionCode: "355",
        emoji: "🇦🇱",
      },
      {
        country_code: "AM",
        phone_mask: "(99) 999-9999",
        country_name: "Armênia",
        regionCode: "374",
        emoji: "🇦🇲",
      },
      {
        country_code: "AO",
        phone_mask: "(99) 999-9999",
        country_name: "Angola",
        regionCode: "244",
        emoji: "🇦🇴",
      },
      {
        country_code: "AR",
        phone_mask: "(99) 9999-9999",
        country_name: "Argentina",
        regionCode: "54",
        emoji: "🇦🇷",
      },
      {
        country_code: "AT",
        phone_mask: "(9) 9999-9999",
        country_name: "Áustria",
        regionCode: "43",
        emoji: "🇦🇹",
      },
      {
        country_code: "AU",
        phone_mask: "(99) 9999-9999",
        country_name: "Austrália",
        regionCode: "61",
        emoji: "🇦🇺",
      },
      {
        country_code: "AZ",
        phone_mask: "(99) 999-9999",
        country_name: "Azerbaijão",
        regionCode: "994",
        emoji: "🇦🇿",
      },
      {
        country_code: "BA",
        phone_mask: "(99) 999-999",
        country_name: "Bósnia e Herzegovina",
        regionCode: "387",
        emoji: "🇧🇦",
      },
      {
        country_code: "BD",
        phone_mask: "(99) 9999-9999",
        country_name: "Bangladesh",
        regionCode: "880",
        emoji: "🇧🇩",
      },
      {
        country_code: "BE",
        phone_mask: "(99) 999-99-99",
        country_name: "Bélgica",
        regionCode: "32",
        emoji: "🇧🇪",
      },
      {
        country_code: "BG",
        phone_mask: "(999) 999-999",
        country_name: "Bulgária",
        regionCode: "359",
        emoji: "🇧🇬",
      },
      {
        country_code: "BH",
        phone_mask: "9999-9999",
        country_name: "Butão",
        regionCode: "975",
        emoji: "🇧🇹",
      },
      {
        country_code: "BJ",
        phone_mask: "9999-99999",
        country_name: "Benim",
        regionCode: "229",
        emoji: "🇧🇯",
      },
      {
        country_code: "BO",
        phone_mask: "(9) 999-9999",
        country_name: "Bolívia",
        regionCode: "591",
        emoji: "🇧🇴",
      },
      {
        country_code: "BR",
        phone_mask: "(99) 99999-9999",
        country_name: "Brasil",
        regionCode: "55",
        selected: true,
        emoji: "🇧🇷",
      },
      {
        country_code: "BY",
        phone_mask: "(99) 999-99-99",
        country_name: "Belarus",
        regionCode: "375",
        emoji: "🇧🇾",
      },
      {
        country_code: "CA",
        phone_mask: "(999) 999-9999",
        country_name: "Canadá",
        regionCode: "1",
        emoji: "🇨🇦",
      },
      {
        country_code: "CD",
        phone_mask: "(99) 999-9999",
        country_name: "República Democrática do Congo",
        regionCode: "243",
        emoji: "🇨🇩",
      },
      {
        country_code: "CH",
        phone_mask: "(99) 999-99-99",
        country_name: "Suíça",
        regionCode: "41",
        emoji: "🇨🇭",
      },
      {
        country_code: "CI",
        phone_mask: "(99) 99-99-99",
        country_name: "Costa do Marfim",
        regionCode: "225",
        emoji: "🇨🇮",
      },
      {
        country_code: "CL",
        phone_mask: "(99) 9999-9999",
        country_name: "Chile",
        regionCode: "56",
        emoji: "🇨🇱",
      },
      {
        country_code: "CM",
        phone_mask: "(99) 9999-9999",
        country_name: "Camarões",
        regionCode: "237",
        emoji: "🇨🇲",
      },
      {
        country_code: "CO",
        phone_mask: "(9) 999-9999",
        country_name: "Colômbia",
        regionCode: "57",
        emoji: "🇨🇴",
      },
      {
        country_code: "CV",
        phone_mask: "(99) 999-9999",
        country_name: "Cabo Verde",
        regionCode: "238",
        emoji: "🇨🇻",
      },
      {
        country_code: "CY",
        phone_mask: "9999-9999",
        country_name: "Chipre",
        regionCode: "357",
        emoji: "🇨🇾",
      },
      {
        country_code: "CZ",
        phone_mask: "999-999-999",
        country_name: "República Tcheca",
        regionCode: "420",
        emoji: "🇨🇿",
      },
      {
        country_code: "DE",
        phone_mask: "(99) 9999-9999",
        country_name: "Alemanha",
        regionCode: "49",
        emoji: "🇩🇪",
      },
      {
        country_code: "DK",
        phone_mask: "(99) 9999-9999",
        country_name: "Dinamarca",
        regionCode: "45",
        emoji: "🇩🇰",
      },
      {
        country_code: "DO",
        phone_mask: "(999) 999-9999",
        country_name: "República Dominicana",
        regionCode: "1",
        emoji: "🇩🇴",
      },
      {
        country_code: "EC",
        phone_mask: "(99) 999-9999",
        country_name: "Equador",
        regionCode: "593",
        emoji: "🇪🇨",
      },
      {
        country_code: "EE",
        phone_mask: "(99) 9999-9999",
        country_name: "Estônia",
        regionCode: "372",
        emoji: "🇪🇪",
      },
      {
        country_code: "EG",
        phone_mask: "(99) 9999-9999",
        country_name: "Egito",
        regionCode: "20",
        emoji: "🇪🇬",
      },
      {
        country_code: "ES",
        phone_mask: "999-999-999",
        country_name: "Espanha",
        regionCode: "34",
        emoji: "🇪🇸",
      },
      {
        country_code: "ET",
        phone_mask: "999-999-999",
        country_name: "Etiópia",
        regionCode: "251",
        emoji: "🇪🇹",
      },
      {
        country_code: "FI",
        phone_mask: "999-999-999",
        country_name: "Finlândia",
        regionCode: "358",
        emoji: "🇫🇮",
      },
      {
        country_code: "FO",
        phone_mask: "999999",
        country_name: "Ilhas Faroé",
        regionCode: "298",
        emoji: "🇫🇴",
      },
      {
        country_code: "FR",
        phone_mask: "(99) 9999-9999",
        country_name: "França",
        regionCode: "33",
        emoji: "🇫🇷",
      },
      {
        country_code: "GB",
        phone_mask: "(99) 9999-9999",
        country_name: "Reino Unido",
        regionCode: "44",
        emoji: "🇬🇧",
      },
      {
        country_code: "GE",
        phone_mask: "(99) 9999-9999",
        country_name: "Geórgia",
        regionCode: "995",
        emoji: "🇬🇪",
      },
      {
        country_code: "GH",
        phone_mask: "(99) 9999-9999",
        country_name: "Gana",
        regionCode: "233",
        emoji: "🇬🇭",
      },
      {
        country_code: "GI",
        phone_mask: "99999",
        country_name: "Gibraltar",
        regionCode: "350",
        emoji: "🇬🇮",
      },
      {
        country_code: "GL",
        phone_mask: "99999",
        country_name: "Groenlândia",
        regionCode: "299",
        emoji: "🇬🇱",
      },
      {
        country_code: "GR",
        phone_mask: "9999-999999",
        country_name: "Grécia",
        regionCode: "30",
        emoji: "🇬🇷",
      },
      {
        country_code: "HR",
        phone_mask: "(99) 999-9999",
        country_name: "Croácia",
        regionCode: "385",
        emoji: "🇭🇷",
      },
      {
        country_code: "HU",
        phone_mask: "(99) 999-9999",
        country_name: "Hungria",
        regionCode: "36",
        emoji: "🇭🇺",
      },
      {
        country_code: "ID",
        phone_mask: "(99) 9999-9999",
        country_name: "Indonésia",
        regionCode: "62",
        emoji: "🇮🇩",
      },
      {
        country_code: "IE",
        phone_mask: "(99) 999-9999",
        country_name: "Irlanda",
        regionCode: "353",
        emoji: "🇮🇪",
      },
      {
        country_code: "IL",
        phone_mask: "99-999-9999",
        country_name: "Israel",
        regionCode: "972",
        emoji: "🇮🇱",
      },
      {
        country_code: "IM",
        phone_mask: "(99) 9999-9999",
        country_name: "Ilha de Man",
        regionCode: "44",
        emoji: "🇮🇲",
      },
      {
        country_code: "IN",
        phone_mask: "(99) 9999-9999",
        country_name: "Índia",
        regionCode: "91",
        emoji: "🇮🇳",
      },
      {
        country_code: "IQ",
        phone_mask: "(99) 9999-9999",
        country_name: "Iraque",
        regionCode: "964",
        emoji: "🇮🇶",
      },
      {
        country_code: "IR",
        phone_mask: "(9999) 9999-9999",
        country_name: "Irã",
        regionCode: "98",
        emoji: "🇮🇷",
      },
      {
        country_code: "IS",
        phone_mask: "999-9999",
        country_name: "Islândia",
        regionCode: "354",
        emoji: "🇮🇸",
      },
      {
        country_code: "IT",
        phone_mask: "(99) 9999-9999",
        country_name: "Itália",
        regionCode: "39",
        emoji: "🇮🇹",
      },
      {
        country_code: "JP",
        phone_mask: "(99) 9999-9999",
        country_name: "Japão",
        regionCode: "81",
        emoji: "🇯🇵",
      },
      {
        country_code: "JO",
        phone_mask: "(99) 999-9999",
        country_name: "Jordânia",
        regionCode: "962",
        emoji: "🇯🇴",
      },
      {
        country_code: "KE",
        phone_mask: "(99) 9999-999",
        country_name: "Quênia",
        regionCode: "254",
        emoji: "🇰🇪",
      },
      {
        country_code: "KR",
        phone_mask: "(99) 999-9999",
        country_name: "Coreia do Sul",
        regionCode: "82",
        emoji: "🇰🇷",
      },
      {
        country_code: "KZ",
        phone_mask: "(999) 999-9999",
        country_name: "Cazaquistão",
        regionCode: "7",
        emoji: "🇰🇿",
      },
      {
        country_code: "LB",
        phone_mask: "(99) 999-999",
        country_name: "Líbano",
        regionCode: "961",
        emoji: "🇱🇧",
      },
      {
        country_code: "LI",
        phone_mask: "999 9999",
        country_name: "Liechtenstein",
        regionCode: "423",
        emoji: "🇱🇮",
      },
      {
        country_code: "LT",
        phone_mask: "(999) 99999",
        country_name: "Lituânia",
        regionCode: "370",
        emoji: "🇱🇹",
      },
      {
        country_code: "LU",
        phone_mask: "999-999",
        country_name: "Luxemburgo",
        regionCode: "352",
        emoji: "🇱🇺",
      },
      {
        country_code: "LV",
        phone_mask: "9999-9999",
        country_name: "Letônia",
        regionCode: "371",
        emoji: "🇱🇻",
      },
      {
        country_code: "MA",
        phone_mask: "9999-99999",
        country_name: "Marrocos",
        regionCode: "212",
        emoji: "🇲🇦",
      },
      {
        country_code: "MC",
        phone_mask: "99-99-99-99",
        country_name: "Mônaco",
        regionCode: "377",
        emoji: "🇲🇨",
      },
      {
        country_code: "MD",
        phone_mask: "999-9999",
        country_name: "Moldávia",
        regionCode: "373",
        emoji: "🇲🇩",
      },
      {
        country_code: "ME",
        phone_mask: "99-99-9999",
        country_name: "Montenegro",
        regionCode: "382",
        emoji: "🇲🇪",
      },
      {
        country_code: "MK",
        phone_mask: "99-999-999",
        country_name: "Macedônia do Norte",
        regionCode: "389",
        emoji: "🇲🇰",
      },
      {
        country_code: "MM",
        phone_mask: "9999-9999",
        country_name: "Mianmar",
        regionCode: "95",
        emoji: "🇲🇲",
      },
      {
        country_code: "MT",
        phone_mask: "9999-9999",
        country_name: "Malta",
        regionCode: "356",
        emoji: "🇲🇹",
      },
      {
        country_code: "MX",
        phone_mask: "(999) 999-9999",
        country_name: "México",
        regionCode: "52",
        emoji: "🇲🇽",
      },
      {
        country_code: "MY",
        phone_mask: "9999-9999",
        country_name: "Malásia",
        regionCode: "60",
        emoji: "🇲🇾",
      },
      {
        country_code: "MZ",
        phone_mask: "99-999-9999",
        country_name: "Moçambique",
        regionCode: "258",
        emoji: "🇲🇿",
      },
      {
        country_code: "NG",
        phone_mask: "9999-9999",
        country_name: "Nigéria",
        regionCode: "234",
        emoji: "🇳🇬",
      },
      {
        country_code: "NL",
        phone_mask: "(99) 999-9999",
        country_name: "Países Baixos",
        regionCode: "31",
        emoji: "🇳🇱",
      },
      {
        country_code: "NO",
        phone_mask: "999-999-99",
        country_name: "Noruega",
        regionCode: "47",
        emoji: "🇳🇴",
      },
      {
        country_code: "NP",
        phone_mask: "99-999-999",
        country_name: "Nepal",
        regionCode: "977",
        emoji: "🇳🇵",
      },
      {
        country_code: "NZ",
        phone_mask: "9-9999-9999",
        country_name: "Nova Zelândia",
        regionCode: "64",
        emoji: "🇳🇿",
      },
      {
        country_code: "PA",
        phone_mask: "9999-9999",
        country_name: "Panamá",
        regionCode: "507",
        emoji: "🇵🇦",
      },
      {
        country_code: "PE",
        phone_mask: "999-999999",
        country_name: "Peru",
        regionCode: "51",
        emoji: "🇵🇪",
      },
      {
        country_code: "PH",
        phone_mask: "(99) 9999-9999",
        country_name: "Filipinas",
        regionCode: "63",
        emoji: "🇵🇭",
      },
      {
        country_code: "PK",
        phone_mask: "(999) 9999999",
        country_name: "Paquistão",
        regionCode: "92",
        emoji: "🇵🇰",
      },
      {
        country_code: "PL",
        phone_mask: "999-999-999",
        country_name: "Polônia",
        regionCode: "48",
        emoji: "🇵🇱",
      },
      {
        country_code: "PT",
        phone_mask: "999-999-999",
        country_name: "Portugal",
        regionCode: "351",
        emoji: "🇵🇹",
      },
      {
        country_code: "PY",
        phone_mask: "(99) 999-9999",
        country_name: "Paraguai",
        regionCode: "595",
        emoji: "🇵🇾",
      },
      {
        country_code: "RO",
        phone_mask: "(99) 999-9999",
        country_name: "Romênia",
        regionCode: "40",
        emoji: "🇷🇴",
      },
      {
        country_code: "RS",
        phone_mask: "(99) 999-9999",
        country_name: "Sérvia",
        regionCode: "381",
        emoji: "🇷🇸",
      },
      {
        country_code: "RU",
        phone_mask: "999-999-99-99",
        country_name: "Rússia",
        regionCode: "7",
        emoji: "🇷🇺",
      },
      {
        country_code: "SA",
        phone_mask: "999-999-9999",
        country_name: "Arábia Saudita",
        regionCode: "966",
        emoji: "🇸🇦",
      },
      {
        country_code: "SD",
        phone_mask: "99999999",
        country_name: "Sudão",
        regionCode: "249",
        emoji: "🇸🇩",
      },
      {
        country_code: "SE",
        phone_mask: "99-999-99-99",
        country_name: "Suécia",
        regionCode: "46",
        emoji: "🇸🇪",
      },
      {
        country_code: "SG",
        phone_mask: "9999-9999",
        country_name: "Singapura",
        regionCode: "65",
        emoji: "🇸🇬",
      },
      {
        country_code: "SI",
        phone_mask: "99-999-999",
        country_name: "Eslovênia",
        regionCode: "386",
        emoji: "🇸🇮",
      },
      {
        country_code: "SK",
        phone_mask: "99-9999-999",
        country_name: "Eslováquia",
        regionCode: "421",
        emoji: "🇸🇰",
      },
      {
        country_code: "SM",
        phone_mask: "999-999-999",
        country_name: "San Marino",
        regionCode: "378",
        emoji: "🇸🇲",
      },
      {
        country_code: "SO",
        phone_mask: "99999999",
        country_name: "Somália",
        regionCode: "252",
        emoji: "🇸🇴",
      },
      {
        country_code: "SY",
        phone_mask: "9999-9999",
        country_name: "Síria",
        regionCode: "963",
        emoji: "🇸🇾",
      },
      {
        country_code: "TH",
        phone_mask: "(99) 999-9999",
        country_name: "Tailândia",
        regionCode: "66",
        emoji: "🇹🇭",
      },
      {
        country_code: "TN",
        phone_mask: "(99) 999-999",
        country_name: "Tunísia",
        regionCode: "216",
        emoji: "🇹🇳",
      },
      {
        country_code: "TR",
        phone_mask: "(999) 999-9999",
        country_name: "Turquia",
        regionCode: "90",
        emoji: "🇹🇷",
      },
      {
        country_code: "TZ",
        phone_mask: "999-999-999",
        country_name: "Tanzânia",
        regionCode: "255",
        emoji: "🇹🇿",
      },
      {
        country_code: "UA",
        phone_mask: "99-999-99-99",
        country_name: "Ucrânia",
        regionCode: "380",
        emoji: "🇺🇦",
      },
      {
        country_code: "UG",
        phone_mask: "999-999-999",
        country_name: "Uganda",
        regionCode: "256",
        emoji: "🇺🇬",
      },
      {
        country_code: "US",
        phone_mask: "(999) 999-9999",
        country_name: "Estados Unidos",
        regionCode: "1",
        emoji: "🇺🇸",
      },
      {
        country_code: "UY",
        phone_mask: "9999-9999",
        country_name: "Uruguai",
        regionCode: "598",
        emoji: "🇺🇾",
      },
      {
        country_code: "VA",
        phone_mask: "(9999) 9999-9999",
        country_name: "Cidade do Vaticano",
        regionCode: "39",
        emoji: "🇻🇦",
      },
      {
        country_code: "VE",
        phone_mask: "(99) 999-9999",
        country_name: "Venezuela",
        regionCode: "58",
        emoji: "🇻🇪",
      },
      {
        country_code: "VN",
        phone_mask: "(99) 9999-9999",
        country_name: "Vietnã",
        regionCode: "84",
        emoji: "🇻🇳",
      },
      {
        country_code: "XK",
        phone_mask: "(99) 999-999",
        country_name: "Kosovo",
        regionCode: "383",
        emoji: "🇽🇰",
      },
      {
        country_code: "ZM",
        phone_mask: "(99) 999-9999",
        country_name: "Zâmbia",
        regionCode: "260",
        emoji: "🇿🇲",
      },
      {
        country_code: "ZW",
        phone_mask: "(99) 999-9999",
        country_name: "Zimbábue",
        regionCode: "263",
        emoji: "🇿🇼",
      },
    ];
  
    /**
     * Converte código de país ISO-3166 de 2 letras em emoji de bandeira
     * Gera os símbolos de Indicadores Regionais via code point em runtime
     * Evita problemas de encoding no arquivo fonte
     * @param {string} countryCode - Código do país, ex: 'BR'
     * @returns {string} Emoji da bandeira ou string vazia
     */
    function getFlagEmoji(countryCode) {
      if (!countryCode || countryCode.length !== 2) return '';
      const upper = countryCode.toUpperCase();
      try {
        const codePoints = [upper.charCodeAt(0) - 65 + 0x1F1E6, upper.charCodeAt(1) - 65 + 0x1F1E6];
        return String.fromCodePoint(codePoints[0], codePoints[1]);
      } catch (e) {
        return '';
      }
    }

  /**
   * Configura funcionalidades para formulários standalone
   * Função responsável por inicializar máscaras de telefone e validação em tempo real
   * @param {string} formSelector - Seletor CSS para o formulário
   */
  function setupStandaloneForm(formSelector = 'form') {
    // Lista de países com máscaras e códigos de discagem para formulários standalone
    const countryListStandalone = countryList;

    // Helper: mescla query params atuais na URL de destino, preservando existentes
    function buildUrlWithMergedQuery(baseUrl, extraSearch) {
      try {
        const urlObj = new URL(baseUrl, window.location.origin)
        const baseParams = urlObj.searchParams
        const extraParams = new URLSearchParams(extraSearch || '')
        extraParams.forEach((value, key) => {
          if (!baseParams.has(key)) baseParams.append(key, value)
        })
        urlObj.search = baseParams.toString()
        return urlObj.toString()
      } catch (e) {
        if (!extraSearch) return baseUrl
        const joinChar = (baseUrl.indexOf('?') >= 0) ? '&' : '?'
        const cleanExtra = (extraSearch.charAt(0) === '?') ? extraSearch.slice(1) : extraSearch
        return baseUrl + joinChar + cleanExtra
      }
    }
    
    /**
     * Obtém máscara de telefone para um código de região específico
     * Função auxiliar para buscar máscara de telefone por país
     * @param {string} regionCode - Código de região do país
     * @returns {string} Máscara de telefone para o país
     */
    function getCountryMaskStandalone(regionCode) {
      const country = countryListStandalone.find(country => country.regionCode === regionCode);
      return country ? country.phone_mask : '(99) 99999-9999';
    }
    
    /**
     * Aplica máscara de telefone ao campo de entrada
     * Função auxiliar para formatar número de telefone conforme máscara
     * @param {HTMLInputElement} input - Campo de entrada do telefone
     * @param {string} mask - Máscara a ser aplicada
     */
    function applyMaskStandalone(input, mask) {
      let i = 0;
      const val = input.value.replace(/\D/g, '');
      input.value = mask.replace(/9/g, () => val[i++] || '');
    }
    
    /**
     * Atualiza placeholder do campo de telefone baseado na máscara
     * Função auxiliar para mostrar formato esperado do telefone
     * @param {HTMLInputElement} input - Campo de entrada do telefone
     * @param {string} mask - Máscara para gerar placeholder
     */
    function updatePlaceholderStandalone(input, mask) {
      input.placeholder = mask.replace(/9/g, '0');
    }
    
    /**
     * Popula dinamicamente o select de DDI com bandeiras e códigos
     * Função responsável por manter o HTML limpo, carregando opções via JS
     */
    function populateDdiSelectStandalone() {
      const ddiSelect = document.querySelector('select[id*="ddi"]');
      if (!ddiSelect) return;
    
      while (ddiSelect.firstChild) ddiSelect.removeChild(ddiSelect.firstChild);
    
      countryListStandalone.forEach(country => {
        const option = document.createElement('option');
        option.value = country.regionCode;
        const flag = getFlagEmoji(country.country_code || '');
        option.textContent = (flag ? flag + ' ' : '') + '+' + country.regionCode;
        if (country.selected) option.selected = true;
        ddiSelect.appendChild(option);
      });
    
      if (!ddiSelect.value) ddiSelect.value = '55';
    
      const phoneInput = document.querySelector('[data-phone-with-ddi]');
      if (phoneInput) {
        const mask = getCountryMaskStandalone(ddiSelect.value);
        updatePlaceholderStandalone(phoneInput, mask);
        phoneInput.dispatchEvent(new Event('input'));
      }
    }
    
    /**
     * Configura máscara de telefone para formulários standalone
     * Função responsável por aplicar máscaras de telefone em tempo real
     */
    function setupPhoneMaskStandalone() {
      const phoneInput = document.querySelector('[data-phone-with-ddi]');
      const ddiSelect = document.querySelector('select[id*="ddi"]');
      
      if (!phoneInput || !ddiSelect) return;
    
      /**
       * Aplica máscara de telefone durante digitação
       * Função auxiliar para formatar telefone em tempo real
       * @param {Event} event - Evento de input do campo
       */
      const maskPhone = (event) => {
        if (event.inputType && (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward")) {
          return;
        }
    
        if (phoneInput.value.trim() === '') {
          phoneInput.value = '';
          return;
        }
    
        const mask = getCountryMaskStandalone(ddiSelect.value);
        applyMaskStandalone(phoneInput, mask);
        updatePlaceholderStandalone(phoneInput, mask);
        
        // Armazena telefone completo com DDI no dataset
        let phoneWithDdi = "+" + ddiSelect.value + phoneInput.value.replace(/\D/g, '');
        phoneInput.dataset.phoneWithDdi = phoneWithDdi;
      };
    
      // Adiciona evento de input para aplicar máscara
      phoneInput.addEventListener("input", maskPhone);
      
      // Adiciona evento de mudança no select de DDI
      ddiSelect.addEventListener("change", () => {
        const initialMask = getCountryMaskStandalone(ddiSelect.value);
        if (initialMask) {
          updatePlaceholderStandalone(phoneInput, initialMask);
        }
        phoneInput.dispatchEvent(new Event("input"));
      });
    }
    
    /**
     * Configura validação em tempo real para formulários standalone
     * Função responsável por validar campos durante digitação
     */
    function setupRealTimeValidationStandalone() {
      const forms = document.querySelectorAll(formSelector);
      
      forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
          const phoneInput = form.querySelector('[data-phone-with-ddi]');
          const nameInput = form.querySelector('input[name="name"]');
          const emailInput = form.querySelector('input[name="email"]');
          
          if (phoneInput && phoneInput.dataset.phoneWithDdi) {
            // Substitui valor do telefone pelo valor completo com DDI
            let old_value = phoneInput.value;
            let phoneWithDdi = phoneInput.dataset.phoneWithDdi || '';
            phoneInput.value = phoneWithDdi;
            
            // Limpa campos após envio
            setTimeout(() => {
              if (phoneInput) phoneInput.value = "";
              if (nameInput) nameInput.value = "";
              if (emailInput) emailInput.value = "";
            }, 500);
          }
        });
      });
    }

    /**
     * Mescla a query string atual em campos/links de redirecionamento do formulário
     * Suporta inputs: name="redirect_url" ou name="redirectLink" e links com data-merge-query
     */
    function setupRedirectLinkMerge() {
      const forms = document.querySelectorAll(formSelector)
      forms.forEach(function(form) {
        const redirectInputs = [
          form.querySelector('input[name="redirect_url"]'),
          form.querySelector('input[name="redirectLink"]')
        ].filter(Boolean)
        if (redirectInputs.length) {
          redirectInputs.forEach(function(input){
            if (!input.value) return
            input.value = buildUrlWithMergedQuery(input.value, window.location.search)
          })
        }
        const anchors = form.querySelectorAll('a[data-merge-query], a[data-merge-query="true"]')
        anchors.forEach(function(a){
          const href = a.getAttribute('href') || ''
          if (!href) return
          a.setAttribute('href', buildUrlWithMergedQuery(href, window.location.search))
        })
      })
    }
    
    /**
     * Adiciona parâmetros de URL como campos hidden ao formulário
     * Função responsável por capturar e incluir parâmetros de URL
     */
    function setupUrlParamsCapture() {
      const queryParams = new URLSearchParams(window.location.search);
      const paramsObj = {};
    
      for (const [key, value] of queryParams) {
        paramsObj[key] = value;
      }
     
      if (Object.keys(paramsObj).length > 0) {
        const forms = document.querySelectorAll(formSelector);
        forms.forEach(function(form) {
          let existingInput = form.querySelector('input[name="origin_query"]');
    
          if (!existingInput) {
            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'origin_query';
            hiddenInput.value = JSON.stringify(paramsObj);
            form.appendChild(hiddenInput);
          } else {
            existingInput.value = JSON.stringify(paramsObj);
          }
        });
      }
    }
    
    // Inicializa todas as funcionalidades do formulário standalone
    populateDdiSelectStandalone();
    setupPhoneMaskStandalone();
    setupRealTimeValidationStandalone();
    setupUrlParamsCapture();
    setupRedirectLinkMerge();
  }
  
  /**
   * Inicializa formulários standalone automaticamente quando DOM estiver pronto
   * Função responsável por detectar e configurar formulários standalone
   */
  function autoInitStandaloneForms() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setupStandaloneForm();
      });
    } else {
      setupStandaloneForm();
    }
  }
  
  // Inicializa formulários standalone automaticamente
  autoInitStandaloneForms();
  
  // Expõe função para uso manual
  window.setupStandaloneForm = setupStandaloneForm;

})();
