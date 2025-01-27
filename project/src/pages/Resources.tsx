import React from 'react';

interface Resource {
  title: string;
  description: string;
  downloadUrl: string;
  icon: string;
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      title: 'Lease Agreement',
      description: 'Standard lease agreement template for property rental',
      downloadUrl: './documents/lease.pdf',
      icon: '📄'
    },
    // Add more resources as needed
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1> */}
          <p className="text-lg text-gray-600 mt-20">
            Download useful documents and resources for your needs
          </p>
        </div>

        {/* Resources Grid */}
        <div className="flex justify-center mt-20 items-center">
          <div className="max-w-xl w-full">
            {resources.map((resource: Resource, index: number) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4 text-center">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{resource.description}</p>
                <div className="flex justify-center space-x-2">
                  <a
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">View</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </a>
                  <a
                    href={resource.downloadUrl}
                    download
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  >
                    <span className="mr-2">Download</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;