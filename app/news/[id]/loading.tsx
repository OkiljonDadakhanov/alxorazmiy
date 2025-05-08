export default function Loading() {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        
        <div className="flex items-center mb-6">
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
        </div>
        
        <div className="w-32 h-4 bg-gray-200 rounded mb-4"></div>
        
        {/* Placeholder for main image */}
        <div className="mb-8 h-64 md:h-96 bg-gray-200 rounded-xl animate-pulse"></div>
        
        {/* Placeholder for content */}
        <div className="space-y-2 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
        
        {/* Placeholder for gallery */}
        <div className="mt-8">
          <div className="h-8 bg-gray-200 rounded w-1/6 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-2">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }