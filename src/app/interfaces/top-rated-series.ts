export interface TopRatedSeries {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    backdrop_path:     null | string;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    OriginCountry[];
    original_language: OriginalLanguage;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginCountry {
    CN = "CN",
    GB = "GB",
    Jp = "JP",
    Kr = "KR",
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    Ko = "ko",
    Zh = "zh",
}
