export default {
    data() {
        return {
            showLeftButton: false,
            isDragging: false,
            showRightButton: true,
            startX: 0,
            scrollLeft: 0,
            count: 0,
        }
    },
    methods: {
        scrollLeftNav() {
            this.$refs.scrollContainer.scrollLeft -= 360
            this.updateButtonVisibility()
        },
        scrollRightNav() {
            this.$refs.scrollContainer.scrollLeft += 360
            this.updateButtonVisibility()
        },
        updateButtonVisibility() {
            const scrollContainer = this.$refs.scrollContainer
            if (!scrollContainer) return
            this.showLeftButton = scrollContainer.scrollLeft > 0
            this.showRightButton =
                scrollContainer.scrollLeft + scrollContainer.clientWidth <
                scrollContainer.scrollWidth
        },
        handleMouseMove(e) {
            if (!this.isDragging) return
            e.preventDefault()
            const scrollContainer = this.$refs.scrollContainer
            const x = e.pageX - scrollContainer.offsetLeft
            const walk = (x - this.startX) * 2
            this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk
        },
        handleMouseDown(e) {
            this.isDragging = true
            const scrollContainer = this.$refs.scrollContainer
            this.startX = e.pageX - scrollContainer.offsetLeft
            this.scrollLeft = scrollContainer.scrollLeft
        },
        handleMouseUp() {
            this.isDragging = false
        },
    },
    watch: {
        loading() {
            if (!this.loading) {
                this.$nextTick(() => {
                    this.$refs.scrollContainer.scrollLeft = 0
                    return;
                })
            }
        }
    },
    mounted() {
        window.addEventListener('mousemove', this.handleMouseMove)
        window.addEventListener('mouseup', this.handleMouseUp)
        this.updateButtonVisibility();
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.handleMouseMove)
        window.removeEventListener('mouseup', this.handleMouseUp)
    },
}