export default interface IInvestigation {
  id: string;
  name: string;
  description: string;
  domain: string;
  access: number;
  active: boolean;
  url_path: string;
  url_redirect: string;
  created_at: string;
  updated_at: string;
}
