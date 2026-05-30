create table if not exists public.chore_boards (
  id uuid primary key,
  name text not null default 'Home Chore Board',
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_chore_boards_updated_at on public.chore_boards;

create trigger set_chore_boards_updated_at
before update on public.chore_boards
for each row
execute function public.set_updated_at();

alter table public.chore_boards enable row level security;

drop policy if exists "Read family chore board" on public.chore_boards;
drop policy if exists "Update family chore board" on public.chore_boards;

create policy "Read family chore board"
on public.chore_boards
for select
to anon
using (id = 'f3891928-6e63-415f-a6a7-53ba65073274'::uuid);

create policy "Update family chore board"
on public.chore_boards
for update
to anon
using (id = 'f3891928-6e63-415f-a6a7-53ba65073274'::uuid)
with check (id = 'f3891928-6e63-415f-a6a7-53ba65073274'::uuid);

insert into public.chore_boards (id, name, data)
values (
  'f3891928-6e63-415f-a6a7-53ba65073274'::uuid,
  'Home Chore Board',
  '{}'::jsonb
)
on conflict (id) do nothing;
