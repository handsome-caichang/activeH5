import mutations from './mutations.js'
import router from './router-mutations.js'

export default {
    ...router,
    ...mutations
}
