import { createContext, useContext, useState, ReactNode } from 'react';
import { Element } from '@/types/elements';

type ElementsContextType = {
  elements: Element[];
  addElement: (element: Element) => void;
  updateElement: (id: string, element: Element) => void;
  removeElement: (id: string) => void;
  selectedElement: Element | null;
  setSelectedElement: (element: Element | null) => void;
};

const ElementsContext = createContext<ElementsContextType | undefined>(undefined);

export function ElementsProvider({ children }: { children: ReactNode }) {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const addElement = (element: Element) => {
    setElements((prev) => [...prev, element]);
  };

  const updateElement = (id: string, updatedElement: Element) => {
    setElements((prev) =>
      prev.map((element) => (element.id === id ? updatedElement : element))
    );
  };

  const removeElement = (id: string) => {
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <ElementsContext.Provider
      value={{
        elements,
        addElement,
        updateElement,
        removeElement,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </ElementsContext.Provider>
  );
}

export function useElements() {
  const context = useContext(ElementsContext);
  if (context === undefined) {
    throw new Error('useElements must be used within an ElementsProvider');
  }
  return context;
} 