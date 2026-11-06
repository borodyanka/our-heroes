// База даних героїв та мешканців Бородянської громади
const heroesData = [
    {
        id: 1,
        name: "Абакумова Наталія Станіславівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 2,
        name: "Абакумов Юрій Сергійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 3,
        name: "Абакумов Артем Вікторович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 4,
        name: "Авраменко Сергій Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 5,
        name: "Балан Дмитрій Олегович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 6,
        name: "Белісов Андрій Петрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 7,
        name: "Биковський Андрій Євгенович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 8,
        name: "Білінчук Валерій Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 9,
        name: "Бобровський Марко Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 10,
        name: "Бобровська Галина Миколаївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 11,
        name: "Бобровський Максим Маркович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 12,
        name: "Бойко Костянтин Анатолійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 13,
        name: "Бойко Надія Іванівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 14,
        name: "Бондаренко Віктор Андрійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 15,
        name: "Бузовецький Микола Авдійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 16,
        name: "Бузовецька Галина Василівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 17,
        name: "Бушма Олексій Андрійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 18,
        name: "Ващенко Олександр Вікторович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 19,
        name: "Вахненко Олена Олексіївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 20,
        name: "Войналович Олексій Дмитрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 21,
        name: "Власенко Вікторія Петрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 22,
        name: "Воронов Віталій Петрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 23,
        name: "Волинець Олександр Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 24,
        name: "Гараєв Олександр Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 25,
        name: "Гачнікова Зінаїда",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 26,
        name: "Гачніков Леонід",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 27,
        name: "Герасименко Олександр Леонідович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 28,
        name: "Герасименко Роман Георгійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 29,
        name: "Голобородько Анатолій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 30,
        name: "Гуменюк Олександр Ростиславович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 31,
        name: "Горбунов Леонід",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 32,
        name: "Горбунова Любов Миколаївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 33,
        name: "Гузенко Людмила Анатоліївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 34,
        name: "Гуцуляк Микола Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 35,
        name: "Головій Світлана Михайлівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 36,
        name: "Дубас Сергій Олексійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 37,
        name: "Єрмоленко Юрій Михайлович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 38,
        name: "Євтушенко Людмила Михайлівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 39,
        name: "Житницький Микола Станіславович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 40,
        name: "Загребельна Юлія",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 41,
        name: "Загребельний Володимир",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 42,
        name: "Загребельна Лідія",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 43,
        name: "Зюзько Надія",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 44,
        name: "Івахненко Світлана Михайлівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 45,
        name: "Івашко Ольга Михайлівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 46,
        name: "Казміренко Галина",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 47,
        name: "Казміренко Ігор",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 48,
        name: "Калетник Юрій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 49,
        name: "Кардаш Віталій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 50,
        name: "Карпенко Іван Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 51,
        name: "Керженцев Віталій Германович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 52,
        name: "Кіктенко Зінаїда Федосіївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 53,
        name: "Клокун Віктор Петрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 54,
        name: "Ковальчук Микола Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 55,
        name: "Кокальський Василь Михайлович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 56,
        name: "Костів Василь Федорович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 57,
        name: "Кот Володимир Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 58,
        name: "Кравчук Вадим Сергійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 59,
        name: "Криворотько Євгеній Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 60,
        name: "Криворотько Тетяна Ігорівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 61,
        name: "Кубицький Леонід Сергійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 62,
        name: "Куліков Ярослав Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 63,
        name: "Курка Роман Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 64,
        name: "Коваль Андрій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 65,
        name: "Лапицький Юрій Анатолійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 66,
        name: "Лісаченко Едуард Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 67,
        name: "Лясковець Святослав Іванович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 68,
        name: "Лобченко Сергій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 69,
        name: "Лозенко Сергій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 70,
        name: "Мазуренко Сергій Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 71,
        name: "Маковський Віктор Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 72,
        name: "Мальцева Юлія Вадимівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 73,
        name: "Мафтей Ганна Григорівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 74,
        name: "Медвецький Максим Валерійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 75,
        name: "Мельниченко Максим Сергійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 76,
        name: "Мельниченко Юрій Борисович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 77,
        name: "Мельник Тетяна Петрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 78,
        name: "Мякіш Кирило Вікторович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 79,
        name: "Мякіш Любов Андріївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 80,
        name: "Мельниченко Юрій",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 81,
        name: "Мельниченко Ольга",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 82,
        name: "Мельниченко Ганна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 83,
        name: "Мельниченко Дарина",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 84,
        name: "Мельниченко Марія",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 85,
        name: "Мерзлюк Віталій Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 86,
        name: "Микитенко Тетяна Анатоліївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 87,
        name: "Моргун Олександр Анатолійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 88,
        name: "Нечай Анатолій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 89,
        name: "Невмержицький Анатолій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 90,
        name: "Ніколаєнко Максим Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 91,
        name: "Нога Микола Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 92,
        name: "Носенко Ярослав Юрійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 93,
        name: "Одинока Валентина Андріївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 94,
        name: "Олексієнко Сергій Петрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 95,
        name: "Олішкевич Андрій Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 96,
        name: "Онищенко Віктор Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 97,
        name: "Остапчук Юрій Ярославович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 98,
        name: "Оріховський Володимир Валерійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 99,
        name: "Оваденко Олександра Константинівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 100,
        name: "Пасічник Михайло Вікторович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 101,
        name: "Патлай Костянтин Сергійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 102,
        name: "Пекар Володимир Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 103,
        name: "Пінчук Галина Дмитрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 104,
        name: "Пістун Олександр Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 105,
        name: "Пилипенко Зинаїда Василівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 106,
        name: "Пісковець Валерій",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 107,
        name: "Пісковець Людмила",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 108,
        name: "Пісковець Валерія",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 109,
        name: "Попко Василь Семенович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 110,
        name: "Присяжний Олексій Іванович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 111,
        name: "Рудніченко Євгеній Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 112,
        name: "Русак Анатолій Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 113,
        name: "Салов Сергій Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 114,
        name: "Самченко Олексій Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 115,
        name: "Северин Олександр Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 116,
        name: "Сервінський Ігор Вікторович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 117,
        name: "Сидоренко Дмитро Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 118,
        name: "Сімороз Василь Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 119,
        name: "Сімороз Наталія Петрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 120,
        name: "Сімороз Петро Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 121,
        name: "Сімороз Олена Сергіївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 122,
        name: "Сімороз Поліна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 123,
        name: "Сімороз Ніна Миколаївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 124,
        name: "Сміщук Віталій Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 125,
        name: "Сміщук Тетяна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 126,
        name: "Сміщук Єва",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 127,
        name: "Ситник Степан Петрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 128,
        name: "Столюк Анастасія Миколаївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 129,
        name: "Стукало Олег Анатолійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 130,
        name: "Соломенко Володимир Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 131,
        name: "Терехов Вячеслав Юрійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 132,
        name: "Терехов Наталія Петрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 133,
        name: "Терещук Ігор Віталійович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 134,
        name: "Терещук Ілона Ігорівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 135,
        name: "Терещук Олександр Ігорович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 136,
        name: "Тимощук Надія Антонівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 137,
        name: "Тищенко Віктор Іванович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 138,
        name: "Трикіша Роман Валентинович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 139,
        name: "Ткачук Сергій Петрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 140,
        name: "Ткачук Юрій Валентинович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 141,
        name: "Тумакова Алла Петрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 142,
        name: "Фесюк Наталія Мордоліївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 143,
        name: "Трошин Володимир Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 144,
        name: "Хижняк Валентина Григорівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 145,
        name: "Хижняк Микола Михайлович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 146,
        name: "Холявко Юрій Олександрович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 147,
        name: "Хухро Альона Іванівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 148,
        name: "Хухро Сергій Миколайович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 149,
        name: "Чередніченко Ольга Савівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 150,
        name: "Червона Віра Василівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 151,
        name: "Чижаковська Любов Іванівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 152,
        name: "Шаленко Юрій Васильович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 153,
        name: "Шавук Галина Олександрівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 154,
        name: "Шевченко Григорій Степанович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 155,
        name: "Шеховцова Ольга Василівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 156,
        name: "Шилан Олександр Володимирович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 157,
        name: "Шумак Віра Миколаївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 158,
        name: "Шульгач Людмила",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 159,
        name: "Ярмоленко Любов Сергіївна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 160,
        name: "Ярошенко Галина Флорівна",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 161,
        name: "Яцунський Петро Євгенович",
        type: "civilian",
        callsign: "",
        dates: "",
        age: "",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 162,
        name: "Аксьоненко Дмитро Олександрович",
        type: "military",
        callsign: "Дикий",
        dates: "27.05.2006 - 15.04.2026",
        age: "19 років",
        unit: "Оператор БПЛА. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Запоріжжі (район Мала Катеринівка). Нагороджений Золотим Хрестом (посмертно). Ветеран війни",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Aksonenko5-1793781621.webp"
    },
    {
        id: 163,
        name: "Андрійчук Андрій Васильович",
        type: "military",
        callsign: "",
        dates: "01.08.1968 - 21.07.2024",
        age: "55 років",
        unit: "Сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Краматорський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Andrijchuk2-1793781838.webp"
    },
  {
        id: 164,
        name: "Артюгін Андрій Сергійович",
        type: "military",
        callsign: "",
        dates: "09.12.1997 - 09.01.2025",
        age: "27 років",
        unit: "Молодший лейтенант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами в Курській області (Суджанський р-н, н.п. Руське Порічне).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Artyugin3-1793782179.webp"
    },
  {
        id: 165,
        name: "Архипенко Дмитро Володимирович",
        type: "military",
        callsign: "",
        dates: "03.08.1989 - 08.05.2026",
        age: "36 років",
        unit: "Захисник України",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Arhypenko-1793784201.webp"
    },
  {
        id: 166,
        name: "Асєєв Юрій Анатолійович",
        type: "military",
        callsign: "",
        dates: "29.04.1983 - 18.06.2026",
        age: "43 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (Волноваський р-н, поблизу н.п. Воскресенка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Asyeyev-YUrij-Anatolijovych-1793784235.webp"
    },
  {
        id: 167,
        name: "Басенко Ігор Олександрович",
        type: "military",
        callsign: "",
        dates: "31.01.1998 - 06.10.2025",
        age: "27 років",
        unit: "Молодший сержант, командир відділення, командир екіпажу безпілотних літальних комплексів. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині (поблизу Вовчанська, н.п. Вільча).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Basenko-Igor-Oleksandrovych-1793784268.webp"
    },
  {
        id: 168,
        name: "Берник Юрій Володимирович",
        type: "military",
        callsign: "",
        dates: "02.05.1983 - 28.02.2022",
        age: "38 років",
        unit: "Сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами у смт Бородянка, район «БРС». Нагороджений медалями «За жертовність та любов до України», «Учасник бойових дій», за участь у боях «Світлодарська дуга». Нагрудними знаками «За зразкову службу», «Сухопутні війська України», «За Україну за її волю», «25 батальйон Київська Русь».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Bernyk-1793784315.webp"
    },
  {
        id: 169,
        name: "Бовтрук Олександр Вікторович",
        type: "military",
        callsign: "",
        dates: "25.05.1988 - 20.10.2024",
        age: "36 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (поблизу н.п. Андріївка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/BOVTRUK-1793784892.webp"
    },
  {
        id: 170,
        name: "Борисенко Володимир Вікторович",
        type: "military",
        callsign: "Спартак",
        dates: "12.10.1986 - 25.04.2026",
        age: "39 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Сумщині. Нагороджений медаллю «За жертовність і любов до України».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Borysenko-1793785038.webp"
    },
  {
        id: 171,
        name: "Бородай Богдан Вадимович",
        type: "military",
        callsign: "",
        dates: "13.03.1997 - 01.02.2024",
        age: "26 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність нашої держави на Донеччині (Бахмут). Нагороджений орденом Богдана Хмельницького III ступеня, відзнакою «Золотий хрест».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Borodaj-1793785387.webp"
    },
  {
        id: 172,
        name: "Борщ Олександр Леонідович",
        type: "military",
        callsign: "",
        dates: "26.09.1985 - 24.11.2024",
        age: "39 років",
        unit: "Гранатометник. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами районі села Іллічка Покровського району Донецької області.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Borshh-Oleksandr-Leonidovych-1793785503.webp"
    },
  {
        id: 173,
        name: "Брана Олексій Іванович",
        type: "military",
        callsign: "",
        dates: "31.03.1989 - 12.11.2025",
        age: "36 років",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (в районі н.п. Пискунівка Краматорського р-ну).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/BRANA-1793785722.webp"
    },
  {
        id: 174,
        name: "Бурлаченко Тарас Миколайович",
        type: "military",
        callsign: "",
        dates: "03.11.1990 - 24.08.2022",
        age: "31 рік",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Burlachenko-1793785773.webp"
    },
  {
        id: 175,
        name: "Буткевич Микола Михайлович",
        type: "military",
        callsign: "",
        dates: "22.09.1969 - 10.08.2024",
        age: "54 роки",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Волноваський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Butkevych-1793785922.webp"
    },
  {
        id: 176,
        name: "Василенко Руслан Васильович",
        type: "military",
        callsign: "",
        dates: "09.10.1979 - 31.05.2025",
        age: "45 років",
        unit: "Учасник АТО, майстер-сержант, командир арт підрозділу. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (н.п. Олексіївка, Волноваський р-н). Нагороджений відзнакою Президента України «ЗА ОБОРОНУ УКРАЇНИ».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Vasylenko-Ruslan-Vasylovych-1793793941.webp"
    },
  {
        id: 177,
        name: "Вашуленко Олексій Володимирович",
        type: "military",
        callsign: "",
        dates: "21.02.1993 - 05.12.2024",
        age: "31 рік",
        unit: "Старший сержант поліції. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами в Донецькій області (Бахмутський р-н, м. Торецьк).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Vashulenko-2--1793794246.webp"
    },
  {
        id: 178,
        name: "Вашуленко Микола Анатолійович",
        type: "military",
        callsign: "Дєд",
        dates: "08.12.1966 - 13.05.2026",
        age: "59 років",
        unit: "Солдат. Доброволець з 24 лютого 2022. Захищав територіальну цілісність України. Брав участь в обороні Києва та звільнення Бучі.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Vashulenko-1793794370.webp"
    },
  {
        id: 179,
        name: "Воронько Олег Петрович",
        type: "military",
        callsign: "",
        dates: "24.08.1966 - 13.09.2023",
        age: "57 років",
        unit: "Старший лейтенант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Voronko-1793794524.webp"
    },
  {
        id: 180,
        name: "Галака Олег Анатолійович",
        type: "military",
        callsign: "",
        dates: "21.06.1977 - 14.05.2024",
        age: "46 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (Покровський напрямок, н.п. Архангельське). Нагороджений Залізним Хрестом.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Galaka-1793794630.webp"
    },
  {
        id: 181,
        name: "Герасименко Дмитро Романович",
        type: "military",
        callsign: "",
        dates: "03.11.1986 - 16.08.2022",
        age: "35 років",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Gerasymenko-1793794726.webp"
    },
  {
        id: 182,
        name: "Герасимов Богдан Олександрович",
        type: "military",
        callsign: "",
        dates: "06.02.1996 - 14.06.2022",
        age: "26 років",
        unit: "Солдат. Загинув, виконуючи службовий обов'язок, захищаючи суверенітет та Незалежність України на Київщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Gerasymov-1793794830.webp"
    },
  {
        id: 183,
        name: "Голух Андрій Олександрович",
        type: "military",
        callsign: "",
        dates: "06.12.1980 - 06.08.2023",
        age: "42 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Goluh-Andrij-Oleksandrovych-1793794902.webp"
    },
  {
        id: 184,
        name: "Данилевич Володимир Вікторович",
        type: "military",
        callsign: "TOYOTA",
        dates: "08.08.1975 - 10.04.2026",
        age: "50 років",
        unit: "Старший солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Харківщині (район н.п. Волохівське).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Danylevych-1793794969.webp"
    },
  {
        id: 185,
        name: "Демешок Сергій Михайлович",
        type: "military",
        callsign: "Демеш",
        dates: "01.03.1988 - 29.12.2025",
        age: "37 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Харківщині (Куп'янський р-н, н.п. Соболівка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Demeshok-Sergij-Mykolajovych-1793795046.webp"
    },
  {
        id: 186,
        name: "Денисюк Дмитро Вікторович",
        type: "military",
        callsign: "АНГЕЛ",
        dates: "18.11.1982 - 25.01.2025",
        age: "42 роки",
        unit: "Стрілець 117 ТРО. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (Бахмутський р-н, н.п. Торецьк).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Denysyuk-Dmytro-Viktorovych-1793795104.webp"
    },
  {
        id: 187,
        name: "Дубовенко Сергій Сергійович",
        type: "military",
        callsign: "",
        dates: "25.05.2002 - 17.09.2022",
        age: "20 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Dubovenko-1793795340.webp"
    },
  {
        id: 188,
        name: "Єфремов Костянтин Володимирович",
        type: "military",
        callsign: "",
        dates: "21.11.1991 - 03.05.2022",
        age: "30 років",
        unit: "Старший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами в Луганській області (Міловський р-н, Сєвєродонецьк). Нагороджений орденом II ступеня «За мужність» та почесною відзнакою «За вільну Луганщину».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/YEfremov-1793795412.webp"
    },
  {
        id: 189,
        name: "Журба Володимир Васильович",
        type: "military",
        callsign: "",
        dates: "17.07.1968 - 18.08.2022",
        age: "54 роки",
        unit: "Старший солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині. Нагороджений орденом «За мужність» III ступеня.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/ZHurba-1793797749.webp"
    },
  {
        id: 190,
        name: "Захарченко Олександр Миколайович",
        type: "military",
        callsign: "",
        dates: "19.02.1973 - 19.07.2022",
        age: "49 років",
        unit: "Капітан. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Херсонщині. Нагороджений орденом Богдана Хмельницького III ступеня.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Zaharchenko-1793797754.webp"
    },
  {
        id: 191,
        name: "Зеленський Сергій Олександрович",
        type: "military",
        callsign: "ДУЧІ",
        dates: "30.09.1983 - 22.03.2026",
        age: "42 роки",
        unit: "Солдат, майстер відділення дистанційного мінування інженерно-саперної роти. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Сумщині (н.п. Яструбине Сумського р-ну).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Zelenskyj-Sergij-Oleksandrovych-1793797745.webp"
    },
  {
        id: 192,
        name: "Зінченко Олексій Михайлович",
        type: "military",
        callsign: "",
        dates: "01.09.1980 - 28.04.2024",
        age: "43 роки",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Zinchenko-Oleksij-Myhajlovych-1793797740.webp"
    },
  {
        id: 193,
        name: "Івахненко Іван Миколайович",
        type: "military",
        callsign: "",
        dates: "21.07.1988 - 05.10.2023",
        age: "35 років",
        unit: "Молодший сержант, стрілець-снайпер. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Ivahnenko-1793797734.webp"
    },
  {
        id: 194,
        name: "Кайданович Сергій Валерійович",
        type: "military",
        callsign: "",
        dates: "16.09.1995 - 02.05.2026",
        age: "30 років",
        unit: "Солдат, оператор БПЛА. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Запоріжжі (поблизу н.п. Новоселівка Пологівського р-ну).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kajdanovych-1793797729.webp"
    },
  {
        id: 195,
        name: "Каленик Ілля Вікторович",
        type: "military",
        callsign: "Каліна",
        dates: "02.08.1994 - 28.03.2023",
        age: "28 років",
        unit: "Солдат. Загинув під час виконання службового завдання. Учасник бойових дій 2015–2020 рр. Нагороджений відзнакою «За оборону Бородянки».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kalenyk-1793797910.webp"
    },
  {
        id: 196,
        name: "Калініченко Геннадій Миколайович",
        type: "military",
        callsign: "",
        dates: "11.04.1978 - 05.08.2023",
        age: "45 років",
        unit: "Старший солдат. Загинув, захищаючи територіальну цілісність України.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kalinichenko-1793797905.webp"
    },
  {
        id: 197,
        name: "Кириленко Микола Петрович",
        type: "military",
        callsign: "",
        dates: "22.05.1982 - 05.05.2023",
        age: "40 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kyrylenko-2-1793797900.webp"
    },
  {
        id: 198,
        name: "Клименко Олександр Олександрович",
        type: "military",
        callsign: "",
        dates: "30.11.1984 - 02.02.2026",
        age: "41 рік",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Запоріжжі (в районі н.п. Прилуки Пологівського району).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Klymenko-1793799372.webp"
    },
  {
        id: 199,
        name: "Ковальчук Артем Леонідович",
        type: "military",
        callsign: "",
        dates: "17.08.1987 - 07.01.2023",
        age: "35 років",
        unit: "Старший солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині. Нагороджений орденом «За мужність» III ступеня (посмертно).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kovalchuk-Artem-1793799454.webp"
    },
  {
        id: 200,
        name: "Ковальчук Олег Васильович",
        type: "military",
        callsign: "",
        dates: "07.07.1980 - 02.05.2022",
        age: "41 рік",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Запоріжжі. Нагороджений орденом «За мужність» III ступеня.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kovalchuk-1793799538.webp"
    },
  {
        id: 201,
        name: "Кожедуб Олександр Миколайович",
        type: "military",
        callsign: "",
        dates: "21.03.1984 - 20.08.2023",
        age: "39 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Запоріжжі.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kozhedub-1793799575.webp"
    },
  {
        id: 202,
        name: "Козленко Василь Миколайович",
        type: "military",
        callsign: "",
        dates: "03.12.1991 - 15.02.2025",
        age: "33 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Покровський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kozlenko-Vasyl-Mykolajovych-1793799682.webp"
    },
  {
        id: 203,
        name: "Козленко Олексій Миколайович",
        type: "military",
        callsign: "",
        dates: "20.04.1990 - 05.11.2022",
        age: "32 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині. Нагороджений орденом «За мужність» III ступеня, відзнакою «За оборону Бородянки», відзнакою за проведення спеціальних операцій Збройних Сил України.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kozlenko-1793799743.webp"
    },
  {
        id: 204,
        name: "Кондратюк Богдан Сергійович",
        type: "military",
        callsign: "",
        dates: "08.12.1996 - 26.11.2023",
        age: "26 років",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Запоріжжі.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kondratyuk-1793799789.webp"
    },
  {
        id: 205,
        name: "Косенко Андрій Юрійович",
        type: "military",
        callsign: "",
        dates: "13.12.1996 - 27.02.2025",
        age: "28 років",
        unit: "Матрос, оператор ударних авіаційних комплексів. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Покровський р-н, н.п. Мирноград).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kosenko-1793799869.webp"
    },
  {
        id: 206,
        name: "Костюченко Вадим Миколайович",
        type: "military",
        callsign: "АЙТІ",
        dates: "13.04.1997 - 22.08.2026",
        age: "29 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (н.п. Миколаївка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/kostyuchenko-1793799919.webp"
    },
  {
        id: 207,
        name: "Косян Борис Іванович",
        type: "military",
        callsign: "",
        dates: "12.10.1965 - 28.02.2022",
        age: "56 років",
        unit: "Солдат. Ветеран АТО з 2016 року. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами у смт Бородянка, район м-н «Фора». Нагороджений медалями «За участь в АТО», «За оборону Авдіївки», «За оборону Бородянки».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kosyan-1793800031.webp"
    },
  {
        id: 208,
        name: "Котов Дмитро Сергійович",
        type: "military",
        callsign: "",
        dates: "02.01.1984 - 14.05.2026",
        age: "42 роки",
        unit: "Телефоніст-лінійний наглядач відділення зв'язку взводу зв'язку стрілецького батальйону. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Сумщині (н.п. Микільське-Мар'їне).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kotov-1793800090.webp"
    },
  {
        id: 209,
        name: "Курінний Олександр Петрович",
        type: "military",
        callsign: "",
        dates: "25.05.1997 - 15.08.2023",
        age: "26 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kurinnyj-1793800204.webp"
    },
  {
        id: 210,
        name: "Кучеров Ігор Васильович",
        type: "military",
        callsign: "",
        dates: "05.04.1991 - 16.11.2022",
        age: "31 рік",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Дніпропетровщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Kucherov-1793872012.webp"
    },
  {
        id: 211,
        name: "Лазебний Сергій Анатолійович",
        type: "military",
        callsign: "",
        dates: "11.05.1987 - 10.08.2023",
        age: "36 років",
        unit: "Старший солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Запоріжжі.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lazebnyj-Sergij-Anatolijovych-1793872092.webp"
    },
  {
        id: 212,
        name: "Лазебний Микола Васильович",
        type: "military",
        callsign: "",
        dates: "07.06.1981 - 10.06.2026",
        age: "45 років",
        unit: "Солдат, водій-електрик. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Чернігівщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lazebnyj-1793872150.webp"
    },
  {
        id: 213,
        name: "Лазір Іван Ярославович",
        type: "military",
        callsign: "",
        dates: "31.03.1990 - 27.02.2022",
        age: "31 рік",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами у смт Бородянка, район «Юнеско».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lazir-kopyya-1793872311.webp"
    },
  {
        id: 214,
        name: "Леоненко Віталій Васильович",
        type: "military",
        callsign: "",
        dates: "14.05.1982 - 13.10.2022",
        age: "40 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Leonenko-1793872408.webp"
    },
  {
        id: 215,
        name: "Лещенко Іван Павлович",
        type: "military",
        callsign: "",
        dates: "25.09.1979 - 01.10.2023",
        age: "44 роки",
        unit: "Старший стрілець. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Leshhenko-1793872493.webp"
    },
  {
        id: 216,
        name: "Лічман Віталій Михайлович",
        type: "military",
        callsign: "",
        dates: "30.11.1988 - 25.10.2025",
        age: "36 років",
        unit: "Солдат, 3-тя окрема штурмова бригада. Командир машини механізованого відділення військової частини А4638. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині (Ізюмський р-н, н.п. Новосергіївка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lichman-Vitalij-Myhajlovych-1793872548.webp"
    },
  {
        id: 217,
        name: "Лутченко Андрій Іванович",
        type: "military",
        callsign: "",
        dates: "05.12.1997 - 30.03.2025",
        age: "27 років",
        unit: "Солдат, зовнішній пілот-оператор БПЛА 52 ОСБ 63 ОМБр. Загинув, захищаючи територіальну цілісність України на Донеччині (Краматорський р-н, н.п. Зарічне). Нагороди: Ветеран війни, почесний нагрудний знак Головнокомандувача ЗСУ «Золотий хрест», відзнака командира «ЗА СУМЛІННУ СЛУЖБУ» 63 ОМБр, відзнака командира «ЗА СУМЛІННУ СЛУЖБУ» (посмертно) 52 ОСБ.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lutchenko-Andrij-Ivanovych-1793873952.webp"
    },
  {
        id: 218,
        name: "Ляшевський Олександр Анатолійович",
        type: "military",
        callsign: "",
        dates: "19.10.1969 - 27.12.2022",
        age: "53 роки",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Бахмутський р-н, с. Курдюмівка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lyashevskyj_Oleksandr_Anatolijovych-1793874098.webp"
    },
  {
        id: 219,
        name: "Ляшкевич Даніїл Вікторович",
        type: "military",
        callsign: "БЕРСЕРК",
        dates: "10.01.1995 - 01.11.2024",
        age: "29 років",
        unit: "Сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами в Харківській обл. (Ізюмський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Lyashkevych-1793874160.webp"
    },
{
        id: 220,
        name: "Максюта Володимир Юрійович",
        type: "military",
        callsign: "",
        dates: "14.01.1986 - 02.11.2023",
        age: "37 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Maksyuta-1793874223.webp"
    },
  {
        id: 221,
        name: "Маслюківський Сергій Сергійович",
        type: "military",
        callsign: "",
        dates: "15.10.1979 - 30.11.2024",
        age: "45 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами в Курській обл.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Maslyukivskyj-1793874321.webp"
    },
  {
        id: 222,
        name: "Медведєв Олексій Леонардович",
        type: "military",
        callsign: "",
        dates: "04.05.1974 - 13.03.2023",
        age: "48 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Medvedev-1793874372.webp"
    },
  {
        id: 223,
        name: "Михальченко Сергій Олександрович",
        type: "military",
        callsign: "",
        dates: "17.06.1975 - 03.03.2022",
        age: "46 років",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами у смт Бородянка, район «РЕС».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Myhalchenko-1793874433.webp"
    },
  {
        id: 224,
        name: "Могильний Анатолій Миколайович",
        type: "military",
        callsign: "",
        dates: "06.08.1981 - 08.10.2025",
        age: "44 роки",
        unit: "Солдат, водій десантно-штурмового відділення. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на курському напрямку.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/mogylnyj-1793874482.webp"
    },
  {
        id: 225,
        name: "Науменко Олександр Анатолійович",
        type: "military",
        callsign: "Лукас",
        dates: "30.10.1993 - 10.09.2025",
        age: "31 рік",
        unit: "Стрілець-помічник гранатометника. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Покровський р-н, н.п. Торецьке).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Naumenko-1793874531.webp"
    },
  {
        id: 226,
        name: "Неда Дмитро Васильович",
        type: "military",
        callsign: "",
        dates: "24.01.1977 - 07.01.2025",
        age: "47 років",
        unit: "Солдат, стрілець-санітар стрілецького відділення. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на курському напрямку.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Neda-1793874587.webp"
    },
  {
        id: 227,
        name: "Нікітін Сергій Юрійович",
        type: "military",
        callsign: "",
        dates: "20.11.1976 - 05.07.2025",
        age: "48 років",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (н.п. Горіхове Покровського району).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Nikitin-Sergij-YUrijovych-1793874635.webp"
    },
  {
        id: 228,
        name: "Носов Віталій Васильович",
        type: "military",
        callsign: "",
        dates: "22.02.1987 - 29.06.2024",
        age: "37 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Покровський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/NOSOV-1793874680.webp"
    },
  {
        id: 229,
        name: "Остапченко Іван Миколайович",
        type: "military",
        callsign: "",
        dates: "09.06.1987 - 23.03.2024",
        age: "36 років",
        unit: "Водій-механік. Загинув, захищаючи територіальну цілісність нашої держави на півдні України.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Ostapchenko-1793874738.webp"
    },
  {
        id: 230,
        name: "Патракєєв Роман Анатолійович",
        type: "military",
        callsign: "",
        dates: "05.06.1974 - 10.03.2024",
        age: "49 років",
        unit: "Старший солдат. Захищав територіальну цілісність України з 2020 року, ветеран війни.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Patrekyeyev-Roman-Anatolijovych-1793874787.webp"
    },
  {
        id: 231,
        name: "Пендзей Тетяна Миронівна",
        type: "military",
        callsign: "",
        dates: "28.08.1990 - 23.03.2026",
        age: "35 років",
        unit: "Військовий медик. Захищала територіальну цілісність України від російських окупантів на Донеччині.",
        motto: "Вічна слава та шана героїні-захисниці!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Pendzej-Tetyana-Myronivna-1793874931.webp"
    },
  {
        id: 232,
        name: "Прус Євгеній Миколайович",
        type: "military",
        callsign: "",
        dates: "19.02.1990 - 04.10.2024",
        age: "34 роки",
        unit: "Солдат, 3-тя окрема штурмова бригада. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Луганщині (Сватівський р-н, н.п. Макіївка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/prus-1793875979.webp"
    },
  {
        id: 233,
        name: "Рабош Данило Вікторович",
        type: "military",
        callsign: "",
        dates: "27.12.2002 - 13.02.2024",
        age: "21 рік",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Rabosh-1793876032.webp"
    },
  {
        id: 234,
        name: "Рафальський Станіслав Антонович",
        type: "military",
        callsign: "",
        dates: "11.10.1973 - 30.04.2022",
        age: "48 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Rafalskyj-1793876107.webp"
    },
  {
        id: 235,
        name: "Рибка Роман Миколайович",
        type: "military",
        callsign: "",
        dates: "14.01.1967 - 27.04.2024",
        age: "57 років",
        unit: "Старший солдат. Захищав смт Бородянка в складі роти охорони, був переведений до військової частини у Житомирській області.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Rybka-Roman-Mykolajovych-1793876176.webp"
    },
  {
        id: 236,
        name: "Романенко Володимир Миколайович",
        type: "military",
        callsign: "",
        dates: "06.01.1976 - 27.02.2024",
        age: "48 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (н.п. Семенівка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Romanenko-1793876231.webp"
    },
  {
        id: 237,
        name: "Романовський Володимир Олегович",
        type: "military",
        callsign: "",
        dates: "19.04.1987 - 27.06.2025",
        age: "38 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Луганщині (Сватівський р-н, н.п. Невське). Нагороджений відзнакою міністра оборони України «За поранення». Ветеран війни, учасник бойових дій.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Romanovskyj-1793876325.webp"
    },
  {
        id: 238,
        name: "Романюк Сергій Васильович",
        type: "military",
        callsign: "",
        dates: "04.08.2002 - 04.02.2023",
        age: "20 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Romanyuk-1793876377.webp"
    },
  {
        id: 239,
        name: "Рудніченко Олександр Григорович",
        type: "military",
        callsign: "",
        dates: "13.06.1983 - 15.05.2022",
        age: "38 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Харківщині. Нагороджений орденом «За мужність» III ступеня.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Rudnichenko-1793876441.webp"
    },
  {
        id: 240,
        name: "Рудь Михайло Володимирович",
        type: "military",
        callsign: "",
        dates: "26.01.1995 - 03.09.2024",
        age: "29 років",
        unit: "Стрілець, помічник гранатометника. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині (н.п. Невське).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/RUD-Myhajlo-Volodymyrovych-1793876486.webp"
    },
  {
        id: 241,
        name: "Савченко Ігор Володимирович",
        type: "military",
        callsign: "",
        dates: "08.05.1985 - 21.03.2025",
        age: "39 років",
        unit: "Стрілець. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Запоріжжі (н.п. Наталівка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Savchenko-1793878293.webp"
    },
  {
        id: 242,
        name: "Семенік Віктор Григорович",
        type: "military",
        callsign: "",
        dates: "03.05.1979 - 12.11.2025",
        age: "46 років",
        unit: "Старший стрілець. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (н.п. Новоселівка Краматорського р-ну).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Semenik-Viktor-Grygorovych-1793878347.webp"
    },
  {
        id: 243,
        name: "Сергєєв Павло Валерійович",
        type: "military",
        callsign: "",
        dates: "15.07.1998 - 30.07.2025",
        age: "27 років",
        unit: "Оператор FPV дронів. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Дніпропетровщині (н.п. Грушівка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Sergeev-1793878402.webp"
    },
  {
        id: 244,
        name: "Скринник Дмитро Анатолійович",
        type: "military",
        callsign: "",
        dates: "27.11.1999 - 02.10.2025",
        age: "25 років",
        unit: "Стрілець. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (н.п. Григорівка Бахмутський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Skrynnyk-1793878455.webp"
    },
  {
        id: 245,
        name: "Слухай Сергій Володимирович",
        type: "military",
        callsign: "",
        dates: "02.03.1980 - 29.09.2022",
        age: "42 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині. Нагороджений нагрудним знаком «66 окрема механізована бригада сухопутних військ».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Sluhaj-1793878503.webp"
    },
  {
        id: 246,
        name: "Тичина Владислав Анатолійович",
        type: "military",
        callsign: "",
        dates: "07.07.1995 - 25.10.2022",
        age: "27 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Tychyna-1793878559.webp"
    },
  {
        id: 247,
        name: "Тищук Роман Олександрович",
        type: "military",
        callsign: "",
        dates: "29.09.1992 - 10.09.2024",
        age: "31 рік",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині (Сватівський район).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Tyshhuk-1793878629.webp"
    },
  {
        id: 248,
        name: "Товстенко Микола Сергійович",
        type: "military",
        callsign: "",
        dates: "22.06.1994 - 18.08.2024",
        age: "30 років",
        unit: "Старший стрілець. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині (Сватівський р-н).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Tovstenko-1793878673.webp"
    },
  {
        id: 249,
        name: "Усік Олексій Ігорович",
        type: "military",
        callsign: "",
        dates: "29.04.1994 - 22.05.2023",
        age: "29 років",
        unit: "Сержант. Загинув під час виконання службового завдання на Київщині. Нагороджений відзнакою «За визволення Бородянки».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/USIK-2-1793878789.webp"
    },
  {
        id: 250,
        name: "Ус-Цимбалюк Роман Олегович",
        type: "military",
        callsign: "",
        dates: "20.07.1995 - 09.07.2025",
        age: "29 років",
        unit: "Молодший сержант. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (Краматорський р-н, н.п. Полтавка). Нагороджений відзнакою президента України «За оборону України».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Us-TSymbalyuk-Roman-Olegovych-1793878847.webp"
    },
  {
        id: 251,
        name: "Федієнко Іван Володимирович",
        type: "military",
        callsign: "",
        dates: "29.01.1999 - 21.03.2024",
        age: "25 років",
        unit: "Матрос. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Fediyenko-1793878911.webp"
    },
  {
        id: 252,
        name: "Фещенко Андрій Іванович",
        type: "military",
        callsign: "",
        dates: "09.04.1988 - 10.06.2026",
        age: "38 років",
        unit: "Майстер, ХАРТІЯ Спартан. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Покровському напрямку (біля н.п. Сергіївка).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Feshhenko-1793878958.webp"
    },
  {
        id: 253,
        name: "Ходаківський Ігор Олександрович",
        type: "military",
        callsign: "",
        dates: "29.11.1989 - 10.09.2024",
        age: "34 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині (Слов'янський район).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Hodakivskyj-1793879001.webp"
    },
  {
        id: 254,
        name: "Худенко Андрій Васильович",
        type: "military",
        callsign: "",
        dates: "15.01.1970 - 06.06.2025",
        age: "55 років",
        unit: "Сержант 8-ї роти 3-го батальйону 101 ОБрО ГШ ЗСУ імені Геннадія Воробйова. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (Бахмутський р-н, н.п. Кліщіївка). Нагороджений відзнакою Президента України «За оборону України», відзнакою Головнокомандувача Збройних Сил України «За сумлінну службу», почесним знаком Головнокомандувача Збройних Сил України «Сталевий хрест».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/Hudenko-Andrij-Vasylovych-1793879063.webp"
    },
  {
        id: 255,
        name: "Чубатюк Олександр Віталійович",
        type: "military",
        callsign: "Лимон",
        dates: "26.04.1984 - 05.10.2025",
        age: "41 рік",
        unit: "Солдат, 3 батальйон «Свобода» бригада наступу «Рубіж» Національної гвардії України. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами на Донеччині (н.п. Затишок Покровського р-ну).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/CHubatyuk-Oleksandr-Vitalijovych-1793879113.webp"
    },
  {
        id: 256,
        name: "Шевчук Роман Володимирович",
        type: "military",
        callsign: "",
        dates: "03.06.1978 - 31.05.2022",
        age: "43 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині. Нагороджений орденом «За мужність» III ступеня.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/SHevchuk-1793879169.webp"
    },
  {
        id: 257,
        name: "Шльонський Микола Миколайович",
        type: "military",
        callsign: "",
        dates: "31.08.1980 - 03.05.2023",
        age: "42 роки",
        unit: "Головний сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/SHlonskyj-1793879249.webp"
    },
  {
        id: 258,
        name: "Шульгач Сергій Олександрович",
        type: "military",
        callsign: "",
        dates: "21.09.1979 - 28.02.2022",
        age: "42 роки",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами у смт Бородянка, район «Юнеско».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/SHulgach-1793879294.webp"
    },
  {
        id: 259,
        name: "Щербина Михайло Васильович",
        type: "military",
        callsign: "",
        dates: "30.04.1978 - 22.06.2023",
        age: "45 років",
        unit: "Старший сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Луганщині. Був учасником АТО з 2015 року. Нагороджений нагрудним знаком «За взірцевість у військовій службі» III ступеня, медаллю «За жертовність і любов до України», нагрудним знаком «Батальйон Київська Русь», нагрудним знаком «За Україну за її волю».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/SHHerbyna-1793879348.webp"
    },
  {
        id: 260,
        name: "Юрак Михайло Іванович",
        type: "military",
        callsign: "",
        dates: "18.09.1990 - 31.07.2024",
        age: "33 роки",
        unit: "Сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/YURAK-1793879407.webp"
    },
  {
        id: 261,
        name: "Ющенко Олександр Миколайович",
        type: "military",
        callsign: "",
        dates: "02.12.1973 - 05.10.2022",
        age: "48 років",
        unit: "Сержант. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами на Донеччині. Нагороджений медаллю «За військову службу Україні».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/YUshhenko-1793879458.webp"
    },
  {
        id: 262,
        name: "Яковчук Віталій Володимирович",
        type: "military",
        callsign: "",
        dates: "24.04.1986 - 19.03.2025",
        age: "38 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами в курській області суджанський р-н (н.п. Гуєво).",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/YAkovchuk-Vitalij-Volodymyrovych-1793879512.webp"
    },
  {
        id: 263,
        name: "Янченко Олександр Сергійович",
        type: "military",
        callsign: "",
        dates: "26.03.1976 - 11.09.2024",
        age: "48 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в бою з російськими окупантами в районі н.п. Снагость Кореневського р-ну курської області.",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/YAnchenko-1793879567.webp"
    },
  {
        id: 264,
        name: "Ярошенко Ігор Петрович",
        type: "military",
        callsign: "",
        dates: "24.11.1975 - 03.03.2022",
        age: "46 років",
        unit: "Солдат. Загинув, захищаючи територіальну цілісність України в боях з російськими окупантами у смт Бородянка, район «РЕС». Нагороджений медалями «За участь в антитерористичній операції», «Учасник АТО», «Ветеран війни», «За оборону Бородянки».",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://bsr.gov.ua/wp-content/uploads/2026/11/YAroshenko-1793879618.webp"
    },
 
];

