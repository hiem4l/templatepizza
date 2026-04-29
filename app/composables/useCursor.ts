export const useCursor = () => {
  const cursor = ref<HTMLElement | null>(null)
  const cursorDot = ref<HTMLElement | null>(null)
  const mouseX = ref(0)
  const mouseY = ref(0)
  const cursorX = ref(0)
  const cursorY = ref(0)
  let animFrame: number

  const initCursor = (cursorEl: HTMLElement, dotEl: HTMLElement) => {
    cursor.value = cursorEl
    cursorDot.value = dotEl

    const move = (e: MouseEvent) => {
      mouseX.value = e.clientX
      mouseY.value = e.clientY
      if (dotEl) {
        dotEl.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    window.addEventListener('mousemove', move)

    const animate = () => {
      cursorX.value += (mouseX.value - cursorX.value) * 0.08
      cursorY.value += (mouseY.value - cursorY.value) * 0.08
      if (cursorEl) {
        cursorEl.style.transform = `translate(${cursorX.value - 20}px, ${cursorY.value - 20}px)`
      }
      animFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animFrame)
    }
  }

  return { initCursor }
}
