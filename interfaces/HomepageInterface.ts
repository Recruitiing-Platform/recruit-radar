export interface NavDataInterface {
    name: string;
    link: string;
}

export interface CategoryDataInterface {
    path: string;
    backgroundColor: string;
    textContent: string;
}

export interface ChooseDataInterface {
    path: string;
    textContent: string;
}

export interface JobDataInterface {
    type: string,
    timePosted: string,
    job: string,
    salaryRange: string,
    location: string,
    jobLocation: string,
    sideColor: string
}

export interface LinkDataInterface {
    link: string;
    width: number;
    top: string;
    left: string;
}

export interface TestimonialDataInterface {
    name: string;
    job: string;
    testimony: string;
}
