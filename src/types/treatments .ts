import { Procedure } from '@/types/treatment-templates';
import { Database } from '@/utils/database.types';

type SupabaseTreatment = Database['public']['Tables']['treatments']['Row'];

export type Treatment = Omit<SupabaseTreatment, 'procedures'> & {
  procedures: Procedure[];
};
