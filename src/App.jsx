import React from 'react';
import ReactFlow, { Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { nodes, edges } from './config/flowConfig';
import { AnnotationNode } from './components/CustomNode';

const nodeTypes = {
  annotation: AnnotationNode,
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Brookfield Asset Integration Process Flow</h1>
        
        <div className="h-[600px] bg-white rounded-xl shadow-lg p-4">
          <ReactFlow 
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
          >
            <Controls />
          </ReactFlow>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Key Delay Annotations</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li className="text-red-600">
              <span className="font-medium">Red Nodes:</span> Critical delay points impacting integration timelines
            </li>
            <li className="text-blue-600">
              <span className="font-medium">Blue Nodes:</span> Standard process steps
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            Made on ZAPT
          </a>
        </div>
      </div>
    </div>
  );
}