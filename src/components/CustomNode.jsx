import React from 'react';

export const AnnotationNode = ({ data }) => (
  <div className="relative">
    <div className="p-4 bg-white rounded-lg shadow-lg border-2 border-red-500">
      <h3 className="font-semibold text-lg mb-2">{data.label}</h3>
      <p className="text-sm text-gray-600">{data.annotation}</p>
    </div>
  </div>
);