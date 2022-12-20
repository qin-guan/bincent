import { Ref } from 'vue'
import { doc, getFirestore } from "firebase/firestore"
import { getAuth, User } from 'firebase/auth'

export type UsePoints = {
  leaderboard: {
    community: Ref<number>
    friends: Ref<number>
  }
  points: Ref<number>
}

export function usePoints(user: Ref<User>): UsePoints {
  const app = useNuxtApp()

  const points = useFirestore(doc(app.$firebase.firestore, 'points', user.value.phoneNumber ?? ''))

  return {
    isAuthenticated: true,
    // @ts-expect-error
    points,
  }
}
