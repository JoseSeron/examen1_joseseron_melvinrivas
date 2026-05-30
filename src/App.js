
import './App.css';
import Navbar from './components/navbar';
import Destacado from './components/destacado';
import Fila from './components/Fila';

const tendencias = [
  {
    id: 1,
    nombre: "Caracortada",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABcg69u_CeT2HTzGHFDvb7LMn396j7EeL0TMUenHrbLv3MzD0EhuNj5-7He-tGle2EfdWbs9y9g0TLUtBVhl4ueOqB6qYOI2eLgs.jpg?r=43c"
  },
  {
    id: 2,
    nombre: "Ready Player One",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABZjT2B64ySkaRGp8YQCXthtVslQqJntN8ZeGYpleeVuZT1fAzYN0XC8bXpFwVKAiTG3NdzpH3pUK1JZSFoimAqf0xppg_lT9Ivfr5PzzlNPR5cYCXrYZFwVyJ5TotLihN8FUO9VgzHeWurVn4JmMonVI93YqOboqrGiliZQrIA.jpg?r=f07"
  },
  {
    id: 3,
    nombre: "El Caballero de la Noche",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABRi9XNGhYbJkU9p0UHbPljuRB__M53Wms5lBC_iS0ZALRbPmBC0uc_NdOG_zrDIWzqbWxXHS2WVudYa6VoDA0gRTXdQQIpR3Kp4.jpg?r=704"
  },
  {
    id: 4,
    nombre: "Parasitos",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABWnhTt4JIioua0tgDNnZInr2h7GCiYWx0HjnhE_kGZO59Di1o4jwH0GGqQX8RG_zd8yRFzezN6Itt7XWAU6tiV1PutA2ZmQ6ikg.jpg?r=53c"
  },
  {
    id: 5,
    nombre: "Señor de los Anillos",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABYWrR6vmTGtWr-PGd4ch1FgY5Pj3f-l_o7krU2KP4O3Ic4L8j4CsnNbBJZ-d6IImyfXSCpcSTsO7mBcINtAcFS4uytE-PLOhYeI.jpg?r=dd0"
  },
  {
    id: 6,
    nombre: "La Primera Mononoke",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABd0Qx0K_XPA626R3AYabpnuwlMAB91lXKPTcJyGKinEjo_TA4v5x_miHnCvWCbD3KyJjenFGaaB0XGtAD4bw9boBWjoIVvp8Ie0.jpg?r=911"
  },
  {
    id: 7,
    nombre: "El Niño y la Garza",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABU_qj4rJ6gX9qM9XICSHz7ThhdzJebs_IX-BHDyjt-nek3l_wy6DQDTI8Z9vn_rf-NDG7MNiWk5bSXs_4pzF2AT3TDxWjzUuav8.jpg?r=2c6"
  },
  {
    id: 8,
    nombre: "El Club de la Pelea",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABU53W8gr9gQMhJ3gxIn1Jvi6kh8dmqZkl_UcrF9EZOJixgHMJ6IUlzO7ipGrRlgXtxOZ61x9e66lCN8_6_9eR6EkRC1xEawUBcs.jpg?r=054"
  },
  {
    id: 9,
    nombre: "Atrapame Si Puedes",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABUeCDicYBKp5Nr8a-qyTcA79Mkgd337jpVv7m2cnbJ3yFB_Yt4KETkgSlH1qZTUPFYf2UKrGXkSKdp3xwSogs01zK58j4OC6vps.jpg?r=406"
  },
  {
    id: 10,
    nombre: "Kill Bill",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABdyL9NajeQ3DmyxFsfBwYlRAGxGBhDWicpLeLfDO9VjgMm1uBoCpipQLK2u0eApdqvLZ9tulK2BBgzIlQqdmMxppjg2whdHpCJQ.jpg?r=39a"
  },
  {
    id: 11,
    nombre: "Parque Jurasico",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABaoDwAwwPZlLou8sSDEyjjtCTLCzjrp2tTtuAOWhnvhqJRUGOPJeV2mqkIUeXjWOzipRdIYw6QFZausXhYOHaAbjELdRCwQklr0.jpg?r=45b"
  },
  {
    id: 12,
    nombre: "La Ballena",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABb7aymr0HhkmC8K4KqnvjtFAFZ9jh54LI9QYue8Kjiv6UGdRVuO6dR2AUaOnpQUr2q4p1kwxfCHKuf9XCBspsUpG_cV_Hq7FmC4.jpg?r=a6c"
  },
  {
    id: 13,
    nombre: "En sus Zapatos",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABWgA8UQuiwF_RK8lprTvWdI8nBHZfL-UF_DRYbbmesdrpgY3wAkQiYJv1oq1mgzFHj_4YRNq9ipvnrgoc0fs-DVFvys1ljOyPgA.jpg?r=edf"
  },
  {
    id: 14,
    nombre: "Se Levanta el Viento",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABWOHLY6GvmMC_foIrTS5TKlaLdH3cevORkLtf7KmnI41BnpTKEz11iHwS-XMa16xvB4vRNi6go4yJIvYhgWWmXbTadfCprJLNsM.jpg?r=33d"
  },
  {
    id: 15,
    nombre: "Los dos Papas",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABYgHz-sSdz71g5ikOm5RatXYx8L-Efpv1KOc_WXRJlNPUUY7c6oZwgcJnH54VxuzjZy078nzu52gqA0biWWWz1rsMNUp9EnTcV0.jpg?r=207"
  },
  {
    id: 16,
    nombre: "Mario Bros",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABTUrEdGqtzPwGkgw7ZGn2zTELhQPeZ8lf6gtG3JSvNTL8-ZQ1gxf80AykUeQUpC54ZSS-XHib_ETUvyT55DUo7YwBTgP29qcS2ZkwyHce6TxJZ1XcVsPxWrxBkku0SXSvag42g_ol5mn6BE2V9MBRJL3ffRyF0uRAFHQfL2YgQxR-HloKRO0XQszuSpYS9gjbOLgLTzysWdZIRZ6__P-yhphyLmOqSAl_uXV.jpg?r=c17"
  }
];

