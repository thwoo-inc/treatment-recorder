import { Database } from '@/utils/database.types';

type SupabaseTreatmentTemplate = Database['public']['Tables']['treatment_templates']['Row'];

export type Procedure = {
  details: string;
  department: string;
  started_at?: string;
  finished_at?: string;
};

export type TreatmentTemplate = Omit<SupabaseTreatmentTemplate, 'procedures'> & {
  procedures: Procedure[];
};
