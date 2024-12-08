'use client'
import Header from '@/app/components/Header'; 
import Image from 'next/image';
import { useEffect, useRef } from 'react'

export default function StoreListAndMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize your map here
    // You can use Google Maps, Mapbox, or any other mapping service
    // This is just a placeholder for the map background
  }, [])

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 p-4 space-y-6 max-h-[500px] overflow-y-auto pr-4 border-r">
        <div className="border-b pb-6">
          <h3 className="font-semibold mb-1">Nike NYC - House of Innovation 000</h3>
          <p className="text-sm text-gray-600 mb-1">650 5th Ave.</p>
          <p className="text-sm text-gray-600 mb-1">New York, NY, 10019, US</p>
          <p className="text-sm text-red-600">Closed • Opens at 11:00 am</p>
        </div>
        <div className="border-b pb-6">
          <h3 className="font-semibold mb-1">Nike By Upper East Side</h3>
          <p className="text-sm text-gray-600 mb-1">1131 3rd Ave.</p>
          <p className="text-sm text-gray-600 mb-1">New York, NY, 10065, US</p>
          <p className="text-sm text-red-600">Closed • Opens at 11:00 am</p>
        </div>
        <div className="border-b pb-6">
          <h3 className="font-semibold mb-1">Nike By Flatiron</h3>
          <p className="text-sm text-gray-600 mb-1">156 Fifth Ave.</p>
          <p className="text-sm text-gray-600 mb-1">New York, NY, 10010, US</p>
          <p className="text-sm text-red-600">Closed • Opens at 11:00 am</p>
        </div>
        <button className="text-sm font-semibold hover:underline">
          View All Stores
        </button>
      </div>
      <div ref={mapRef} className="md:w-1/2 h-full bg-gray-200 flex items-center justify-center">
        {/* Map will be rendered here */}
        <Image src="/map.png" alt="Map" width={960} height={720} className="max-w-full max-h-full object-cover" />
      </div>
    </div>
  )
}