const Romance = [
  {
    id: 1,
    nombre: "La Nobleza de las Flores",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABaqqDNCY1LQGaNQEEr3sRYNzZuqdZGKUXSAQuLD72wa_VqI_dkbkXBOoAIsCJNU--yXBp3moVn-ZPfDh8fek8baIwRLYbvT3ojA.jpg?r=8ee"
  },
  {
    id: 2,
    nombre: "Pasion",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABYbLfO0DNe0370Lxdl6JN18vOcTvBDnpdKUrRJ5aYzv6LnLv-1gpwddGu4yP-gu4pIaZ86uCjlwRGPkHHZW5IOXdqhM9CbIa55o.jpg?r=8bb"
  },
  {
    id: 3,
    nombre: "Belleza Verdadera",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABe0blLd3WSi6yQTb8Zbgwqp0lUlczZp4lg9nqgIT6CBze40X-QD6VKq9Gsx0Kzcn-3ME7sLfyh9owRHkTWc4mW9Vy4nC8MT-dR3k.jpg?r=c42"
  },
  {
    id: 4,
    nombre: "Propuesta Laboral",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABW3EdSm_c4GNOPXFg3uggCUQkeMWq2X1AcInpVTSwMrcziuCgigPu5w424NeygOU1X7Gd07uOJNq9Cs3UN4kVjpjERo-A9le_IU.jpg?r=de3"
  },
  {
    id: 5,
    nombre: "El Amor en la Puerta de al Lado",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABRXbyKAzi2Iv9w3jiibqY03-vJdIl4uGdG-UjEVTIiBO0BJY6iqMp0cAn-QYrj1EFiay-n_wMPgHwrpG_RqrEdMG78p-lrs7458.jpg?r=625"
  },
  {
    id: 6,
    nombre: "La Caja Azul",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABSCedU0PSbGvglHU4yxBc4hQhW5RfUcI2TlGY2uTJoS_lQwpBgtV3cPuCSAVnuJwOdphlBVLOK1gLU6GN8pldBr-yx1Y1tp5Plc.jpg?r=854"
  },
  {
    id: 7,
    nombre: "Vampiro",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABVhtg7xzwXvwYlykUU4UXXHcf1FXIN_6IWfTRFIr8qn8Hp9-F3ylUFqRAPkINg8xaqw-gcrcB_6E-75VyQQI3ryeg_w2QSGGzXs.jpg?r=958"
  },
  {
    id: 8,
    nombre: "Envidiosa",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABW-t1qRoCVqYUIjjA6xf0HD_m05Kjum7TW8cyqVunFuRWSvN7nZAammqTBvoMgjq_1nTx6eoKkpLskkp8YH_373CBdwW2ROqaHgf.jpg?r=458"
  },
  {
    id: 9,
    nombre: "Amar y Vivir",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABSKNDbJQT11moxPTO24w_ZIHTbuMxyTRKy0fJFM0kP0DcxkEt2r5cs7N4Nryx8Pctc_vIbMpuKWLcm7eb2zpENNSiK2xldLAfjk.jpg?r=d33"
  },
  {
    id: 10,
    nombre: "Emily en Paris",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABTDDojiCsjlHypn69S-517QXTcirbtdSbQ4uL5S_laT-yGBCaGyN2KfGMMwY-8zGalJVEKQmhQ6Gl1rKxnQEwowuWunRI4W7sVA.jpg?r=798"
  },
  {
    id: 11,
    nombre: "Mi Adorable Demnio",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABV5zBItTUfgup_3KxCSuUIcULnZqfayt2P5srrYEaI69CWPVE3Bmjx21ZcY3g_z838bdNRRGIQWHBIMiYsHxMOLPUmHBS1qNxS0.jpg?r=744"
  },
  {
    id: 12,
    nombre: "NANA",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABco0ZtQcTz0OxTEca_e29JT-I4wk8t4q1cQs3vDfl-aU8qEVQl27kO2L21f38O3qoBxjGPBcK5A1k4P9d0YKgNbq7exnUGabc6E.jpg?r=61a"
  },
  {
    id: 13,
    nombre: "Mi Feliz Matrimonio",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABSJ1f6xa-bQayMEXy711z58xb02G6N1fU_8kavbgEBIGGnPTRO8k9AjQ-1KJs7o-UoUi1mibBxWDb014Mc_lmm9V96ZOnorXNg0.jpg?r=f2a"
  },
  {
    id: 14,
    nombre: "Bridgerton",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABUCx73pG1BfkEwOOe9ihV3stCiuEu7rZqxM2SjUqe6ICiOtQgH1GWQJGCmkOtZqSxvROMdKoBFrBxaKPW45mV2vI-SGFaGOhwvQ.jpg?r=03b"
  },
  {
    id: 15,
    nombre: "Hasta que la Plata nos Separe",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABdPEdzmHIqWhFQO-R5Enb6mUj6isX-ZY6JA8IIIAfnue790G3Ssijp8t5oOPOLbQTxoBRyJ_YtNF38ILxs5rYZu3zZ_8DT9zqbU.jpg?r=422"
  },
  {
    id: 16,
    nombre: "El Libro de la Vida",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABZjF-dEwxEq7tgmUswxHqti5bQQC__INGyagiPezhTzwSf8PKELBJ_0dA_h-DF4x8amgVjoJwrxkNh2f8ZmKrLQqBqrnVm1tYGzIakxe8jXheiQb0AfY0EiAynpdoJz9RUiz9T73UsKhN9eZvttFEwnGHpW-9r21ThIRRSykxw.jpg?r=256"
  }
];

