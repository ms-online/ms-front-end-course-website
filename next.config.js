const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nextjs',
        mongodb_password: 'nextjs123',
        mongodb_clustername: 'msonline',
        mongodb_database: 'front-end-course-02',
      },
    }
  }
  return {
    env: {
      mongodb_username: 'nextjs',
      mongodb_password: 'nextjs123',
      mongodb_clustername: 'msonline',
      mongodb_database: 'front-end-course',
    },
  }
}
