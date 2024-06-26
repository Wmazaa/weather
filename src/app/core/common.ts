export interface Forecast {
    Date: string;
    Day: DayNight;
    Night: DayNight;
    Temperature: {
        Maximum: Temperature,
        Minimum: Temperature,
    };
}

interface DayNight {
    HasPrecipitation: boolean;
    Icon: number;
    IconPhrase: string;
    PrecipitationIntensity: string;
    PrecipitationType: string;
}

interface Temperature {
    Value: number;
    Unit: string;
    UnitType: number;
}