const Accion = [
  {
    id: 1,
    nombre: "Rick y Morth",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABfoH163wULvptPjQ-GP3m-kBHoPtp_gK9wu6EmC9ACVeus3Xx93kL7jbZ6ENDZDi0eTTNku0vvYFDhTWWTf5u8BgqoiGJa1jkb6E.jpg?r=015"
  },
  {
    id: 2,
    nombre: "Smallville",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABaWhQG2_sbLGzaSMoh86Sw8mwOeG9ZtyIusqeQyQ9URl1-8WvGY76VGxTIPMZXZ47sXGEXR5p76-rlDsOQX25OGMeZ8BFet2cLs.jpg?r=8e4"
  },
  {
    id: 3,
    nombre: "One Piece",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABbzcNdn75pb4U5m5UYlbftKUvt1ZGq0oem4R5oI3EmIW9A6m-QZ-E5gDztB2HM-BPjmPZyoC8S_fJMAWKyoeIcOFRLoMcaeFB4k.jpg?r=70d"
  },
  {
    id: 4,
    nombre: "Rookie",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABQGeNHv5XklPvjgGGBc6SOf2sgrZ1SMetEuWRcnN70sczm8KO4i-25Eit8yBbhWhDU2Gfv_UC-WUuZZQ6nFKhpRc46qrHx2M2zY.jpg?r=54b"
  },
  {
    id: 5,
    nombre: "Sabueso",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABQ_nZqW01G0wA_UmF8vIhpV4Stb_xF81Qfz_cOCsDR4m8-q9ws2FOw-d46M4UqsGKhwfqsfGYeZVcMCbmAoB_zNNgY02lrAj_ak.jpg?r=a5c"
  },
  {
    id: 6,
    nombre: "Arcane",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABWqNWfDEn3eR0V3XO-pG0oFKQVAQTdL3GVHPj0iTKSmSi3xJGpO-tykcKl785U_NhlE2MUKBs3hmYlNbyq3Vyb5EK_aTaiMNATuH.jpg?r=59f"
  
  },
  {
    id: 7,
    nombre: "Flash",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABSQIerO02GYzuEIO6HYccoKKhIntwKfXZv8-vyxUEZoIlOQqOTb0MjLWdoYawCMBMd1S050f8w0GYbNlWz8Zc3x35wjZ_rWqEVND.jpg?r=0d9"
  },
  {
    id: 8,
    nombre: "S.W.A.T.",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABeVu4NDwbf-_bW3jeb0guS17wCK_4EPFpfSYWku-uyKaC5fCtpQrPPgUiT6lwWTanJdLUxNhSnT1CbXhGYg8bO7Nd8zJceBwDZbd.jpg?r=2b1"
  },
  {
    id: 9,
    nombre: "El Final del Paraiso",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABUfnoGzh2t2DS-GKoXW8OmiM4faIHYrYAD0xaDZPt5Fdkrz5Eu5ok7QRSuCA--h9EBCNKmzf-ScTpDBHfzEE6jWqakT6c0OSSxkd.jpg?r=766"
  },
  {
    id: 10,
    nombre: "La Piloto",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABcHOtAlqrhUo4fhASiLBZPfHIR-pNFCtZvJbsi7vB7Oq5iUFHABhlVw3VBWyXcvHI-8gtoqDhOUR1PXpfRCBeFZQqjErSBBeR4S8.jpg?r=3bd"
  },
  {
    id: 11,
    nombre: "El Cartel",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABYsFnrSlmgfbHcb24dbtF4ZxVmnFmhecoUgEtnmBu77LH36N_b10_ticrquDQ9ovRcx0HWxi8QApXejM-Gsgm5IdWlKJT_tzhQjj.jpg?r=c79"
  },
  {
    id: 12,
    nombre: "Vikingos",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVPPjnmfsk9ejF0aXN1zoqoaYXqoB_OZ8lnuwpngA-oBlo8W-MGZeY3PtCiyXIepUg5WkPyHWaavzgUbb0adTquZdG05gHcy6ae7BXA5NBE.png?r=f92"
  },
  {
    id: 13,
    nombre: "Outlander",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABSKa4SEzUypfDTanDxpmpAISRnHteaBP2lLrr9adWhhi8QKX5pKy0-6vyO76NabHvF-QRq32jL4p0vB7BajVix8hYDV-JKbPtRd3.jpg?r=68c"
  },
  {
    id: 14,
    nombre: "El Chema",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABaVcaXR2n4EJMZ-JhKnXKu6YIAa7GA13RNllr1wrrJoh5BOccz0gItIG8sa6xt66qxvH5KTIeFpLaG2d5E3oacZqAMDfSK6guac.jpg?r=66a"
  },
  {
    id: 15,
    nombre: "El Chapo",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABRufC-XQwqJIII72CooovF9SxUmC73XgfJkr9Fb05y62-Z5aZT8hm6TJw7F16vOiHxbg7dVgmKUB2J-k3DoU4ztYEt9BEa9KM49-.jpg?r=0ec"
  },
  {
    id: 16,
    nombre: "Spartacus",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABd5H3fWmIULl3zqcDP9Z6Hw3FKlNSVygdGh2_kJSndelN0C5B8EpJqnjHbprApSrNzMJfEe8Tg1LRGCqfH9T5DaqVpfVc30aYmrl.jpg?r=b57"
  }
];

