export default {
    supabase: {
        kind: 'local',
        type: 'image',
        generateUrl: (path: any) => `http://localhost:3000/images${path}`,
        serverRoute: {
            path: '/images',
        },
        storagePath: 'public/images',
    },
}