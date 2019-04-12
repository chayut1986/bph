export interface DrugAllergy {
  ok: boolean;
  result: Result[];
}

export interface Result {
  cid: string;
  hn: string;
  fullname: string;
  aid: string;
  full_name: string;
  addrpart: string;
  moopart: string;
  begin_date: string;
  entry_datetime?: string;
  druggroup: string;
  symptom?: string;
  note?: string;
}
