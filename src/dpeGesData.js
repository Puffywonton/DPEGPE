const dpeGesData = () => {
    return ([
        {
            letter: "A",
            cepMin: 0,
            cepMax: 69, //original is 70 but I wan to use inferior equal
            egesMin: 0,
            egesMax: 5, //original 6
            color: '#329837'
        },
        {
            letter: "B",
            cepMin: 70,
            cepMax: 109, //110
            egesMin: 6,
            egesMax: 10, //11
            color: '#57af37'
        },
        {
            letter: "C",
            cepMin: 110,
            cepMax: 179, //180
            egesMin: 11,
            egesMax: 29, //30
            color: '#c6d300'
        },
        {
            letter: "D",
            cepMin: 180,
            cepMax: 249, //250
            egesMin: 30,
            egesMax: 49, //50
            color: '#f2e500'
        },
        {
            letter: "E",
            cepMin: 250,
            cepMax: 329, //330
            egesMin: 50,
            egesMax: 69, //70
            color: '#ffcb03'
        },
        {
            letter: "F",
            cepMin: 330,
            cepMax: 419, //420
            egesMin: 70,
            egesMax: 99, //100
            color: '#f39739'
        },
        {
            letter: "G",
            cepMin: 420,
            cepMax: 1000, //what is max??
            egesMin: 100,
            egesMax: 1000, //what is max ??
            color: '#e4251f'
        },
    ])
}

export default dpeGesData
