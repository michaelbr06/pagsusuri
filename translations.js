const uiData = {
  title: {
    en: "Examination of Conscience",
    tg: "Pagsusuri ng Konsensya",
    bs: "Pagsusi sa Tanlag",
  },
  prepareBtn: {
    en: "See List",
    tg: "Tingnan ang Listahan",
    bs: "Tan-awon ang Listahan",
  },
  confessionGuideBtn: {
    en: "Confession Guide",
    tg: "Gabay sa Kumpisal",
    bs: "Gabay sa Kompisal",
  },
  resetBtn: { en: "Reset", tg: "Burahin", bs: "I-reset" },
  summaryTitle: {
    en: "My Confession List",
    tg: "Aking Kumpisal",
    bs: "Akong Kompisal",
  },
  confessionGuideTitle: {
    en: "Confession Guide",
    tg: "Gabay sa Kumpisal",
    bs: "Gabay sa Kompisal",
  },
  confessionGuide: {
    en: `In the Name of the Father, and of the Son, and of the Holy Spirit. Amen.

1. GREETING THE PRIEST
   Good evening/afternoon, Father.

2. SIGN OF THE CROSS
   Priest: May God give you, my child, pardon and peace.
   Penitent: Amen.

3. CONFESSION
   Bless me Father for I have sinned, it has been [state how long since your last confession]. Here are my sins:

{{SINS_LIST}}

   [End your confession with:]
   "For all these sins, I am sorry." 

4. REMINDERS
   Listen carefully to the priest's advice and penance.
   After receiving your penance, proceed to the Act of Contrition.

5. ACT OF CONTRITION
   
   Lord Jesus, Son of God, have mercy on me, a sinner.

   or say:
   O my God, I am heartily sorry for having offended Thee, and I detest all my sins, because I dread the loss of heaven and the pains of hell; but most of all because they offend Thee, my God, Who are all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen`,
    tg: `Sa Pangalan ng Ama, at ng Anak, at ng Espiritu Santo. Amen.

1. PAGBATI SA PARI
   Magandang gabi/gabi po, Father.

2. PAG-GAWA NG KRUS
   Pari: Pagpahingi sa iyo, anak ko, ng tawad at kapayapaan.
   Mananalumpati: Amen.

3. PAGKUKUMPISAL
   Basbasan nyo po ako, Father, sapagka't ako ay nagkasala. [Sabihin kung gaano na katagal ang nakalilipas mula sa huling kumpisal.] Eto po ang aking mga kasalanan:

{{SINS_LIST}}

   [Tapusin ang kumpisal ng:]
   Pasensiya na po ako sa mga ito at sa lahat ng aking iba pang kasalanan. Buong pangako kong magsisimba ng kumpisal nang regular, iiwasan ang mga pagkakataong makakasal, at babaguhin ang aking buhay. Amen.

4. MGA PAALALA
   Makinig nang mabuti sa payo at penance ng pari.
   Matapos tanggapin ang penance, magpatuloy sa Akto ng Pagsisi.

5. AKTO NG PAGSISI

   Panginoong Hesus, Anak ng Diyos, maawa ka sa akin, makasalanan.

   o kaya:
   Oh, aking Diyos, buong puso akong nagsisisi sa pagkakamali ko sa Iyo, atay Aking kinamumuhi ang lahat ng aking mga kasalanan dahil sa Iyong makatarungang parusa, at higit sa lahat dahil sa mga ito ay nakakagalit sa Iyo, aking Diyos, na siyang lubos na mabuti at karapat-dapat sa lahat ng aking pagmamahal. Buong matibay akong may hangad, sa tulong ng Iyong grasya, na ikumpisal ang aking mga kasalanan, gumawa ng penance, at baguhin ang aking buhay. Amen.`,
    bs: `Sa Ngalan sa Amahan, ug sa Anak, ug sa Espiritu Santo. Amen.

1. PAG-AMPO SA PARI
   Maayong gabii/udto, Father.

2. PAGHIMO OG KRUZ
   Pari: Tugotan nako, anak, nga motaho kanimo og kapasayloan ug kalinaw.
   Mag-eespiritu: Amen.

3. PAG-ACKNOWLEDGE SA SAKAT
   Panalanginan mo ako, Father, kay nakasala ko. [Isulti kung unsa ka dugay gikan sa kataposan nga kompisal.] Ania ang akong mga sala:

{{SINS_LIST}}

   [Tapuson ang kumpisal sa:]
   pasensiya ko sa mga kini ug sa tanan nako nga uban pang mga sala. Sulti ko nga gusto nako nga mobisita sa kompisal kanunay, malikayan ang mga hitabo nga makapagbuhat og sala, ug usbon ang akong kinabuhi. Amen.

4. MGA PAALALA
   Paminaw og maayo sa tambag sa pari.
   Human madawat ang penance, padayon sa Pagtoo sa Pagsisi.

5. PAG-AMBIT OG PAGBASOL

   Panginoong Hesus, Anak sa Diyos, dawata kanako, usa ka makasala.

   o kaha:
   Oh, akong Diyos, buotan ko nga nagasisi sa akong mga nakabuhat batok Kanimo, ug ginakGustohan nako ang tanan nga akong mga sala tungod sa Imong matarung nga paghukom, apan labing tanan tungod kay sila mopatin-aw Kanimo, akong Diyos, nga gahum ka sa tanan nga maayo ug derecho sa tanan nga gugma. Gusto nako, uban sa tabang sa Imong grasya, mopess sa akong mga sala, mobuhat og penance, ug usbon ang akong kinabuhi. Amen.`,
  },
  confessionGuideCopied: {
    en: "Confession Guide copied!",
    tg: "Nakopya na ang Gabay sa Kumpisal!",
    bs: "Nakopya na ang Gabay sa Kompisal!",
  },
};