const Anime = [
  {
    id: 1,
    nombre: "My Hero Academia",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABak9Xh07Ld9sVibgnq9TKqilnio4D1SLJ2cWDJR31xySVPF96hgAWgReUGe6rxtG94ZOp6md2honR4QfeqzyGeJVEOs2rtz4OSVM4D3AZXysjI9xP2TGP1geVfm0FCA3yhGlqjgFN-GYxAGNvg9FVJqEfNxRgguGd_RD5MRxf5Ytk-uAP5PkE9Y86Q5XWJXU7hC6j2P9ZV1fsFl6TN5vYFcKmSyvTfpNklRBSMjeuk3LX7p4iQlopJ6l3f5j8hZHO5u2nPO0RVYQF3O2O2_sG8i5zDQHX0sWMUD0s-rN_3e8sP_p4yopUyiAasufwo6MhCQ.jpg?r=9ec"
  },
  {
    id: 2,
    nombre: "Assassinnation Classroom",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABZvr2hzVfSaQmRhosmmWHWsF8gl80K28AvYXKa3FlDuwOiYz5283OmRfWATsk78ZZBEgt5-yYAmWMSqKWjDRu8zcrokMjfLeAI3e6-Mt7QS4zxa_5sbqv0zF1_SnlqmxS3qtXj299Ql68lipKJnt1EOt1y-06_VQ8rCJ4o9W5yDtRGE.jpg?r=495"
  },
  {
    id: 3,
    nombre: "JoJos",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABZka6rvEjC4MQavTVGQun1pyzl_C7WE6eC7tz5n55yPjUyJFPDAD2VlHyfCMnwhCsFnJ2BsBc_6mspga4XG5PMtP1GRZitAAcUg.jpg?r=78d"
  },
  {
    id: 4,
    nombre: "Bluelock",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABR3nKlPC_yfgBfejAe8s7ztCWtYhxKSfGFFNJE7E3VMoYgLPjao0_7nbK3xBvdTtRM1NbKmi46ylIz0-3JL-LFxwTG6xnfCTHb7fpmECJqpOrJfgXl-ZahR66TwYSBjdOE4MuMBXrtiy0ddF7d_di8HQLG0P-TmU1xdaxYwJ3p_GDuNcJJTI6r0VQdtvjP2Z-yi5QJLBHfIM9zLr3iUTYUD8JncYJhkfVaCoIJcN.jpg?r=b36"
  },
  {
    id: 5,
    nombre: "Demon Slayer",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABSACAXs3hFQfgjBfYN4nZddbQRfHbFJccb0bINsUaJFJP_7g66EEakM3ZQAXEJKyv6oStz24wrNgyk_X4a0FBCZbHC_7R5DIFCYq.jpg?r=53a"
  },
  {
    id: 6,
    nombre: "Horimiya",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABWRKlDra-O7fTv8h82Pnj9unZErCBc2gQExiqaEXGduzTsxgloadyI9Fi2SoCtQJ8HIgb_Vlmihv4SozozdtKTSBwgECujmRZSbhS7OZeD2h8GyXZeJNGTAvvpEU5atiV3jycfc5PbmA6JiTjc8ubTFSRvvM4fuGQ2VS0u6UhddhaFg.jpg?r=0d5"
  },
  {
    id: 7,
    nombre: "One Piece",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABTux3A4Pwajdl1Ag8yY25nK4MqN9JezkoVxAcO-h43Cd6eGxY7qYu5B0TqUCmXU_dq2pFcmA4ydy-oBesriLgjdfEKjpIl4g7qcbJY5IEmDaFBskjQvueh5E-sQpfXvV6wUEmwpNQ5SK1x8n9MKV8TwIdZglMCbX3FwA1_I8vIAI6NbdQw.jpg?r=fcc"
  },
  {
    id: 8,
    nombre: "Black Cover",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABXbM8Al65QnN2pfAWykO36YI7rdtpzF3BlMatwwDaxGCkEtYTJeGfA14yOPFiq1PdzBphMSBMFbuOYO0T4vshf9p1X9EIoAxIjQ.jpg?r=567"
  },
  {
    id: 9,
    nombre: "Mushoku Tensei",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABcg4Bju8HGOFupLliHAQUgC8VxBqN4sbhOHfS0ybqm1W2UWDV6QuQLO7rbYc5uMPeaMFI3BHnSbbqjJd2SYDwzg05fC_35yU7UP1av0B7vei9CA5CmsjZVpjEYHLW8fybZtbvzGTZ3wpuMhzIswpcRLvtTNw6j_WYPxz8ICxquCWS9A.jpg?r=2c7"
  },
  {
    id: 10,
    nombre: "Death Note",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABS2m9ZLEQcLAzk9Msbb4AY_ychLusjUvCqwIr7xNrZRS33p3OnLQpRHDV71_07JqpQwa9GKa66ckTauV5FmAXouJ1gVyhwEiF1A.jpg?r=bc9"
  },
  {
    id: 11,
    nombre: "Diarios de la boticaria",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABQOXoS6szRicugOOZTjc1F3a8D2l9ek1WbzBRx_6lfgc2tqjOAE5wj9avZdkF125oJLb4K4FdR2gFJqP1-KwXxLI6qeDWKORZkc.jpg?r=0ad"
  },
  {
    id: 12,
    nombre: "Hunter X Hunter",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABbvWErZLxOD4gluoTTXQW6oAe2YyN70pp4dsU1yRoqYpx8sPLyshm3vgIQFeGyZyfujdSq2H6YT55koAxfHjZSpFTkMja82iVc0K.jpg?r=2ed"
  },
  {
    id: 13,
    nombre: "Shangri-La-Frontier",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABZOv3jr8m3ZDedg6HxWeLnCpN_HrnkoFDQdVgI9ZoL_wt8YgFwCjWe_FylNZSvlthTcpXOOnn2JbalTBdNfr0gNFpzoNSsHtiK904PzI5AW5Z89CrHu77y1j5kAa6MDyJ36pQKCTPsAv5Ppdgk7dKxwyCKATG9zINfUKy3oHno4KJoe6.jpg?r=fbd"
  },
  {
    id: 14,
    nombre: "Los Siete Pecados Capitales",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABW45SpkBFP6mzcmMM-djFClbYbq9EAAvLFr3ks5V996DyQPbUyIrGf_SLwZ_9Brwh2wjWuhiwqwXZ48H7l3r9mzzlWh_IWl0-Hw.jpg?r=90c"
  },
  {
    id: 15,
    nombre: "SPY Family",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABZo9S_MPRRN4igYnhgshgPISmDge6mYIVMA88r7RlRsBxX9v9Zb54G7ilqWrbABNw31r34KMu8VSNdBZUfSbaSuoKfR0rndJDUM.jpg?r=edd"
  },
  {
    id: 16,
    nombre: "Ponyo",
    imagen: "https://occ-0-3227-420.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABcFn6XfjyqulbeMOF4us06XzGsStEZcNDWVosOTSS0kGw7s7VSi6EpdvJUdU5KtWmPPKrjSc-i7JAERzcGJsmDl20__cMIpE9nfE.jpg?r=fcf"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Destacado />

      <Fila
        titulo="Tendencias"
        peliculas={tendencias}
      />

      <Fila
        titulo="Romance"
        peliculas={Romance}
      />

      <Fila
        titulo="Accion"
        peliculas={Accion}
      />

        <Fila
        titulo="Anime"
        peliculas={Anime}
      />
    </div>
  );
}

export default App;