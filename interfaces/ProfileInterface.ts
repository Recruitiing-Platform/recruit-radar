export interface ProfileDataInterface {
    header: string;
    subheader: string;
}

export interface AppliedJobDataInterface {
  jobTitle: string;
  employerName: string;
  applicationDate: string;
  salary: string;
  status: string;
  datePosted: string;
  location: string;
}
  


export interface JobAlerts {
  logo: string;
  job: string;
  company: string;
  amount: number;
  years: number;
  about: string;
  dayPosted: string;
}

export interface EmployerNotification {

  imageUrl: string;
  name: string;
  title: string;
  experience: string;
  education: string;
  dateApplied: string;

}