import { TablesInsert } from '@/utils/database.types';
import { TypedSupabaseClient } from '@/utils/supabase';

export function insertTreatments(
  client: TypedSupabaseClient,
  treatment: TablesInsert<'treatments'>,
) {
  if (!treatment) {
    throw new Error('treatments is required');
  }

  return client.from('treatments').insert(treatment).throwOnError();
}
