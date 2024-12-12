// Burasını da elementlerin özelliklerini değiştirmek için kullanıyoruz. Update element fonksiyonu ile elementleri güncelliyoruz.
import { useElements } from "@/context/ElementsContext";
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PropertiesSidebar() {
  const { selectedElement, updateElement, setSelectedElement } = useElements();

  if (!selectedElement) {
    return (
      <div className="w-[300px] border-l border-gray-200 p-4 bg-slate-100">
        <p className="text-gray-500 text-center">Select an element to edit its properties</p>
      </div>
    );
  }

  const handlePropertyChange = (property: string, value: string | number) => {
    if (!selectedElement) return;

    const updatedElement = {
      ...selectedElement,
      properties: {
        ...selectedElement.properties,
        [property]: value,
      },
    };
    updateElement(selectedElement.id, updatedElement);
    setSelectedElement(updatedElement);
  };

  return (
    <div className="w-[300px] border-l border-gray-200 p-4 bg-slate-100">
      <h2 className="font-semibold mb-4">Properties</h2>
      
      {(selectedElement.type === "heading" || selectedElement.type === "paragraph") && (
        <>
          <div className="mb-4 space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input
              id="text"
              value={selectedElement.properties.text}
              onChange={(e) => handlePropertyChange("text", e.target.value)}
            />
          </div>
          <div className="mb-4 space-y-2">
            <Label htmlFor="fontWeight">Font Weight</Label>
            <Select
              value={selectedElement.properties.fontWeight}
              onValueChange={(value) => handlePropertyChange("fontWeight", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select font weight" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thin">Thin</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="semibold">Semibold</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      {(selectedElement.type === "image" || selectedElement.type === "video") && (
        <>
          <div className="mb-4 space-y-2">
            <Label htmlFor="src">Source URL</Label>
            <Input
              id="src"
              value={selectedElement.properties.src}
              onChange={(e) => handlePropertyChange("src", e.target.value)}
            />
          </div>
          <div className="mb-4 space-y-2">
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              type="number"
              value={selectedElement.properties.width}
              onChange={(e) => handlePropertyChange("width", Number(e.target.value))}
            />
          </div>
          <div className="mb-4 space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              type="number"
              value={selectedElement.properties.height}
              onChange={(e) => handlePropertyChange("height", Number(e.target.value))}
            />
          </div>
        </>
      )}
    </div>
  );
} 