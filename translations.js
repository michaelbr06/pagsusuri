const uiData = {
  title: {
    en: "Examination of Conscience",
    tg: "Pagsusuri ng Konsensya",
    bs: "Pagsusi sa Tanlag",
  },
  prepareBtn: {
    en: "Prepare Confession",
    tg: "Ihanda ang Kumpisal",
    bs: "Andama ang Kompisal",
  },
  resetBtn: { en: "Reset", tg: "Burahin", bs: "I-reset" },
  summaryTitle: {
    en: "My Confession List",
    tg: "Aking Kumpisal",
    bs: "Akong Kompisal",
  },
};

const categoriesData = [
  {
    id: "c1",
    header: {
      en: "1st Commandment — I am the LORD your God. You shall not have strange gods before me.",
      tg: "Unang Utos — Ako ang PANGINOON mong Diyos. Huwag kang magkakaroon ng ibang diyos bukod sa Akin.",
      bs: "Unang Sugo — Ako ang GINOO nga imong Diyos. Ayaw pagbaton og laing mga diyos gawas Kanako.",
    },
    items: [
      {
        id: "s1",
        text: {
          en: "I was lazy or half-hearted in my prayers and daily duties to God.",
          tg: 'Tinamad ako o "nag-compliance" lang sa pagdarasal at sa mga obligasyon ko sa Diyos.',
          bs: "Nagtinapulan ko o wala seryosoha akong pag-ampo ug mga obligasyon sa Ginoo.",
        },
      },
      {
        id: "s2",
        text: {
          en: "I received Communion unworthily, broke the fast, or treated holy things with disrespect.",
          tg: "Nag-Communion ako kahit may mabigat na kasalanan, hindi nag-fasting, o walang respeto sa mga sagradong bagay.",
          bs: "Nag-kalawat ko bisan naay bug-at nga sala, wala nag-puasa, o wala nirespeto sa mga sagradong butang.",
        },
      },
      {
        id: "s3",
        text: {
          en: "I intentionally withheld a serious sin in a past confession.",
          tg: "Sinadya kong itago yung mabigat na kasalanan nung huli akong nangumpisal.",
          bs: "Tuyong gitago nako ang usa ka seryosong sala sa miaging kumpisal.",
        },
      },
      {
        id: "s4",
        text: {
          en: "I entertained serious doubts, engaged in superstitions, or exposed myself to media contrary to my Faith.",
          tg: "Nagpa-dala ako sa duda, horoscope, o mga group at media na kontra sa Faith ko.",
          bs: "Nag-entertain ko og duda, nag-salig sa horoscope, o nitan-aw og mga butang nga kontra sa akong tinuohan.",
        },
      },
      {
        id: "s5",
        text: {
          en: 'I obsessed over getting credit, being noticed, or always needing to be "first.',
          tg: 'Uhaw ako sa recognition, laging gustong mapansin, o kailangang laging ako ang "una.',
          bs: "Gusto gyud ko permi mapansin, ma-ganid sa credit, ug gusto permi mag-una.",
        },
      },
      {
        id: "s6",
        text: {
          en: "I refused to take advice or argued just to be right, disregarding others’ feelings.",
          tg: "Ayaw kong makinig sa payo o nakikipag-talo lang para manalo, kahit nakakasakit na ng iba.",
          bs: "Wala ko naminaw og advice o nakig-lalis lang para ingnon nga sakto, bisan nakasakit na sa uban.",
        },
      },
      {
        id: "s7",
        text: {
          en: 'I acted as a "bossy" person or a bully to get my way.',
          tg: 'Naging "bossy" o bully ako para lang masunod ang gusto ko.',
          bs: 'Nahimo kong "bossy" o bully para lang makuha akong gusto.',
        },
      },
      {
        id: "s8",
        text: {
          en: "I shifted the blame for my own mistakes onto others.",
          tg: "Nanisi ako ng ibang tao sa mga sarili kong pagkakamali.",
          bs: "Namasol ko sa uban sa akong kaugalingon nga mga sayop.",
        },
      },
      {
        id: "s9",
        text: {
          en: "I held onto a grudge or am currently refusing to speak to someone.",
          tg: "Nagtanim ako ng galit o ayaw kong kausapin ang isang tao dahil sa sama ng loob.",
          bs: "Naghupot ko og dumot o wala nakig-storya sa usa ka tawo tungod sa kaguol.",
        },
      },
      {
        id: "s10",
        text: {
          en: "I failed to do my usual prayers such as the Rosary on times I said I would.",
          tg: "Hindi ko nagawa yung mga routine na dasal ko gaya ng Rosaryo kahit nangako ako.",
          bs: "Wala nako nahimo ang akong naandan nga pag-ampo sama sa Rosaryo bisan nisaad ko.",
        },
      },
      {
        id: "s11",
        text: {
          en: "I allowed myself to be influenced too much by what people might think or say.",
          tg: "Masyado akong nagpa-pressure sa sasabihin ng ibang tao kesa gawin ang dapat.",
          bs: "Sige lang ko’g huna-huna sa isulti sa uban imbis nga buhaton ang sakto.",
        },
      },
      {
        id: "s12",
        text: {
          en: "I did not work in an orderly way to give greater glory to God.",
          tg: "Hindi naging maayos ang pagtatrabaho ko para sana maging alay sa Diyos.",
          bs: "Wala nako gi-plano og tarong akong trabaho para unta sa himaya sa Ginoo.",
        },
      },
      {
        id: "s13",
        text: {
          en: "I failed to frequently realize that I am in God’s presence.",
          tg: "Nakakalimutan kong kasama ko ang Diyos sa bawat sandali.",
          bs: "Nakalimot ko permi nga naa ang Ginoo sa akong kiliran.",
        },
      },
      {
        id: "s14",
        text: {
          en: "I did not work with the happiness that comes from knowing I am a child of God.",
          tg: "Nagtrabaho ako nang walang galak, nakalimutan kong anak ako ng Diyos.",
          bs: "Nagtrabaho ko nga walay kalipay, nakalimot ko nga anak ko sa Ginoo.",
        },
      },
      {
        id: "s15",
        text: {
          en: "I was not generous with my time in carrying out tasks entrusted to me.",
          tg: "Naging madamot ako sa oras ko sa mga gawaing binigay sa akin.",
          bs: "Nahimo kong dalo sa akong oras para sa mga buluhaton nga gi-salig nako.",
        },
      },
      {
        id: "s16",
        text: {
          en: "I allowed myself to be dominated by gloominess.",
          tg: "Hinayaan ko ang sarili kong lamunin ng lungkot o sobrang pagka-negatibo.",
          bs: "Gipasagdan nako akong kaugalingon nga malubog sa kaguol o pagka-badtrip.",
        },
      },
      {
        id: "s17",
        text: {
          en: "I allowed myself to be gloomy.",
          tg: "Hinayaan ko ang sarili kong lamunin ng lungkot o negativity.",
          bs: "Gipasagdan nako akong kaugalingon nga malubog sa kaguol o pagka-badtrip.",
        },
      },
    ],
  },
  {
    id: "c2",
    header: {
      en: "2nd Commandment — You shall not take the name of the LORD your God in vain.",
      tg: "Ikalawang Utos — Huwag mong babanggitin ang pangalan ng PANGINOON mong Diyos sa walang kabuluhan.",
      bs: "Ikalawang Sugo — Ayaw gamita ang ngalan sa GINOO nga imong Diyos sa walay pulos.",
    },
    items: [
      {
        id: "s18",
        text: {
          en: "I failed to try my best to fulfill the promises and resolutions I made to God.",
          tg: "Hindi ko talaga sineryoso o pinagbutihan na tuparin yung mga pangako at resolution ko sa Diyos.",
          bs: "Wala gyud nako gipaningkamutan og maayo nga matuman akong mga saad ug resolution sa Ginoo.",
        },
      },
      {
        id: "s19",
        text: {
          en: "I failed to carry out a quiet and persevering work of apostolate among my friends.",
          tg: 'Hindi ako naging matiyaga o "consistent" sa pag-share ng Faith sa mga kaibigan ko sa tahimik na paraan.',
          bs: "Wala ko naningkamot sa hilom ug mapailubon nga pag-share sa akong Faith sa akong mga migo/miga.",
        },
      },
      {
        id: "s20",
        text: {
          en: "I did not look for opportunities in my work and social life to carry out an effective apostolate.",
          tg: "Hindi ako naghanap ng chance sa trabaho o sa gimmick para ilapit ang iba sa Diyos.",
          bs: "Wala ko nangita og mga higayon sa trabaho o sa social life para maka-apostolate sa uban.",
        },
      },
      {
        id: "s21",
        text: {
          en: "I have not tried to attract any friends to the apostolate.",
          tg: "Hindi ko man lang sinubukang yayain o i-encourage ang mga kaibigan ko sa mga gawaing pang-Simbahan.",
          bs: "Wala man lang nako gisulayan og hagit o agat akong mga migo/miga sa mga buluhaton sa Simbahan.",
        },
      },
      {
        id: "s22",
        text: {
          en: "I took the name of God in vain or used it mockingly, jokingly, or angrily.",
          tg: "Ginamit ko ang pangalan ng Diyos nang walang galang, sa biro, o nung nagalit ako.",
          bs: "Gigamit nako ang ngalan sa Ginoo sa walay pulos, sa komedya, o sa akong kasuko.",
        },
      },
      {
        id: "s23",
        text: {
          en: "I used the name of the Blessed Virgin Mary or the saints in an irreverent or mocking manner.",
          tg: "Binastos ko o ginawang biro ang pangalan ni Mama Mary o ng mga santo.",
          bs: "Gibugal-bugalan o wala nako gitahod ang ngalan ni Mama Mary o sa mga santo.",
        },
      },
      {
        id: "s24",
        text: {
          en: "I was a sponsor in baptism or ceremonies outside the Catholic Church.",
          tg: "Naging ninong/ninang ako sa binyag o seremonya na hindi sa Katoliko.",
          bs: "Nag-ninong/ninang ko sa bunyag o seremonya sa gawas sa Simbahang Katoliko.",
        },
      },
      {
        id: "s25",
        text: {
          en: "I told a lie under oath.",
          tg: "Nagsinungaling ako habang nanunumpa (sa harap ng Diyos o sa batas).",
          bs: "Namakak ko samtang nanumpa (sa atubangan sa Ginoo o sa balaod).",
        },
      },
      {
        id: "s26",
        text: {
          en: "I was not concerned enough about my professional development or the study necessary to be effective in my work.",
          tg: "Pinabayaan ko ang pag-aaral o pag-improve sa trabaho ko para maging mahusay sa ginagawa ko.",
          bs: "Wala ko nag-atiman sa akong pag-eskwela o pag-improve sa trabaho para mag-maayo ko sa akong agi.",
        },
      },
    ],
  },
  {
    id: "c3",
    header: {
      en: "3rd Commandment — Remember to keep holy the LORD'S Day.",
      tg: "Ikatlong Utos — Pangilin mo ang araw ng PANGINOON.",
      bs: "Ikatulong Sugo — Hinumdumi ang pagbalaan sa adlaw sa GINOO.",
    },
    items: [
      {
        id: "s27",
        text: {
          en: "I broke my private or public vows.",
          tg: "Sinira ko ang mga binitawan kong panata o sumpa (sa Diyos o sa tao).",
          bs: "Wala nako tumana ang akong mga saad o panumpa.",
        },
      },
      {
        id: "s28",
        text: {
          en: "I wasted my time.",
          tg: "Sinayang ko lang ang oras ko sa mga walang kwentang bagay.",
          bs: "Gi-usik-usikan lang nako akong oras sa walay pulos.",
        },
      },
      {
        id: "s29",
        text: {
          en: "I allowed myself to be distracted during Mass.",
          tg: "Nagpa-distract ako sa Misa—hindi ako nakinig at kung saan-saan ako tumitingin.",
          bs: "Nagpa-distract lang ko sa Misa—wala ko naminaw ug bisan asa lang ko nagtan-aw.",
        },
      },
      {
        id: "s30",
        text: {
          en: "I deceived myself by leaving work for later.",
          tg: "Niloko ko ang sarili ko; ipinagpabukas ang trabaho imbis na tapusin na agad.",
          bs: "Gi-atik nako akong kaugalingon; gi-ugma-ugma ang trabaho imbis nga humanon na unta.",
        },
      },
      {
        id: "s31",
        text: {
          en: "I arrived at Mass so late that I failed my obligation.",
          tg: "Sobra akong nahuli sa Misa kaya hindi ko na talaga natupad ang obligasyon ko.",
          bs: "Na-late kaayo ko sa Misa mao nga wala na nako natuman ang akong obligasyon.",
        },
      },
      {
        id: "s32",
        text: {
          en: "I missed Sunday Mass and/or a Holy Day of Obligation (Dec 8, Dec 25 and/or Jan 1).",
          tg: "Lumiban ako sa Misa nung Linggo o nung mga Holy Day (Dec 8, 25, o Jan 1).",
          bs: "Ni-absent ko sa Misa sa Domingo o sa mga Holy Day (Dec 8, 25, o Jan 1).",
        },
      },
      {
        id: "s33",
        text: {
          en: "I misbehaved or maintained improper posture or dress.",
          tg: "Hindi maayos ang kilos, postura, o suot ko sa loob ng simbahan.",
          bs: "Dili maayo akong lihok, barog, o sinuotan sa sulod sa simbahan.",
        },
      },
      {
        id: "s34",
        text: {
          en: "I failed to help the Church in her necessities.",
          tg: "Hindi ako tumulong sa mga pangangailangan ng Simbahan kahit kaya ko naman.",
          bs: "Wala ko nitabang sa mga kinahanglanon sa Simbahan bisan og makaya ra unta nako.",
        },
      },
      {
        id: "s35",
        text: {
          en: "I did not fast or abstain on the prescribed days.",
          tg: "Hindi ako nag-ayuno o umiwas sa karne sa mga araw na iniutos ng Simbahan.",
          bs: "Wala ko nag-puasa o nag-abstinence sa mga adlaw nga gi-ingon sa Simbahan.",
        },
      },
      {
        id: "s36",
        text: {
          en: "I performed work or business that inhibited worship or rest.",
          tg: "Nagtrabaho o nag-negosyo ako na naging hadlang sa pagsimba o pahinga tuwing Linggo.",
          bs: "Nagtrabaho o nag-negosyo ko nga nakababag sa akong pagsimba o pagpahuway sa adlaw sa Ginoo.",
        },
      },
    ],
  },

  // Add Category c2, c3, etc. here in the same format
];

/**
 * 2. THE TRANSFORMER
 * This function converts the "stacked" format back into the format Stimulus expects.
 */
const transform = (lang) => {
  return {
    ui: Object.fromEntries(
      Object.entries(uiData).map(([key, translations]) => [
        key,
        translations[lang] || translations["en"],
      ]),
    ),
    categories: categoriesData.map((cat) => ({
      id: cat.id,
      header: cat.header[lang] || cat.header["en"],
      items: cat.items.map((item) => ({
        id: item.id,
        text: item.text[lang] || item.text["en"], // Fallback to English if translation is missing
      })),
    })),
  };
};

/**
 * 3. THE EXPORT
 * We export the exact same object name and structure as before.
 */
export const translations = {
  en: transform("en"),
  tg: transform("tg"),
  bs: transform("bs"),
};