let currentFilter = 'all';
let showAll = false; // Стан для розгортання списку

function toggleShowMore() {
    showAll = !showAll;
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    filterAndSearch(query, currentFilter);
}

function renderCards(data) {
    const grid = document.getElementById('heroesGrid');
    const notFound = document.getElementById('notFound');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    grid.innerHTML = '';

    if (data.length === 0) {
        notFound.classList.remove('hidden');
        loadMoreContainer.classList.add('hidden');
        return;
    } else {
        notFound.classList.add('hidden');
    }

    // Визначаємо скільки карток показувати (перші 8 або всі)
    const limit = showAll ? data.length : 8;
    const visibleData = data.slice(0, limit);

    visibleData.forEach(hero => {
        const isMilitary = hero.type === 'military';
        const photoSrc = hero.photo ? hero.photo : 'https://via.placeholder.com/400x400/ededeb/777777?text=Фото+відсутнє';

        const cardHtml = `
            <div class="hero-card border rounded-2xl overflow-hidden flex flex-col justify-between p-5 relative shadow-sm">
                
                <!-- Значок -->
                <div class="absolute top-4 right-4 bg-[#f7f6f2] p-2 rounded-full border border-[#d8d6d0]">
                    ${isMilitary ? '⚔️' : '🕯️'}
                </div>

                <div>
                    <!-- Фото -->
                    <div class="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 ${isMilitary ? 'border-[#333333]' : 'border-[#888888]'} bg-[#ededeb]">
                        <img src="${photoSrc}" alt="${hero.name}" class="w-full h-full object-cover grayscale contrast-125">
                    </div>

                    <!-- Інформація -->
                    <div class="text-center">
                        <h3 class="text-lg font-serif font-bold text-[#1a1a1a] mb-1">${hero.name}</h3>
                        ${hero.callsign ? `<p class="text-xs text-[#555555] font-semibold mb-2">Позивний «${hero.callsign}»</p>` : ''}
                        <p class="text-xs text-[#666666] font-medium mb-1">${hero.age} ${hero.dates ? '(' + hero.dates + ')' : ''}</p>
                        <p class="text-xs text-[#888888] mb-4">${hero.unit}</p>
                    </div>
                </div>

                <!-- Шана -->
                <div class="border-t border-[#ededeb] pt-3 text-center">
                    <span class="text-[11px] uppercase tracking-wider text-[#444444] font-semibold">
                        ${hero.motto}
                    </span>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });

    // Керування кнопкою "Дивитися більше"
    if (data.length <= 8) {
        loadMoreContainer.classList.add('hidden');
    } else {
        loadMoreContainer.classList.remove('hidden');
        loadMoreBtn.textContent = showAll ? "Згорнути список ▲" : `Дивитися більше карток (${data.length - 8} інших) ↓`;
    }
}

// Пошук
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    showAll = true; // При пошуку автоматично розгортаємо результати для зручності
    filterAndSearch(query, currentFilter);
});

// Фільтрація
function filterCategory(category) {
    currentFilter = category;
    showAll = false; // При зміні категорії скидаємо ліміт до 8
    
    ['all', 'military', 'civilian'].forEach(cat => {
        const btn = document.getElementById(`btn-${cat}`);
        if (cat === category) {
            btn.className = 'px-4 py-2 text-xs md:text-sm font-medium rounded-lg bg-[#2c2c2c] text-white shadow-sm';
        } else {
            btn.className = 'px-4 py-2 text-xs md:text-sm font-medium rounded-lg bg-white text-[#444444] hover:bg-[#ededeb] border border-[#cccccc] transition-colors';
        }
    });

    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    filterAndSearch(query, currentFilter);
}

function filterAndSearch(query, category) {
    // 1. Фільтруємо за пошуком та категорією
    const filtered = heroesData.filter(hero => {
        const matchesSearch = hero.name.toLowerCase().includes(query) || 
                             hero.callsign.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || hero.type === category;
        return matchesSearch && matchesCategory;
    });

    // 2. Сортуємо результати в суворому алфавітному порядку за ім'ям (українською абеткою)
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'uk', { sensitivity: 'base' }));

    renderCards(filtered);
}
// Ініціалізація: одразу сортуємо весь масив за алфавітом перед першим рендером
heroesData.sort((a, b) => a.name.localeCompare(b.name, 'uk', { sensitivity: 'base' }));

document.getElementById('year').textContent = new Date().getFullYear();
renderCards(heroesData);
