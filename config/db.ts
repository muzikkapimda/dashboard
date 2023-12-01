export default {
    provider: 'postgresql',
    url: 'postgresql://postgres:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9@db.ocnuoqtkfhlvftxseido.supabase.co:5432/postgres',
    // Optional advanced configuration
    enableLogging: true,
    idField: { kind: 'uuid' },
    shadowDatabaseUrl: 'postgres://postgres:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9@db.ocnuoqtkfhlvftxseido.supabase.co:5432/shadowdb'
}