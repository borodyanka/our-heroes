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
        id: 3,
        name: "Микола Бернацький",
        type: "military",
        callsign: "",
        dates: "07.02.1983 - 04.11.2023",
        age: "40 років",
        unit: "Захисник України",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 2,
        name: "Олексій Постнов",
        type: "military",
        callsign: "Пірат",
        dates: "21.10.1987 - 18.04.2023",
        age: "35 років",
        unit: "В/ч А4010 ЗСУ",
        motto: "Вічна слава та шана герою-захиснику!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    },
    {
        id: 1,
        name: "Григорій Салій",
        type: "civilian",
        callsign: "",
        dates: "08.02.1959 - 18.03.2022",
        age: "63 роки",
        unit: "Цивільний мешканець",
        motto: "Світла памʼять! Громада не забуде!",
        photo: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80"
    }
];

let currentFilter = 'all';

function renderCards(data) {
    const grid = document.getElementById('heroesGrid');
    const notFound = document.getElementById('notFound');
    grid.innerHTML = '';

    if (data.length === 0) {
        notFound.classList.remove('hidden');
        return;
    } else {
        notFound.classList.add('hidden');
    }

    data.forEach(hero => {
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
                        <p class="text-xs text-[#666666] font-medium mb-1">${hero.age} (${hero.dates})</p>
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
}

// Пошук
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterAndSearch(query, currentFilter);
});

// Фільтрація
function filterCategory(category) {
    currentFilter = category;
    
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
    const filtered = heroesData.filter(hero => {
        const matchesSearch = hero.name.toLowerCase().includes(query) || 
                             hero.callsign.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || hero.type === category;
        return matchesSearch && matchesCategory;
    });
    renderCards(filtered);
}

// Ініціалізація
document.getElementById('year').textContent = new Date().getFullYear();
renderCards(heroesData);