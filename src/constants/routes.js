export const routeDefinitions = {
    INDEX: '', //to make this the entry point
    AUTH: 'auth',
    LOGIN:'login',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password/:token',
    PROGRAMS: 'programs',
    PROGRAM: 'program',
    Batch: ':batch',
    Assignments: ':batch/assignments',
    Attendance: ':batch/attendance',
    Schedule : 'schedule',
    Meeting: 'meeting/:id',
    Practice: 'practice',
    Me: 'me', 
    Video: 'video',
    Tree:'tree',
    File:'file',
    SessionLimit:'/auth/session-limit'
}