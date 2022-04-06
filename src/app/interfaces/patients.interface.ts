export interface IPatients {
  account: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  age: number;
  sex: string;
  location: { locationId: number; zip: string; city: string };
  patientId: number;
  status: string;
}
