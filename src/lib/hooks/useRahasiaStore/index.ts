import { create } from 'zustand'

import UseRahasiaStore from './types'

const useRahasiaStore = create<UseRahasiaStore>((set) => ({
  isOpenModalAddGroup: false,
  isOpenModalAddGuest: false,
  viewGroupId: '',
  editGroupId: '',
  deleteGroupId: '',
  editGuestId: '',
  deleteGuestId: '',
  deleteWishId: '',
  toggleModalAddGroup() {
    set((state) => ({ isOpenModalAddGroup: !state.isOpenModalAddGroup }))
  },
  toggleModalAddGuest() {
    set((state) => ({ isOpenModalAddGuest: !state.isOpenModalAddGuest }))
  },
  handleViewGroup(viewGroupId) {
    return () => set({ viewGroupId })
  },
  handleEditGroup(editGroupId) {
    return () => set({ editGroupId })
  },
  handleDeleteGroup(deleteGroupId) {
    return () => set({ deleteGroupId })
  },
  handleEditGuest(editGuestId) {
    return () => set({ editGuestId })
  },
  handleDeleteGuest(deleteGuestId) {
    return () => set({ deleteGuestId })
  },
  handleDeleteWish(deleteWishId) {
    return () => set({ deleteWishId })
  },
  copyTextShareInvitation(guest) {
    const url = new URL(guest.name, window.location.origin)
    navigator.clipboard?.writeText(`_Bismillahirrahmanirrahim_

*Assalamau'alaikum Wr. Wb.*
    
Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
    
*Berikut link undangan kami,* untuk info lengkap dari acara bisa kunjungi:
    
${url.toString()}
    
Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do'a restu.

*Mohon maaf perihal undangan hanya di bagikan melalui pesan ini*
    
Atas kehadiran dan do'a restunya kami ucapkan terimakasih.
    
*Wassalamau'alaikum Wr. Wb.*`)
  },
}))

export default useRahasiaStore
