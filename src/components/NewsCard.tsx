import { cn } from "@/lib/utils";

interface NewsCardProps {
  imageUrl: string;
  className?: string;
  title?: string;
  date?: string;
}

const NewsCard = ({ imageUrl, className, title = "Latest News", date = "April 23, 2024" }: NewsCardProps) => {
  return (
    <div className={cn("relative group overflow-hidden h-[300px]", className)}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Base overlay - always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Hover overlay - Changed color to #8e0f0c */}
      <div className="absolute inset-0 bg-[#8e0f0c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="bg-white w-fit px-3 py-1 text-sm font-medium text-[#8e0f0c] mb-auto">
          PRESS RELEASE
        </div>
        
        <div className="mt-auto">
          <p className="text-white text-sm mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {date}
          </p>
          <h3 className="text-white text-xl font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
