import React from 'react';
import { TaskStats } from '../components/dashboard/TaskStats';
import { TaskChart } from '../components/dashboard/TaskChart';
import { TaskView } from '../components/tasks/TaskView';
export function Dashboard() {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <TaskStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskChart />
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Tugas Prioritas Tinggi</h3>
          <div className="space-y-3">
            {[1, 2, 3].map(item => <div key={item} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                <div>
                  <h4 className="font-medium">Tugas Penting #{item}</h4>
                  <p className="text-sm text-gray-500">Tenggat: Besok</p>
                </div>
                <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                  Tinggi
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Tugas Terbaru</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            Lihat Semua
          </button>
        </div>
        <TaskView />
      </div>
    </div>;
}