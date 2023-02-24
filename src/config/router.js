import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicial from '../components/inicial.vue'
import Configuracao from '../components/configuracao.vue'
import Cadastro from '../components/cadastro.vue'
import Historico from '../components/historico.vue'
import Jogo from '../components/jogo.vue'

// import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'Inicial',
    path: '/',
    component: Inicial
}, {
    name: 'config',
    path: '/config',
    component: Configuracao
}, {
    name: 'Cadastro',
    path: '/cadastro',
    component: Cadastro
}, {
    name: 'Jogo',
    path: '/jogo',
    component: Jogo
}, {
  name: 'Historico',
  path: '/historico',
  component: Historico
}
// {
//   name: 'Avatares',
//   path: '/avatares',
//   component: Avatares
// }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     const json = localStorage.getItem(userKey)

//     if(to.matched.some(record => record.meta.requiresAdmin)) {
//         const user = JSON.parse(json)
//         user && user.admin ? next() : next({ path: '/' })
//     } else {
//         next()
//     }
// })

export default router