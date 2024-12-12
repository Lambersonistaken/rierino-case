// Burada elementleri render edeceğimiz sayfası geliştirdik. Burası da drag edilen elementleri json olarak parse ediyor ve ekrana yazdırıyor.
import { useElements } from "@/context/ElementsContext";
import { Element } from "@/types/elements";
import { cn } from "@/lib/utils";

export default function RenderingZone() {
  const { elements, setSelectedElement, addElement } = useElements();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const elementData = e.dataTransfer.getData("application/json");
    if (elementData) {
      const element = JSON.parse(elementData);
      addElement(element);
    }
  };

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const getVideoEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Handle YouTube URLs
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    
    // Return original URL if it's a direct video link
    return url;
  };

  const renderElement = (element: Element) => {
    switch (element.type) {
      case "heading":
        return (
          <h1
            key={element.id}
            onClick={() => handleElementClick(element)}
            className={cn(
              "cursor-pointer p-2 hover:outline hover:outline-2 hover:outline-blue-500",
              element.properties.fontFamily,
              {
                'font-thin': element.properties.fontWeight === 'thin',
                'font-medium': element.properties.fontWeight === 'medium',
                'font-semibold': element.properties.fontWeight === 'semibold',
                'font-bold': element.properties.fontWeight === 'bold',
              }
            )}
          >
            {element.properties.text}
          </h1>
        );
      case "paragraph":
        return (
          <p
            key={element.id}
            onClick={() => handleElementClick(element)}
            className={cn(
              "cursor-pointer p-2 hover:outline hover:outline-2 hover:outline-blue-500",
              element.properties.fontFamily,
              {
                'font-thin': element.properties.fontWeight === 'thin',
                'font-medium': element.properties.fontWeight === 'medium',
                'font-semibold': element.properties.fontWeight === 'semibold',
                'font-bold': element.properties.fontWeight === 'bold',
              }
            )}
          >
            {element.properties.text}
          </p>
        );
      case "image":
        return (
          <img
            key={element.id}
            src={element.properties.src || "https://via.placeholder.com/300x200"}
            width={element.properties.width}
            height={element.properties.height}
            onClick={() => handleElementClick(element)}
            className="cursor-pointer p-2 hover:outline hover:outline-2 hover:outline-blue-500"
            alt="Rendered element"
          />
        );
      case "video":
        const embedUrl = getVideoEmbedUrl(element.properties.src);
        return embedUrl.includes('youtube.com/embed') ? (
          <iframe
            key={element.id}
            src={embedUrl}
            width={element.properties.width || 560}
            height={element.properties.height || 315}
            className="cursor-pointer p-2 hover:outline hover:outline-2 hover:outline-blue-500"
            allowFullScreen
            onClick={() => handleElementClick(element)}
          />
        ) : (
          <video
            key={element.id}
            src={element.properties.src}
            width={element.properties.width}
            height={element.properties.height}
            onClick={() => handleElementClick(element)}
            className="cursor-pointer p-2 hover:outline hover:outline-2 hover:outline-blue-500"
            controls
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 p-6 bg-white">
      <div 
        className="min-h-[600px] border-2 border-dashed border-gray-200 rounded-lg p-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {elements.map(renderElement)}
      </div>
    </main>
  );
} 