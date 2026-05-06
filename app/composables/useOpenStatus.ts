type Slot = { open: string; close: string }
type DayHours = Slot[] | null

// 0=Dimanche, 1=Lundi, ..., 6=Samedi
const HOURS: Record<number, DayHours> = {
  0: null,                                    // Dimanche : fermé
  1: [{ open: '18:00', close: '21:30' }],     // Lundi
  2: [{ open: '18:00', close: '21:30' }],     // Mardi
  3: [{ open: '18:00', close: '21:30' }],     // Mercredi
  4: [{ open: '18:00', close: '22:00' }],     // Jeudi
  5: [{ open: '18:00', close: '22:00' }],     // Vendredi
  6: [{ open: '18:00', close: '22:00' }],     // Samedi
}

function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function getParisDayAndMinutes(): { day: number; minutes: number } {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    hour12: false,
  }).formatToParts(now)

  const weekdayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  }

  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon'
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value ?? '0')
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value ?? '0')

  return { day: weekdayMap[weekday] ?? 1, minutes: hour * 60 + minute }
}

function findNextOpening(fromDay: number, afterMinutes?: number): string {
  for (let i = 1; i <= 7; i++) {
    const nextDay = (fromDay + i) % 7
    const slots = HOURS[nextDay]
    if (!slots) continue
    if (i === 1 && afterMinutes !== undefined) {
      const later = slots.find((s) => afterMinutes < toMinutes(s.open))
      if (later) return `à ${later.open}`
    }
    const label = i === 1 ? 'demain' : i === 7 ? 'lundi' : ''
    return label ? `${label} à ${slots[0].open}` : `dans ${i} jours à ${slots[0].open}`
  }
  return ''
}

export function useOpenStatus() {
  const isOpen = ref(false)
  const statusText = ref('')

  function check() {
    const { day, minutes } = getParisDayAndMinutes()
    const todaySlots = HOURS[day]

    if (!todaySlots) {
      isOpen.value = false
      statusText.value = `Fermé · Ouvre ${findNextOpening(day)}`
      return
    }

    const currentSlot = todaySlots.find(
      (s) => minutes >= toMinutes(s.open) && minutes < toMinutes(s.close),
    )

    if (currentSlot) {
      isOpen.value = true
      statusText.value = `Ouvert · Ferme à ${currentSlot.close}`
    } else {
      isOpen.value = false
      const laterToday = todaySlots.find((s) => minutes < toMinutes(s.open))
      if (laterToday) {
        statusText.value = `Fermé · Ouvre à ${laterToday.open}`
      } else {
        statusText.value = `Fermé · Ouvre ${findNextOpening(day, minutes)}`
      }
    }
  }

  onMounted(() => {
    check()
    const interval = setInterval(check, 60_000)
    onUnmounted(() => clearInterval(interval))
  })

  return { isOpen, statusText }
}
