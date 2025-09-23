import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => ({
        drawer: false,
        menu: false,
        top: false,
    }),
    actions: {
        handleScroll() {
            this.top = window.scrollY > 0
        },
        onResize() {
            this.menu = window.innerWidth <= 837
            this.drawer = false
        },
        initListeners() {
            // inicializa estados
            this.handleScroll()
            this.onResize()

            // adiciona eventos globais
            window.addEventListener('resize', this.onResize)
            window.addEventListener('scroll', this.handleScroll)
        },
        removeListeners() {
            window.removeEventListener('resize', this.onResize)
            window.removeEventListener('scroll', this.handleScroll)
        },
    },
})
