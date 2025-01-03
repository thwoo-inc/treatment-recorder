# treatment-recorder

keep current data to reset

```sql
pg_dump -h localhost -p 54322 -d postgres -U postgres \
--table='treatment_templates' \
--table='treatments' \
--data-only \
--inserts > supabase/seed.sql
```

restart with storage files

```shell
npx supabase@beta db start
npx supabase@beta db reset
```

```shell
supabase gen types typescript --local > src/utils/database.types.ts
```
