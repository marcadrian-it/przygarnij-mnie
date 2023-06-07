import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Results from "../Results.jsx";
import { StaticRouter } from "react-router-dom/server";

const pets = [
  [
    {
      id: "641742a3aac87179ea56bd58",
      name: "RAMZES",
      animal: "pies",
      registration_date: "2015-01-17",
      description:
        "Rozmiar: średni większy\nRamzes jest średniej wielkości, silny. Osoba, która go adoptuje musi być przygotowana na pracę z psem. Ramzes potrafi być przemiły, sam szuka kontaktu z opiekunem, chętnie się uczy szczególnie gdy czeka go smakowita nagroda. Inne psy toleruje, ale nie jest specjalnie towarzyski w stosunku do nich. Grzecznie chodzi na smyczy. Jednak nie jest psem idealnym, był już zwrócony z adopcji – w sytuacjach jakie uzna za zagrożenie bywa niemiły. Przed adopcją należy go poznać poprzez wielokrotne odwiedziny w Schronisku, wspólne spacery.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342170/RAMZES.jpg",
    },
    {
      id: "6417429faac87179ea56bd2d",
      name: "SZAGI",
      animal: "pies",
      registration_date: "2017-03-16",
      description:
        "Rozmiar: średni większy\nSzagi został znaleziony na ulicy, miał na sobie obrożę używaną przy łańcuchu :( Niestety jego reakcje i zachowanie też wskazują, że był tak trzymany. Na początku był problem z zakładaniem i ściąganiem mu smyczy i obroży. Kagańca ciągle nie lubi. Na spacerze ma swój świat, chętnie idzie tam, gdzie sam ma ochotę. Na smyczy chodzi ładnie, ale zdarza mu się pociągnąć. Przez kraty stara się zwracać na siebie uwagę i widać, że coraz bardziej poznaje plusy z towarzystwa ludzi. Głaskanie lubi, ale na razie niezbyt długo. Gdy poczuje się niepewnie pokazuje zęby, w ekstremalnych dla niego sytuacjach (np. szczepienie) może próbować bronić się zębami. Za pomocą smakołyków można go przekonać do wielu rzeczy. Jego opiekun powinien być osobą spokojną, zrównoważoną i cierpliwą. W jego przypadku przed adopcją polecamy kilkukrotne wizyty, tak by Szagi szedł do domu w którym zna domowników – zapewni to mu mniej stresu przy zmianie otoczenia.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342167/SZAGI.jpg",
    },
    {
      id: "641742a0aac87179ea56bd30",
      name: "RUDI",
      animal: "pies",
      registration_date: "2018-05-03",
      description:
        "Rozmiar: średni\n- najlepiej będzie się czuł w domu z ogrodem;\n\t- preferowany dom bez dzieci;\n\t- pewny siebie;\n\t- energiczny;\n\t- potrzebuje doświadczonego opiekuna:\n\t- sprawdzi się w psich sportach;",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342177/RUDI.jpg",
    },
    {
      id: "641742a0aac87179ea56bd32",
      name: "LARY",
      animal: "pies",
      registration_date: "2018-06-26",
      description:
        "Rozmiar: średni mniejszy\nŚredniej wielkości uroczy kundelek. Lubi spacery, na wybiegu zawsze musi sprawdzić informacje pozostawione przez inne psiaki ;) Ładnie przychodzi na zawołanie. Kocha dobrze zjeść, co ułatwia nawiązywanie z nim przyjaźni. Potrzebuje opiekuna obytego w opiece nad psami. Nieufny w stosunku do obcych – potrzebuje czasu na kilku wspólnych spacerach przed adopcją by poznać swoją nową rodzinę, aby uniknąć nerwowych reakcji w nowym otoczeniu. Niestety niezbyt ładnie reaguje na ludzi 'przez kraty' dlatego wiele osób mija jego boks szybkim krokiem i od 2018 roku nikt nie zainteresował się jego adopcją.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342170/LARY.jpg",
    },
    {
      id: "641742a0aac87179ea56bd34",
      name: "SIERPIEŃ",
      animal: "pies",
      registration_date: "2018-08-01",
      description:
        "Rozmiar: średni\nPrzyjęto go do schroniska 1.08.2018 r. po wypadku. Niestety, obrażenia były bardzo poważne - lekarze podjęli walkę o jego życie. Tu wygraliśmy - mimo, że Sierpień nie był łatwym pacjentem udało się, ale... .... uszkodzony został rdzeń kręgowy. W konsekwencji trzeba go 'odsikiwać'. Sierpień regularnie chodzi na rehabilitacje ( tylne łapy nie utrzymują go, ale nie są calkiem bezwładne).\nUwielbia kontakt z opiekunami i ma w schronisku wielu przyjaciół. Ma też psich wspólokagtorów z którymi dobrze się dogaduje. Uwielbia piszczące zabwki, takie które może też rzuć, z chęcią chodzi na rehabilitacje .\nOpieka nad nim wymaga nieco więcej zaangażowania - nauka odsikiwania, czy umieszczani wg w wózku na spacery. Jednak nie jest to trudne i warto dla takiego wspaniałego psa poścwięć troszkę czasu jeszcze przed adopcją. On już tak dużo przeszedł , bólu i strachu, teraz dla równowagi po prostu należy mu się kochający dom...",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342179/SIERPIE%C5%83.jpg",
    },
    {
      id: "641742a0aac87179ea56bd36",
      name: "KEBAB/KUBA",
      animal: "pies",
      registration_date: "2018-08-03",
      description:
        "Spokojny, pewny siebie pies którego przed adopcją należy lepiej poznać. Jest nieufny w stosunku do obcych ludzi. Może zostawać sam w domu.\n\tW stosunku do osób, które wiedzą jak z nim postępować jest miły, towarzyski i posłuszny",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342170/KEBAB/KUBA.jpg",
    },
    {
      id: "641742a0aac87179ea56bd38",
      name: "ALEX",
      animal: "pies",
      registration_date: "2018-10-30",
      description:
        "Rozmiar: duży\nAlex został do nas oddany w 2018 roku w bardzo złym stanie (ostatnie zdjęcie było zrobione w dniu przyjęcia do schroniska). Obecnie już wiemy, że jest alergikiem i dzięki właściwej diecie jest nie do poznania. Niestety, warunki w jakich był trzymany, brak normalnego konaktu z ludźmi nie pozostał bez wpływu na jego charakter. Jest psem wymagającycm doświadczonego, cierpliwego opiekuna. Najlepiej będzie czuł się w domu z ogrodem - jednak nie należy tego mylić z pozostawieniem go samemu sobie na podwórku. Jest bardzo energiczny, żądny przygód i inteligentny. W stosunku do obcych jest nieufny. Niestety u weterynarza czy przy zabiegach pielęgnacycjnych konieczny jest kaganiec.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342171/ALEX.jpg",
    },
    {
      id: "641742a0aac87179ea56bd3a",
      name: "FADO",
      animal: "pies",
      registration_date: "2019-02-25",
      description:
        "Potrzebuje doświadczonego opiekuna. Jest to młody psiak, którego można wiele nauczyć.\n\tJest agresywny do psów, może też być agresywny do ludzi. W stosunku do obcych jest nieufny, dlatego przed adopcją należy go bliżej poznać.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342166/FADO.jpg",
    },
    {
      id: "641742a0aac87179ea56bd3c",
      name: "STEFAN",
      animal: "pies",
      registration_date: "2019-07-01",
      description:
        'Rozmiar: średni\nStefan został oddany do schroniska przez dotychczasowego właściciela. Nie wiemy, jak był przez niego traktowany, jednak wydaje się psem, który nie do końca wie, jak reagować na obecność człowieka. Z jednej strony, histerycznie szczekając, cieszy się z odwiedzin wolontariusza, z drugiej na wszelki wypadek z emocji powarkuje.\nJest psem, przed którego adopcją trzeba będzie się postarać - poznać na spacerach i sprawić, że będzie sę czuł komfortowo w Waszym towarzystwie. To wszystko jest wykonalne. Praca z takim psem to wyjątkowe przeżycie, każdy postęp, każda oznaka przywiązania i zaufania będzie powodem do dumy i da wiele szczęścia.\nStefan wiele się już nauczył - osoby którym ufa pozwala na zapinanie smyczy, panowanuje nad emocjami. Przed nim sporo pracy, którą może ułatwić znajomość przez Stefka niektórych komend - np. "siad" - posłuszne oddawanie piłeczek czy pozytywny stosunek do i innych czworonogów.\nJest średniej wielkości w typie spaniela.',
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342178/STEFAN.jpg",
    },
    {
      id: "641742a0aac87179ea56bd3e",
      name: "BATALIA",
      animal: "pies",
      registration_date: "2019-07-23",
      description:
        "Rozmiar: średni\nŚrednia, energiczna suczka. Mimo wcześniejszego życia w stadzie zaniedbanych psów jest bardzo otwarta i ciekawa otaczającego świata. Jeszcze uczy się chodzić na smyczy, ale chętnie zjada smakołyki i jest zainteresowana obecnością człowieka. Nie jest psem agresywnym, trzeba tylko poświecić nieco czasu na jej edukację. Z pewnością lepiej będzie się czuła w towarzystwie drugiego, przyjaznego psa. Kiedy pokocha nowego opiekuna będzie miłym i wesołym kompanem.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342177/BATALIA.jpg",
    },
    {
      id: "641742a1aac87179ea56bd40",
      name: "BRYZA",
      animal: "pies",
      registration_date: "2019-07-23",
      description:
        "Rozmiar: średni\nPoczątki w schronisku były dla niej trudne, ponieważ trafiła do nas w wyniku interwencji z miejsca gdzie wraz z blisko 20 psiakami były pozostawione same sobie. Nie znały ludzi, nie znały smyczy, życia. Zabranie jej na spacer było wyzwaniem.. Jednak to już jest przeszłość.\n\tDziś na widok znajomych osób ciężko jej opanować radość, pokochała spacery. Jest łakomczuszkiem i przez żołądek do jej serca można trafić . Schronisko stało się jej domem, jednak mamy nadzieję, że Bryza w końcu pozna jak to jest mieć PRAWDZIWĄ rodzinę.\n\tPoczątki mogą być trudne i na pewno adopcja ta wymagać będzie nieco więcej zaangażowania, ale warto. Bez pośpiechu i konsekwentnie zdobędziecie jej zaufanie i miłość.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342174/BRYZA.jpg",
    },
    {
      id: "641742a2aac87179ea56bd46",
      name: "BIERKA",
      animal: "pies",
      registration_date: "2019-10-29",
      description:
        "Rozmiar: średni mniejszy\nNieduża suczka, dla której dotychczasowe życie lekkie nie było. Urodziła się w stadzie psów, które rządziło się swoimi prawami. Kontakt z człowiekiem był ograniczony do minimum. Nie gryzie, ale wielu rzeczy jeszcze się boi. Pewniej będzie się czuła jeżeli będzie w domu drugi pies. Cierpliwością i spokojnym podejściem można sprawić, że pozna w końcu jasną stronę życia. Może być radosnym i szczęśliwym psem.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342173/BIERKA.jpg",
    },
    {
      id: "641742a2aac87179ea56bd42",
      name: "MISIEK",
      animal: "pies",
      registration_date: "2019-12-06",
      description:
        "Rozmiar: duży\nMisiek został oddany do Okna Życia w grudniu 2019r. Wcześniej prawdopodobnie wiódł życie psa „łańcuchowego”. Można więc powiedzieć, że jakość życia mu się poprawiła. U nas czuje się kochany i za opiekunami skoczyłby w ogień. Cieszy się jak szczenię spacerami, uwagą, smaczkami i głaskaniem. Obce osoby nie powienny pozwalać sobie na zbytnie poufałości, jednak proces zaprzyjaźniania z Miskiem nie jest trudny ani długi.\nNa codzień to słodki, miły Misio, który uwielbia głaskanie i czochranie. Bardzo chętnie wychodzi na spacery, podczas których intensywnie eksploruje i znakuje teren. Kontakty z innymi psami są dla niego dość stresujące, ale nie jest do nich nastawiony wrogo. Na myśl, że być może nikt go nie zechce i spędzi resztę życia u nas, serce rozpada się milion kawałków. Zasłużył na to by w  końcu zaznać pełni psiego życia - bo mimo, że u nas mu lepiej niż miał to wiemy, że domu nigdy nie zastąpimy. Powinien mieć w końcu swoich ludzi, takich \"na własność'.\n\t\n\tPokochasz ?",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342168/MISIEK.jpg",
    },
    {
      id: "641742a2aac87179ea56bd44",
      name: "PISANKA",
      animal: "pies",
      registration_date: "2019-12-06",
      description:
        "Rozmiar: średni\nPłochliwa, wycofana sunia, która wraz z kilkunastoma innymi psami żyła pozostawiona sama sobie. W związku z tym dopiero uczy się zaufania do ludzi, chodzenia na smyczy itd. Potrzebuje cierpliwego i odpowiedzialnego opiekuna. Dobrze będzie czuła się w domu z innym, miłym i dobrze socjalizowanym psem – przy którym poczuje się pewniej i łatwiej będzie jej zaaklimatyzować się w nowym otoczeniu.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342169/PISANKA.jpg",
    },
    {
      id: "64174241e9ed102b5e5776ff",
      name: "KOMO",
      animal: "kot",
      registration_date: "2020-04-16",
      description:
        "Komo trafił do schroniska w 2020. Jest kocurkiem nieufnym w stosunku do ludzi, od których woli trzymać się z daleka. Z innymi kotami dobrze się dogaduje i lubi ich towarzystwo. Komo jest kotem, który będzie potrzebował w domu dużo spokoju i cierpliwości. Na pewno pierwsze tygodnie będą dla niego trudne. Ale gdyby trafił do domu przyjacielskiego rezydenta, mógłby zaobserwować, że kontakt z człowiekiem też może być przyjemny. Komo jest pięknym  kocurem, który czeka na swojego człowiek już ponad 2 lata, ale nie stracił nadziei, że pewnego dnia ta osoba zawita w schronisku, żeby go zabrać na zawsze.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342411/KOMO.jpg",
    },
    {
      id: "641742a2aac87179ea56bd48",
      name: "WAWRZYN",
      animal: "pies",
      registration_date: "2020-04-30",
      description:
        "Rozmiar: średni większy\nPiękny i bardzo inteligentny psiak . Adoptowany jako szczeniak, oddany po 8 !  latach . Nie jest wylewny do wszystkich. Swojego przyszłego opiekuna powienien poznać dobrze przed adopcją.\n\tKocha spacery, uwielbia smaczki . Jets psem pewnym siebie wymagającym odpowiedniego podejścia.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342172/WAWRZYN.jpg",
    },
    {
      id: "641742a2aac87179ea56bd4a",
      name: "IRAK",
      animal: "pies",
      registration_date: "2020-06-10",
      description:
        "Miły w stosunku do ludzi, których zna. Akceptuje kaganiec, który jest konieczny w jego przypadku np. u weterynarza. Na smyczy bardzo ciągnie. Z innymi psami potrafi się dogadać.  Potrzebuje doświadczonego opiekuna, gotowego na pracę z psem !",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342167/IRAK.jpg",
    },
    {
      id: "641742a2aac87179ea56bd4c",
      name: "RONAN",
      animal: "pies",
      registration_date: "2020-07-08",
      description:
        "Rozmiar: duży\nDorosły, zrównoważony, ale wymagający doświadczonego opiekuna psiak. Zna podstawowe komendy i ogólnie na codzień to radosny, kontaktowy, towarzyski psiak. W stosunku do obcych zachowuje jednak pewną rezerwę.  Przy 'obsłudze \" np. u weterynarza trzeba przy nim mieć nieco wprawy.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342168/RONAN.jpg",
    },
    {
      id: "641742a2aac87179ea56bd4e",
      name: "OSKAR",
      animal: "pies",
      registration_date: "2020-07-29",
      description:
        "Przepiękny owczarek, który wymaga cierpliwego podejścia i bardzo doświadczonego opiekuna. Został do nas oddany ponieważ jego właściciele nie radzili sobie z jego zachowaniem. Jest spokojny , lubi spacery, jednak w sytuacjach gdy chce się coś zrobić wbrew jego woli (np. zbyt wczesny powrót ze spaceru) może zachować się agresywnie. Do ludzi podchodzi z rezerwą . Wszystko to wynika z błędu ludzi, którzy go 'wychowywali' , wiemy z doświadczenia, że u odpowiedniego opiekuna takie psy potrafią się bardzo zmienić.",
      imgUrl:
        "https://res.cloudinary.com/dmzmqvehw/image/upload/v1679342170/OSKAR.jpg",
    },
  ],
];

test("renders correctly with no pets", () => {
  const initialState = {
    search: {
      pets: [],
    },
  };
  const store = createStore(() => initialState);
  const { asFragment } = render(
    <Provider store={store}>
      <Results />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correctly with pets", () => {
  const initialState = {
    search: {
      pets: pets,
    },
  };
  const store = createStore(() => initialState);
  const { asFragment } = render(
    <StaticRouter>
      <Provider store={store}>
        <Results />
      </Provider>
    </StaticRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
