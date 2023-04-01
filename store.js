import { create } from "zustand";

const useStore = create((set) => ({
    itens: [],
    adicionarItem: (produto) =>
      set((state) => {
        // Verifica se o item já existe na lista
        if (!state.itens.includes(produto)) {
          return { itens: [...state.itens, produto] };
        } else {
          return { itens: state.itens };
        }
      }),
    removerItem: (produto) =>
      set((state) => ({ itens: state.itens.filter((l) => l !== produto) })),
  }));

export default useStore;