const categoriesData = [
  {
    id: "God",
    header: {
      en: "1st Commandment — Love God with all your heart, with all your soul, and with all your mind.",
      tg: "Ika-1 Utos — Ibigin mo ang Diyos nang buong pusong, buong kaluluwa, at buong isipan.",
      bs: "Ika-1 Sugo — Higugma ang Ginoo nga bug-os nga kasingkasing, bug-os nga kalag, ug bug-os nga hunahuna.",
    },
    items: [
      {
        id: "G1",
        text: {
          en: "I was lazy or half-hearted in my prayers and daily duties to God.",
          tg: 'Tinamad ako o "nag-compliance" lang sa pagdarasal at sa mga obligasyon ko sa Diyos.',
          bs: "Nagtinapulan ko o wala seryosoha akong pag-ampo ug mga obligasyon sa Ginoo.",
        },
      },
      {
        id: "G2",
        text: {
          en: "I received Communion unworthily, broke the 1-hour fast or received our Lord in a state of mortal sin.",
          tg: "Naka-Communion ako nang hindi karapat-dapat—nalabag ko 'yung one-hour fast o kaya naman tumanggap ako habang may mortal sin.",
          bs: "Nakalawat ko nga dili angayan—wala ko kapayunot sa one-hour fast o kaha nakadawat ko bisan naay mortal sin.",
        },
      },
      {
        id: "G3",
        text: {
          en: "I intentionally withheld a serious sin in a past confession.",
          tg: "Sinadya kong itago yung mabigat na kasalanan nung huli akong nangumpisal.",
          bs: "Tuyong gitago nako ang usa ka seryosong sala sa miaging kumpisal.",
        },
      },
      {
        id: "G4",
        text: {
          en: "I entertained serious doubts, engaged in superstitions, or exposed myself to media contrary to my Faith.",
          tg: "Nagpa-dala ako sa duda, horoscope, o mga group at media na kontra sa Faith ko.",
          bs: "Nag-entertain ko og duda, nag-salig sa horoscope, o nitan-aw og mga butang nga kontra sa akong tinuohan.",
        },
      },
      {
        id: "G5",
        text: {
          en: "I failed to do my usual prayers such as the Rosary on times I said I would.",
          tg: "Hindi ko nagawa yung mga routine na dasal ko gaya ng Rosaryo kahit nangako ako.",
          bs: "Wala nako nahimo ang akong naandan nga pag-ampo sama sa Rosaryo bisan nisaad ko.",
        },
      },
      {
        id: "G6",
        text: {
          en: "I did not work in an orderly way to give greater glory to God.",
          tg: "Hindi naging maayos ang pagtatrabaho ko para sana maging alay sa Diyos.",
          bs: "Wala nako gi-plano og tarong akong trabaho para unta sa himaya sa Ginoo.",
        },
      },
      {
        id: "G7",
        text: {
          en: "I failed to frequently realize that I am in God's presence.",
          tg: "Nakakalimutan kong kasama ko ang Diyos sa bawat sandali.",
          bs: "Nakalimot ko permi nga naa ang Ginoo sa akong kiliran.",
        },
      },
      {
        id: "G8",
        text: {
          en: "I did not work with the happiness that comes from knowing I am a child of God.",
          tg: "Nagtrabaho ako nang walang galak, nakalimutan kong anak ako ng Diyos.",
          bs: "Nagtrabaho ko nga walay kalipay, nakalimot ko nga anak ko sa Ginoo.",
        },
      },
      {
        id: "G9",
        text: {
          en: "I failed to try my best to fulfill the promises and resolutions I made to God.",
          tg: "Hindi ko talaga sineryoso o pinagbutihan na tuparin yung mga pangako at resolution ko sa Diyos.",
          bs: "Wala gyud nako gipaningkamutan og maayo nga matuman akong mga saad ug resolution sa Ginoo.",
        },
      },
      {
        id: "G10",
        text: {
          en: "I took the name of God in vain or used it mockingly, jokingly, or angrily.",
          tg: "Ginamit ko ang pangalan ng Diyos nang walang galang, sa biro, o nung nagalit ako.",
          bs: "Gigamit nako ang ngalan sa Ginoo sa walay pulos, sa komedya, o sa akong kasuko.",
        },
      },
      {
        id: "G11",
        text: {
          en: "I used the name of the Blessed Virgin Mary or the saints in an irreverent or mocking manner.",
          tg: "Binastos ko o ginawang biro ang pangalan ni Mama Mary o ng mga santo.",
          bs: "Gibugal-bugalan o wala nako gitahod ang ngalan ni Mama Mary o sa mga santo.",
        },
      },
      {
        id: "G12",
        text: {
          en: "I was a sponsor in baptism or ceremonies outside the Catholic Church.",
          tg: "Naging ninong/ninang ako sa binyag o seremonya na hindi sa Katoliko.",
          bs: "Nag-ninong/ninang ko sa bunyag o seremonya sa gawas sa Simbahang Katoliko.",
        },
      },
      {
        id: "G13",
        text: {
          en: "I allowed myself to be distracted during Mass.",
          tg: "Nagpa-distract ako sa Misa—hindi ako nakinig at kung saan-saan ako tumitingin.",
          bs: "Nagpa-distract lang ko sa Misa—wala ko naminaw ug bisan asa lang ko nagtan-aw.",
        },
      },
      {
        id: "G14",
        text: {
          en: "I arrived at Mass so late that I failed my obligation.",
          tg: "Sobra akong nahuli sa Misa kaya hindi ko na talaga natupad ang obligasyon ko.",
          bs: "Na-late kaayo ko sa Misa mao nga wala na nako natuman ang akong obligasyon.",
        },
      },
      {
        id: "G15",
        text: {
          en: "I missed Sunday Mass and/or a Holy Day of Obligation (Dec 8, Dec 25 and/or Jan 1).",
          tg: "Lumiban ako sa Misa nung Linggo o nung mga Holy Day (Dec 8, 25, o Jan 1).",
          bs: "Ni-absent ko sa Misa sa Domingo o sa mga Holy Day (Dec 8, 25, o Jan 1).",
        },
      },
      {
        id: "G16",
        text: {
          en: "I failed to help the Church in her necessities.",
          tg: "Hindi ako tumulong sa mga pangangailangan ng Simbahan kahit kaya ko naman.",
          bs: "Wala ko nitabang sa mga kinahanglanon sa Simbahan bisan og makaya ra unta nako.",
        },
      },
      {
        id: "G17",
        text: {
          en: "I did not fast or abstain on the prescribed days.",
          tg: "Hindi ako nag-ayuno o umiwas sa karne sa mga araw na iniutos ng Simbahan.",
          bs: "Wala ko nag-puasa o nag-abstinence sa mga adlaw nga gi-ingon sa Simbahan.",
        },
      },
      {
        id: "G18",
        text: {
          en: "I performed work or business that inhibited worship or rest.",
          tg: "Nagtrabaho o nag-negosyo ako na naging hadlang sa pagsimba o pahinga tuwing Linggo.",
          bs: "Nagtrabaho o nag-negosyo ko nga nakababag sa akong pagsimba o pagpahuway sa adlaw sa Ginoo.",
        },
      },
    ],
  },
  {
    id: "neighbor",
    header: {
      en: "2nd Commandment — Love your neighbor as yourself.",
      tg: "Ika-2 Utos — Ibigin mo ang iyong kapwa tulad ng pagmamahal mo sa sarili mo.",
      bs: "Ika-2 Sugo — Higugma ang imong isigkatawo ingon sa imong kaugalingon.",
    },
    items: [
      {
        id: "N1",
        text: {
          en: "I refused to take advice or argued just to be right, disregarding others' feelings.",
          tg: "Ayaw kong makinig sa payo o nakikipag-talo lang para manalo, kahit nakakasakit na ng iba.",
          bs: "Wala ko naminaw og advice o nakig-lalis lang para ingnon nga sakto, bisan nakasakit na sa uban.",
        },
      },
      {
        id: "N2",
        text: {
          en: 'I acted as a "bossy" person or a bully to get my way.',
          tg: 'Naging "bossy" o bully ako para lang masunod ang gusto ko.',
          bs: 'Nahimo kong "bossy" o bully para lang makuha akong gusto.',
        },
      },
      {
        id: "N3",
        text: {
          en: "I shifted the blame for my own mistakes onto others.",
          tg: "Nanisi ako ng ibang tao sa mga sarili kong pagkakamali.",
          bs: "Namasol ko sa uban sa akong kaugalingon nga mga sayop.",
        },
      },
      {
        id: "N4",
        text: {
          en: "I held onto a grudge or am currently refusing to speak to someone.",
          tg: "Nagtanim ako ng galit o ayawkong kausapin ang isang tao dahil sa sama ng loob.",
          bs: "Naghupot ko og dumot o wala nakig-storya sa usa ka tawo tungod sa kaguol.",
        },
      },
      {
        id: "N5",
        text: {
          en: "I allowed myself to be influenced too much by what people might think or say.",
          tg: "Masyado akong nagpa-pressure sa sasabihin ng ibang tao kesa gawin ang dapat.",
          bs: "Sige lang ko'g huna-huna sa isulti sa uban imbis nga buhaton ang sakto.",
        },
      },
      {
        id: "N6",
        text: {
          en: "I neglected to teach my children their prayers or provide a Christian education.",
          tg: "Pinabayaan kong hindi maturuan ng mga dasal o Kristiyanong turo ang mga anak ko.",
          bs: "Napasagdan nako ang pagtudlo sa mga pag-ampo o Kristohanong turo sa akong mga anak.",
        },
      },
      {
        id: "N7",
        text: {
          en: "I failed to make my house a bright and cheerful Christian home.",
          tg: "Hindi ko pinagsikapang maging masaya at maaliwalas ang aming bahay bilang Kristiyanong tahanan.",
          bs: "Wala nako gipaningkamutan nga mahimong malipayon ug hayag ang among panimalay isip mga Kristiyanos.",
        },
      },
      {
        id: "N8",
        text: {
          en: "I gave my children bad example.",
          tg: "Nagpakita ako ng masamang halimbawa sa mga anak ko.",
          bs: "Nagpakita ko og bati nga ehemplo sa akong mga anak.",
        },
      },
      {
        id: "N9",
        text: {
          en: "I neglected to watch over my children's companions or media.",
          tg: "Hindi ko binantayan kung sino ang mga kasama ng mga anak ko o kung ano ang pinapanood nila.",
          bs: "Wala nako nabantayan ang mga kauban sa akong mga anak o ang mga butang nga ilang ginatan-aw.",
        },
      },
      {
        id: "N10",
        text: {
          en: "I failed to ensure my children received the Sacraments.",
          tg: "Hindi ko tiniyak na makatanggap ng mga Sakramento (Kumpisal, Communion, Confirmation) ang mga anak ko.",
          bs: "Wala nako gisiguro nga makadawat og mga Sakramento (Kumpisal, Kalawat, Kumpirma) ang akong mga anak.",
        },
      },
      {
        id: "N11",
        text: {
          en: "I neglected family duties for work or social life.",
          tg: "Pinabayaan ko ang mga tungkulin ko sa pamilya dahil masyado akong nag-focus sa trabaho o barkada.",
          bs: "Napasagdan nako akong obligasyon sa pamilya tungod sa sobrang pag-focus sa trabaho o social life.",
        },
      },
      {
        id: "N12",
        text: {
          en: "I was disobedient or disrespectful toward my parents.",
          tg: "Naging suwail o bastos ako sa mga magulang ko.",
          bs: "Nahimo kong dalo o wala nitahod sa akong mga ginikiran.",
        },
      },
      {
        id: "N13",
        text: {
          en: "I neglected to help my parents in their needs or treated them with little affection.",
          tg: "Kinalimutan kong tulungan ang mga magulang ko o naging malamig/walang lambing sa kanila.",
          bs: "Wala nako natabangan akong mga ginikiran sa ilang kinahanglan o wala nako sila gipakitaag pagpangga.",
        },
      },
      {
        id: "N14",
        text: {
          en: "I failed to make my house a bright and cheerful Christian home.",
          tg: "Hindi ko pinagsikapang gawing masaya o maaliwalas ang aming bahay sa pamamagitan ng aking halimbawa.",
          bs: "Wala nako gipaningkamutan nga mahimong malipayon ug hayag ang among panimalay pinaagi sa akong ehemplo.",
        },
      },
      {
        id: "N15",
        text: {
          en: "I reacted proudly when corrected or had a disordered desire for independence.",
          tg: "Naging mapagmataas ako nung sinasaway at masyadong nagpumilit na maging independent sa maling paraan.",
          bs: "Nagmaldito/Nag-isog ko sa dihang gibadlong ug sobra ra akong pag-apas sa kagawasan bisan dili sakto.",
        },
      },
      {
        id: "N16",
        text: {
          en: "I was unwilling to yield my personal preferences; I was selfish instead of generous.",
          tg: "Naging madamot ako at hindi nagpaubaya para maging masaya ang pamilya; sarili ko lang ang inisip ko.",
          bs: "Nahimo kong dalo ug wala nagpaubaya para magmalipayon ang pamilya; kaugalingon ra nako akong gihunahuna.",
        },
      },
      {
        id: "N17",
        text: {
          en: "I neglected my house chores or quarreled with my siblings.",
          tg: "Pinabayaan ko ang mga gawaing bahay o nakipag-away ako sa mga kapatid ko.",
          bs: "Napasagdan nako ang mga buluhaton sa balay o nakig-away ko sa akong mga igsoon.",
        },
      },
      {
        id: "N18",
        text: {
          en: "I easily got angry, lost my temper, or was envious of others.",
          tg: "Madaling uminit ang ulo ko, o nawalan ng pasensya, o nainggit sa ibang tao.",
          bs: "Dali ra ko nasuko, nawad-an og pasensya, o nasuya sa ubang tawo.",
        },
      },
      {
        id: "N19",
        text: {
          en: "I injured or took the life of someone, or I was reckless while driving.",
          tg: "Nakasakit ako o nakapatay ng tao, o kaya naging kaskasero sa pagmamaneho.",
          bs: "Naa koy napun-an o napatay nga tawo, o nagpaka-paka ko og drayb sa dalan.",
        },
      },
      {
        id: "N20",
        text: {
          en: "I was an occasion of sin for others through my words, dress, or media.",
          tg: "Naging mitsa ako ng pagkakasala ng iba dahil sa pananalita, pananamit, o panonood ng masasamang palais.",
          bs: "Nahimo kong hinungdan sa sala sa uban tungod sa akong storya, sinuotan, o pag-aghat sa mga bati nga salida.",
        },
      },
      {
        id: "N21",
        text: {
          en: "I neglected my health or attempted to take my own life.",
          tg: "Pinabayaan ko ang kalusugan ko o sinubukang saktan ang sarili ko.",
          bs: "Napasagdan nako akong lawas o gisulayan nako og daut akong kaugalingong kinabuhi.",
        },
      },
      {
        id: "N22",
        text: {
          en: "I mutilated myself or another.",
          tg: "Sinadya kong saktan o sirain ang bahagi ng katawan ko o ng ibang tao.",
          bs: "Gituyo nako og samad o daut ang akong lawas o sa laing tawo.",
        },
      },
      {
        id: "N23",
        text: {
          en: "I got drunk or took prohibited drugs.",
          tg: "Naglasing ako o gumamit ng pinagbabawal na gamot.",
          bs: "Nahubog ko o nigamit og ginadili nga droga.",
        },
      },
      {
        id: "N24",
        text: {
          en: "I gave in to gluttony by eating or drinking more than was sufficient.",
          tg: "Naging matakaw ako at kumain o uminom nang sobra-sobra.",
          bs: "Nahimo kong dalo sa pagkaon o pag-inom og sobra-sobra sa kinahanglanon.",
        },
      },
      {
        id: "N25",
        text: {
          en: "I participated in physical violence.",
          tg: "Nakipag-away ako o gumamit ng dahas sa ibang tao.",
          bs: "Niapil ko sa pisikal nga panag-away o pagpanakit.",
        },
      },
      {
        id: "N26",
        text: {
          en: "I consented to or took part in sterilization.",
          tg: "Pumayag o nakibahagi ako sa pagpapatali o sterilization.",
          bs: "Nisugot o niapil ko sa pagpa-sterilize o pagpa-tali.",
        },
      },
      {
        id: "N27",
        text: {
          en: "I consented to, recommended, or took part in an abortion.",
          tg: "Pumayag, nagmungkahi, o nakibahagi ako sa pagpapalaglag (abortion).",
          bs: "Nisugot, nag-rekomenda, o niapil ko sa pagpa-aborsyon.",
        },
      },
      {
        id: "N28",
        text: {
          en: "I desired revenge or harbored hatred toward someone.",
          tg: "Naghangad ako ng higanti o nagkimkim ng galit sa kapwa.",
          bs: "Gusto ko makabaws o nagpundo ko og kalagot ug dumot sa uban.",
        },
      },
      {
        id: "N29",
        text: {
          en: "I insulted or teased others.",
          tg: "Namahiya ako o nanukso ng ibang tao.",
          bs: "Naminsala o nanguog/nanungog ko sa uban.",
        },
      },
      {
        id: "N30",
        text: {
          en: 'I used my power or position to intimidate or "bully" someone.',
          tg: "Ginamit ko ang posisyon o kapangyarihan ko para manakot o mang-bully.",
          bs: "Gigamit nako akong posisyon o gahum para manghadlok o mang-bully.",
        },
      },
      {
        id: "N31",
        text: {
          en: "I was bossy and tried to control people instead of collaborating.",
          tg: 'Naging "bossy" ako at pinilit kontrolin ang iba imbis na makipagtulungan.',
          bs: 'Nahimo kong "bossy" ug namugos og kontrol sa uban imbis nga makig-uban.',
        },
      },
      {
        id: "N32",
        text: {
          en: "I started arguments just to prove I was right.",
          tg: "Nakipag-away ako para lang mapatunayang tama ako, kahit masira ang relasyon.",
          bs: "Nakig-lalis ko para lang ingnon nga sakto ko, bisan og nakaguba na sa relasyon.",
        },
      },
      {
        id: "N33",
        text: {
          en: 'I was rude or "know-it-all" when disagreeing with someone.',
          tg: 'Naging bastos ako o nag-feeling "know-it-all" nung may hindi ako nakasundo.',
          bs: 'Nahimo kong bastos o "bright-bright" sa dihang nakig-batok ko sa huna-huna sa uban.',
        },
      },
      {
        id: "N34",
        text: {
          en: "I made improper use of marriage or deprived my spouse of marital rights.",
          tg: "Inabuso ko ang pagsasama namin o pinagkaitan ang asawa ko sa kanyang karapatan sa kama.",
          bs: "Wala nako gigamit sa sakto ang kaminyoon o gihikawan nako akong asawa sa iyang katungod sa kaminyoon.",
        },
      },
      {
        id: "N35",
        text: {
          en: "I used birth control or artificial means to prevent having children.",
          tg: "Gumamit ako ng birth control o artificial na paraan para iwasang magkaanak.",
          bs: "Nigamit ko og birth control o artificial nga pamaagi para malikayan ang pagbaton og anak.",
        },
      },
      {
        id: "N36",
        text: {
          en: "I caused damage to the property of others.",
          tg: "Nakasira ako ng gamit o pag-aari ng ibang tao.",
          bs: "Naa koy nangaguba nga butang o kabtangan sa ubang tawo.",
        },
      },
      {
        id: "N37",
        text: {
          en: "I caused others to waste time (disturbing them/unpunctual).",
          tg: "Naka-abala ako sa trabaho ng iba o naging dahilan ng pagka-sayang ng oras nila dahil hindi ako on-time.",
          bs: "Nakatugaw ko sa trabaho sa uban o naka-usik sa ilang oras tungod sa akong pagka-late.",
        },
      },
      {
        id: "N38",
        text: {
          en: "I failed to give alms according to my capacity.",
          tg: "Hindi ako nag-share sa mga nangangailangan kahit may kakayahan naman ako.",
          bs: "Wala ko nihatag og hinabang o limos sa mga nanginahanglan bisan og naa koy ikagasto.",
        },
      },
      {
        id: "N39",
        text: {
          en: "I gave in to laziness in my work or studies.",
          tg: "Nagpadala ako sa katamaran sa trabaho o sa pag-aaral ko.",
          bs: "Nagpadaog ko sa katapul sa akong trabaho o sa akong pag-eskwela.",
        },
      },
      {
        id: "N40",
        text: {
          en: "I harmed others through deception or fraud in business.",
          tg: "Nanloko o nang-isa ako ng kapwa sa negosyo o sa mga transaksyon.",
          bs: "Nangilad o namintaha ko sa akong isigkatawo sa negosyo o transaksyon.",
        },
      },
      {
        id: "N41",
        text: {
          en: "I neglected to pay my debts or retained stolen things.",
          tg: "Hindi ako nagbayad ng utang o itinago ko ang mga bagay na hindi naman sa akin.",
          bs: "Wala nako bayari akong mga utang o naghupot ko og mga butang nga dili akoa.",
        },
      },
      {
        id: "N42",
        text: {
          en: "I spent beyond my means due to vanity or caprice.",
          tg: "Gumastos ako nang higit sa kinikita ko dahil lang sa luho o arte.",
          bs: "Nigasto ko og labaw pa sa akong kaya tungod lang sa luho o bisyo.",
        },
      },
      {
        id: "N43",
        text: {
          en: "I stole an object or money and failed to return it.",
          tg: "Nagnakaw ako ng gamit o pera at hindi ko na ito ibinalik.",
          bs: "Nangawat ko og butang o kwarta ug wala nako kini giuli.",
        },
      },
      {
        id: "N44",
        text: {
          en: "I was greedy or held a materialistic view of life.",
          tg: "Naging sakim ako o naging masyadong mukhang-pera/materialistic sa buhay.",
          bs: "Nahimo kong dalo o sobra ra ka materialistic sa akong panglantaw sa kinabuhi.",
        },
      },
      {
        id: "N45",
        text: {
          en: "I engaged in gossip, back-biting, or tale-telling.",
          tg: "Nakisali ako sa tsismis, paninira, o pagkakalat ng kung anu-anong kwento.",
          bs: "Niapil ko sa panabi-tabi, panlibak, o pagpakatap og mga istorya.",
        },
      },
      {
        id: "N46",
        text: {
          en: "I judged others rashly or suspected others falsely.",
          tg: "Nanghusga agad ako o nagbintang sa iba nang walang basehan.",
          bs: "Namasangil o nanghusga ko sa uban bisan wala koy ebidensya.",
        },
      },
      {
        id: "N47",
        text: {
          en: "I revealed secrets without due cause.",
          tg: "Nagkalat ako ng mga sikreto kahit wala namang dahilan para gawin 'yun.",
          bs: "Namulgar ko og mga sekreto bisan wala untay rason.",
        },
      },
      {
        id: "N48",
        text: {
          en: "I sinned by detraction or calumny (derogatory lies).",
          tg: "Nanira ako sa pamamagitan ng pagkalat ng baho ng iba o pag-iimbento ng kasinungalingan.",
          bs: "Nanira ko pinaagi sa pagbutyag sa sayop sa uban o paghimo-himo og bakak.",
        },
      },
      {
        id: "N49",
        text: {
          en: "I told lies and failed to repair the damage resulted from them.",
          tg: "Nagsinungaling ako at hindi ko inayos ang gulong idinulot nito.",
          bs: "Namakak ko ug wala nako gi-ayo ang daut nga agi sa akong pagpamakak.",
        },
      },
      {
        id: "N50",
        text: {
          en: "I unjustly accused others.",
          tg: "Nagbintang ako ng maling paratang sa ibang tao.",
          bs: "Namasangil ko sa uban sa butang nga wala nila nabuhat.",
        },
      },
      {
        id: "N51",
        text: {
          en: 'I am giving someone the "silent treatment" or refusing to forgive.',
          tg: 'Tinu-toyo" ko o hindi ko kinakausap ang isang tao dahil ayaw ko siyang patawarin.',
          bs: 'Gi-"silent treatment" nako ang usa ka tawo o wala nako siya gipatawad.',
        },
      },
      {
        id: "N52",
        text: {
          en: "I have let a grudge last for a long time without making peace.",
          tg: "Nagtanim ako ng galit nang matagal at hindi ako gumawa ng paraan para makipag-ayos.",
          bs: "Naghupot ko og dumot sa taas nga panahon ug wala ko naningkamot makig-uli.",
        },
      },
      {
        id: "N53",
        text: {
          en: "I let my insecurities cause me to react over-sensitively or lash out.",
          tg: 'Masyado akong naging "pikon" o "thin-skinned" kaya ako nagalit o nakapanakit ng iba.',
          bs: 'Tungod sa akong insecurities, naging "pikon" ko ug nakapang-away sa uban.',
        },
      },
      {
        id: "N54",
        text: {
          en: "I spoke badly about someone behind their back.",
          tg: "Nagsalita ako nang masama tungod sa likod ng ibang tao.",
          bs: "Nanglibak ko o nistora og bati sa likod sa laing tawo.",
        },
      },
      {
        id: "N55",
        text: {
          en: "I lied about someone to ruin their reputation.",
          tg: "Nagsinungaling ako para lang masira ang pagkatao o reputasyon ng iba.",
          bs: "Namakak ko bahin sa usa ka tawo para lang maguba iyang dungog.",
        },
      },
      {
        id: "N56",
        text: {
          en: "I shared someone's private faults with others just to gossip.",
          tg: "Pinagkalat ko ang mga personal na pagkakamali ng iba para lang makipag-tsismisan.",
          bs: "Gipang-istorya nako ang mga sekreto o sayop sa uban para lang naay malibak.",
        },
      },
      {
        id: "N57",
        text: {
          en: "I blamed others for my own mistakes to protect my ego.",
          tg: "Nanisi ako ng iba sa sarili kong mali para lang hindi ako mapahiya.",
          bs: "Namasol ko sa uban sa akong kaugalingong sayop para lang dili ma-igo akong ego.",
        },
      },
      {
        id: "N58",
        text: {
          en: 'I obsessed over getting credit, being noticed, or always needing to be "first."',
          tg: 'Uhaw ako sa recognition, laging gustong mapansin, o kailangang laging ako ang "una."',
          bs: "Gusto gyud ko permi mapansin, ma-ganid sa credit, ug gusto permi mag-una.",
        },
      },
      {
        id: "N59",
        text: {
          en: "I was not generous with my time in carrying out tasks entrusted to me.",
          tg: "Naging madamot ako sa oras ko sa mga gawaing binigay sa akin.",
          bs: "Nahimo kong dalo sa akong oras para sa mga buluhaton nga gi-salig nako.",
        },
      },
      {
        id: "N60",
        text: {
          en: "I allowed myself to be gloomy.",
          tg: "Hinayaan ko ang sarili kong lamunin ng lungkot o negativity.",
          bs: "Gipasagdan nako akong kaugalingon nga malubog sa kaguol o pagka-badtrip.",
        },
      },
      {
        id: "N61",
        text: {
          en: "I failed to carry out a quiet and persevering work of apostolate among my friends.",
          tg: 'Hindi ako naging matiyaga o "consistent" sa pag-share ng Faith sa mga kaibigan ko sa tahimik na paraan.',
          bs: "Wala ko naningkamot sa hilom ug mapailubon nga pag-share sa akong Faith sa akong mga migo/miga.",
        },
      },
      {
        id: "N62",
        text: {
          en: "I did not look for opportunities in my work and social life to carry out an effective apostolate.",
          tg: "Hindi ako naghanap ng chance sa trabaho o sa gimmick para ilapit ang iba sa Diyos.",
          bs: "Wala ko nangita og mga higayon sa trabaho o sa social life para maka-apostolate sa uban.",
        },
      },
      {
        id: "N63",
        text: {
          en: "I have not tried to attract any friends to the apostolate.",
          tg: "Hindi ko man lang sinubukang yayain o i-encourage ang mga kaibigan ko sa mga gawaing pang-Simbahan.",
          bs: "Wala man lang nako gisulayan og hagit o agat akong mga migo/miga sa mga buluhaton sa Simbahan.",
        },
      },
      {
        id: "N64",
        text: {
          en: "I told a lie under oath.",
          tg: "Nagsinungaling ako habang nanunumpa (sa harap ng Diyos o sa batas).",
          bs: "Namakak ko samtang nanumpa (sa atubangan sa Ginoo o sa balaod).",
        },
      },
      {
        id: "N65",
        text: {
          en: "I was not concerned enough about my professional development or the study necessary to be effective in my work.",
          tg: "Pinabayaan ko ang pag-aaral o pag-improve sa trabaho ko para maging mahusay sa ginagawa ko.",
          bs: "Wala ko nag-atiman sa akong pag-eskwela o pag-improve sa trabaho para mag-maayo ko sa akong agi.",
        },
      },
      {
        id: "N66",
        text: {
          en: "I broke my private or public vows.",
          tg: "Sinira ko ang mga binitawan kong panata o sumpa (sa Diyos o sa tao).",
          bs: "Wala nako tumana ang akong mga saad o panumpa.",
        },
      },
      {
        id: "N67",
        text: {
          en: "I wasted my time.",
          tg: "Sinayang ko lang ang oras ko sa mga walang kwentang bagay.",
          bs: "Gi-usik-usikan lang nako akong oras sa walay pulos.",
        },
      },
      {
        id: "N68",
        text: {
          en: "I deceived myself by leaving work for later.",
          tg: "Niloko ko ang sarili ko; ipinagpabukas ang trabaho imbis na tapusin na agad.",
          bs: "Gi-atik nako akong kaugalingon; gi-ugma-ugma ang trabaho imbis nga humanon na unta.",
        },
      },
      {
        id: "N69",
        text: {
          en: "I misbehaved or maintained improper posture or dress.",
          tg: "Hindi maayos ang kilos, postura, o suot ko sa loob ng simbahan.",
          bs: "Dili maayo akong lihok, barog, o sinuotan sa sulod sa simbahan.",
        },
      },
      {
        id: "N70",
        text: {
          en: "I committed impure acts, such as masturbation (alone or with others).",
          tg: 'Gumawa ako ng malaswang bagay, mag-isa man o may kasama, gaya ng "self-pleasure."',
          bs: "Naghimo ko og malaw-ay nga mga buhat, sa akong kaugalingon o uban sa uban, sama sa masturbation.",
        },
      },
      {
        id: "N71",
        text: {
          en: "I looked at pornography or watched shows with impure content.",
          tg: "Nanood ako ng bold (pornography) o mga palais na may mga malalaswang eksena.",
          bs: "Nagtan-aw ko og bold (pornography) o mga salida nga naay malaw-ay nga sulod.",
        },
      },
      {
        id: "N72",
        text: {
          en: "I took pleasure in entertaining impure thoughts or desires.",
          tg: "Pinatulan ko at dinamdam ang mga malalaswang isipin o pagnanasa.",
          bs: "Nagpatuyang ko sa paghuna-huna og mga malaw-ay nga mga butang.",
        },
      },
      {
        id: "N73",
        text: {
          en: "I dressed immodestly or was excessively concerned with my appearance.",
          tg: "Nagsuot ako ng malaswang damit o naging masyadong banidoso/atado sa hitsura ko.",
          bs: "Nagsuot ko og mga sinina nga law-ay tan-awon o sobra ra akong pag-atiman sa akong hitsura.",
        },
      },
      {
        id: "N74",
        text: {
          en: "I used vulgar language or listened to impure jokes and stories.",
          tg: "Nagmura ako o nakinig at nagkwento ng mga malalaswang joke.",
          bs: "Naggamit ko og mga malaw-ay nga pulong o naminaw ug nag-istorya og mga bastos nga komedya.",
        },
      },
      {
        id: "N75",
        text: {
          en: "I consented to evil desires against the virtue of purity.",
          tg: "Hinayaan kong malunod ako sa mga maling pagnanasa na labag sa kalinisan.",
          bs: "Nisugot o nagpadaog ko sa mga dautang tinguha batok sa kaputli.",
        },
      },
      {
        id: "N76",
        text: {
          en: "I engaged in or started impure conversations.",
          tg: "Nakisali ako o nag-umpisa ng mga bastos na usapan.",
          bs: "Niapil ko o nag-una-una og mga malaw-ay nga storya.",
        },
      },
      {
        id: "N77",
        text: {
          en: "I entertained or recalled indecent and impure thoughts.",
          tg: "Inisip ko o binalikan sa alaala ang mga bastos na bagay.",
          bs: "Naghuna-huna o naghandom ko sa mga malaw-ay nga mga butang.",
        },
      },
      {
        id: "N78",
        text: {
          en: "I maintained friendships that were habitual occasions of sin.",
          tg: "Nakipag-barkada ako sa mga tawo na nagiging dahilan para magkasala ako palagi.",
          bs: "Nakig-migo ko sa mga tawo nga permi makapa-angin nako sa pagpakasala.",
        },
      },
      {
        id: "N79",
        text: {
          en: "I neglected modesty and decency in my behavior.",
          tg: "Pinabayaan ko ang pagiging disente o kagalang-galang sa mga galaw ko.",
          bs: "Napasagdan nako ang pagka-desente o matinahuron sa akong mga linihokan.",
        },
      },
      {
        id: "N80",
        text: {
          en: "I put myself in occasions of sin, such as being alone in secluded places.",
          tg: "Sinadya kong ilagay ang sarili ko sa tukso, gaya ng pakikipag-solo sa maling lugar.",
          bs: "Gibutang nako akong kaugalingon sa tentasyon, sama sa pagpakig-solo sa hilit nga dapit.",
        },
      },
      {
        id: "N81",
        text: {
          en: "I sought out entertainment that served as an occasion of sin.",
          tg: "Naghanap ako ng mga libangan na alam kong magdadala sa akin sa pagkakasala.",
          bs: "Nangita ko og kalingawan nga nahimong dalan para makasala ko.",
        },
      },
    ],
  },
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
